import html from '../lib/html'
import app from '../views/app.view'


export const HomeController = () => {
    app({})
    console.log(app({}))
    document.querySelector('#sidebar .home div').classList.add('font-active')
    document.querySelector('#content').innerHTML = "day la home"
    return 'HomeController'
}