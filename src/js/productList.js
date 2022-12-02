import { renderListWithTemplate } from "./utils.js";

export default class productList {
    constructor (category,listElement, dataSource) {
        this.category = category
        this.listElement = listElement
        this.dataSource = dataSource
    }
    
    async init () {
        const list = await this.dataSource.getData(this.category);

       this.renderList(list)
    }

    renderList (){
        this.listElement.innerHTML = "";

        const template = document.getElementById("product-card-template'")
        renderListWithTemplate(template, this.listElement, this.prepareTemplate)
    }

    prepareTemplate (template, product) {
      template.querySelector("a").href +=  product.Id;
      template.querySelector("img'").src = product.Images.PrimaryMedium;
      template.querySelector("img").alt += product.Name;
      template.querySelector(".card__brand").textContent = product.Brand.Name;
      template.querySelector(".card__name").textContent = product.NameWithoutBrand;
      template.querySelector(".product-card__price").textContent += product.FinalPrice; 
      return template;
    }

}