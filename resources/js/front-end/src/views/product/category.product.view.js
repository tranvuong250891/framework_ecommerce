import createEl from "../../lib/createEl"
import { fetchApi } from "../../lib/fetch"
import { routerEl } from "../../router/router"
import { DetailProductView } from "./detail.product.view"
require('./scss/category-product.scss')

export const CategoryProductView = async ({ categoryId, categoryName, optionIds }) => {
    const El = createEl({ classNames: ['ctn-category-product'] })
    El.innerHTML = `
        <div class="header-category-product">
            <h1 class="name-title">${categoryName}</h1>
        </div>
        <div class="ctn-show-product"> </div > `
    let res = await fetchApi({
        url: "/product",
        data: {
            method: "filterProduct",
            filter: { optionId: optionIds, categoryId: [categoryId] },
            action: "option",
        }
    })
    res = JSON.parse(res)
    const products = res.response

    for (const product of products) {
        const url = await fetchApi({
            url: '/product',
            data: {
                method: "find",
                action: "url",
                filter: { _id: product.url['$oid'] },
            }
        })
        const nameUrl = JSON.parse(url).response[0].nameUrl
        let router = routerEl(nameUrl)
        router.innerHTML = DetailProductView(product)
        El.querySelector('.ctn-show-product').appendChild(router)
    }

    return El
}