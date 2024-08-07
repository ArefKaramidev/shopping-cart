import { products } from "./data";
import { dressDiv, perfumeDiv } from "./elements";

export function showAllProduct() {
  products.forEach((item) => {
    if (item.id <= 4) {
      dressDiv.innerHTML += ` <div
      class="w-64 h-[26rem ] bg-white rounded-md ml-4 duration-500 xl:hover:scale-95"
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
    } else {
      perfumeDiv.innerHTML += ` <div
    class="w-64 h-[26rem ] bg-white rounded-md ml-4 duration-500 xl:hover:scale-95"
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
    }
  });
}
