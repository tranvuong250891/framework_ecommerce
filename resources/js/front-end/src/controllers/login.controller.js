import { delay } from '../lib/delay'
import app from '../views/app.view'
import { loginForm } from '../views/form/loginForm'


export const LoginController = () => {
    app({ data: delay(loginForm(), 500), })
    return 'LoginController'
}