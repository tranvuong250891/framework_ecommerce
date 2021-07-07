const elProductDetail = document.querySelector('#product-detail')
let slide = elProductDetail.querySelector('.slide')
let elShowImg = slide.querySelector('.ctn-show-img')
let imgsDetail = slide.querySelectorAll('.img-detail')
let elContentProduct = elProductDetail.querySelector('.content')
let elNameProduct = elContentProduct.querySelector('.name h1')
let elPriceProduct = elContentProduct.querySelector('.price h1')
let elDecriptionProduct = elContentProduct.querySelector('.decription .ctn-content')
let btnAddQty = elContentProduct.querySelector('.btn-add')
let btnMinusQty = elContentProduct.querySelector('.btn-minus')
let ipQty = elContentProduct.querySelector('.value-qty')
let btnAddCart = elContentProduct.querySelector('.btn-add-cart-detail')

let url = '/api/product/detail'
let path = window.location.pathname.replace('/', '')
let title = document.querySelector('title')

ipQty.value = parseInt(ipQty.value)
console.log(typeof parseInt(ipQty.value))
api(url, { path: path }, callbackProductDetail)


function callbackProductDetail(res) {
    // console.log(elNameProduct)
    res = JSON.parse(res).response
    elNameProduct.innerHTML = res.name
    elPriceProduct.innerHTML = res.price
    elDecriptionProduct.innerHTML = res.content
    btnAddCart.value = res.id
    imgsDetail.forEach((img, id) => {
        imgName = res.img.split(',')[id]
        img.setAttribute('name', imgName)
        img.style = `background-image: url('/img/${imgName}');`

        img.onclick = () => {
            nameImg = img.getAttribute('name')
            console.log()
            elShowImg.innerHTML = `<div class = "show-img img" style="background-image: url('/img/${nameImg}');"</div>`;

        }
    })

}

function setValueInput() {
    ipQty.value = parseInt(ipQty.value)
    if (ipQty.value > 1) {
        ipQty.value = parseInt(ipQty.value)
    } else {
        ipQty.value = 1
    }
}

btnAddQty.onclick = () => {
    ipQty.value = parseInt(ipQty.value)
    if (ipQty.value >= 1) {
        ipQty.value = parseInt(ipQty.value) + 1
    } else {
        ipQty.value = 1
    }

}
btnMinusQty.onclick = () => {
    ipQty.value = parseInt(ipQty.value)
    if (ipQty.value > 1) {
        ipQty.value = parseInt(ipQty.value) - 1
    } else {
        ipQty.value = 1
    }
}
ipQty.onblur = setValueInput


btnAddCart.onclick = () => {
    setValueInput()
    id = btnAddCart.value
    qty = ipQty.value
    console.log(qty)
    api('/api/cart/store', { id: id, qty: qty }, callbackCart, 'post')
    confirmModal({
        title: 'Thong bao cho cart',
        content: 'Them vao gio hang thanh cong'
    })
}