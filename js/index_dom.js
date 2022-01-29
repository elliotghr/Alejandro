import hamburgerMenu from "./menu_hamburguesa.js";
import darkTheme from "./tema_oscuro.js";
import scrollTopButton from "./boton_scroll.js";
import contactForm from "./contact-form.js";
// import imageUpload from "./carga-imagenes.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  scrollTopButton(".scroll-top-btn");
  contactForm();
  // imageUpload("espectros.php");
});

darkTheme(".dark-theme-btn", "dark-mode", "gray-mode");
