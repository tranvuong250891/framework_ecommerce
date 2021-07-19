import { pageLoadding } from '../loadding/pageLoadding'
import createEl from '../../lib/createEl'
import { api } from '../../lib/callApi'
import { loadCart } from '../loadding/loadCart'
import '../scss/nav.scss'

const navEl = document.createElement('nav')
navEl.id = 'nav'

export default async (nav) => {

    navEl.innerHTML = `
        <div class="ctn-nav ctn fl ct-r sp-bw">
            <div class="nav-start fl ct-r">
                <div class="nav-item bars">
                    <div icon="menu"></div>
                </div>
                <div class="nav-item logo">
                    <div
                        class="img"
                        style="background-image: url('./img/logo.jpg')"
                    ></div>
                </div>
            </div>
            <div class="nav-center">
                <div form id="form-nav-search" class="form ctn fl ct-r">
                    <div field name="" class="ctn-search ctn fl">
                        <input placeholder="Tìm kiếm " type="text" />
                        <button type="submit"><i class="fas fa-search"></i></button>
                    </div>
                </div>
            </div>
            <div class="nav-end fl ct-c ct-r">
                <div class="ctn-check-theme nav-item fl-center">
                    <input id="checbox-change-theme" type="checkbox" checked />
                    <label
                        class="checbox-change-theme"
                        for="checbox-change-theme"
                        onclick="checkboxChangeTheme(this)"
                    ></label>
                </div>
                <a url="/cart" >
                    <div class="nav-item fl cart">
                        <div icon="shopping_bag"></div>
                        <p class="total-count-cart">(so)</p>
                    </div>
                </a>
                <a url="/login" class="nav-login-user">
                <div class="nav-item">
                    <div icon="person"></div>
                </div>
                </a>
                <a url="">
                <div class="nav-item">
                    <div  class="nav-show-img-user img " style="background-image:url('/img/lienquan/elsumaffia.jpg')"></div>
                </div>
                </a>
            </div>
        </div>`
    navEl.querySelectorAll('[icon]').forEach((icon) => {
        let i = document.createElement('I')
        let text = document.createElement('SPAN')
        let fontSize = parseFloat(window.getComputedStyle(icon).fontSize)
        text.innerText = icon.innerText.trim()
        icon.innerHTML = null
        i.innerText = icon.getAttribute('icon')
        i.classList.add('material-icons')
        i.style.fontSize = `${fontSize + (fontSize / 16) * 8}px`
        icon.appendChild(i)
        if (text.innerText) { icon.appendChild(text) }
        icon.onmousedown = (e) => {
            e.preventDefault()
            icon.classList.add('down')
            icon.classList.remove('up')
            window.onmouseup = () => {
                icon.classList.remove('down')
                icon.classList.add('up')
            }
        }
    })

    window.checkboxChangeTheme = (el) => {
        if (el.previousElementSibling.checked) {
            (document.documentElement.setAttribute('data-theme', 'light'))
        } else { (document.documentElement.setAttribute('data-theme', 'dark')) }
    }
    let countCart = navEl.querySelector('.total-count-cart')
    countCart.innerHTML = ``
    countCart.appendChild(loadCart())
    const res = await api({ url: '/api/cart/show', })

    const totalCount = (Object.values(res.response).length) ?
        Object.values(res.response)
            .map(product => product.qty)
            .reduce((first, value) => first + value)
        : 0
    countCart.innerHTML = `${totalCount}`

    const user = await api({ url: "/api/user/index" })

    // console.log(user.response.img)
    if (user.response) {
        navEl.querySelector('.nav-show-img-user').style.display = 'block'
        navEl.querySelector('.nav-login-user').style.display = 'none'
    } else {
        navEl.querySelector('.nav-show-img-user').style.display = 'none'
        navEl.querySelector('.nav-login-user').style.display = ''
    }

    return navEl
}

