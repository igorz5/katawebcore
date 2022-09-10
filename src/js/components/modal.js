"use strict";

import overlay from "./overlay";

function init(modal, openBtn, closeBtn) {
  const modalElem = document.querySelector(modal);

  const openModal = function () {
    modalElem.classList.add("modal--active");
    overlay.enable();

    document.body.style.overflow = "hidden";
  };

  const closeModal = function () {
    modalElem.classList.remove("modal--active");
    overlay.disable();

    document.body.style.overflow = "";
  };

  const openBtns = document.querySelectorAll(openBtn);
  for (const btn of openBtns) {
    btn.addEventListener("click", openModal);
  }

  const closeBtns = document.querySelectorAll(closeBtn);
  for (const btn of closeBtns) {
    btn.addEventListener("click", closeModal);
  }
}

export default {
  init: init
};
