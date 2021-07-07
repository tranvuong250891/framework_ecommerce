import { html } from '../lib/html'
import sidebar from './components/sidebar.view'
import content from './components/content.view'
import nav from './components/nav.view'
import menu from './components/menu.view'

//load scss
import '../views/scss/reset.scss'
import '../views/scss/theme.scss'
import '../views/scss/layout.scss'
import '../views/scss/lib.scss'

const appEl = document.getElementById('app')


export default ({ count, data, link, tap }) => {
    appEl.appendChild(nav(count))
    appEl.appendChild(menu(tap))
    appEl.appendChild(sidebar(link))
    appEl.appendChild(content(data))
    document.querySelectorAll('[icon]').forEach((icon) => {
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
    const elSidebar = appEl.querySelector('#sidebar')
    document.querySelector(".nav-item.bars").onclick = () => { elSidebar.classList.toggle('hide') }
    appEl.querySelectorAll('a').forEach(a => {
        a.onclick = () => {
            let url = a.getAttribute('url')
            window.history.replaceState('', "Page 3", url)
            window.router({ pathname: url })
        }

    })
    document.querySelector('#checbox-change-theme').checked =
        (document.documentElement.getAttribute('data-theme') === 'dark') ? true : false

    return appEl

}