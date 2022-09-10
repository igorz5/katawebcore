"use strict";

import Swiper, { Navigation, Pagination } from "swiper";

let pricesSwiper;

function init() {
  Swiper.use([Navigation, Pagination]);

  initSwiper();

  window.addEventListener("resize", initSwiper);
}

function initSwiper() {
  if (!pricesSwiper && window.innerWidth < 768) {
    pricesSwiper = new Swiper(".prices__list-wrap", {
      slidesPerView: "auto",
      pagination: {
        el: ".prices__pagination",
        clickable: true
      }
    });
  } else if (window.innerWidth > 768 && pricesSwiper) {
    pricesSwiper.destroy();
    pricesSwiper = null;
  }
}

export default {
  init: init
};
