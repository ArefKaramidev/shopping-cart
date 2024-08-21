import { addProductToLocalStorage } from "./addProductToLocalstorage";
import { products } from "./productData";
import { showCartProduct } from "./showCartProduct";

export function findproduct(button) {
  const selectedItem = products.find((item) => button == item.id);
  let productData = JSON.parse(localStorage.getItem("product")) || [];
  productData = [...productData, selectedItem];
  addProductToLocalStorage(productData);
  showCartProduct();
}
