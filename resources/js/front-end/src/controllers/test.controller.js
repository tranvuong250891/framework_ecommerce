import html from '../lib/html'
import app from '../views/app.view'
import { Input, createField, Form } from '../form'
import createEl from '../lib/createEl'

const fields = [
    Input({
        label: 'test'
    })

];

export const TestController = () => {



    const FormLogin = Form({
        name: 'login',
        url: '/login',
        fields: fields,
        classNames: ['login']
    });

    app({})
    document.querySelector('#sidebar .test div').classList.add('font-active')
    const Content = document.querySelector('#content')
    document.querySelector('#content').innerHTML = ``

    Content.appendChild(FormLogin)
    return 'TestController'
}