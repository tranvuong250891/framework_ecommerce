import createEl from '../../../lib/createEl'
import Form from '../../../form/Form'
import appView from '../../app.view'
import { api } from '../../../lib/callApi'
import { pageLoadding } from '../../loadding/pageLoadding'
require('../../scss/pageproductdetail.scss')
export default async (res) => {

    res = res.response

    res.img = res.img.split(',')
    const classForm = new Form({ name: 'Form Comment', url: '/login' })
    classForm.addField({ key: 'comment', typeField: "input", label: "nhap binh luan" })
    const ctnProductDetail = createEl({ attrs: {}, classNames: ['ctn-product-detail', 'ctn'] })
    ctnProductDetail.innerHTML = `
    <div class="slide">
        <div class="img img-show" style="background-image:url('/img/${res.img[0]}')"></div>
        <div class="fl  ctn-img-detail">
            <div nameImg="${res.img[0]}" class="img-detail img" style="background-image:url('/img/${res.img[0]}')"></div>
            <div nameImg="${res.img[1]}" class="img-detail img" style="background-image:url('/img/${res.img[1]}')"></div>
            <div nameImg="${res.img[2]}" class="img-detail img" style="background-image:url('/img/${res.img[2]}')"></div>
            <div nameImg="${res.img[3]}" class="img-detail img" style="background-image:url('/img/${res.img[3]}')"></div>
            <div nameImg="${res.img[4] || res.img[0]}" class="img-detail img" style="background-image:url('/img/${res.img[4] || res.img[0]}')"></div>
        </div>
    </div>
    <div class="information-product">
        <h1>${res.name}</h1>
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
            <div class="item-1">Gia ban: </div>
            <div class="item-2">${res.price}</div>
        </div>
        <div class="option-product fl ct-r ct-c">
            <div class="item-1">
                Chon Size: 
            </div>
            <div class="item-2">
                <span>S</span><span>X</span><span>M</span><span>XL</span>
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
        <button value=" ${res.id}" class="add-cart-product fl ct-r ct-c"><span class="material-icons">add_shopping_cart</span><span>Them vao gio hang</span></button>
        
    </div>  
    <div class="content-product">
        <div class="tap-decription">
            <h1 class="name-title">Mo ta san pham</h1>
            <div class="content-product">
                ${res.content}
            </div>
        </div>
        <div class="tap-rate-customer">
            <div class="customer-comment"></div >
            <div class="show-comment ">
                <div class="comment-item fl ct-r ct-c">
                    <div class="img-detail img" style="background-image:url('/img/lienquan/valhein.jpg')"></div>
                    <div class="comment-content border">
                        <div class="comment">Day la commentasdkashdk aksh dkhaskjh dkjahskjd ashj dkashdkjkasdhkjahsjk dhjkas das kdas  cua user</div>
                        <div class="comment-date">30/12/2020</div>
                    </div>
                </div>
            </div>
        </div >
    </div >
    `
    const valueQuantityCart = ctnProductDetail.querySelector('input.value-quantity-cart')
    ctnProductDetail.querySelector('.customer-comment').appendChild(classForm.getFormEL())
    ctnProductDetail.querySelectorAll('.img-detail').forEach(img => {
        img.onclick = () => {
            const name = img.getAttribute('nameImg')
            ctnProductDetail.querySelector('.img-show').style.backgroundImage = `url('/img/${name}')`
        }
    })
    ctnProductDetail.querySelector('.btn-plus-cart').onclick = () => {
        let value = parseInt(valueQuantityCart.value)
        valueQuantityCart.value = (value < 2 || isNaN(value)) ? 1 : --value
    }
    ctnProductDetail.querySelector('.btn-minus-cart').onclick = () => {
        ++valueQuantityCart.value
    }
    valueQuantityCart.onblur = () => {
        let value = parseInt(valueQuantityCart.value)

        valueQuantityCart.value = (value < 1 || isNaN(value)) ? 1 : value

    }
    const btnAddCartProduct = ctnProductDetail.querySelector('.add-cart-product')
    const valueQtyProduct = ctnProductDetail.querySelector('.value-quantity-cart')
    btnAddCartProduct.onclick = async () => {


        const res = await api({
            url: '/api/cart/store',
            data: {
                id: parseInt(btnAddCartProduct.getAttribute('value')),
                qty: parseInt(valueQtyProduct.value)
            }
        })
        appView({ data: ctnProductDetail })

    }



    return ctnProductDetail
}