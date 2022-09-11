"use strict";

import Swiper, { Navigation, Pagination } from "swiper";

const brands = document.querySelector(".brands");
const brandsInner = brands.querySelector(".brands__inner");
const brandsList = brands.querySelector(".brands__list");
const brandsItem = brands.querySelector(".brands__item");
const showAllButton = brands.querySelector(".brands__show-all-btn");

const rowsToShow = 2;
const gap = 16;

let brandsSwiper;

function init() {
  Swiper.use([Navigation, Pagination]);

  initSwiper();
  collapse();

  window.addEventListener("resize", function () {
    updateMaxHeight();
    initSwiper();
  });

  showAllButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (!isOpen()) {
      expand();
    } else {
      collapse();
    }
  });
}

function initSwiper() {
  if (!brandsSwiper && window.innerWidth < 768) {
    brandsSwiper = new Swiper(".brands__list-wrap", {
      slidesPerView: "auto",
      pagination: {
        el: ".brands__pagination",
        clickable: true
      }
    });
  } else if (window.innerWidth > 768 && brandsSwiper) {
    brandsSwiper.destroy();
    brandsSwiper = null;
  }
}

function isOpen() {
  return brandsList.classList.contains("brands__list--show");
}

function measureHeight() {
  let height = 0;
  if (brandsItem) {
    height = brandsItem.offsetHeight * rowsToShow + gap * (rowsToShow - 1);
  }

  return height;
}

function updateMaxHeight() {
  if (isOpen()) {
    brandsInner.style.maxHeight = `${brandsInner.scrollHeight}px`;
  } else {
    const height = measureHeight();
    brandsInner.style.maxHeight = `${height}px`;
  }
}

function expand() {
  showAllButton.textContent = "Скрыть";

  showAllButton.classList.add("dropdown-btn--close");
  brandsList.classList.add("brands__list--show");

  updateMaxHeight();
}

function collapse() {
  showAllButton.textContent = "Показать все";

  showAllButton.classList.remove("dropdown-btn--close");
  brandsList.classList.remove("brands__list--show");

  updateMaxHeight();
}

export default {
  init: init
};
