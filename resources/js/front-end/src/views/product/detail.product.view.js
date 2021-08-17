import { concat, find } from 'lodash';
import { api } from '../../lib/callApi';
import createEl from '../../lib/createEl';
import { fetchApi } from '../../lib/fetch';
import { routerEl } from '../../router/router';
import './scss/detail-product.scss'

export const DetailProductView = ({ options, imgs, name, url, discount }) => {
    let values = [];
    let price = [];
    options.forEach(option => {
        values.push(option.types.map(type => type.value).join(' - '))
        price.push(option.price)
    });


    let html = `
                <div id="product-detail" class="fl col">
                <div class="img-bg" style=" background-image: url('${options[0].img}');"></div>
                <span class="label tragop">tra gop 0%</span>
                <div class="discount">
                <span> ${discount * 100}% </span>
                </div>
                <div class="content">
                <h2 class="name">${name}</h2>
                <div class="compare">
     ${values.map(value => `<span> ${value}</span>`)
            .reduce((acc, value) => acc + value)
        }
                </div >
                <div class="star">
                <span class="item-star active">&starf;</span>
                <span class="item-star active">&starf;</span>
                <span class="item-star">&starf;</span>
                <span class="item-star">&starf;</span>
                <span class="item-star">&starf;</span>
                <span> (12 danh gia)</span> <span> (12 danh comment)</span>
                </div>
                <h3>${price[0] + " - " + price.pop()} <sup sup ></sup> đ</h3 >
                </div >
                </div > `

    return html
}