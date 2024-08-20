import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryCard } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';

const searchForm = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
loader.style.display = 'none';

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const onSearchFormSubmit = event => {
  event.preventDefault();

  const searchValue = searchForm.elements.user_query.value;

  galleryEl.innerHTML = '';
  searchForm.reset();
  loader.style.display = 'block';

  fetchPhotos(searchValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'There are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      const galleryCardsTemplate = data.hits
        .map(imgDetails => createGalleryCard(imgDetails))
        .join('');
      galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

      lightbox.refresh();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      loader.style.display = 'none';
    });
};

searchForm.addEventListener('submit', onSearchFormSubmit);
