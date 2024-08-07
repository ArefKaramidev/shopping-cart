import { addToLocalStorage } from "./addToLocalstorage";
import { renderProduct } from "./elements";
import { enableButtons } from "./enableButton";

export function attachRemoveListener() {
  const removeditem = document.querySelectorAll(".remove");
  removeditem.forEach((itemRemove) => {
    itemRemove.addEventListener("click", (e) => {
      const idElement = +e.target.id;
      const test = JSON.parse(localStorage.getItem("product"));
      const removeItem = test.filter((item) => item.id !== idElement);
      const item = test.find((item) => item.id === idElement);

      addToLocalStorage(removeItem);
      if (renderProduct.innerHTML === "") {
        localStorage.clear();
      }
      enableButtons(item);
    });
  });
}
