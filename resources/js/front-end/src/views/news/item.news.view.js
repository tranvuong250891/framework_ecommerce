import createEl from "../../lib/createEl"
import { delay } from "../../lib/delay"
import { api } from '../../lib/callApi'
require('./scss/item-news.scss')


export const ItemNewsView = async ({ filter = {}, limit = 3, sort = '_id', skip = 1 }) => {
    const El = createEl({ classNames: ['ctn-item-news'] })
    // console.log(skip)
    let res = await api({
        url: '/news',
        data: {
            news: {
                action: 'details',
                filter: filter,
                options: { limit: limit, sort: { "_id": 1 }, skip: (skip - 1) * limit }
            },
        },
    })


    res.response.forEach(item => {
        const ElItem = createEl({ classNames: ['item-news'] })
        const { img, description, title, path, create_at } = item;
        const dateNews = new Date(create_at)
        ElItem.innerHTML = `
        <div class="img-news " style="background-image: url('${img}')">
            <div class="background-gradient"></div>
        </div>
        <div class="content-news">
            <div class="title-news"> <a url="/${path}">${title}</a></div>
            <div class="date-news">${dateNews}</div>
            <div class="views-news">so views</div>
            <div class="description-news">
                ${description} ...
            </div>
        </div>`
        El.appendChild(ElItem);
    });


    return El
}