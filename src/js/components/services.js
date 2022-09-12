"use strict";

const services = document.querySelector(".services");
const textWrap = services.querySelector(".services__text-wrap");
const nextButton = services.querySelector(".services__next-btn");
const block = services.querySelector(".services__block");
const firstText = textWrap.querySelector("p");

function init() {
  nextButton.addEventListener("click", function (e) {
    e.preventDefault();

    if (!isOpen()) {
      expand();
    } else {
      collapse();
    }
  });

  collapse();

  if (textWrap.scrollHeight <= measureHeight()) {
    nextButton.style.display = "none";
  }

  window.addEventListener("resize", updateMaxHeight);
}

function isOpen() {
  return block.classList.contains("services__block--show");
}

function measureHeight() {
  return firstText ? firstText.offsetHeight : 0;
}

function updateMaxHeight() {
  if (isOpen()) {
    textWrap.style.maxHeight = `${textWrap.scrollHeight}px`;
  } else {
    const height = measureHeight();
    textWrap.style.maxHeight = `${height}px`;
  }
}

function expand() {
  nextButton.textContent = "Скрыть";

  nextButton.classList.add("dropdown-btn--close");
  block.classList.add("services__block--show");

  updateMaxHeight();
}

function collapse() {
  nextButton.textContent = "Читать далее";

  nextButton.classList.remove("dropdown-btn--close");
  block.classList.remove("services__block--show");

  updateMaxHeight();
}

export default {
  init: init
};
