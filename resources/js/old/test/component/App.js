import { html } from '../core/store/html'
import { connect } from '../core/store'
import Sidebar from './Sidebar'
import Content from './Content'
import Menu from './Menu'
import Nav from './Nav'
import './scss/reset.scss'
import './scss/lib.scss'
import './scss/layout.scss'
import './scss/theme.scss'

const App = ({ state }) => {

    return html`
        ${Sidebar()}
         ${Menu()}
        ${Nav()}
        ${Content()}
    `
}
export default connect()(App)