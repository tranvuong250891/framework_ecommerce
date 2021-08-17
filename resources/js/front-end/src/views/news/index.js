import createEl from "../../lib/createEl"
import { ShowNewsView } from "./show.news.view"
import { HeaderNewsView } from './header.news.view'
import { delay } from "../../lib/delay"
import { api } from "../../lib/callApi"
require('./scss/news.scss')


export const NewsView = async (id) => {
    // console.log(id)
    const El = createEl({ classNames: ['news'] })
    El.id = "news"
    El.innerHTML = `
        <div class="ctn-news">
            <div class="show-news-item"> 
            </div>
        </div>
    `
    const res = await api({
        url: '/newsdetail',
        data: {
            news: {
                filter: { news_top: 1 },
                options: { "limit": 1, "sort": { "_id": 1 } }
            }
        }
    })

    El.querySelector('.ctn-news').insertBefore(await HeaderNewsView(res.response), El.querySelector('.show-news-item'))

    El.querySelector('.show-news-item').appendChild(await ShowNewsView({ _id: id }))

    return delay(El, 100)
}