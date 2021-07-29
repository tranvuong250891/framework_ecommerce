import routes from './routes'
// console.log(routes)
export const router = async ({ pathname }) => {
    // console.log(window.location.search)
    const route = routes.find(route => route.path === window.location.pathname)
    let params = new URLSearchParams(window.location.search);
    return route.controller(params)
}