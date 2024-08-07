import { addToLocalStorage } from "./addToLocalstorage";
import { addToCart } from "./addToCart";
import { products } from "./data";
addToCart();
export function findproduct(button) {
  const data = products.find((item) => button == item.id);
  let dataArray = JSON.parse(localStorage.getItem("product")) || [];
  dataArray = [...dataArray, data];
  addToLocalStorage(dataArray);
}
