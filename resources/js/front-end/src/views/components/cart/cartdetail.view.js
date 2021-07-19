import { api } from "../../../lib/callApi"
import createEl from "../../../lib/createEl"
import { html } from '../../../lib/html'
import { quantity } from "./quantity.view"
import redirect from '../../../lib/redirect'
require('./cartdetail.scss')


export const cartdetail = ({ price, name, qty, img, id }) => {
    // console.log(name, qty, price)
    img = img.split(',')[0]
    const cartDetailEl = createEl({ classNames: ['cart-detail'] })
    cartDetailEl.innerHTML = `
        <div class="cart-img img" style="background-image:url('/img/${img}')"></div>
        <div class="cart-name">${name}</div>
        <div class="cart-price">${price} d</div>
        <div id="total-price-cart-detail" class="cart-total">${price * qty} d</div>
        <button class="cart-remove">xoa</button>`
    cartDetailEl.insertBefore(quantity(qty, id), cartDetailEl.querySelector('.cart-price'))
    cartDetailEl.querySelector('.cart-remove').onclick = () => {
        api({
            url: '/api/cart/delete',
            data: { id: id }
        })

        redirect('/cart')
    }

    return cartDetailEl
}