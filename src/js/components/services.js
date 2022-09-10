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

  if (textWrap.scrollHeight > measureHeight()) {
    nextButton.style.display = "block";
  }

  collapse();

  window.addEventListener("resize", function () {
    collapse();
  });
}

function isOpen() {
  return block.classList.contains("services__block--show");
}

function measureHeight() {
  return firstText ? firstText.offsetHeight : 0;
}

function expand() {
  textWrap.style.maxHeight = `${textWrap.scrollHeight}px`;
  nextButton.textContent = "Скрыть";

  nextButton.classList.add("dropdown-btn--close");
  block.classList.add("services__block--show");
}

function collapse() {
  const height = measureHeight();
  textWrap.style.maxHeight = `${height}px`;
  nextButton.textContent = "Читать далее";

  nextButton.classList.remove("dropdown-btn--close");
  block.classList.remove("services__block--show");
}

export default {
  init: init
};
