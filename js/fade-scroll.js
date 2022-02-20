const $animationClass = document.querySelectorAll(".scroll-animation");

export default function ScrollAnimation() {
  // devuelve el número de píxeles que el documento se desplaza actualmente a lo largo del eje vertical
  let scrollTop = window.pageYOffset;
  $animationClass.forEach((element) => {
    // retorna la distancia del elemento actual respecto al borde superior del nodo offsetParent.
    let heightAnimated = element.offsetTop;
    if (heightAnimated - 600 < scrollTop) {
      element.style.setProperty("opacity", "1");
      element.classList.add("scroll-animation-abajo");
    }
  });
}
