import hamburgerMenu from "./menu_hamburguesa.js";
import darkTheme from "./tema_oscuro.js";
import scrollTopButton from "./boton_scroll.js";
import contactForm from "./contact-form.js";
import ImgContainer from "./image-container.js";
import ScrollAnimation from "./fade-scroll.js";
import headerTramsparent from "../headerTransparent.js";

document.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  scrollTopButton(".scroll-top-btn");
  contactForm();
  ImgContainer("espectros");
  ImgContainer("fragmentos");
  ImgContainer("santos");
  ImgContainer("urbanidad");
  ImgContainer("coleccion");
  ImgContainer("rastros");
  ScrollAnimation();
  // headerTramsparent()
});

window.addEventListener("scroll",e =>{
  ScrollAnimation();
  // headerTramsparent();
} );

darkTheme(".dark-theme-btn", "dark-mode", "gray-mode");
