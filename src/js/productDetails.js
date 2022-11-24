import {setLocalStorage} from "./utils";
export default class productDetail  {
    constructor(prodId, dataSrc) {
        this.prodId = prodId;
        this.product = {};
        this.dataSrc = dataSrc;
    }

    async init() {
        const details = await this.dataSrc.getData();
        return details;
    }

    addToCart() {
        setLocalStorage("so-cart", this.product);
    }

    renderProductDetails() {
        return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider>${this.product.NameWithoutBrand}</h2>
        <img 
            class="divider"
            src="${this.product.Image}"
            alt="${this.product.NameWithoutBrand}
        />
        <P class="product-card__price">$${this.product.FinalPrice}</p>
        <p class="product__color>${this.product.Colors[0].ColorName}</p>
        <p class="product__description>${this.product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
            <button id="addToCart" data-id="${this.product.Id}>Add to Cart</button>
        </div></section>`;
    }

}
