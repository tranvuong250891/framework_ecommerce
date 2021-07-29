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
                <select name="cars" id="cars">
                    <option value="" >tac ca</option>
                </select>
            </div>
            <hr>
            <div class="ctn-pagination"></div>
        </div>
        <div class="ctn-right-news">
        </div>`
    const ctnDetailNews = El.querySelector('.ctn-detail-news')
    const ctnPagination = ctnDetailNews.querySelector('.ctn-pagination')
    const optionNews = ctnDetailNews.querySelector('select')

    let categories = await api({ url: '/news', data: { news: { action: "category", } } })
    categories.response.forEach(typeNews => {
        optionNews.innerHTML += `<option value="${typeNews._id['$oid']}">${typeNews.name_category}</option>`

    })

    optionNews.value = _id ?? ''
    let filter = optionNews.value ? { "matchs.news": optionNews.value } : {}

    const changeEl = async (props) => {

        let ctnItemNews = ctnDetailNews.querySelector('.ctn-item-news')
        ctnItemNews && ctnItemNews.remove()
        ctnDetailNews.insertBefore(pageLoadding(), ctnPagination)
        ctnDetailNews.insertBefore(await ItemNewsView(props), ctnPagination)
        ctnDetailNews.querySelector(".container").remove()
    }

    changeEl({ filter: filter })
    optionNews.onclick = async () => {

        let filter = optionNews.value ? { "matchs.news": optionNews.value ?? null } : {}
        let count = await api({ url: "/news", data: { news: { action: "count", filter: filter } } })
        ctnPagination.innerHTML = ``
        ctnPagination.appendChild(PaginationLibView({ count: Math.ceil(count.response / 3), dataType: optionNews.value ?? '', clickCallback: clickCallback }))
        await changeEl({ filter: filter, skip: 1 })
    }

    const clickCallback = (value, typeNews) => {

        let filter = optionNews.value ? { "matchs.news": optionNews.value } : {}
        changeEl({ skip: value, filter: filter })
    }
    // let count = await api({ url: "/news", data: { news: { action: "count", filter: filter } } })
    console.log(optionNews.value)
    // ctnPagination.appendChild(PaginationLibView({ count: Math.ceil(count.response / 3), dataType: optionNews.value ?? '', clickCallback: clickCallback }))

    return El
}