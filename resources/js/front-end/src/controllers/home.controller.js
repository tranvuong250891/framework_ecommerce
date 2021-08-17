import html from '../lib/html'
import app from '../views/app.view'
import { HomeView } from '../views/home'


export const HomeController = async () => {
    const appEl = await app({ data: HomeView() })
    appEl.querySelector('#sidebar .home div').classList.add('font-active')

}