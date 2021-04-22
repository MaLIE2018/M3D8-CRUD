import * as api from '../modules/api.js'

const form = document.querySelector(".product-form")




const requestDataOperation = async(e, id, del) => {
    e.preventDefault();
    api.manipulateData([...form.querySelectorAll("input")].reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = item.value
            item.value = ""
        }
        return acc
    }, {}), id, del)
}

const getProduct = async(id) => {
    const product = await api.getData(api.endpoint + id);
    console.log(product);
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
        form.querySelector(".backoffice-delbtn").addEventListener("click", () => requestDataOperation(e, params.get("id"), true))
        form.querySelector(".backoffice-editbtn").addEventListener("click", () => requestDataOperation(e, params.get("id")))
    } else {
        form.querySelector(".backoffice-delbtn").classList.add("d-none")
        form.querySelector(".backoffice-editbtn").classList.add("d-none")
    }

    form.onsubmit = () => requestDataOperation(event)

}