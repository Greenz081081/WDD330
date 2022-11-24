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

    setLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    addToCart(id) {
        const product = product.find((item) => item.Id === id.target.dataset.id);
        // carts.push(product);
        setLocalStorage("so-cart", product);
    }

    renderProductDetails() {

    }

}
