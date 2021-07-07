import { first } from 'lodash'
import html from '../lib/html'
import app from '../views/app.view'
import { productdetail } from '../views/components/product/productdetail'
import '../views/scss/content.scss'


const api = async () => {
    const res = await fetch('/api/product/show', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify()
    })
    return res.json()

}

const data = { ram: '8GB', cpu: "core5" }


// (api().then(res => { return console.log(res) }))

export const ProductController = async () => {
    const res = await api()

    const test = res.response.reduce((data, product) => {
        data = typeof data === 'object' ? productdetail(data) : data
        return productdetail(product) + data
    })


    app({ data: test })

    document.querySelector('#sidebar .product div').classList.add('font-active')

    return 'ProductController'
}