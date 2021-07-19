import createEl from "../../../lib/createEl"
require('./news.scss')


export const NewsDetailView = async (id) => {
    console.log(id)
    const El = createEl({ classNames: ['news'] })
    El.id = "news"
    El.innerHTML = `
        <div class="ctn-news">
            <div class="ctn-header-news">
                <div class=" img-news header-news-1" style="background-image: url('/img/news/news1.jpg')">
                    
                <div class="ctn-title-news">
                        <div class="title-news"> Day la tieu de cua new 1</div>
                        <div class="date-news">Ngay 12 thang 8 nam 2021</div>
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
            </div>
        </div>
    `

    return El
}