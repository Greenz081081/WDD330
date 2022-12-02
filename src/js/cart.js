import { loadHeaderFooter } from "./utils.js";
import CartList from "./cartList.js";

loadHeaderFooter();

const cart = new CartList("so-cart", document.querySelector(".product-list"));
cart.init();
if (cart.total > 0) {

  document.querySelector(".list-footer").classList.remove("hide");
}