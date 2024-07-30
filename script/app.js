const products = [
  {
    img: "/img/dress1.jpg",
    title: "Dress1",
    price: 12,
    id: 1,
    count: 1,
  },
  {
    img: "/img/dress2.jpg",
    title: "Dress2",
    price: 50,
    id: 2,
    count: 1,
  },
  {
    img: "/img/dress3.jpg",
    title: "Dress3",
    price: 62,
    id: 3,
    count: 1,
  },
  {
    img: "/img/dress4.jpg",
    title: "Dress4",
    price: 45,
    id: 4,
    count: 1,
  },
  {
    img: "/img/p1.jpg",
    title: "Savag",
    price: 120,
    id: 5,
    count: 1,
  },
  {
    img: "/img/p2.jpg",
    title: "Silver secret",
    price: 150,
    id: 6,
    count: 1,
  },
  {
    img: "/img/p3.jpg",
    title: "Tomford",
    price: 162,
    id: 7,
    count: 1,
  },
  {
    img: "/img/p5.jpg",
    title: "Prada",
    price: 255,
    id: 8,
    count: 1,
  },
];

const dressDiv = document.querySelector(".dressDiv");
const perfumeDiv = document.querySelector(".perfumeDiv");
showAllProduct();
const message = document.querySelector(".message");
const countPr = document.querySelector(".countp");
const cart = document.querySelector(".cart");
const close = document.querySelector(".close");
const menubar = document.querySelector("menu");
const insidePr = document.querySelector("#insidePr");
const search = document.querySelector(".search");
const textBox = document.querySelector("#textbox");
const main = document.querySelector("main");
let fg = true;
let fillterProduct;
showCartPr();
let j = 1;

const addButton = document.querySelectorAll(".btn");

search.addEventListener("click", (e) => {
  textBox.style.display = "inline-block";
  cart.style.display = "none";
  if (!fg) {
    textBox.style.display = "none";
    cart.style.display = "inline-block";

    fg = true;
  } else fg = false;
});

textBox.addEventListener("input", (e) => {
  fillterProduct = [...products];
  fillterProduct = products.filter((item) =>
    item.title.toLowerCase().includes(e.target.value)
  );

  if (!e.target.value == "") {
    dressDiv.innerHTML = "";
    perfumeDiv.innerHTML = "";
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
  } else {
    dressDiv.innerHTML = "";
    showAllProduct();
  }
});

cart.addEventListener("click", (e) => {
  menubar.style.transform = "translateX(0)";
});

close.addEventListener("click", (e) => {
  menubar.style.transform = "translateX(-100%)";
});

for (let i = 0; i <= addButton.length; i++) {
  addButton[i].addEventListener("click", (e) => {
    message.style.top = "7rem";
    setTimeout(() => {
      message.style.top = "-7rem";
    }, 750);
    countPr.textContent = j++;
    findproduct(addButton[i].id);

    if (e.target.attributes.id) {
      addButton[i].disabled = "disable";
      addButton[i].textContent = "Added In Your Cart";
    }
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
    insidePr.innerHTML = "";
    data.forEach((product) => {
      insidePr.innerHTML += `
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
             <i class="fa-solid fa-x" onclick='deleteItem(${product.id})'></i>
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
  }
}

function deleteItem(id) {
  const test = JSON.parse(localStorage.getItem("product"));
  const removeItem = test.filter((item) => item.id !== id);
  const item = test.find((item) => item.id === id);
  addToLocalStorage(removeItem);
  if (menubar.innerHTML === "") {
    localStorage.clear();
  }
  enableButtons(item.id - 1);
}

function enableButtons(index) {
  addButton[index].disabled = false;
  addButton[index].textContent = "Add to cart";
}

function miness(idProduct, element) {
  const selectedProduct = products.find((item) => item.id === idProduct);
  element.nextElementSibling.innerHTML = `<span> ></span>`;
  selectedProduct.count == 1 ? 1 : (selectedProduct.count -= 1);
  element.innerHTML = `<span>< </span><span>${selectedProduct.count}</span>`;
  price("deIncrease", selectedProduct);
}

function plus(idProduct, element) {
  const selectedProduct = products.find((item) => item.id === idProduct);
  element.previousElementSibling.innerHTML = `<span>< </span>`;
  selectedProduct.count += 1;
  element.innerHTML = `<span>${selectedProduct.count}</span><span> ></span>`;
  price("increase", selectedProduct);
}

function price(mode, product) {
  const showPrice = document.querySelectorAll("#price");
  if (mode === "increase") {
    totaly = product.price * product.count;
    showPrice[product.id - 1].textContent = `${totaly}$`;
  } else {
    product.price = totaly - product.price;
    showPrice[product.id - 1].textContent = `${product.price}$`;
  }
}

function showAllProduct() {
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
