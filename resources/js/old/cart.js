let countCart = document.querySelector('.number-cart');
let ctnCart = document.querySelector('.ctn-cart');
let btnOrderCart = document.querySelector('.btn-order-cart')
let formOrder = document.querySelector('.form-order-cart')
let showEditCart = document.querySelector('.show-edit-cart')
let navCart = document.querySelector('#navbar .cart');

function startCart() {
    api('/api/cart/show', {}, callbackCart, 'post')
}

startCart();

function callbackCart(res) {
    // console.log(res)
    res = JSON.parse(res)
    res = res.response

    let count = 0;
    let html = ``;
    Object.values(res).forEach(cartId => {
        count += cartId.qty
        if (cartId['id']) {
            let img_id = cartId.img.split(",");
            html += `<div class="  cart-item" href="">
        <div class="img" style="background-image: url('/img/${img_id[0]}');"></div>
        <div class="price">${cartId.price} x ${cartId.qty}</div>
        <button value="" onclick="btnDeleteCart(${cartId.id})" class="btn-delete-cart">xoa</button>
        <a class="name-product">${cartId.name} </a>
        
    </div>`
        }
    });
    html = (html) || "<h1>ban chua co mat hang nao trong gio hang <h1>"
        // console.log(count);
    ctnCart.innerHTML = html + `<button onclick="btnOrder()" class="btn-order-cart">thanh toan</button>`
    countCart.innerHTML = count
}

function addOneCart(id) {
    // console.log(id)
    api('/api/cart/store', { id: id }, callbackCart, 'post')

}

function btnDeleteCart(id) {
    api('/api/cart/delete', { id: id }, callbackCart)
}

function btnOrder() {
    ctnCart.style.display = 'none'
    formOrder.style.display = 'block'
}

showEditCart.onclick = function() {
    ctnCart.style.display = 'block'
    formOrder.style.display = 'none'
}

btnOrderCart.onclick = function() {
    form(formOrder, '/api/order/index', {}, callbackOrder)
    api('/api/cart/show', {}, callbackCart, 'post')
}


function callbackOrder(res) {
    console.log(res)
    res = JSON.parse(res)
    if (res.response == 'cart null') {
        confirmModal({
            confirmTrue: () => {
                document.querySelector('#confirm-modal').style.display = 'none';
            },
            title: 'Thong bao Cart',
            content: 'Gio hang cua ban rong moi ban tiep tuc mua hang'
        })
        ctnCart.parentElement.classList.remove('modal');
        ctnCart.parentElement.style.display = 'none';
    } else if (res.code == 200) {
        confirmModal({
            confirmTrue: () => {
                document.querySelector('#confirm-modal').style.display = 'none';
            },
            title: 'Thong bao Cart',
            content: 'Don hang da duoc goi chung toi se lien he ngay'
        })
    }

}

navCart.onclick = function() {
    ctnCart.parentElement.classList.add('modal')
    ctnCart.parentElement.style.display = 'block';
}

ctnCart.parentElement.onclick = function(event) {
    event.stopPropagation()
    if (event.target == ctnCart.parentElement) {
        ctnCart.parentElement.classList.remove('modal');
        ctnCart.parentElement.style.display = 'none';
    }

}