import api from '../../../lib/callApi'
import '../../scss/productdetail.scss'




export const productdetail = ({ price, title, name, comment, star, option, img }) => {

    img = img && img.split(',') || ''
    const html = `
        <div id="product-detail" class="fl col">
            <div class="img-bg" style=" background-image: url('/img/${img[0]}');"></div>
            <span class="label tragop">tra gop 0%</span>
            <div class="discount">
                <span> - 30% </span>
            </div>
            <div class="content">
                <h2 class="name">${name}</h2>
                <div class="compare">
                    <span class="label">${option && option.ram || '8G'}</span>
                    <span class="label">${option && option.ssd}</span>
                    <span class="label">${option && option.cpu}</span>
                </div>
                <div class="star">
                    <span class="item-star active">&starf;</span>
                    <span class="item-star active">&starf;</span>
                    <span class="item-star">&starf;</span>
                    <span class="item-star">&starf;</span>
                    <span class="item-star">&starf;</span>
                    <span> (12 danh gia)</span> <span> (12 danh comment)</span>
                </div>
                <h3>${price}<sup sup ></sup> đ</h3 >
            </div >
        </div >
    `

    return html
}