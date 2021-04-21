import * as module from '../modules/api.js'

const form = document.querySelector(".product-form")


const addProduct = async(e) => {
    e.preventDefault();
    let product = [...form.querySelectorAll("input")].reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = item.value
        }
        return acc
    }, {})
    module.postData(product)
}


window.onload = () => {
    form.onsubmit = () => addProduct(event)

}