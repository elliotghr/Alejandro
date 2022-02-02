const d = document,
  ls = localStorage;

export default function darkTheme(btn, classDark, classGray) {
  const $themeBtn = d.querySelector(btn),
    $selectorsDark = d.querySelectorAll("[data-dark]"),
    $selectorsGray = d.querySelectorAll("[data-gray]");
  //   console.log($selectors);

  let moon = "🌙",
    sun = "☀️";

  const lightMode = () => {
    //metodo for each por ser NodeList
    $selectorsDark.forEach((el) => el.classList.remove(classDark));
    $selectorsGray.forEach((el) => {
      el.classList.remove(classGray);
      el.classList.add("section-background-color");
      el.classList.add("title-color");


    });
    $themeBtn.textContent = moon;
    //Para almacenar el ultimo cambio en ls se establece su valor correspondiente
    ls.setItem("theme", "light");
  };

  const darkMode = () => {
    //metodo for each por ser NodeList
    $selectorsDark.forEach((el) => {
      el.classList.add(classDark);
    });
    $selectorsGray.forEach((el) => {
      // console.log(el);
      el.classList.remove("section-background-color");
      el.classList.remove("title-color");
      el.classList.remove("second-color");
      el.classList.add(classGray);
    });
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      // console.log($themeBtn.textContent);
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  // Local Storage en darkmode
  d.addEventListener("DOMContentLoaded", (e) => {
    // console.log(ls.getItem("theme"));
    if (ls.getItem("theme") === null) {
      ls.setItem("theme", "light");
    }
    if (ls.getItem("theme") === "light") {
      lightMode();
    }
    if (ls.getItem("theme") === "dark") {
      darkMode();
    }
  });
}
