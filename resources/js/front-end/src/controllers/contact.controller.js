import createEl from "../lib/createEl"
import { delay } from "../lib/delay"
import { html } from "../lib/html"
import app from "../views/app.view"
// import '../../dist/helper'


export const ContactController = async () => {
  const El = createEl({ classNames: ['contact'] })
  El.innerHTML = `Contact
    <h1> tasjdgjas kasj hdkjah sd kajs
     askldj la
      askjd</h1>
    `


  const appEl = await app({ data: delay(El, 1000) })
  // console.log(appEl)
  appEl.querySelector('#sidebar .contact div').classList.add('font-active')

  return 'ContactController'
}