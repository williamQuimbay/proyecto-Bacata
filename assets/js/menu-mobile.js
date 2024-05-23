document.addEventListener("DOMContentLoaded", (event) => {
  //? selecionar los elementos pricipales

  let mobile_btn = document.querySelector(".navbar__mobile-btn");
  let mobile_menu = document.querySelector(".menu-mobile");

  //funcion de mostrar y ocultar
  const showhiddenMenu = () => {
    let show = document.querySelector(".menu-mobile--show");
    if (show) {
      mobile_menu.classList.remove("menu-mobile--show");
    } else {
      mobile_menu.classList.add("menu-mobile--show");
    }
  };
  //dar click para le mene resposive
  mobile_btn.addEventListener("click", showhiddenMenu);

  //redimension de pantalla
  window.addEventListener("resize", () => {
    let window_width = parseInt(document.body.clientWidth);

    if (window_width >= 1000) {
      mobile_menu.classList.remove("menu-mobile--show");
    }
  });

  //? boton  x
  let btn_close = document.querySelector(".menu-mobile__close");

  btn_close.addEventListener("click", showhiddenMenu);

  //? desplegar submenu

  let menu_item = document.querySelectorAll(".menu-mobile__item");

  menu_item.forEach((item) => {
    item.addEventListener("click", (event) => {
      let submenu = item.lastElementChild;

      if (submenu.className === "menu-mobile__submenu-mobile") {
        // console.log(submenu);
        if ((submenu.style.display = "block")) {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
      }
    });
  });
  const found = document.querySelectorAll(".site-footer");

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  });

  found.forEach((find) => {
    observer.observe(find);
  });
});
