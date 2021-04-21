import * as module from '../modules/api.js'
import * as helper from '../modules/helper.js'
const productrow = document.querySelector('.productrow')


const populateProductPage = async() => {
    let products = await module.getData()
    productrow.innerHTML += [...products].map((product) => {
        return `<div class="col-4 mt-2">
        <div class="card">
            <img src="${product.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.brand} ${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <a href="#" class="btn btn-primary">Buy for ${helper.formatter.format(parseFloat(product.price))}</a>
            </div>
        </div>
    </div>`
    }).join("")
}

window.onload = () => {
    populateProductPage()

}