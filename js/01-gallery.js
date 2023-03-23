import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const addGalleryEl = function (galleryItems) {
  return galleryItems
    .map(({ preview, description }) => {
      return `<li class = "gallery__item">
    <img class = "gallery__image gallery__link" src="${preview}"
    alt = "${description}">
    </li>`;
    })
    .join("");
};

console.log(addGalleryEl(galleryItems));

galleryBox.insertAdjacentHTML("afterbegin", addGalleryEl(galleryItems));
