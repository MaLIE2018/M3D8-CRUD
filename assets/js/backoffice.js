import * as api from '../modules/api.js'

const form = document.querySelector(".product-form")
const delbtn = form.querySelector(".backoffice-delbtn")
const editbtn = form.querySelector(".backoffice-editbtn")
const submit = form.querySelector("button[type='submit']")

const requestDataOperation = async(e, id, del) => {
    e.preventDefault();
    let product = [...form.querySelectorAll("input:not(:first-of-type)")].reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = item.value
            item.value = ""
        }
        return acc
    }, {})
    await api.manipulateData(product, id, del)
    window.location.assign("index.html")
}

const getProduct = async(id) => {
    const product = await api.getData(api.endpoint + id);
    [...form.querySelectorAll("input")].map((input) => {
        if (product.hasOwnProperty(input.id)) {
            input.value = product[input.id]
        }
    })
}


window.onload = () => {
    let params = (new URL(document.location)).searchParams;

    if (params.get("id")) {
        form.querySelector("button[type='submit']").classList.add("d-none")
        getProduct(params.get("id"))
        delbtn.addEventListener("click", () => requestDataOperation(event, params.get("id"), true))
        editbtn.addEventListener("click", () => requestDataOperation(event, params.get("id")))
    } else {
        delbtn.classList.add("d-none")
        editbtn.classList.add("d-none")
    }

    form.onsubmit = () => requestDataOperation(event)

}