const $cartBtn = document.querySelector(".cart-label");
const $cartMenu = document.querySelector(".cart");
const $barsMenu = document.querySelector(".navbar-list");
const $overlay = document.querySelector(".overlay");
const $barsBtn = document.querySelector(".menu-label");
const $btnLoad = document.querySelector('.btn-load');
const $categories = document.querySelector('.categories');

const $categoryList = document.querySelectorAll(".category");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

const renderProduct = product => {
    const { id, name, productImg, capacity, description} = product;
    return `
    <div class="product">
    <img src="${productImg}" alt="${name}">
    <div class="product-info">

        <div class="product-title">
            <h3>${name}</h3>
            <p>${capacity}</p>
        </div>

        <div class="product-description">
          <p>${description}</p>
        </div>

        <div class="product-footer">
          <span class="btn-cart"  data-id="${id}" data-name="Golden Messi" data-bid="6.89" data-img="${productImg}">
            <a href="#" class="btn-add"></a>
          </span>
          <span class="product-price">$ 9999</span>
        </div>
    </div>
</div>`;
  };

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

const init = () => {
    renderProducts();
  $cartBtn.addEventListener("click", toggleCart);
  $barsBtn.addEventListener("click", toggleMenu);
  window.addEventListener('scroll', closeOnScroll);
  $categories.addEventListener('click', applyFilter);
  $btnLoad.addEventListener('click', showMoreProducts);
};

init();
