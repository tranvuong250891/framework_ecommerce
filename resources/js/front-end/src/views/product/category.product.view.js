import { api } from "../../lib/callApi"
import createEl from "../../lib/createEl"
import { DetailProductView } from "./detail.product.view"
require('./scss/category-product.scss')

export const CategoryProductView = async (_id) => {
    const El = createEl({ classNames: ['ctn-category-product'] })
    const res = await api({
        url: '/product/show',
        data: {
            product: {
                filter: { "matchs.product": _id }
            },
        }
    })

    let nameCategory = res.response[0].matchs.product.name_category
    // console.log(res.response)
    El.innerHTML = `
        <div class="header-category-product">
            <h1 class="name-title">${nameCategory}</h1>
        </div>
        <div class="ctn-show-product"></div>`
    const CtnShowProduct = El.querySelector('.ctn-show-product')
    res.response.forEach(product => {

        CtnShowProduct.appendChild(DetailProductView(product))
    });


    return El
}