import brands from "./components/brands";
import sidebar from "./components/sidebar";
import services from "./components/services";
import modal from "./components/modal";
import repair from "./components/repair";
import prices from "./components/prices";

import "swiper/swiper.scss";
import "../scss/main.scss";

const modals = [
  {
    elem: ".modal-call",
    openBtn: ".call-btn",
    closeBtn: ".modal-call .close-btn"
  },

  {
    elem: ".modal-feedback",
    openBtn: ".chat-btn",
    closeBtn: ".modal-feedback .close-btn"
  }
];

function initModals() {
  for (const m of modals) {
    modal.init(m.elem, m.openBtn, m.closeBtn);
  }
}

function initAll() {
  brands.init();
  sidebar.init();
  services.init();
  repair.init();
  prices.init();

  initModals();
}

initAll();
