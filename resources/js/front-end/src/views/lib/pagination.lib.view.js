import { parseInt } from "lodash";
import createEl from "../../lib/createEl"

export const PaginationLibView = ({ count = 1, dataType, skip = 1, clickCallback }) => {
    const El = createEl({ classNames: ['pagination'] })
    if (count === 0) return El
    for (let index = 1; index <= count; index++) {
        El.innerHTML += `<button data-type="${dataType}" value="${index}">${index}</button>`
    }
    El.querySelectorAll('button')[skip - 1].classList.add('active')
    El.querySelectorAll('button').forEach(btn => {
        btn.onclick = () => {
            El.querySelectorAll('button').forEach(button => { button.classList.remove('active') })
            btn.classList.add('active')
            clickCallback(parseInt(btn.value), dataType)
        }
    });
    return El
}