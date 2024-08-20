const BASE_URL = 'https://pixabay.com';

export const fetchPhotos = searchQuery => {
    

    const urlParams = new URLSearchParams({
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        key:'45516244-7009a6d8a44aa98a2987db7ac',
    });

  return fetch(
    `${BASE_URL}/api/?${urlParams}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
};
