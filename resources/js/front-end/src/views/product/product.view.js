import createEl from "../../lib/createEl"
import { delay } from "../../lib/delay"
import { pageLoadding } from "../loadding/pageLoadding"
import { CategoryProductView } from "./category.product.view"
import { FilterProductView } from "./filter.product.view"
require('./scss/product.scss')

export const ProductView = async (filter) => {
    const { categoryId, filterOptions, categoryName } = filter
    const El = createEl({ classNames: ['ctn-product'] })
    El.innerHTML = `
        <div class="ctn-filter-product">
            <h1>Loc san pham</h1>
        </div>
        <div class="ctn-show-product-detail">
            
        </div>
    `
    El.querySelector('.ctn-filter-product').appendChild(await FilterProductView(filter))

    const btnSubmit = El.querySelector('.btn-filter-product')
    const selectAll = El.querySelectorAll('select')


    btnSubmit.onclick = async () => {
        btnSubmit.style.display = "none"
        await getvalueAll()
        btnSubmit.style.display = ""
    }

    const getvalueAll = async () => {
        let data = []
        selectAll.forEach(select => {
            select.value && data.push(select.value)
        })
        El.querySelector('.ctn-show-product-detail').innerHTML = ``
        El.querySelector('.ctn-show-product-detail').appendChild(pageLoadding())
        El.querySelector('.ctn-show-product-detail').appendChild(await CategoryProductView({
            optionIds: data,
            categoryName: categoryName,
            categoryId: categoryId
        }))
        El.querySelector('.container').remove()

    }
    getvalueAll()


    return El
}