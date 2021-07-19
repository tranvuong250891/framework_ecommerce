import html from '../lib/html'
import app from '../views/app.view'
import createEl from '../lib/createEl'
import Form from '../form/Form'
import { api } from '../lib/callApi'
import pageProductDetail from '../views/components/product/pageProductDetail'
import { loadding } from '../views/loadding/loadding'
import { pageLoadding } from '../views/loadding/pageLoadding'

export const ProductDetailController = async (params) => {
    app({ data: pageLoadding() })
    const res = await api({
        url: '/api/product/detail',
        data: { id: params.get('product_id') }
    })
    app({ data: pageProductDetail(res) })
    return 'TestController'
}
