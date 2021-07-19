import html from '../lib/html'
import app from '../views/app.view'
import createEl from '../lib/createEl'
import Form from '../form/Form'
import { api } from '../lib/callApi'
import pageProductDetail from '../views/components/product/pageProductDetail'
import { loadding } from '../views/loadding/loadding'
import { pageLoadding } from '../views/loadding/pageLoadding'

export const TestController = async (params) => {
    const test = createEl({ classNames: ['test'] })
    test.innerHTML = "<h1>Hello Test</h1>"

    await app({ data: test })

    document.querySelector('#sidebar .test div').classList.add('font-active')
    return 'TestController'
}

