const $cartBtn = document.querySelector(".cart-label");
const $cartMenu = document.querySelector(".cart");
const $buyBtn = document.querySelector(".btn-buy");
const $barsMenu = document.querySelector(".navbar-list");
const $overlay = document.querySelector(".overlay");
const $barsBtn = document.querySelector(".menu-label");
const $btnLoad = document.querySelector('.btn-load');
const $categories = document.querySelector('.categories');
const $categoryList = document.querySelectorAll(".category");
const $products = document.querySelector(".products-container");
const $productsCart = document.querySelector(".cart-container");
const $totalCart = document.querySelector(".total");

const $deleteBtn = document.querySelector(".btn-delete");
const $successModal = document.querySelector(".modal");
const $counter = document.querySelector(".counter");

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
          <span class="btn-cart"  >
            <a  class="btn-add" 
            data-id="${id}" 
            data-name='${name}' 
            data-price='${price}' 
            data-image="${productImg}"></a>
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

  const lastProduct = () =>
  productsController.nextProductsIndex === productsController.productsLimit;

  const showMoreProducts = () => {
    renderProducts(productsController.nextProductsIndex);
    productsController.nextProductsIndex++;
    if (lastProduct()) {
      $btnLoad.classList.add("hidden");
    }
  };


/*CART*/

const renderCartProduct = (cartProduct) => {
  const { id, name, price, image, quantity } = cartProduct;
  return `
  <div class="cart-item">
    <img src="${image}" alt="Imagen carrito ${name}">
    <div class="item-info">
      <h3 class="item-title">${name}</h3>
      <span class="item-price">$ ${price}</span>
    </div>
    <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${quantity}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
  </div>
  `;
};


const renderCart = () => {
  
  if (!cart.length) {
    $productsCart.innerHTML = `<p class="empty-cart">El carrito está vacío</p>`;
    return;
  }
  $productsCart.innerHTML = cart.map(renderCartProduct).join("");
  
  $counter.innerHTML = cart.length;
  
};

const showCounter = () => {
  if (!cart.length){
    $counter.classList.add("hidden");
  } else{
    $counter.classList.remove("hidden");
  }
}

const getCartTotal = () => {
  return cart.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0);
};

const showTotal = () => {
  $totalCart.innerHTML = `$ ${getCartTotal().toFixed(2)}`;
};

const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("btn-disabled");
  } else {
    btn.classList.remove("btn-disabled");
  }
};

const createProductData = (id, name, price, image) => {
  return { id, name, price, image };
};

const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

const showSuccessModal = (msg) => {
  $successModal.classList.add("active-modal");
  $successModal.textContent = msg;
  setTimeout(() => {
    $successModal.classList.remove("active-modal");
  }, 1500);
};

const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  disableBtn($buyBtn);
  disableBtn($deleteBtn);
  showCounter();
  
};

const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const { id, name, price, image } = e.target.dataset;
  const product = createProductData(id, name, price, image);

  if (isExistingCartProduct(product)) {
    // Añadir una unidad
    addUnitToProduct(product);
    //Mostrar el modal de que se agrego una unidad
    showSuccessModal("Se agregó una unidad del producto al carrito");
  } else {
    //Crear el producto
    createCartProduct(product);
    //Mostrar el modal de que se agrego el producto
    showSuccessModal("El producto se ha agregado al carrito");
  }
  checkCartState();
  console.log(product);
  
};

const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  checkCartState();
  
};

const substractProductUnit = (existingProduct) => {
  cart = cart.map((product) => {
    return product.id === existingProduct.id
      ? { ...product, quantity: Number(product.quantity) - 1 }
      : product;
  });
};

const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  if (existingCartProduct.quantity === 1) {
    if (window.confirm("Desea eliminar el producto del carrito")) {
      // borrar producto
      removeProductFromCart(existingCartProduct);
    }
    return;
  }
  // Restar uno al producto existente
  substractProductUnit(existingCartProduct);
};

const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  addUnitToProduct(existingCartProduct);
};

const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

const completeBuy = () => {
  completeCartAction("¿Desea completar su compra?", "¡Gracias por su compra!");
};

const deleteCart = () => {
  completeCartAction(
    "¿Desea vaciar el carrito?",
    "No hay productos en el carrito"
  );
};

console.log(cart.length)

const init = () => {
  renderProducts();
  showCounter();
  // renderCart();
  $cartBtn.addEventListener("click", toggleCart);
  $barsBtn.addEventListener("click", toggleMenu);
  window.addEventListener('scroll', closeOnScroll);
  $categories.addEventListener('click', applyFilter);
  $btnLoad.addEventListener('click', showMoreProducts);

  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showTotal);
  $products.addEventListener("click", addProduct);
  $productsCart.addEventListener("click", handleQuantity);
  disableBtn($deleteBtn);
  disableBtn($buyBtn);
  $buyBtn.addEventListener("click", completeBuy);
  $deleteBtn.addEventListener("click", deleteCart);
};

init();
