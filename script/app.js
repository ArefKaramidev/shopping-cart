import { products } from "./utils/productData";
import {
  dressDiv,
  perfumeDiv,
  message,
  cartBtn,
  closeBtnMenu,
  menubar,
  renderProduct,
  searchBtn,
  searchBox,
  clothingTitle,
  perfumeTitle,
} from "./utils/elements";

import { addSelectedProductToCart } from "./utils/addSelectedProductToCart";
import { showAllProduct } from "./utils/showAllProducts";
import { enableButtons } from "./utils/enableButton";
import { showCartProduct } from "./utils/showCartProduct";

showAllProduct();
showCartProduct();
addSelectedProductToCart();

let openBox = true;
let fillterProduct = [];

searchBtn.addEventListener("click", () => {
  searchBox.style.display = "inline-block";
  cartBtn.style.display = "none";
  if (!openBox) {
    searchBox.style.display = "none";
    cartBtn.style.display = "inline-block";

    openBox = true;
  } else openBox = false;
});

searchBox.addEventListener("input", ({ target: { value } }) => {
  fillterProduct = products.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );

  if (!value == "") {
    dressDiv.innerHTML = "";
    perfumeDiv.innerHTML = "";
    perfumeTitle.textContent = "";
    clothingTitle.textContent = "";
    fillterProduct.forEach((item) => {
      dressDiv.innerHTML += ` <div
        class="w-64 h-[26rem ] bg-white rounded-md ml-4 duration-500 hover:scale-95"
      >
      <img src=${item.img} alt="dress" />
      <div class="flex justify-between py-2">
      <span class="font-medium">${item.title}</span>
      <span class="text-gray-900">${item.price}$</span>
      </div>
      <div>
      <button
      class="px-6 py-2 w-full font-medium bg-slate-500 rounded-br-md rounded-bl-md text-white duration-200 active:scale-95 active:bg-slate-700 btn"
      id="${item.id}"
      >
      Add to cart
      </button>
      </div>
      </div>`;
    });
    addSelectedProductToCart();
  } else {
    dressDiv.innerHTML = "";
    showAllProduct();
  }
});

cartBtn.addEventListener("click", () => {
  menubar.style.transform = "translateX(0)";
});

closeBtnMenu.addEventListener("click", () => {
  menubar.style.transform = "translateX(-100%)";
});

//*for show selected product in cart
showCartProduct();

//* for Do not be selected more than once item
enableButtons(index);
