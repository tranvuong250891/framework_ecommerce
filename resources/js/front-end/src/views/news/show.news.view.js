import createEl from "../../lib/createEl"
import { ItemNewsView } from "./item.news.view"
import { api } from '../../lib/callApi'
import { pageLoadding } from "../loadding/pageLoadding"
import { delay } from "../../lib/delay"
import { PaginationLibView } from "../lib/pagination.lib.view"
require('./scss/show-news-view.scss')

export const ShowNewsView = async ({ _id }) => {
    const El = createEl({ classNames: ['ctn-show-detail-news'] })
    El.innerHTML = ` <div class="ctn-detail-news">
            <div class="header">
                <h1 class="name-title">Tim kiem: </h1>
                <select >
                    <option value="" >tac ca</option>
                </select>
            </div>
            <hr>
            <div class="ctn-pagination"></div>
        </div>
        <div class="ctn-right-news">
        </div>`
    const ctnDetailNews = El.querySelector('.ctn-detail-news')
    const optionNews = ctnDetailNews.querySelector('select')
    let categories = await api({ url: '/news', data: { news: { action: "category", } } })
    categories.response.forEach(typeNews => {
        optionNews.innerHTML += `<option value="${typeNews._id['$oid']}">${typeNews.name_category}</option>`
    })
    optionNews.value = _id ?? ''
    let filter = optionNews.value ? { "matchs.news": optionNews.value } : {}
    const changeEl = async (props) => {
        const { filter, skip } = props
        const ctnPagination = ctnDetailNews.querySelector('.ctn-pagination')
        ctnDetailNews.querySelector('.ctn-item-news') && ctnDetailNews.querySelector('.ctn-item-news').remove()
        ctnDetailNews.insertBefore(pageLoadding(), ctnPagination)
        const itemNewsViewEl = await ItemNewsView(props)
        const ctnItemNews = ctnDetailNews.querySelector('.ctn-item-news')
        const optionNews = ctnDetailNews.querySelector('select')
        ctnDetailNews.insertBefore(itemNewsViewEl, ctnPagination)
        ctnItemNews && ctnItemNews.remove()
        ctnDetailNews.querySelector(".container").remove()
        let count = await api({ url: "/news", data: { news: { action: "count", filter: filter } } })
        ctnPagination.innerHTML = ``
        ctnPagination.appendChild(PaginationLibView({
            count: Math.ceil(count.response / 3),
            dataType: optionNews.value ?? '',
            skip: skip,
            clickCallback: clickCallback
        }))
    }
    const clickCallback = (value, typeNews) => {
        // console.log(typeNews)
        let filter = optionNews.value ? { "matchs.news": optionNews.value } : {}
        changeEl({ skip: value, filter: filter })
    }
    optionNews.onclick = async () => {
        let filter = optionNews.value ? { "matchs.news": optionNews.value } : {}
        await changeEl({ filter: filter, skip: 1 })
    }
    changeEl({ filter: filter })
    return El
}