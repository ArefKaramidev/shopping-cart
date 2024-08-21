import { addProductToLocalStorage } from "./addProductToLocalstorage";
import { renderProduct } from "./elements";
import { enableButtons } from "./enableButton";
import { showCartProduct } from "./showCartProduct";

export function attachRemoveItemListener() {
  const removedItem = document.querySelectorAll(".remove");
  removedItem.forEach((itemRemove) => {
    itemRemove.addEventListener("click", (e) => {
      const idElement = +e.target.id;
      const ProductData = JSON.parse(localStorage.getItem("product"));
      const removeItem = ProductData.filter((item) => item.id != idElement);
      const obj = ProductData.find((item) => item.id == idElement);

      addProductToLocalStorage(removeItem);
      showCartProduct();
      if (renderProduct.innerHTML === "") {
        localStorage.clear();
      }
      enableButtons(obj);
    });
  });
}
