"use strict";

import Swiper, { Navigation, Pagination } from "swiper";

const repair = document.querySelector(".repair");
const repairListWrap = repair.querySelector(".repair__list-wrap");
const repairList = repair.querySelector(".repair__list");
const repairItem = repair.querySelector(".repair__item");
const showAllButton = repair.querySelector(".repair__show-all-btn");

let repairSwiper;

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
  if (!repairSwiper && window.innerWidth < 768) {
    repairSwiper = new Swiper(".repair__list-wrap", {
      slidesPerView: "auto",
      pagination: {
        el: ".repair__pagination",
        clickable: true
      }
    });
  } else if (window.innerWidth > 768 && repairSwiper) {
    repairSwiper.destroy();
    repairSwiper = null;
  }
}

function measureHeight() {
  return repairItem ? repairItem.offsetHeight : 0;
}

function isOpen() {
  return repairList.classList.contains("repair__list--show");
}

function updateMaxHeight() {
  if (isOpen()) {
    repairListWrap.style.maxHeight = `${repairListWrap.scrollHeight}px`;
  } else {
    const height = measureHeight();
    repairListWrap.style.maxHeight = `${height}px`;
  }
}

function expand() {
  showAllButton.textContent = "Скрыть";

  showAllButton.classList.add("dropdown-btn--close");
  repairList.classList.add("repair__list--show");

  updateMaxHeight();
}

function collapse() {
  showAllButton.textContent = "Показать все";

  showAllButton.classList.remove("dropdown-btn--close");
  repairList.classList.remove("repair__list--show");

  updateMaxHeight();
}

export default {
  init: init
};
