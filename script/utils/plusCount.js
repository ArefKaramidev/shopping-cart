import { products } from "./productData";
import { PriceCalculation } from "./PriceCalculation";

export function plusCount(idProduct, element) {
  const selectedProduct = products.find((item) => item.id === idProduct);
  element.previousElementSibling.innerHTML = `<span>< </span>`;
  selectedProduct.count += 1;
  element.innerHTML = `<span>${selectedProduct.count}</span><span> ></span>`;
  PriceCalculation("increase", selectedProduct);
}
