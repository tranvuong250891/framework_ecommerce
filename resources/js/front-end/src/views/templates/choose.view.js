import createEl from "../../lib/createEl"

export const ChooseEl = ({ text, callbackChoose }) => {
    const El = createEl({ classNames: ['choose'] })
    El.innerHTML = text
    El.onclick = () => {
        document.querySelectorAll('.choose').forEach(choose => {
            choose.classList.remove('active-span')
        })
        El.classList.add('active-span')
        callbackChoose && callbackChoose()
    }

    return El
}