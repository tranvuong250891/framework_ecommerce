import { html } from "../../lib/html";
import createEl from "../../lib/createEl";
import Form from "../../form/Form";

export const signupForm = () => {
    const classForm = new Form({ name: 'Form Signup', url: '/signup' })
    classForm.addField({ key: 'email', typeField: 'input', label: 'nhap Email', value: "" })
    classForm.addField({ key: 'pass', typeField: 'input', label: 'nhap pass', value: "" })
    classForm.addField({ key: 'repass', typeField: 'input', label: 'nhap pass', value: "" })
    const formSignup = classForm.getFormEL()
    require('./scss/signup.scss')
    const login = createEl({ elName: 'a', classNames: ['change-singup'], attrs: { url: '/login' } })
    login.innerHTML = "Chuyen sang dang nhap"
    formSignup.insertBefore(login, formSignup.querySelector('.btn-submit'))



    return formSignup
}
