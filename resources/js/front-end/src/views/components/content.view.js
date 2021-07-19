import { html } from "../../lib/html";
import { productdetail } from "./product/productdetail";
import { loadding } from "../loadding/loadding";
import { pageLoadding } from "../loadding/pageLoadding";

const contentEl = document.createElement('div')
contentEl.id = 'content'

export default async (data) => {
    contentEl.innerHTML = `<div class="ctn-content"></div>`

    // console.log(data)

    data = await data


    data && contentEl.querySelector('.ctn-content').appendChild(data)

    return contentEl
}