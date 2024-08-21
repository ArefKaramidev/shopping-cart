import { message } from "./elements";
import { findproduct } from "./addSelectedItemTolocalstorage";

export function addSelectedProductToCart() {
  const addButton = document.querySelectorAll(".btn");
  addButton.forEach((item) => {
    item.addEventListener("click", (e) => {
      message.style.top = "7rem";
      setTimeout(() => {
        message.style.top = "-7rem";
      }, 750);

      findproduct(item.id);

      if (e.target.attributes.id) {
        item.disabled = "disable";
        item.textContent = "Added In Your Cart";
      }
    });
  });
}
