import Form from "../../../form/Form"
import createEl from "../../../lib/createEl"
import redirect from "../../../lib/redirect"
import { ChooseEl } from "../../templates/choose.view"
import { ModalEl } from "../../templates/modal/modal.view"
import { cartdetail } from "./cartdetail.view"
require('./scss/cart.scss')

const callbackCart = async (res) => {
    console.log(res)

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

    const Cart = createEl({ classNames: ['ctn-cart'] })
    // console.log(!carts.length)
    if (carts.count <= 0) {
        return Cart.appendChild(ModalEl({
            name: 'Thong bao Cho Gio Hang',
            content: 'khong co hang nao trong gio hang xin quay lai mua hang!!!',
            code: 0,
            cancel: () => { redirect('/home') },
            confirm: () => { redirect('/home') }

        }))
    }
    carts = Object.values(carts) ?? false
    // const priceTotal = carts.length ? carts.map(cart => cart.qty * cart.price)
    //     .reduce((acc, price) => acc + price) : 0
    // console.log(carts)
    const formCart = new Form({ url: '/cart/insert', callbackApi: callbackCart })
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
                    <div class="show-price-total"><sup>đ</sup>  </div>
                </div>
                <div class="transport-price item ">
                    <div>Tien Van chuyen:</div>
                    <div><sup>đ</sup>30000</div>
                </div>
                <hr>
                <div class="total-price-payment item ">
                    <div>Tong Thanh Toan:</div>
                    <div class="hightlight"><sup>đ</sup> </div>
                </div>
            </div>
        </div>`
    let totalPrice = 0;
    carts.forEach(cart => {
        if ((typeof cart) === 'object') {
            Cart.querySelector('.ctn-product-customer').appendChild(cartdetail(cart))
            totalPrice += (cart.qty * cart.price)
            // console.log(totalPrice, (cart.qty * cart.price))
        }
    })
    Cart.querySelector('.order-customer').appendChild(btnSubmit)
    Cart.querySelector('.ctn-addr-customer').appendChild(formCartEl)
    Cart.querySelector('.payment-customer').append(
        ChooseEl({ text: 'thanh toan COD' }),
        ChooseEl({ text: 'thanh toan MoMo' }),
        ChooseEl({ text: 'thanh toan Ngan Hang' }),
    )
    Cart.querySelector('.total-price-payment .hightlight').innerHTML += `${totalPrice + 30000}`
    Cart.querySelector('.show-price-total').innerHTML += `${totalPrice}`
    return Cart
}