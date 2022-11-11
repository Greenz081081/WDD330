import productData from "./productData.js";
import productList from "./productList.js";

const productDatas = new productData("tents");
console.log("Product Data:");
console.log(productDatas);

const listElement = document.querySelector("product-list");

const productLists = new productList("tents", productDatas, listElement);
productLists.init();
console.log("Product List:");
console.log(productLists);