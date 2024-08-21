export function priceCalculation(mode, product) {
  const showPrice = document.querySelectorAll("#price");
  if (mode === "increase") {
    totaly = product.price * product.count;
    showPrice[product.id - 1].textContent = `${totaly}$`;
  } else {
    product.price = totaly - product.price;
    showPrice[product.id - 1].textContent = `${product.price}$`;
  }
}
