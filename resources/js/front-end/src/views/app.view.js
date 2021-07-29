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
import { pageLoadding } from './loadding/pageLoadding'
import { delay } from '../lib/delay'
import redirect from '../lib/redirect'

const appEl = document.getElementById('app')
const contentEl = appEl.querySelector('#content')


export default async ({ count, data, link, tap }) => {


    appEl.appendChild(await nav(count))
    appEl.appendChild(await content(data))


    appEl.appendChild(await sidebar(link))

    const elSidebar = appEl.querySelector('#sidebar')
    document.querySelector(".nav-item.bars").onclick = () => { elSidebar.classList.toggle('hide') }


    document.querySelector('#checbox-change-theme').checked =
        (document.documentElement.getAttribute('data-theme') === 'dark') ? true : false
    appEl.querySelectorAll('a').forEach(a => {
        a.onclick = async () => {

            let url = a.getAttribute('url')
            redirect(url)


        }
    })

    return appEl

}