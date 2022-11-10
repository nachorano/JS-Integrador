const $cartBtn = document.querySelector(".cart-label");
const $cartMenu = document.querySelector(".cart");
const $barsMenu = document.querySelector(".navbar-list");
const $overlay = document.querySelector(".overlay");
const $barsBtn = document.querySelector(".menu-label");
const $btnLoad = document.querySelector('.btn-load');
const $categories = document.querySelector('.categories');
const $categoryList = document.querySelectorAll(".category");
const $products = document.querySelector(".products-container");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

const splitProducts = size => {
  let dividedProducts = [];
  for (let i = 0; i < productsData.length; i += size) {
    dividedProducts.push(productsData.slice(i, i + size));
  }
  return dividedProducts;
};

const productsController = {
  dividedProducts: splitProducts(8),
  nextProductsIndex: 1,
  productsLimit: splitProducts(8).length,
};


const renderProduct = product => {
    const { id, name, productImg, capacity, description, price} = product;
    return `
    <div class="product">
    <div class="product-img">
      <img class="img-card" src="${productImg}" alt="${name}">
    </div>
    <div class="product-info">

        <div class="product-title">
            <h3>${name}</h3>
            <p>${capacity}</p>
        </div>

        <div class="product-description">
          <p>${description}</p>
        </div>

        <div class="product-footer">
          <span class="btn-cart"  data-id="${id}" data-name='${name}' data-price='${price}' data-img="${productImg}">
            <a href="#" class="btn-add"></a>
          </span>
          <span class="product-price">$ ${price}</span>
        </div>
    </div>
  </div>`;
  };

  const renderDividedProducts = (index = 0) => {
    $products.innerHTML += productsController.dividedProducts[index].map(renderProduct).join("");
  };
  
  const renderFilteredProducts = (category) => {
    const productList = productsData.filter(
      (product) => product.category === category
    );
  
    $products.innerHTML = productList.map(renderProduct).join("");
  };

  const renderProducts = (index = 0, category = undefined) => {
    if (!category) {
      renderDividedProducts(index);
      return;
    }
    renderFilteredProducts(category);
  };

  const changeShowMoreBtnState = (category) => {
    if (!category) {
      $btnLoad.classList.remove("hidden");
      return;
    }
    $btnLoad.classList.add("hidden");
  };


  const changeBtnActiveState = (selectedCategory) => {
    const categories = [...$categoryList];
    categories.forEach((categoryBtn) => {
      if (categoryBtn.dataset.category !== selectedCategory) {
        categoryBtn.classList.remove("active");
        return;
      }
      categoryBtn.classList.add("active");
    });
  };


  const changeFilterState = (e) => {
    const selectedCategory = e.target.dataset.category;
    changeBtnActiveState(selectedCategory);
    changeShowMoreBtnState(selectedCategory);
  };


  const applyFilter = (e) => {
    if (!e.target.classList.contains("category")) return;
    changeFilterState(e);
    if (!e.target.dataset.category) {
      $products.innerHTML = "";
      renderProducts();
    } else {
      renderProducts(0, e.target.dataset.category);
      productsController.nextProductsIndex = 1;
    }
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

const closeOnScroll = () => {
  if (
    !$barsMenu.classList.contains("open-menu") &&
    !$cartMenu.classList.contains("open-cart")
  )
    return;

  $barsMenu.classList.remove("open-menu");
  $cartMenu.classList.remove("open-cart");
  $overlay.classList.remove("on-overlay");
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
