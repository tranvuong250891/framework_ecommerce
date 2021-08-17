import createEl from "../lib/createEl"
import Input from "./field/Input"
import { api } from "../lib/callApi"
import { loadding } from "../views/loadding/loadding"

export default class Form {
    #fields = []
    #type = []

    constructor({ name, url, callbackApi }) {
        this.nameForm = name
        this.url = url
        this.callbackApi = callbackApi ?? false
        this.input = new Input()
        this.textarea = "textarea"
        this.checkbox = "checkbox"
        this.ckeditor = "ckedittor"
        this.FormEl
    }

    addField({ ...attrs }) {

        (this[attrs.typeField].create({ ...attrs }));
        this.#type.includes(attrs.typeField) || this.#type.push(attrs.typeField)

    }

    getValueField() {
        const data = {}
        this.#getObFields().forEach(obField => {
            data[obField.key] = this[obField.typeField].getValue(obField.field)
        })
        return data
    }

    getFormEL() {
        require('../form/form.scss')
        const FormEl = createEl({ classNames: ['form'], attrs: { name: this.nameForm } })
        FormEl.innerHTML = `<h1>${this.nameForm ?? ''}</h1>`
        this.#type.forEach(type => FormEl.append(...this[type].getEl()))
        FormEl.innerHTML += `
        <button Test="hello" class="btn-submit" type="submit">Xac Nhan</button>`
        this.FormEl = FormEl
        this.submit()
        return FormEl
    }

    #getObFields() {
        const fields = []
        this.FormEl.querySelectorAll('.field').forEach(field => {
            const key = field.getAttribute('name')
            const typeField = field.getAttribute('typeField')
            fields.push({ typeField: typeField, key: key, field: field })
        })
        return fields
    }

    submit() {
        const contentLoad = this.FormEl.querySelector('.btn-submit').innerHTML
        // console.log(contentLoad)
        this.FormEl.querySelector('.btn-submit').onclick = () => {
            loadding(document.querySelector('.btn-submit'))
            this.handdle(contentLoad)
        }
    }

    setHanddleError(res) {
        this.#getObFields().forEach(obField => {
            this[obField.typeField].handdleError(obField.field, res[obField.key] ?? false)
        })
    }

    async handdle(contentLoad) {
        const res = await api({ data: this.getValueField(), url: this.url })
        let data = (res.response) ? res.response : res
        console.log('FORM:', res)
        this.setHanddleError(data)
        this.callbackApi && this.callbackApi(res)
        document.querySelector('.btn-submit').innerHTML = contentLoad


    }

}