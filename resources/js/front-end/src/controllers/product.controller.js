import { api } from '../lib/callApi'
import createEl from '../lib/createEl'
import app from '../views/app.view'
import { loadding } from '../views/loadding/loadding'
import '../views/scss/content.scss'
import { pageLoadding } from '../views/loadding/pageLoadding'
import { delay } from '../lib/delay'
import { CategoryProductView } from '../views/product/category.product.view'

export const ProductController = async (params) => {
    const catygory = params.get('category')

    catygory && await app({ data: delay(CategoryProductView(catygory), 0) })


    // const ctnProduct = createEl({ classNames: ['ctn-product'] })
    // const res = await api({ url: '/product' })
    // const products = []
    // res.response.forEach(product => {
    //     product.options.forEach(prod => {
    //         product.option = prod
    //         products.push(productdetail({ ...product }))
    //     })
    // });
    // ctnProduct.innerHTML = `<h1 class="name-title">Danh muc san pham</h1>
    //     ${products.reduce((acc, prod) => acc + prod)}`
    // await app({ data: delay(ctnProduct) })
    // document.querySelector('#sidebar .product div').classList.add('font-active')
    return 'ProductController'
}