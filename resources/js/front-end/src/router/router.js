import createEl from '../lib/createEl'
import redirect from '../lib/redirect'
import routes from './routes'
// console.log(routes)
export const router = async ({ pathname }) => {
    let path = window.location.pathname
    path.includes("-") && (path = '/*detail')
    let route = routes.find(route => route.path === path)
    let params = new URLSearchParams(window.location.search)

    return route.controller(params)
}

export const routerEl = (url) => {
    const El = createEl({ elName: 'a', attrs: { url: url } })
    El.onclick = () => {
        redirect(url)
    }
    return El
}