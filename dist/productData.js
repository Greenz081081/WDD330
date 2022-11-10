"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
} // get tents data


class ProductData {
  constructor(tent) {
    this.tent = tent;
    this.path = `../json/${this.tent}.json`;
  }

  getData() {
    fetch("../json/tents.json").then(convertToJson).then(data => {
      return data;
    });
  }

  findProductById(id) {
    const product = products.find(item => item.id === id.target.dataset.id);
    return product;
  }

}

exports.default = ProductData;