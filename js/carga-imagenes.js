let d = document,
  $id = d.querySelector(`.contenedor-imagenes`),
  $template = "",
  $fragment = d.createDocumentFragment();

export default function imageUpload(imagenes) {
  fetch(imagenes, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    })
    .then((json) => {
      // console.log(json);
      json.forEach((element) => {
        // console.log(element.files);
        $template += `
        <div class="carousel-elemento"><img src="img/santos/${element.files}" alt="${element.files}"/></div>
        `;
      });
    //   console.log($template);
    //   console.log($id);
      $id.innerHTML = $template;
    })
    .catch((err) => {
      let message = err.statusText || "Ocurrió un error";
      console.log(err);
      //   $fetch.innerHTML = `Error ${err.status}: ${message}`;
    });
}
