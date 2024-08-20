import{S as u,i as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=t=>` <li class="gallery-card">
      <a href="${t.largeImageURL}" class="gallery-link">
        <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p><strong>Likes:</strong> ${t.likes}</p>
        <p><strong>Views:</strong> ${t.views}</p>
        <p><strong>Comments:</strong> ${t.comments}</p>
        <p><strong>Downloads:</strong> ${t.downloads}</p>
      </div>
    </li>`,y="https://pixabay.com",m=t=>{const s=new URLSearchParams({q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,key:"45516244-7009a6d8a44aa98a2987db7ac"});return fetch(`${y}/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},c=document.querySelector(".search-form"),i=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";let h=new u(".gallery a",{captionsData:"alt",captionDelay:250});const f=t=>{t.preventDefault();const s=c.elements.user_query.value;i.innerHTML="",l.style.display="block",m(s).then(o=>{if(o.hits.length===0){d.error({message:"There are no images matching your search query. Please try again!",position:"topRight"});return}const a=o.hits.map(e=>p(e)).join("");i.insertAdjacentHTML("beforeend",a),h.refresh()}).catch(o=>{console.log(o)}).finally(()=>{l.style.display="none"})};c.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
