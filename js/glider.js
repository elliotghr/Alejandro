export default function glider() {
  new Glider(document.querySelector(".carousel-lista"), {
    slidesToShow: 3,
    slidesToScroll: 3,
    // draggable: true,
    dots: ".carousel-indicadores",
    arrows: {
      prev: ".carousel-anterior",
      next: ".carousel-siguiente",
    },
  });
}
