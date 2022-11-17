// wrapper for querySelector...returns matching element
function convertToText(res) {
  if (res) {
    return res.text();
  } else {
    throw new Error("Bad Response");
  }
}
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParams(param){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param)

  return product
}

export function renderListWithTemplate(template, parentElement, list, callback) {
  list.forEach(prod => {
      const clone = template.content.cloneNode(true)
      const hydratedTemplate = callback(clone, product)
      parentElement.appendChild(hydratedTemplate)
  })
} 

export function renderWithTemplate(template, parentElement, data, callback) {
    let clone = template.content.cloneNode(true)
    parentElement.appendChild(clone)
    if (callback) {
      clone = callback(clone, data)
  }
} 

export async function loadTemplate (path)  {
  const res = await fetch(path).then(convertToText)

  const template = document.createElement('template')
  template.innerHTML = res

  return template
}

export async function loadHeaderFooter(){
  const resHeader = await loadTemplate('../partial/header.html')
  const resFooter = await loadTemplate('../partial/footer.html')
  const header = document.getElementById('main-header')
  const footer = document.getElementById('main-footer')

  renderWithTemplate(resHeader, header)
  renderWithTemplate(resFooter, footer)
}
