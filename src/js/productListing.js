
import EternalServices from "./EternalServices.js";
import ProductList from "./productList.js";
import { loadHeaderFooter, getParams } from "./utils.js";

loadHeaderFooter();

const category = getParams("category");
// first create an instance of our EternalServices class.
const dataSource = new EternalServices();
// then get the element we want the product list to render in
const listElement = document.querySelector(".product-list");
// then create an instance of our ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show our products
myList.init();