import { toUpper } from 'lodash'
import createEl from '../lib/createEl'
import './form.scss'

export { Input } from './input'
export { createField } from './createField'

export const Form = ({ name, classNames, url, fields }) => {
    // console.log(name, classNames, url, fields)
    classNames.push('form')
    const attrOfName = { name: name, url: url }
    const FormEl = createEl({ attrs: attrOfName, classNames: classNames })
    const btn = createEl({ elName: 'button' })
    btn.innerText = "Xac nhan"
    FormEl.innerHTML = `<h1>${toUpper(name)}</h1>`
    fields && fields.forEach(field => { FormEl.appendChild(field) })

    FormEl.appendChild(btn)
    console.log(FormEl)


    return FormEl
}

