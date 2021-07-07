var body = document.querySelector('body');
var nav = document.querySelector("#navbar .navbar")
var navLogin = nav.querySelector('.login')
var showUser = navLogin.querySelector('.user')
var showLogin = document.querySelector('#show-login')
var clShowSearch = nav.querySelector('.search');
var clCloseSearch = nav.querySelector('.close-search')
var burger = nav.querySelector('.burger')
var sidebar = document.getElementById("sidebar")
var contentSidebar = sidebar.querySelector('.content-sidebar')
var prevScrollpos = window.pageYOffset;
var closeSidebar = sidebar.querySelector('.close-sidebar')
var ctnFormLogin = document.querySelector('#ctn-login')
var modalLogin = ctnFormLogin.parentElement

showLogin.onclick = () => {
    modalLogin.classList.add('modal')
    modalLogin.style.display = 'block'
}


clShowSearch.onclick = function() {
    nav.querySelectorAll('.nav-item').forEach(el => {
        el.style.display = 'none';
        showSearch.style.display = 'block'

        nav.querySelector('.form-search').style.display = 'flex'



    })
}

clCloseSearch.onclick = function() {
    nav.querySelectorAll('div').forEach(el => {
        el.style.display = '';
        nav.querySelector('.form-search').style.display = ''

    })
};

burger.onclick = function() {
    sidebar.classList.add('modal');
    contentSidebar.style.width = '250px'
}


window.onclick = function(event) {
    // console.log(event.target)
    if (event.target == sidebar) {
        sidebar.classList.remove('modal');
        contentSidebar.style.width = '0px';
    }
    if (event.target == modalLogin) {
        modalLogin.classList.remove('modal')
        modalLogin.style.display = 'none'
    }
}

closeSidebar.onclick = function() {
    sidebar.classList.remove('modal');
    contentSidebar.style.width = '0px';
}