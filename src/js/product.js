import productDetail from "./productDetails.js";
import { getParam } from "./utils.js";
import ExternalServices from "./ExternalServices.js";

const productId = getParam("product");
const dataSource = new ExternalServices();

const product = new productDetail(productId, dataSource);
product.init();
