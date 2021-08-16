import { api } from "../../../lib/callApi"
import createEl from "../../../lib/createEl"
import { html } from '../../../lib/html'
import { quantity } from "./quantity.view"
import redirect from '../../../lib/redirect'
import appView from "../../app.view"
import { CartView } from "./cart.view"
import { delay } from "../../../lib/delay"
require('./scss/cartdetail.scss')


export const cartdetail = (res) => {
    const { price, name, qty, img, _id } = res
    const cartDetailEl = createEl({ classNames: ['cart-detail'] })
    cartDetailEl.innerHTML = `
        <div class="cart-img img" style="background-image:url('${img}')"></div>
        <div class="cart-name">${name}</div>
        <div class="cart-price">${price} d</div>
        <div id="total-price-cart-detail" class="cart-total">${price * qty} d</div>
        <button class="cart-remove">xoa</button>`
    cartDetailEl.insertBefore(quantity(qty, _id['$oid']), cartDetailEl.querySelector('.cart-price'))
    cartDetailEl.querySelector('.cart-remove').onclick = async () => {
        let res = await api({
            url: '/cart/delete',
            data: { id: _id['$oid'] }
        })
        console.log(res)

        appView({ data: delay(CartView(res), 0) })
    }

    return cartDetailEl
}