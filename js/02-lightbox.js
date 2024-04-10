import { galleryItems } from "./gallery-items.js";

document.addEventListener("DOMContentLoaded", function () {
	const gallery = document.querySelector(".gallery");

	galleryItems.forEach((item) => {
		const galleryItem = document.createElement("a");
		galleryItem.classList.add("gallery__item");
		galleryItem.href = item.original;

		const image = document.createElement("img");
		image.classList.add("gallery__image");
		image.src = item.preview;
		image.alt = item.description;

		galleryItem.appendChild(image);
		gallery.appendChild(galleryItem);
	});

	const lightbox = new SimpleLightbox(".gallery a", {
		captionsData: "alt",
		captionDelay: 250,
		alertErrorMessage: "Nie można załadować obrazka.",
	});
});
