import { getLocalStorage, setLocalStorage } from "./utils";



export default class productDetail  {
    constructor(prodId, dataSource) {
        this.prodId = prodId;
        this.product = {};
        this.dataSource = dataSource
    }

    async init() {
        this.product = await this.dataSource.findProductById(this.product);
        document.querySelector("main").innerHTML = this.renderProductDetails()
        document.getElementById("addToCart").addEventListener("click", this.addToCart.bind(this));
    }

    addToCart() {
        let cartContents = getLocalStorage("so-car")
        if(!cartContents){
            cartContents = [];
        }

        cartContents.push(this.product);
        setLocalStorage("so-cart", cartContents)
    }

    renderProductDetails() {
        return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
        <h2 class="divider">${this.product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${this.product.Images.PrimaryLarge}"
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