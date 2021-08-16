import { html } from "../../lib/html";
import createEl from "../../lib/createEl";
import Form from "../../form/Form";
import redirect from "../../lib/redirect";
require('./scss/login.scss')
const callbackApi = async (res) => {
    res = await res
        ; (res === 'success') && redirect('/')

}

export const loginForm = () => {
    const classForm = new Form({ name: 'Form Login', url: '/login', callbackApi: callbackApi })
    classForm.addField({ key: 'email', typeField: 'input', label: 'nhap Email', value: "" })
    classForm.addField({ key: 'pass', typeField: 'input', label: 'nhap pass', value: "" })
    const formLogin = classForm.getFormEL()

    const fieldLoginSocial = createEl({ classNames: ['ctn-social'] })
    fieldLoginSocial.innerHTML = `
        <h3>login with social</h3>
        <button class="fl ct-r ct-c">
            <div class="img login-social" style="background-image:url('/img/icon/google.png')"></div>
            <span>Dang nhap voi facebook</span>
        </button>
        <button class="fl ct-r ct-c">
            <div class="img login-social" style="background-image:url('/img/icon/facebook.png')"></div>
            <span>Dang nhap voi google</span>
        </button>`
    formLogin.insertBefore(fieldLoginSocial, formLogin.querySelector('.field'))
    const signUp = createEl({ elName: 'a', classNames: ['change-singup'], attrs: { url: '/signup' } })
    signUp.innerHTML = "ban chua co tai khoan ???"
    formLogin.insertBefore(signUp, formLogin.querySelector('.btn-submit'))
    return formLogin
}
