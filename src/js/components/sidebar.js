"use strict";

import overlay from "./overlay";

const header = document.querySelector(".page-header");
const sidebar = document.querySelector(".page-sidebar");
const burgerBtn = header.querySelector(".burger-btn");
const closeBtn = sidebar.querySelector(".close-btn");

function isOpen() {
  return sidebar.classList.contains("page-sidebar--active");
}

function open() {
  if (isOpen()) return;

  sidebar.classList.add("page-sidebar--active");
  overlay.enable();
}

function close() {
  if (!isOpen()) return;

  sidebar.classList.remove("page-sidebar--active");
  overlay.disable();
}

function init() {
  burgerBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);

  overlay.element().addEventListener("click", close);
}

export default {
  init: init
};
