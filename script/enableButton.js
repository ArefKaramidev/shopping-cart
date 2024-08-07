export function enableButtons(index) {
  const addButton = document.querySelectorAll(".btn");
  addButton[index.id - 1].disabled = false;
  addButton[index.id - 1].textContent = "Add to cart";
}
