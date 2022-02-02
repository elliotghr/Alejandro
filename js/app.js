export default function Gldier(nombreAlbum) {
  new Glider(document.querySelector(`#${nombreAlbum} .carousel__lista`), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    dots: `#${nombreAlbum} .carousel__indicadores`,
    arrows: {
      prev: `#${nombreAlbum} .carousel__anterior`,
      next: `#${nombreAlbum} .carousel__siguiente`,
    },
    responsive: [
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          itemWidth: 150,
          duration: 0.25,
        },
      },
    ],
  });
}
