import { products } from "./data";

export function miness(idProduct, element) {
  const selectedProduct = products.find((item) => item.id === idProduct);
  element.nextElementSibling.innerHTML = `<span> ></span>`;
  selectedProduct.count == 1 ? 1 : (selectedProduct.count -= 1);
  element.innerHTML = `<span>< </span><span>${selectedProduct.count}</span>`;
  price("deIncrease", selectedProduct);
}
