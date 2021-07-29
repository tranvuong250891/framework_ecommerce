import { api } from "../../../lib/callApi"
import createEl from "../../../lib/createEl"
import appView from "../../app.view"
import { loadCart } from "../../loadding/loadCart"
import redirect from '../../../lib/redirect'

import { CartView } from "./cart.view"
import { delay } from "../../../lib/delay"

const handdleCartQty = async (qty, id) => {
    let res = await api({
        url: '/api/cart/update',
        data: { id: id, qty: qty }
    })
    await appView({ data: delay(CartView(res.response), 0) })
}

export const quantity = (qty, id) => {


    const quantity = createEl({ classNames: ['cart-qty'] })
    quantity.innerHTML = `
        <button class="btn-minus-cart"> - </button>
        <input type="text" class="" value="${qty}"/>
        <button class="btn-plus-cart">+</button>`
    const valueQuantityCart = quantity.querySelector('input')

    quantity.querySelector('.btn-minus-cart').onclick = async () => {
        quantity.querySelector('.btn-minus-cart').style.cursor = "not-allowed"
        quantity.querySelector('.btn-plus-cart').style.cursor = "not-allowed"
        quantity.style.opacity = "0.5"
        let value = parseInt(valueQuantityCart.value)
        value = (value < 2 || isNaN(value)) ? 1 : --value
        await handdleCartQty(value, id)


    }
    quantity.querySelector('.btn-plus-cart').onclick = async () => {
        quantity.querySelector('.btn-minus-cart').style.cursor = "not-allowed"
        quantity.querySelector('.btn-plus-cart').style.cursor = "not-allowed"
        let value = parseInt(valueQuantityCart.value)
        quantity.style.opacity = "0.5"
        quantity.style.cursor = "not-allowed"
        value = value + 1
        await handdleCartQty(value, id)

    }

    valueQuantityCart.onblur = () => {
        quantity.style.opacity = "0.5"
        quantity.style.cursor = "not-allowed"
        let value = parseInt(valueQuantityCart.value)
        valueQuantityCart.value = (value < 1 || isNaN(value)) ? 1 : value
        handdleCartQty(parseInt(valueQuantityCart.value), id)
    }



    return quantity
}