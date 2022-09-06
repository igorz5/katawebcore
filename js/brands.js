"use strict";

const brands = document.querySelector(".brands");
const brandsInner = brands.querySelector(".brands__inner");
const brandsList = brands.querySelector(".brands__list");
const showAllButton = brands.querySelector(".brands__show-all-btn");

let brandsSwiper;
function createSwiper() {
  const width = window.innerWidth;
  if (width > 768) {
    if (brandsSwiper) {
      brandsSwiper.destroy();
      brandsSwiper = null;
    }

    return;
  }

  if (!brandsSwiper) {
    brandsSwiper = new Swiper(".brands__list-wrap", {
      slidesPerView: "auto",
      pagination: {
        el: ".brands__pagination",
        clickable: true,
      },
    });
  }
}

createSwiper();

function measureHeight() {
  let brandsHeight = 190;

  if (window.innerWidth >= 1120) {
    brandsHeight = 200;
  }

  return brandsHeight;
}

function showAll() {
  brandsInner.style.maxHeight = `${brandsInner.scrollHeight}px`;
  showAllButton.textContent = "Скрыть";

  showAllButton.classList.add("dropdown-btn--close");
  brandsList.classList.add("brands__list--show");
}

function hideAll() {
  const height = measureHeight();
  brandsInner.style.maxHeight = `${height}px`;
  showAllButton.textContent = "Показать все";

  showAllButton.classList.remove("dropdown-btn--close");
  brandsList.classList.remove("brands__list--show");
}

hideAll();

window.addEventListener("resize", function () {
  createSwiper();

  hideAll();
});

showAllButton.addEventListener("click", function () {
  const isOpen = brandsList.classList.contains("brands__list--show");
  if (!isOpen) {
    showAll();
  } else {
    hideAll();
  }
});
