import { renderListWithTemplate } from "./utils.js";


function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
  }

export default class productList {
    constructor (category,productList_render, dataSource) {
        this.category = category
        this.productList_render = productList_render
        this.dataSource = dataSource
        this.path = `../js/${this.category}.json`
    }
    
    getData() {
        return fetch(this.path)
          .then(convertToJson).then((data) => data);
      }
    async init () {
        const res = await this.dataSource.getData()

        return res
    }

    renderList (list){
        this.listElement.innerHTML = "";

        const template = document.getElementById('product-card-template')
        renderListWithTemplate(template, this.listElement, this.prepareTemplate)
    }

    prepareTemplate (template_clone, product) {
        template_clone.querySelector('a').href += product.id
    }

}