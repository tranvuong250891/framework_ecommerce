import { html } from "../lib/html"
import app from "../views/app.view"
// import '../../dist/helper'


export const ContactController = async () => {
    const appEl = await app({})
    console.log(appEl)
    appEl.querySelector('#sidebar .contact div').classList.add('font-active')

    return 'ContactController'
}