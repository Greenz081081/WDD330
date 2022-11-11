

export default class productDetail  {
    constructor(prodId, dataSrc) {
        this.prodId = prodId;
        this.product = {};
        this.dataSrc = dataSrc
    }

    async init() {
        const details = await this.dataSrc.getData();
    }

    addToCart() {
        const product = product.find((item) => item.Id === e.target.dataset.id);
        carts.push(product);
        setLocalStorage("so-cart", carts);
    }

    renderProductDetails() {

    }


}