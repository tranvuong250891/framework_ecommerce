let formCartContent = document.querySelector('.form-cart-content')
let ctnCartDashboard = document.querySelector('.ctn-cart-dashboard')
let modalCartDetail = document.querySelector('.ctn-cart-detail')
let contentCartDetail = document.querySelector('.content-cart-detail')
var btnModalImg = document.querySelector('.btn-modal-img')
let urlCartShow = '/api/order/show'
let urlCartDetail = '/api/order/detail'
let urlCartDelete = '/api/order/delete'

api(urlCartShow, {}, callbackOrderShow, 'post')

function callbackOrderShow(res) {

    res = JSON.parse(res)
    res = res.response
    let html = `<div class="table-12 bg-blue center">
                        <a class="stt" href="#">STT</a>
                        <a class="name col3">ten</a>
                        <a class="code">ma code</a>
                        <a class="addr col3">Dia chi</a>
                        <a class="creat_at col2">Ngay Tao</a>
                        <a class="delete">xoa</a>
                        <a class="see">chi tiet</a>
                    </div>`
    res.forEach((cart, id) => {
        // cart.img = cart.img.split(',')[0];
        html += ` <div class=" table-12 center table-cart">
                        <div class="stt" href="#">${id+1}</div>
                        <div class="name col3">${cart.name}</div>
                        <div class="code">${cart.code}</div>
                        <div class="addr col3">${cart.addr}</div>
                        <div class="creat_at col2">${cart.create_at}</div>
                        <button onclick="deleteCartDetail(${cart.code})" class="see">xoa</button>
                        <button onclick="cartDetail(${cart.code})" class="see">xem</button>
                        
                    </div>`
    })

    ctnCartDashboard.innerHTML = html
}

function cartDetail(value) {
    showModal(modalCartDetail);
    api(urlCartDetail, { code: value }, callbackCartDetail, 'post')
}

function callbackCartDetail(res) {
    console.log(res)
    res = JSON.parse(res).response.detail
    console.log(res)
    let html = `<div class="table-12 bg-blue table-cart-detail center">
    <div class="stt">stt</div>
    <div class="code col2">Ma Code</div>
    <div class="product_id col2">Ten san pham</div>
    <div class="product_img col2">anh san pham</div>
    <div class="qty">so luong</div>
    <div class="price col2">Gia</div>
    <div class="total col2">total</div>
    </div>`
    let totalPrice = 0
    res.forEach((cart, id) => {
        let img = cart.img.split(',')[0];
        let total = cart.price * cart.qty
        totalPrice += total
        html += `<div class="table-12 table-cart-detail center">
    <div class="stt">${id+1}</div>
    <div class="code col2">${cart.order_id}</div>
    <div class="product_id col2">${cart.name}</div>
    <div class="img col2"><div class="img-detail" style="background-image: url('/img/${img}');"></div></div>    
    <div class="qty">${cart.qty}</div>
    <div class="price col2">${cart.price}</div>
    <div class="total col2">${cart.price*cart.qty}</div>
    </div> <hr>`
    })
    contentCartDetail.innerHTML = html + `<div class="total-price"> Tong Gia: ${totalPrice}</div>`
}

function deleteCartDetail(code) {
    confirmModal({
        confirmTrue: () => {
            api(urlCartDelete, { code: code }, callbackCartDelete, 'post')
            document.querySelector('#confirm-modal').style.display = 'none';

        },
        title: 'day la thong bao test',
        content: ` Ban co muon xoa Ma Hang <span style="color: red;">(${code})<span>`

    });
}

function callbackCartDelete(res) {
    api(urlCartShow, {}, callbackOrderShow, 'post')

}