import { attachRemoveListener } from "./attachRemoveListener";
import { countPr, renderProduct } from "./elements";

export function showCartPr() {
  const data = JSON.parse(localStorage.getItem("product"));
  countPr.textContent == ""
    ? (countPr.textContent = 0)
    : (countPr.textContent = data.length);
  if (data === null) return;
  else {
    renderProduct.innerHTML = "";
    data.forEach((product) => {
      renderProduct.innerHTML += `
          <div class="mt-5">
             <div class="w-full p-4 h-16 flex">
               <img
                 src=${product.img}
                 alt=""
                 class="w-12 h-12 mr-10 rounded-sm"
               />
               <div class="flex-col w-full h-full">
                 <div class="font-medium">${product.title}</div>
                 <div class="font-medium" id='price'>${product.price}$</div>
               </div>
               <button class="fa-solid fa-x remove" id='${product.id}'></button>
             </div>
               <div class="w-full text-center py-2">
            <button class="font-medium text-white text-lg" onclick="miness(${product.id},this)">< ${product.count}</button>
            <button class="font-medium text-white text-lg "onclick="plus(${product.id},this)">></button>
          </div>
             <div class="w-full text-center">
               <button class="bg-teal-700 p-2 rounded-md text-white">
                 payment
               </button>
             </div>
           </div>
     `;
    });
    attachRemoveListener();
  }
}
