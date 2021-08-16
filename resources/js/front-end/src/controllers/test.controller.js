import app from '../views/app.view'
import createEl from '../lib/createEl'
import { delay } from '../lib/delay'

export const TestController = async (params) => {
    const test = createEl({ classNames: ['test'] })
    test.innerHTML = "<h1>Hello Test</h1>"
    await app({ data: delay(test, 500) })
    document.querySelector('#sidebar .test div').classList.add('font-active')
    return 'TestController'
}

