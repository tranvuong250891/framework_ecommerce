import createEl from '../../lib/createEl'



require('./loadCart.scss')
export const loadCart = () => {
    const load = createEl({ classNames: ['lds-dual-ring'] })

    return load
}