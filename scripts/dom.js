const getById = (selector) => document.getElementById(selector)
const qs = (selector) => document.querySelector(selector)
const qsAll = (selector) => document.querySelectorAll(selector)
const render = (element, content ) => element.innerHTML = content
const insertHtml = (element, location, content) => element.insertAdjacentHTML(location, content)
const insertElement = (element, location, content) => element.insertAdjacentElement(location, content)

export {
    getById, 
    qs, 
    qsAll, 
    render, 
    insertHtml,
    insertElement
}