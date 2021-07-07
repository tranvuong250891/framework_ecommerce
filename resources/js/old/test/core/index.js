import { attach } from './core/store'
import App from ""

import { fetchLayout } from '../api'
import { compose } from 'lodash/fp'

window.addEventListener('hashchange', () => {
    console.log(window.location)
})

attach(App, document.getElementById('app'))