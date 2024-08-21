import { showCartProduct } from "./showCartProduct";

export function addProductToLocalStorage(data) {
  localStorage.setItem("product", JSON.stringify(data));
}
