const $main = document.querySelector("main"),
$header = document.querySelector(".header")

export default function headerTramsparent() {
  let scrollTop = window.pageYOffset;
  let heightAnimated = $main.offsetTop;
  console.log(scrollTop, heightAnimated)
  if (scrollTop > heightAnimated - 80) {
    $header.style.backgroundColor = "black";
    $header.style.setProperty("transition","background-color .5s ease");
  } else{
    $header.style.backgroundColor = "transparent";

  }

  // devuelve el número de píxeles que el documento se desplaza actualmente a lo largo del eje vertical
  //   let scrollTop = window.pageYOffset;
  //   $animationClass.forEach((element) => {
  //     // retorna la distancia del elemento actual respecto al borde superior del nodo offsetParent.
  //     console.log(pageYOffset)
  //     let heightAnimated = element.offsetTop;
  //     console.log(heightAnimated)
  //     if (heightAnimated - 600 < scrollTop) {
  //       element.style.setProperty("opacity", "1");
  //       element.classList.add("scroll-animation-abajo");
  //     }
  //   });
}
