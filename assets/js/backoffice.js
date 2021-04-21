import * as module from '../modules/api.js'

const form = document.querySelector(".product-form")


const addProduct = async(e) => {
    e.preventDefault();
    module.postData([...form.querySelectorAll("input")].reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = item.value
            item.value = ""
        }
        return acc
    }, {}))
}


window.onload = () => {
    form.onsubmit = () => addProduct(event)
}