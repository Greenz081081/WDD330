export default class productList {
    constructor (category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init () {
        const list = await this.dataSource.getData();
        this.renderList(list);
    }

    renderList (list) {
        const template = document.querySelector("#product-card-template");
        list.forEach(product => {
            const node = template.content.cloneNode(true);
            this.listElement.appenaChild(node);
        })
    }

    prepareTemplate (template, product) {
        template.querySelector("a").href += product.Id;
        return template;
    }
}