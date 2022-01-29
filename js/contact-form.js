const d = document;

export default function contactForm() {
  const $form = d.querySelector(".contact-form"),
    $inputs = d.querySelectorAll(".contact-form [required]");
  //   console.log($inputs);

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      // console.log($input, pattern);
      if (pattern && $input.value !== "") {
        // console.log("El input tiene patron");
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      if (!pattern) {
        // console.log("El input NO tiene patron");
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    e.preventDefault();
    // alert("Enviando formulario");

    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");

    //   setTimeout(() => {
    //     $loader.classList.add("none");
    //     $response.classList.remove("none");
    //     $form.reset();

    //     setTimeout(() => {
    //       $response.classList.add("none");
    //     }, 3000);
    //   }, 2000);

    //   Iniciamos con fetch
    //   El primer then recibe la respuesta
    //   FormSubmit envia las respuestas ya en objeto json asi que las convertiremos a objeto js
    fetch("https://formsubmit.co/ajax/candoalejandro167@gmail.com", {
      method: "POST",
      //Usaremos FormData porque ya nos parsea los datos en clave: valor aunque haya un formulario /
      // parsea el formulario automaticamente, por eso el e.target, IMPORTANTE: Todos los imputs deben tener el atributo name
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        // console.log(json);
        $loader.classList.add("none");
        $response.classList.remove("none");

        $response.innerHTML = `<p>${json.message}</p>`;
        $form.reset();
      })
      .catch((err) => {
        // console.log(err);
        let message =
          err.statusText ||
          "Oucrrió un error al enviar, intenta nuevamente";
        $response.innerHTML = `<p>Error ${err.status}: ${err.statusText}</p>`;
      })
      .finally(() => {
        setTimeout(() => {
          $response.classList.add("none");
          $response.innerHTML = "";
        }, 3000);
      });
  });
}