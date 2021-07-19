import app from '../views/app.view'
import { loginForm } from '../views/form/loginForm'


export const LoginController = () => {
    app({ data: loginForm(), })
    return 'LoginController'
}