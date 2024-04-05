import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

function createGalleryItem(item) {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;
  image.setAttribute('data-source', item.original);

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}

galleryItems.forEach(item => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});


import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

galleryList.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageURL = event.target.dataset.source;
  const altText = event.target.alt;

  const modal = basicLightbox.create(`
    <img src="${imageURL}" alt="${altText}" />
  `);

  modal.show();


  const handleKeyPress = event => {
    if (event.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', handleKeyPress);
    }
  };

  window.addEventListener('keydown', handleKeyPress);
});