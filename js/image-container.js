import ImageUpload from "./image-upload.js";

export default async function ImgContainer(nombreAlbum) {
  const d = document,
    $container = d.querySelector(".album-container"),
    $template = d.getElementById("contenedor-template").content;

  $template.querySelector("h2").textContent = nombreAlbum.toUpperCase();
  $template.querySelector("div").setAttribute("id", `${nombreAlbum}`);
  $template.querySelector("button").setAttribute("id", `${nombreAlbum}`);
  $template
    .querySelector("div .carousel__indicadores")
    .setAttribute("id", `${nombreAlbum}`);

  let $clone = d.importNode($template, true);
  $container.appendChild($clone);

  ImageUpload(nombreAlbum);
}
