import createEl from "../../../lib/createEl"
require('./modal.scss')

export const ModalEl = ({ name, content, cancel, confirm, code }) => {
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
    if (code === 0) {
        El.querySelector('h1').style.background = '#B00020';
        El.querySelectorAll('button')[0].style.color = '#B00020';
        El.querySelectorAll('button')[1].style.color = '#B00020';
    }

    El.querySelector('.cancel').onclick = () => {
        cancel && cancel()
        El.style.display = 'none'

    }
    El.querySelector('.confirm').onclick = () => {
        confirm && confirm()
        El.style.display = 'none'

    }
    document.querySelector('body').appendChild(El)
    return El
}