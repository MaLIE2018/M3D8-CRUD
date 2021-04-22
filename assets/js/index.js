import * as api from '../modules/api.js'
import * as helper from '../modules/helper.js'
const productrow = document.querySelector('.productrow')


const populateProductPage = async() => {
    let products = await api.getData(api.endpoint)
    if (products) {
        productrow.querySelector(".table tbody").innerHTML += [...products].map((product) => {
            return `<tr class="">
                        <th scope="row"><a href="backoffice.html?id=${product._id}">${product._id}</a></th>
                        <td><img src="${product.imageUrl}" alt="" class="img-fluid" style="height: 50px;"></td>
                        <td>${product.name}</td>
                        <td>${product.description}</td>
                        <td>${product.brand}</td>
                        <td>${helper.formatter.format(parseFloat(product.price))}</td>
                    </tr>`
        }).join("")
        document.querySelector(".spinner-border").classList.add("d-none")
    }
}

window.onload = () => {
    populateProductPage()
}