import hamburgerMenu from "./menu_hamburguesa.js";
import darkTheme from "./tema_oscuro.js";
import scrollTopButton from "./boton_scroll.js";
import contactForm from "./contact-form.js";
import ImgContainer from "./image-container.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  scrollTopButton(".scroll-top-btn");
  contactForm();
  ImgContainer("espectros");
  ImgContainer("fragmentos");
  ImgContainer("santos");
  ImgContainer("urbanidad");
  ImgContainer("coleccion");
  ImgContainer("rastros");
});

darkTheme(".dark-theme-btn", "dark-mode", "gray-mode");
