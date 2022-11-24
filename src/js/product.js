import EternalServices from "./EternalServices.js"
import productDetail from "./productDetails.js";
import { getParams } from "./utils.js"

const class_products  = new EternalServices("tents")
const productId = getParams('product');

const product = new productDetail(productId, class_products);
product.init();
                



            
