"use strict";

import overlay from "./overlay";
import sidebar from "./sidebar";

function init(modal, openBtn, closeBtn) {
  const modalElem = document.querySelector(modal);

  const openModal = function () {
    modalElem.classList.add("modal--active");
    overlay.enable();

    document.body.classList.add("no-scroll");
  };

  const closeModal = function () {
    modalElem.classList.remove("modal--active");
    overlay.disable();

    document.body.classList.remove("no-scroll");
  };

  const openBtns = document.querySelectorAll(openBtn);
  for (const btn of openBtns) {
    btn.addEventListener("click", function () {
      sidebar.close();
      openModal();
    });
  }

  const closeBtns = document.querySelectorAll(closeBtn);
  for (const btn of closeBtns) {
    btn.addEventListener("click", closeModal);
  }
}

export default {
  init: init
};
