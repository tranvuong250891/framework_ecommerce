import { api } from '../lib/callApi'
import createEl from '../lib/createEl'
import app from '../views/app.view'
import { productdetail } from '../views/components/product/productdetail'
import { loadding } from '../views/loadding/loadding'
import '../views/scss/content.scss'
import { pageLoadding } from '../views/loadding/pageLoadding'

export const ProductController = async () => {
    const ctnProduct = createEl({ classNames: ['ctn-product'] })
    loadding(ctnProduct)
    app({ data: pageLoadding() })
    const res = await api({ url: '/api/product/show' })
    ctnProduct.innerHTML = `<h1 class="name-title">Danh muc san pham</h1>
        ${res.response
            .map(product => productdetail({ ...product }))
            .reduce((firstProduct, product) => firstProduct + product)}`
    await app({ data: ctnProduct })
    document.querySelector('#sidebar .product div').classList.add('font-active')
    return 'ProductController'
}