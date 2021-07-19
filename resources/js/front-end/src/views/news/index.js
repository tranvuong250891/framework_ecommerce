import createEl from "../../lib/createEl"
import { CategoryTemplate } from "../../template/category"
import { SlideView } from "../slide"
import { api } from '../../lib/callApi'
import { CategoryNewsView } from "./Category.news.view"
require('./news.scss')


export const NewsView = async () => {

    const res = await api({ url: '/api/news/category' })

    const El = createEl({ classNames: ['ctn-news'] })
    El.id = "news"
    El.innerHTML = `
        <div class="slide-news">
            <h1>Tin Moi Nhat Trong Ngay</h1>
            <div class="slide-banner-1 " >
                <div class="img-banner" style="background-image: url('/img/laptop1.jpg')"></div>
            </div>
            <div class="slide-banner-2" >
                <div class="img-banner" style="background-image: url('/img/laptop3.jpg')"></div>
            </div>
        </div>
        
        <div class="ctn-category">
            <h1 class="">danh muc</h1>
        </div>
    `
    console.log(res.response)

    res.response.forEach(category => {
        El.querySelector('.ctn-category').appendChild(CategoryNewsView(category))
    });

    El.querySelector('.slide-news').appendChild(SlideView())

    return El
}