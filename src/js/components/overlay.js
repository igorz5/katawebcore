"use strict";

const overlay = document.querySelector(".overlay");

function enable() {
  overlay.classList.add("overlay--active");
}

function disable() {
  overlay.classList.remove("overlay--active");
}

function element() {
  return overlay;
}

export default {
  enable: enable,
  disable: disable,
  element: element
};
