import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryBox = document.querySelector(".gallery");

const addGalleryEl = function (ArrItems) {
  return ArrItems.map(({ preview, original, description }) => {
    return `<li class = "gallery__item"> 
      <a class = "gallery__link" href = '${original}'>
      <img 
      class = "gallery__image" 
      src="${preview}"
      data-source = "${original}"
      alt = "${description}">
      </a>
    </li>`;
  }).join("");
};

galleryBox.insertAdjacentHTML("afterbegin", addGalleryEl(galleryItems));

galleryBox.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
      <img src="${event.target.dataset.source}" width="800" height="600">
    `,
    {
      onShow: () => {
        window.addEventListener("keydown", hendelOnClose);
      },
      onClose: () => {
        window.removeEventListener("keydown", hendelOnClose);
      },
    }
  );

  instance.show();

  function hendelOnClose(event) {
    if (event.code === "Escape") {
      console.log("+");
      instance.close();
    }
  }
}
