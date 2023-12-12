import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  list: document.querySelector('.gallery'),
};

const imageMarkup = createMarkup(galleryItems);



function createMarkup(items) {
  return items.map(item => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
   </a>
  </li>`).join('');
}

refs.list.innerHTML = imageMarkup;

refs.list.addEventListener('click', showLargeImage)

function showLargeImage(evt) {
  evt.preventDefault()
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`<img
            src="${evt.target.dataset.source}"
          />`)
  instance.show()

}
 //console.log(showLargeImage(evt))
//  refs.list.addEventListener('keydown', (event) => {
//   if (event.key === 'Escape') {
//     event.stopImmediatePropagation();
//   }
// })