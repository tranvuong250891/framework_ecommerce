import { delay } from '../lib/delay'
import app from '../views/app.view'
import { signupForm } from '../views/form/signupForm'

export const SignupController = () => {
    app({ data: delay(signupForm(), 0), })
    return 'LoginController'
}