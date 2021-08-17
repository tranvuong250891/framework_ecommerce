// import { createField } from "../createField"
import createEl from "../../lib/createEl"
require('../input.scss')
export default class Input {

    #fields = []

    constructor() {

    }

    setValue() {

    }

    getValue(field) {

        return field.querySelector('input').value
    }

    create({ key, value, label, typeField, classNames }) {
        const Field = createEl({
            elName: 'div',
            attrs: { name: key, typeField: typeField },
            classNames: classNames ?? []
        })
        Field.classList.add("field")
        Field.innerHTML = `
                <input value="${value ?? ''}" placeholder = " "/>
                <label>${label}</label> 
                <div class="mess"></div>`
        this.#fields.push(Field)
        return Field
    }

    getEl() {
        require('../input.scss')

        return this.#fields
    }

    handdleError(field, mess) {
        // console.log(field, mess)

        field.querySelector('.mess').innerHTML = mess ? mess[0] : ''
        mess && field.classList.add('error')
        !mess && field.classList.remove('error')
    }



}