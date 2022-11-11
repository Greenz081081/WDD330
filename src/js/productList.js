export default class productList {
    constructor (category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async Init() {
        const list = await this.dataSource.getData();
        this.renderList(list);
    }

    renderList (list) {
        const productCardTemplate = document.querySelector("#product-card-template");
        list.forEach(product => {
            const node = productCardTemplate.cloneNode(true);
            this.listElement.appendChild(node);
        });
        
    }
}