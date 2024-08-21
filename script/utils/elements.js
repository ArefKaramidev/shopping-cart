import { domSelector } from "./domSelector";

export const [
  dressDiv,
  perfumeDiv,
  message,
  countOfProduct,
  cartBtn,
  closeBtnMenu,
  menubar,
  renderProduct,
  searchBtn,
  searchBox,
  mainContainer,
  clothingTitle,
  perfumeTitle,
] = domSelector(
  ".dressDiv",
  ".perfumeDiv",
  ".message",
  ".countp",
  ".cart",
  ".close",
  "menu",
  "#insidePr",
  ".search",
  "#textbox",
  "main",
  ".clothingtitle",
  ".prfumetitle"
);
