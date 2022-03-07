let buttons = document.querySelectorAll(".add-cart");
let quantitySpan = document.querySelector(".quantity-total-cart");
let emptyCart = document.querySelector(".empty-cart");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    emptyCart.style.display = "none";
    increaseQuantity();

    let product = event.target.parentElement;

    let idProduct = product.id; // 1 ,2 ,3 ,4
    let itemCart = document.getElementById(`item${idProduct}`);

    if (!itemCart) {
      let newItem = createItemCart(product);
      document.querySelector(".items").innerHTML += newItem;
      deleteItem();
    } else {
      ++itemCart.querySelector(".quantity-item").innerText;
    }
  });
});

function increaseQuantity() {
  ++quantitySpan.innerText;
}

function createItemCart(product) {
  let imgProduct = product.querySelector(".item-product img").src;
  let titleProduct = product.querySelector(
    ".item-product .t-product"
  ).innerText;
  let priceProduct = product.querySelector(
    ".item-product .price-product"
  ).innerText;

  let newItem = `
    <li id="item${product.id}">
        <a href="#">
            <img src="${imgProduct}">
            <div class="properties-cart">
                <span class="item-title">${titleProduct}</span>
                <span class="item-price">${priceProduct}</span>
                <span class="quantity-item" >1</span>
            </div>
        </a>
        <i class="far fa-trash-alt delete-item"></i>
    </li>
  `;
  return newItem;
}

function deleteItem() {
  let deleteItems = document.querySelectorAll(".delete-item");

  deleteItems.forEach(function (element) {
    element.addEventListener("click", function (event) {
      const quantityItem =
        event.target.parentElement.querySelector(".quantity-item").innerText;

      quantitySpan.innerText = quantitySpan.innerText - quantityItem; //7-3
      if (quantitySpan.innerText == 0) {
        emptyCart.style.display = "block";
      }
      event.target.parentElement.remove();
    });
  });
}

function getProductInfo() {}
