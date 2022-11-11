export default class productList {
    constructor (category, listElement, dataSource) {
        this.category = category;
        this.listElement = listElement;
        this.dataSource = dataSource
    }

    async init () {
        const list = await this.dataSource.getData();
    }
}