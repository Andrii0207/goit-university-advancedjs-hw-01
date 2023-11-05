// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery")

function createGallery(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join("")
}

galleryEl.insertAdjacentHTML("beforeend", createGallery(galleryItems))

new SimpleLightbox(".gallery a", {
    showCounter: false,
    captionDelay: 250,
    captionPosition: "bottom",
    close: false,
    overlayOpacity: 1,
    captionsData: `alt`
})
