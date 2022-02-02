import Gldier from "./app.js";

export default async function ImageUpload(nombreAlbum) {
  let d = document,
    $id = d.querySelector(`#${nombreAlbum} .carousel__lista`),
    $template = d.getElementById("glider-template").content,
    $img = $template.querySelector("img"),
    $loader = d.createElement("div"),
    $fragment = d.createDocumentFragment();

  try {
    // Loader visible
    $loader.classList.add("carousel__elemento");
    $loader.innerHTML = `
    <img src="./assets/loader.svg"></img>
    `;
    $id.appendChild($loader);
    // Petición ajax
    let res = await fetch(`./php/${nombreAlbum}.php`),
      json = await res.json();
    // console.log(json);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    json.forEach((element) => {
      $img.src = `./img/${nombreAlbum}/${element.files}`;
      $img.alt = element.files;

      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $id.appendChild($fragment);
    // Sutitución de Loader por Portada
    $loader.querySelector("img").src = `./img/portadas/${nombreAlbum}.webp`;
  } catch (err) {
    let message = err.statusText || "Ocurrió un error";
    $id.innerHTML =`Error ${err.statusText}: ${message}`;
  }
  Gldier(nombreAlbum);
}
