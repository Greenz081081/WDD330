import productDetail from "./productDetails.js";
import { getParams } from "./utils.js"
import EternalServices from "./EternalServices.js"

const class_products  = new EternalServices("tents")
const productId = getParams("product");


const product = new productDetail(productId, class_products);
product.init();
