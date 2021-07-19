import app from '../views/app.view'
import { signupForm } from '../views/form/signupForm'

export const SignupController = () => {
    app({ data: signupForm(), })
    return 'LoginController'
}