"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.qs = qs;
exports.getLocalStorage = getLocalStorage;
exports.setLocalStorage = setLocalStorage;
exports.setClick = setClick;

// wrapper for querySelector...returns matching element
function qs(selector, parent = document) {
  return parent.querySelector(selector);
} // or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);
// retrieve data from localstorage


function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
} // save data to local storage


function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
} // set a listener for both touchend and click


function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", event => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}