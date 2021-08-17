import { pageLoadding } from "../loadding/pageLoadding";
import { api } from "../../lib/callApi";
import { delay } from "../../lib/delay";
import redirect from "../../lib/redirect";

const contentEl = document.createElement('div')
contentEl.id = 'content'


export default async (data) => {

    contentEl.innerHTML = `<div class="ctn-content"></div>`
    contentEl.querySelector('.ctn-content').appendChild(pageLoadding())
    data.then(res => {
        // console.log(res)
        contentEl.querySelector('.ctn-content').innerHTML = ``
        contentEl.querySelector('.ctn-content').appendChild(res)

        contentEl.querySelectorAll('a').forEach(a => {
            a.onclick = () => {
                let url = a.getAttribute('url')
                redirect(url)
            }
        })
    })

    return delay(contentEl, 1000)
}