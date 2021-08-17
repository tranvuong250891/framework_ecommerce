import createEl from '../../lib/createEl'



require('./pageLoadding.scss')
export const pageLoadding = () => {
    const load = createEl({ classNames: ['container'] })
    load.innerHTML = `<div class="loader">
            <div class="loader--dor"></div>
            <div class="loader--dor"></div>
            <div class="loader--dor"></div>
            <div class="loader--dor"></div>
            <div class="loader--dor"></div>
            <div class="loader--dor"></div>
            <div class="loader--text"></div>
        </div>`
    return load
}