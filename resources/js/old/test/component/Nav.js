import { connect } from '../core/store'
import { html } from '../core/store/html'
require('./scss/nav.scss')

const nav = ({ state }) => {

  return html`
        <nav id="nav">
       
        <div class="ctn-nav ctn fl ct-r sp-bw">
          <div class="nav-start fl ct-r">
            <div class="nav-item bars">
              <div icon="menu"></div>
            </div>
            <div class="nav-item logo">
              <div
                class="img"
                style="background-image: url('./img/logo.jpg')"
              ></div>
            </div>
          </div>
          <div class="nav-center">
            <div form id="form-nav-search" class="form ctn fl ct-r">
              <div field name="" class="ctn-search ctn fl">
                <input placeholder="Tìm kiếm " type="text" />
                <button type="submit"><i class="fas fa-search"></i></button>
              </div>
            </div>
          </div>
          <div class="nav-end fl ct-c ct-r">
            <div class="ctn-check-theme nav-item fl-center">
              <input id="checbox-change-theme" type="checkbox" checked/>
              <label
                class="checbox-change-theme"
                for="checbox-change-theme"
                onclick="checkboxChangeTheme(this)"
              ></label>
            </div>
            <div class="nav-item fl">
              <div icon="shopping_bag"></div>
              <p>(so)</p>
            </div>
            <div class="nav-item">
              <div icon="person"></div>
            </div>
          </div>
        </div>
      </nav>
    `
}
export default connect()(nav)