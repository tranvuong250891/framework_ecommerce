import Form from "../../../form/Form"
import { api } from "../../../lib/callApi"
import createEl from "../../../lib/createEl"
import redirect from "../../../lib/redirect"
import appView from "../../app.view"
import { ChooseEl } from "../../templates/choose.view"
import { ModalEl } from "../../templates/modal/modal.view"
import { cartdetail } from "./cartdetail.view"
require('../../scss/cart.scss')

const callbackCart = async (res) => {
    res = await res
    if (res.code === 200) {
        document.querySelector('.ctn-cart').appendChild(ModalEl({
            name: 'Thong ban gio hang',
            content: "Ban da mua hang thanh chung toi se lien he ban trong it phut!!!",
            cancel: () => { redirect('product') },
            confirm: () => { redirect('product') }
        }))
    }
}

export const CartView = async (carts) => {
    carts = Object.values(carts) ?? false
    const Cart = createEl({ classNames: ['ctn-cart'] })
    console.log(!carts.length)
    if (!carts.length) {
        return Cart.appendChild(ModalEl({
            name: 'Thong bao Cho Gio Hang',
            content: 'khong co hang nao trong gio hang xin quay lai mua hang!!!',
            cancel: () => { redirect('product') },
            confirm: () => { redirect('product') }

        }))
    }
    const priceTotal = carts.length ? carts.map(cart => cart.qty * cart.price)
        .reduce((acc, price) => acc + price) : 0
    const formCart = new Form({ url: '/api/order/insert', callbackApi: callbackCart })
    formCart.addField({ key: 'name', typeField: 'input', label: 'Nhap Ten', classNames: ['name'] })
    formCart.addField({ key: 'addr', typeField: 'input', label: 'Nhap Dia Chi', classNames: ['addr'] })
    formCart.addField({ key: 'phone', typeField: 'input', label: 'So Dien Thoai', classNames: ['phone'] })
    formCart.addField({ key: 'note', typeField: 'input', label: 'Ghi Chu', classNames: ['note'] })
    const formCartEl = formCart.getFormEL()
    const btnSubmit = formCartEl.querySelector('.btn-submit')
    formCartEl.querySelector('.btn-submit').remove()
    Cart.innerHTML = `
        <div class="information-customer">
            <div class="header"></div>
            <h3 class="name-title"><span class="material-icons">room</span>Dia Chi nhan hang </h3>
            <div class="ctn-addr-customer fl">
            </div>
        </div>
        <div class="ctn-product-customer">
            <h3 class="name-title">San pham</h3>
        </div>
        <div class="order-customer">
            <h3 class="name-title">Phuong thuc thanh toan</h3>
            <div class="payment-customer">
            </div>
            <div class="ctn-price-payment">
                <div class="total-price item ">
                    <div>Tong tien hang:</div>
                    <div><sup>đ</sup>  ${priceTotal}</div>
                </div>
                <div class="transport-price item ">
                    <div>Tien Van chuyen:</div>
                    <div><sup>đ</sup>30000</div>
                </div>
                <hr>
                <div class="total-price-payment item ">
                    <div>Tong Thanh Toan:</div>
                    <div class="hightlight"><sup>đ</sup>  ${priceTotal + 30000}</div>
                </div>
            </div>
        </div>`

    carts.forEach(cart => { Cart.querySelector('.ctn-product-customer').appendChild(cartdetail(cart))})
    Cart.querySelector('.order-customer').appendChild(btnSubmit)
    Cart.querySelector('.ctn-addr-customer').appendChild(formCartEl)
    Cart.querySelector('.payment-customer').append(
        ChooseEl({ text: 'thanh toan COD' }),
        ChooseEl({ text: 'thanh toan MoMo' }),
        ChooseEl({ text: 'thanh toan Ngan Hang' }),
    )
    return Cart
}