const $cartBtn = document.querySelector(".cart-label");
const $cartMenu = document.querySelector(".cart");
const $barsMenu = document.querySelector(".navbar-list");
const $overlay = document.querySelector(".overlay");
const $barsBtn = document.querySelector(".menu-label");

const toggleMenu = () => {
    $barsMenu.classList.toggle("open-menu");
    if ($cartMenu.classList.contains("open-cart")) {
      $cartMenu.classList.remove("open-cart");
      return;
    }
    $overlay.classList.toggle("on-overlay");
  };

const toggleCart = () => {
    $cartMenu.classList.toggle("open-cart");
    if ($barsMenu.classList.contains("open-menu")) {
      $barsMenu.classList.remove("open-menu");
      return;
    }
    $overlay.classList.toggle("on-overlay");
  };


  const init =() =>{

    $cartBtn.addEventListener("click", toggleCart);
    $barsBtn.addEventListener("click", toggleMenu);
  };

  init();