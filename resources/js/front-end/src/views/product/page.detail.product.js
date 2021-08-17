import createEl from '../../lib/createEl'
import Form from '../../form/Form'
import appView from '../app.view'
import { api } from '../../lib/callApi'
import { delay } from "../../lib/delay"
import { ChooseEl } from '../templates/choose.view'
import { SlideLibView } from '../lib/slide.lib.view'
import { groupType } from '../../lib/groupType'
import { fetchApi } from '../../lib/fetch'
import { ModalEl } from '../templates/modal/modal.view'
import redirect from '../../lib/redirect'
require('./scss/pageproductdetail.scss')
export const PageProductDetailView = async (res) => {
    const El = createEl({ classNames: ['ctn-product-detail'] })
    let { discount, img, options, name, content, type } = res
    let price = [], optionType = [], chooseOptions = [], idOption = []
    // console.log(res)
    El.innerHTML = `
    <div class="slide">
    </div>
    <div class="information-product">
        <h1>${name}</h1>
        <div class="total-rate-customer fl ct-c ct-r">
            <div class="number-rate-star item-rate">
                <span class="">&starf;</span>
                <span class="">&starf;</span>
                <span class="">&starf;</span>
                <span class="">&starf;</span>
                <span class="">&starf;</span>
            </div>
            <div class="number-rate-comment item-rate">12comment</div>
            <div class="number-rate-sell item-rate">100sp da ban</div>
        </div>
        <div class="price-product fl ct-r ct-c">
            <div class="item-1">Gia ban:</div>
            <div class="item-2"></div>
        </div>
        <div class="option-product fl ct-r ct-c">
            <div class="item-1">
                Chon Option: 
            </div>
            <div class="item-2">
                
            </div>
        </div>
        <div class="quantity-product fl ct-r ct-c ">
            <div class="item-1 ">So luong: </div>
            <div class="item-2 fl ">
                <button class="btn-plus-cart"> - </button>
                <input class="value-quantity-cart" type="text" value="1">
                <button class="btn-minus-cart"> + </button>
            </div>
        </div>
        <button class="add-cart-product fl ct-r ct-c"><span class="material-icons">add_shopping_cart</span><span>Them vao gio hang</span></button>
    </div>  
    <div class="content-product">
        <div class="tap-decription">
            <h1 class="name-title">Mo ta san pham</h1>
            <div class="content-product">
                ${content}
            </div>
        </div>
        
    </div >`

    const btnAddCartEl = El.querySelector('.add-cart-product')
    const chooseEl = El.querySelector('.information-product .option-product .item-2')
    const priceEl = El.querySelector('.price-product .item-2')
    const slideEl = El.querySelector('.slide')
    const contentEl = El.querySelector('.content-product .content-product')
    const callbackChoose = () => {
        selectChoose.forEach((choose, index) => {
            if (choose.className === 'choose active-span') {
                priceEl.innerHTML = price[index]
                slideEl.querySelector('.img-show').style.backgroundImage = `url("${options[index].img}")`;
                btnAddCartEl.value = options[index]._id['$oid']
            }
        })
    }
    options.forEach(option => {
        img.push(option.img)
        chooseEl.appendChild(ChooseEl({
            text: option.type.map(type => type.value).join(" - "),
            callbackChoose: callbackChoose
        }))
        price.push(option.price)
        type.push(...option.type)


    })

    contentEl.innerHTML += ` <h3>Thong tin chi tiet</h3>${groupType(type)}`

    const selectChoose = chooseEl.querySelectorAll('.choose')
    const valueQuantityCart = El.querySelector('input.value-quantity-cart')
    slideEl.appendChild(SlideLibView(img))
    El.querySelector('.btn-plus-cart').onclick = () => {
        let value = parseInt(valueQuantityCart.value)
        valueQuantityCart.value = (value < 2 || isNaN(value)) ? 1 : --value
    }
    El.querySelector('.btn-minus-cart').onclick = () => {
        ++valueQuantityCart.value
    }
    valueQuantityCart.onblur = () => {
        let value = parseInt(valueQuantityCart.value)
        valueQuantityCart.value = (value < 1 || isNaN(value)) ? 1 : value

    }


    btnAddCartEl.onclick = async (e) => {
        let res = await fetchApi({
            url: '/cart/store',
            data: {
                id: btnAddCartEl.value,
                qty: parseInt(valueQuantityCart.value)
            }

        })
        res = JSON.parse(res)
        if (res.code === 0) {
            ModalEl({ code: 0, name: 'THONG BAO GIO HANG RONG', content: 'ban chua chon option' });
        } else {
            ModalEl({ name: 'THONG BAO GIO HANG', content: `Them Sp ${name} Thanh Cong` })
            redirect()

        }
        console.log(res)
    }


    return El
}