import productData from "./productData.js"
import productDetail from "./productDetails.js";
import { getParams } from "./utils.js"

const class_products  = new productData("tents")
const productId = getParams("product");


console.log(productId)

const product = new productDetail(productId, class_products);
product.init();
                



            
