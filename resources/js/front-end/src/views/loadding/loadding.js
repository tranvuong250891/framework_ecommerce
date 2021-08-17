export const loadding = (page) => {
    require('./loadding.scss')
    page.offsetHeight
    const width = page.offsetWidth
    const height = page.offsetHeight
    // console.log(width, height)
    page.innerHTML = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`
    page.style.height = `${height}px`
    page.style.width = `${width}px`

    if (width === 0 && height === 0) {
        page.style.height = `100%`
        page.style.width = `100%`

    }


}