import { createField } from "../createField"
import createEl from "../../lib/createEl"
require('../input.scss')
export default class Button {

    #fields = []

    constructor() {

    }

    setValue() {

    }

    getValue(field) {

        return field.querySelector('input').value
    }

    create({ key, value, label, typeField }) {
        const Field = createEl({ elName: 'button', attrs: { name: key, typeField: typeField } })
        Field.classList.add("field")
        Field.innerHTML = `
                <input value="${value ?? ''}" placeholder = " "/>
                <label>${label}</label> 
                <div class="mess">loi</div>`
        this.#fields.push(Field)
        return Field
    }

    getEl() {
        require('./scss/button.scss')

        return this.#fields
    }

    handdleError(field, mess) {
        console.log(field, mess)

        field.querySelector('.mess').innerHTML = mess ? mess[0] : ''
        mess && field.classList.add('error')
        !mess && field.classList.remove('error')
    }



}