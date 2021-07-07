let ctnNewsDetail = document.querySelector('.ctn-news-detail')
let url = '/api/news/detail'
let path = window.location.pathname.replace('/', '')
let title = document.querySelector('title')
api(url, { path: path }, callbackNewsDetail)


function callbackNewsDetail(res) {
    res = JSON.parse(res)
    console.log(res)
    ctnNewsDetail.innerHTML = res.response.content
    title.innerHTML = res.response.title
}