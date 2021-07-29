import createEl from "../../lib/createEl"
import { SlideView } from "../slide"
import { api } from '../../lib/callApi'
import { CategoryNewsView } from "../news/category.news.view"
import { delay } from "../../lib/delay"
require('./scss/home.scss')

export const HomeView = async () => {

    const categoryNews = await api({
        url: '/news',
        data: { news: { action: "category", } }
    })

    const categoryProduct = await api({
        url: '/product',
        data: { product: { action: 'category' } }
    })

    const El = createEl({ classNames: ['ctn-news'] })
    El.id = "news"
    El.innerHTML = `
        <div class="slide-news">
            <h1>Tin Moi Nhat Trong Ngay</h1>
            <div class="slide-banner-1 " >
                <div class="img-banner" style="background-image: url('/img/panner/panner6.jpg')"></div>
            </div>
            <div class="slide-banner-2" >
                <div class="img-banner" style="background-image: url('/img/panner/panner7.jpg')"></div>
            </div>
        </div>
        <div class="ctn-category-news">
            <h1 class="">danh muc tin tuc</h1>
        </div>
        <div class="ctn-category-product">
            <h1 class="">Danh muc san pham</h1>
        </div>
    `
    categoryNews.response.forEach(category => {
        // console.log(category)
        El.querySelector('.ctn-category-news').appendChild(CategoryNewsView({
            ...category,
            url: '/news?category='
        }))
    });

    console.log(categoryProduct.response)
    categoryProduct.response.forEach(category => {
        El.querySelector('.ctn-category-product').appendChild(CategoryNewsView({
            ...category,
            url: '/product?category='
        }))
    })

    El.querySelector('.slide-news').appendChild(SlideView())

    return delay(El, 1000)

}