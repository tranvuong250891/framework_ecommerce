import createEl from "../../../lib/createEl"
require('./modal.scss')

export const ModalEl = ({ name, content, cancel, confirm }) => {
    const El = createEl({ classNames: ['modal'] })
    El.innerHTML = ` 
        <div class="ctn-content-modal">
            <h1>${name}</h1>
            <div> ${content}</div>
            <div class="action"> 
                <button class="cancel">Cancel</button>
                <button class="confirm">Xac Nhan</button>
            </div>
        </div>`
    El.querySelector('.cancel').onclick = () => {
        cancel && cancel()
        El.style.display = 'none'

    }
    El.querySelector('.confirm').onclick = () => {
        confirm && confirm()
        El.style.display = 'none'

    }

    return El
}