import * as module from '../modules/api.js'
import * as helper from '../modules/helper.js'
const productrow = document.querySelector('.productrow')

// $(document).ready(function() {
//     $("button").hide();
// });

const populateProductPage = async() => {
    let products = await module.getData()
    productrow.innerHTML += [...products].map((product) => {
        return `<div class="col-12 col-md-4 mt-4">
        <div class="card d-flex">
            <img src="${product.imageUrl}" class="card-img-top mx-auto" alt="..." style="max-width:216px;max-height:162px">
            <div class="card-body p-1 px-3">
                <h5 class="card-title">${product.brand} ${product.name}</h5>
                <p class="card-text">${product.description}</p>
                <a href="#" class="btn btn-outline-success float-right">Buy for ${helper.formatter.format(parseFloat(product.price))}</a>
            </div>
        </div>
    </div>`
    }).join("")
}

window.onload = () => {
    populateProductPage()



}