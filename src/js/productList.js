import ExternalServices from "./EternalServices.js";
import { renderListWithTemplate } from "./utils.js";
// const dataSource = new ExternalServices()
export default class productList {
    constructor (category,listElement, dataSource) {
        this.category = category
        this.listElement = listElement
        this.dataSource = dataSource
    }
    
    async init () {
        const dataSource = new ExternalServices()
        const list = await dataSource.getData(this.category);
        console.log(list)
       this.renderList(list)

       document.querySelector(".title").innerHTML = this.category;
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