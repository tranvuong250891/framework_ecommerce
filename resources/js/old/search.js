var searchValue = document.querySelector('.search-value')
var showSearch = document.querySelector('.modal-search')
var clSearch = document.querySelector('.cl-search')
let show = showSearch.querySelector('.ctn-show-search')
clSearch.onclick = function() {
    value = searchValue.value || "tu ke"
    var url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBuwfzxsYnM0sFIOqe9XJz03q625hbY-mk&cx=b82cd1692bce48daa&q=" + value
    $.get(url, function(response) {
        return showSearchValue(response)
    })

    function showSearchValue(res) {
        let html = ``;
        res.items.forEach(value => {
            html += `<div class="detail-search">
            <a href="${value.link}"><h1>${value.title}</h1></a>
           <span>${value.link}</span>
            </div>`
        });
        show.innerHTML = html
    }
}