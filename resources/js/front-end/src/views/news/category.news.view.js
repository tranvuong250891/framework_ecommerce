import createEl from "../../lib/createEl"
require('./scss/category.scss')

export const CategoryNewsView = ({ _id, name_category, img, url }) => {


    const El = createEl({
        elName: 'a',
        attrs: { url: url + _id.$oid },
        classNames: ['category-item']
    })
    El.innerHTML = `
        <div class="img " style="background-image: url('${img}')"></div>
        <div class="name-category">${name_category}</div>
    `

    return El
}