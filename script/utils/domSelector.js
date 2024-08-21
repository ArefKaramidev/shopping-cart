export const domSelector = (...element) => {
  return element.map((el) => document.querySelector(el));
};
