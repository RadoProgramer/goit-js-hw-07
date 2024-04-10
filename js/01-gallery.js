import { galleryItems } from "./gallery-items.js";
// Change code below this line

document.addEventListener("DOMContentLoaded", function () {
	const gallery = document.querySelector(".gallery");

	const galleryMarkup = createGalleryMarkup(galleryItems);
	gallery.insertAdjacentHTML("beforeend", galleryMarkup);

	gallery.addEventListener("click", onGalleryItemClick);
});

function createGalleryMarkup(items) {
	return items
		.map(
			(item) =>
				`<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
              <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
              />
            </a>
          </li>`
		)
		.join("");
}

function onGalleryItemClick(event) {
	event.preventDefault();

	const target = event.target;

	if (target.classList.contains("gallery__image")) {
		const imageUrl = target.dataset.source;

		const instance = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);
		instance.show();

		const closeModalOnEscape = (event) => {
			if (event.key === "Escape") {
				instance.close();
				window.removeEventListener("keydown", closeModalOnEscape);
			}
		};

		window.addEventListener("keydown", closeModalOnEscape);
	}
}
