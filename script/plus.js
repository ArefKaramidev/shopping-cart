import { products } from "./data";
import { price } from "./Price";

export function plus(idProduct, element) {
  const selectedProduct = products.find((item) => item.id === idProduct);
  element.previousElementSibling.innerHTML = `<span>< </span>`;
  selectedProduct.count += 1;
  element.innerHTML = `<span>${selectedProduct.count}</span><span> ></span>`;
  price("increase", selectedProduct);
}
