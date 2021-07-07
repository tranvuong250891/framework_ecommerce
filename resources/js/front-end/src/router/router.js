import routes from './routes'
// console.log(routes)
export const router = ({ pathname }) => {
    // console.log(routes)
    // console.log(pathname)
    const route = routes.find(route => route.path === pathname)
    // console.log(route.controller())
    return route.controller()
}