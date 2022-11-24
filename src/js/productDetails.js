import { getLocalStorage, setLocalStorage } from "./utils";


export default class productDetail  {
    constructor(prodId, dataSrc) {
        this.prodId = prodId;
        this.product = {};
        this.dataSrc = dataSrc
    }

    async init() {
        cthis.product = await this.datasource.findProductById(this.product);
        document.querySelector('main').innerHTML = tis.renderProductDetails()
        document.getElementById('addToCart').addEventListener('click', this.addToCart.bind(this));
    }

    addToCart() {
        let cartContents = getLocalStorage('so-cart')
        if(!cartContents){
            cartContents = [];
        }

        cartContents.push(this.product);
        setLocalStorage('so-cart', cartContents)
    }

    renderProductDetails() {
        return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${this.product.Image}"
          alt="${this.product.NameWithoutBrand}"
        />
        <p class="product-card__price">$${this.product.FinalPrice}</p>
        <p class="product__color">${this.product.Colors[0].ColorName}</p>
        <p class="product__description">
        ${this.product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
        </div></section>`;
    }


}