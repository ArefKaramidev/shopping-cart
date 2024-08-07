import { addToCart } from "./addToCart";
import { products } from "./data";
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
} from "./elements";
import { enableButtons } from "./enableButton";
import { plus } from "./plus";
import { price } from "./Price";
import { showAllProduct } from "./showAllProducts";
import { showCartPr } from "./showCartPr";

showAllProduct();
showCartPr();
addToCart();

let fg = true;
let fillterProduct;

searchBtn.addEventListener("click", (e) => {
  searchBox.style.display = "inline-block";
  cartBtn.style.display = "none";
  if (!fg) {
    searchBox.style.display = "none";
    cartBtn.style.display = "inline-block";

    fg = true;
  } else fg = false;
});

searchBox.addEventListener("input", (e) => {
  fillterProduct = [...products];
  fillterProduct = products.filter((item) =>
    item.title.toLowerCase().includes(e.target.value)
  );

  if (!e.target.value == "") {
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
    addToCart();
  } else {
    dressDiv.innerHTML = "";
    showAllProduct();
  }
});

cartBtn.addEventListener("click", (e) => {
  menubar.style.transform = "translateX(0)";
});

closeBtnMenu.addEventListener("click", (e) => {
  menubar.style.transform = "translateX(-100%)";
});

//* This function is to store the product in localStorage

//*for adding in localStorage
addToLocalStorage(data);

//*for show selected product in cart
showCartPr();

//*for delete selected item in cart
attachRemoveListener();

//* for Do not be selected more than once
enableButtons(index);

//*To increase the number
plus(idProduct, element);

price(mode, product);

//*To display all products in the array
