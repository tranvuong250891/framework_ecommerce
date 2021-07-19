import html from '../lib/html'
import app from '../views/app.view'


export const HomeController = async () => {
    const appEl = await app({})
    // console.log(app({}))
    appEl.querySelector('#sidebar .home div').classList.add('font-active')

    return 'HomeController'
}