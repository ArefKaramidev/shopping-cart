const products = [
  {
    img: "/img/dress1.jpg",
    title: "Dress1",
    price: "12$",
    id: 1,
  },
  {
    img: "/img/dress2.jpg",
    title: "Dress2",
    price: "$50",
    id: 2,
  },
  {
    img: "/img/dress3.jpg",
    title: "Dress3",
    price: "62$",
    id: 3,
  },
  {
    img: "/img/dress4.jpg",
    title: "Dress4",
    price: "25$",
    id: 4,
  },
  {
    img: "/img/p1.jpg",
    title: "Savag",
    price: "120$",
    id: 5,
  },
  {
    img: "/img/p2.jpg",
    title: "Silver secret",
    price: "$150",
    id: 6,
  },
  {
    img: "/img/p3.jpg",
    title: "Tomford",
    price: "162$",
    id: 7,
  },
  {
    img: "/img/p5.jpg",
    title: "Prada",
    price: "255$",
    id: 8,
  },
];

const dressDiv = document.querySelector(".dressDiv");
const perfumeDiv = document.querySelector(".perfumeDiv");

products.forEach((item) => {
  if (item.id <= 4) {
    dressDiv.innerHTML += ` <div
    class="w-64 h-[26rem ] bg-white rounded-md ml-4 duration-500 hover:scale-95"
  >
  <img src=${item.img} alt="dress" />
  <div class="flex justify-between py-2">
  <span class="font-medium">${item.title}</span>
  <span class="text-gray-900">${item.price}</span>
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
  class="w-64 h-[26rem ] bg-white rounded-md ml-4 duration-500 hover:scale-95"
  >
  <img src=${item.img} alt="dress" />
  <div class="flex justify-between py-2">
  <span class="font-medium">${item.title}</span>
  <span class="text-gray-900">${item.price}</span>
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

const message = document.querySelector(".message");
const countPr = document.querySelector(".countp");
const cart = document.querySelector("header button");
const close = document.querySelector(".close");
const menubar = document.querySelector("menu");
showCartPr();
let j = 1;
const addButton = document.querySelectorAll(".btn");

cart.addEventListener("click", (e) => {
  menubar.style.transform = "translateX(0)";
});

close.addEventListener("click", (e) => {
  menubar.style.transform = "translateX(-100%)";
});

for (let i = 0; i <= addButton.length; i++) {
  addButton[i].addEventListener("click", (e) => {
    message.style.top = "5.5rem";
    setTimeout(() => {
      message.style.top = "-6rem";
    }, 750);
    countPr.textContent = j++;
    findproduct(addButton[i].id);
  });
}

function findproduct(button) {
  const data = products.find((item) => button == item.id);
  let dataArray = JSON.parse(localStorage.getItem("product")) || [];
  dataArray = [...dataArray, data];
  addToLocalStorage(dataArray);
}

function addToLocalStorage(data) {
  localStorage.setItem("product", JSON.stringify(data));
  showCartPr();
}

function showCartPr() {
  const data = JSON.parse(localStorage.getItem("product"));
  if (data === null) return;
  else {
    menubar.innerHTML = "";
    data.forEach((product) => {
      menubar.innerHTML += `
        <div class="mt-12">
           <div class="w-full p-4 h-16 flex">
             <img
               src=${product.img}
               alt=""
               class="w-12 h-12 mr-10 rounded-sm"
             />
             <div class="flex-col w-full h-full">
               <div class="font-medium">${product.title}</div>
               <div class="font-medium">${product.price}</div>
             </div>
             <i class="fa-solid fa-x" onclick='deleteItem(${product.id})'></i>
           </div>
           <div class="w-full text-center">
             <button class="bg-teal-700 p-2 rounded-md text-white">
               payment
             </button>
           </div>
         </div>
   `;
    });
  }
}

function deleteItem(id) {
  const test = JSON.parse(localStorage.getItem("product"));
  const removeItem = test.filter((item) => item.id !== id);
  addToLocalStorage(removeItem);
}
