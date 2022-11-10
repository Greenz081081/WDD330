"use strict";

var _productData = _interopRequireDefault(require("./productData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let products = [];
let carts = [];
const productData = new _productData.default('category');

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

console.log(productData.getData()); // add to cart button event handler

function addToCart(e) {
  carts.push(products);
  setLocalStorage("so-cart", carts); // console.log(product);
}

getProductsData(); // add listener to Add to Cart button

document.getElementById("addToCart").addEventListener("click", addToCart);