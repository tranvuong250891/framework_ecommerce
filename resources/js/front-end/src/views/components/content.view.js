import { html } from "../../lib/html";
import { productdetail } from "./product/productdetail";

const contentEl = document.createElement('div')
contentEl.id = 'content'

export default (data) => {
    // console.log(data)
    contentEl.innerHTML = `
        <div class="ctn-content">
            <div class="ctn-product">
                <h1 class="name-title">danh muc adasd hang1</h1>
                ${data}
            </div>
        </div> `

    return contentEl
}