import api from '/js/fetch/api.js';
let showDetailImg = document.querySelector('.show-img')
let formElUpload = document.querySelector('.form-upload')
let btnUpload = formElUpload.querySelector('button')

var test = new Promise(resolve => {
    api('/modal/img', {}, callbackImg)

    function callbackImg(res) {
        res = JSON.parse(res)
        let html = ``
        res.forEach(img => {
            html += `<div onclick="getNameValueInput('${img}')" name="${img}" class="img-detail" style="background-image: url('/img/${img}');"></div>`
        });
        showDetailImg.innerHTML = html
        resolve(showDetailImg)
    }
});

btnUpload.onclick = function() {
    formUpload(formElUpload, callback)

    function callback(res) {
        console.log(res)
        res = JSON.parse(res)
        let img = res.url.slice(5)
        showDetailImg.innerHTML += `<div onclick="getNameValueInput('${img}')" name="${img}" class="img-detail" style="background-image: url('/img/${img}');"></div>`
    }
}

export default test;