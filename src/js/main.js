import productData from "./productData.js";
import productList from "./productList.js";
import {loadHeaderFooter} from "./utils.js";

const productDatas = new productData("tents");
// console.log("Product Data:");
// console.log(productDatas);

loadHeaderFooter();

const listElements = document.querySelector("product-list");

const productLists = new productList("tents", productDatas, listElements);
productLists.init();
// console.log("Product List:");
// console.log(productLists);