let urlNews = "/?token=" + TOKEN + "&action=news&top_news=1"
let urlProduct = "/?token=" + TOKEN + "&action=product"
var home = document.querySelector("#home")
var ctnNewsDetail = home.querySelector('.ctn-news-detail')
var ctnProductDetail = home.querySelector('.ctn-product-detail')

$.get(urlNews, renderNews);
$.get(urlProduct, renderProducts);

function renderNews(res) {
    console.log(res)
    res = JSON.parse(res)
    res = res.response
    let html = ``;
    res.forEach(news => {
        let img = news.img.split(',')[0]
        html += `<div class="news-detail ">
        <h1> <a href="/${news.path}">${news.title}</a> </h1>
        <span class="description">${news.description}</span>

        <div class="img" style="background-image: url('/img/${img}');"></div>
        <div class="social"></div>
    </div>`
    });
    ctnNewsDetail.innerHTML = html


    var newsDetails = ctnNewsDetail.querySelectorAll('.news-detail')
    var selectSlides = document.querySelector(".ctn-slide").querySelectorAll("hr")
    let starPost;
    let currentId
    let translate;
    let isDragding = false
    let endTranslate = 0
    let currentIndex = 0
    newsDetails.forEach((slide, id) => {
        slide.addEventListener('touchstart', touchStart(id))
        slide.addEventListener('touchend', touchEnd)
        slide.addEventListener('touchmove', touchMove)
        slide.addEventListener('mousedown', touchStart(id))
        slide.addEventListener('mouseup', touchEnd)
        slide.addEventListener('mousemove', touchMove)
    })

    function touchStart(id) {
        return function(event) {
            isDragding = true
            currentId = id
            starPost = getPositionX(event)
            newsDetails[currentId].classList.add('scale');
        }
    }

    function touchEnd() {
        newsDetails[currentIndex].classList.remove('scale')
        isDragding = false
        const moveBy = endTranslate - starPost
        if (moveBy < -30 && currentIndex < newsDetails.length - 1) currentIndex += 1
        if (moveBy > 30 && currentIndex > 0) currentIndex -= 1
        setPositionByIndex()
    }

    function touchMove(event) {
        if (isDragding) {
            const currentPosition = getPositionX(event)
            endTranslate = currentPosition
        }
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    }

    function setSliderPosition(translate) {
        ctnNewsDetail.style.transform = `translateX(${translate}%)`
    }

    function setPositionByIndex() {
        translate = currentIndex * (-100)
        selectSlide(currentIndex)
        setSliderPosition(translate)
    }

    function selectSlide(key) {
        selectSlides.forEach(sl => {
            sl.style.backgroundColor = "";
        })
        for (let i = 0; i <= key; i++) {
            selectSlides[i].style.backgroundColor = "#0062cc";
        }
    }

    function animation() {
        setSliderPosition();
        if (isDragding) window.requestAnimationFrame(animation)
    }
}

function renderProducts(res) {
    // console.log(res)
    res = JSON.parse(res)
    res = res.response
    let html = ``
    res.forEach(product => {
        let img = product.img.split(',')[0];
        html += `<div class="dt-product" style="background-image: url('/img/${img}');">
        <div class="show-ac-product">
            <button value="${product.id}" onclick="addOneCart(${product.id})" class="btn-add-cart"><i class="fas fa-cart-plus"></i></button>
            <a href="${product.path}"><button><i class="far fa-eye"></i></button></a>
            <button><i class="far fa-heart"></i></button>
        </div>
        <div class="name-product"><span>${product.name}</span></div>
        <div class="price-product">
            <p>${product.price}<sup>đ</sup></p>
        </div>
    </div>`

    });
    ctnProductDetail.innerHTML = html;
}