import createEl from "../../lib/createEl"
require('./category.scss')

export const CategoryNewsView = ({ name, img, className, id }) => {
    const El = createEl({
        elName: 'a',
        attrs: { url: `/news?news_id=${id}` },
        classNames: ['category-item', className ?? '']
    })
    El.innerHTML = `
   
        <div class="img " style="background-image: url('/img/icon/${img}')"></div>
        <div class="name-category">${name}</div>
    `

    return El
}