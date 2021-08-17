import { api } from "../../lib/callApi";
import createEl from "../../lib/createEl"
require('./scss/header-news.scss')


export const HeaderNewsView = async (props) => {

    const { img, description, title, path, create_at } = props;
    const El = createEl({ classNames: ['ctn-header-news'] })
    const res = await api({
        url: '/news',
        data: {
            news: {
                filter: { "news_top": 2 },
                options: { limit: 4, sort: { "creata_at": 1 } }
            }
        }
    })

    El.innerHTML = `
            <div class=" img-news header-news-1" style="background-image: url('${img}')">
            <div class="ctn-title-news">
                    <div class="title-news"> ${title}</div>
                    <div class="date-news">${new Date(create_at)}</div>
                </div>
                <div class="background-gradient"></div>
            </div>
            <div class=" img-news header-news-2" style="background-image: url('/img/news/news2.jpg')">
                <div class="ctn-title-news">
                        <div class="title-news"> Day la tieu de cua new 2</div>
                    <div class="date-news">Ngay 12 thang 8 nam 2021</div>
                </div>
                    <div class="background-gradient"></div>
            </div>
            <div class=" img-news header-news-3" style="background-image: url('/img/news/news3.jpg')">
                <div class="ctn-title-news">
                    <div class="title-news"> Day la tieu de cua new 3</div>
                    <div class="date-news">Ngay 12 thang 8 nam 2021</div>
                </div>
                    <div class="background-gradient"></div>
            </div>
            <div class=" img-news header-news-4" style="background-image: url('/img/news/news4.jpg')">
                <div class="ctn-title-news">
                    <div class="title-news"> Day la tieu de cua new 4</div>
                    <div class="date-news">Ngay 12 thang 8 nam 2021</div>
                </div>
                    <div class="background-gradient"></div>
            </div>
            <div class=" img-news header-news-5 " style="background-image: url('/img/news/news5.jpg')">
                <div class="ctn-title-news">
                    <div class="title-news"> Day la tieu de cua new 5</div>
                    <div class="date-news">Ngay 12 thang 8 nam 2021</div>
                </div>
                    <div class="background-gradient"></div>
            </div>
    `

    return El

}