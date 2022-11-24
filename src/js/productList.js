import { renderListWithTemplate } from "./utils.js";


function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
  }

export default class productList {
    constructor (category,listElement, dataSource) {
        this.category = category
        this.listElement = listElement
        this.dataSource = dataSource
    }
    
    getData() {
        return fetch(this.path)
          .then(convertToJson).then((data) => data);
      }
    async init () {
        const list = await this.dataSource.getData(this.category);
        console.log (list)
        return list
    }

    renderList (list){
        this.listElement.innerHTML = "";

        const template = document.getElementById('product-card-template')
        renderListWithTemplate(template, this.listElement, this.prepareTemplate)
    }

    prepareTemplate (template, product) {
      template.querySelector('a').href +=  product.Id;
      template.querySelector('img').src = product.Images.PrimaryMedium;
      template.querySelector('img').alt += product.Name;
      template.querySelector('.card__brand').textContent = product.Brand.Name;
      template.querySelector('.card__name').textContent = product.NameWithoutBrand;
      template.querySelector('.product-card__price').textContent += product.FinalPrice; 
      return template;
    }

}