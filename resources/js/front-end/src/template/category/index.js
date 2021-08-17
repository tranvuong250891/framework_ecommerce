import { template } from "lodash"
require('./categorytemplate.scss')

export const CategoryTemplate = ({ name, urlImg, className, url }) => {
    const template = `
    <a url="${url ?? ''}"> <div class="${className ?? ''} category-item">
        <div class="img " style="background-image: url('${urlImg}')"></div>
        <div class="name-category">${name}</div>
    </div>
    </a>`

    return template
}