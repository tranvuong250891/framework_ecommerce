import html from '../lib/html'
import app from '../views/app.view'
import createEl from '../lib/createEl'
import Form from '../form/Form'
import { api } from '../lib/callApi'
import pageProductDetail from '../views/components/product/pageProductDetail'
import { loadding } from '../views/loadding/loadding'
import { pageLoadding } from '../views/loadding/pageLoadding'
import { delay } from '../lib/delay'

export const ProductDetailController = async (params) => {

    const res = await api({
        url: '/api/product/detail',
        data: { id: params.get('product_id') }
    })
    app({ data: delay(pageProductDetail(res)) })
    return 'TestController'
}
