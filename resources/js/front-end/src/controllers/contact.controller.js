import { html } from "../lib/html"
import app from "../views/app.view"
// import '../../dist/helper'


export const ContactController = () => {
    app({})
    document.querySelector('#sidebar .contact div').classList.add('font-active')
    document.querySelector('#content').innerHTML = "day la contact"
    // console.log(document.querySelector('#content'))

    // return 'ContactController'
}