import { showCartPr } from "./showCartPr";

export function addToLocalStorage(data) {
  localStorage.setItem("product", JSON.stringify(data));
  showCartPr();
}
