import createEl from "../../lib/createEl"


export const SlideView = () => {
    const El = createEl({ classNames: ['slide-news'] })
    El.innerHTML = ``
    return El
}