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


export default async ({ count, data, link, tap }) => {
    // console.log(data)

    appEl.appendChild(await nav(count))
    // appEl.appendChild(menu(tap))
    appEl.appendChild(sidebar(link))
    appEl.appendChild(await content(data))

    const elSidebar = appEl.querySelector('#sidebar')
    document.querySelector(".nav-item.bars").onclick = () => { elSidebar.classList.toggle('hide') }
    appEl.querySelectorAll('a').forEach(a => {
        a.onclick = () => {
            let url = a.getAttribute('url')
            window.history.replaceState('', "", url)
            window.router({ pathname: url })
        }
    })
    document.querySelector('#checbox-change-theme').checked =
        (document.documentElement.getAttribute('data-theme') === 'dark') ? true : false

    return appEl
}