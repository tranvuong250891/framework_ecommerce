import { connect } from '../core/store'
import { html } from '../core/store/html'
require('./scss/menu.scss')

const Menu = ({ state }) => {

  return html`
        <div id="menu">
        <div class="ctn-menu ctn fl ct-r sp-bw">
          <div class="menu-item fl ct-r ctn-tap">
            <div class="move fl ct-r ct-c left">
              <div icon="arrow_left" class="ctn font-2"></div>
            </div>
            <div class="tap fl ct-r">
              <a>tap1</a><a>tap2</a><a>tap3</a><a>tap4</a> <a>tap5</a><a>tap6</a
              ><a>tap7</a><a>tap8</a> <a>tap9</a><a>tap10</a><a>tap11</a
              ><a>tap12</a> <a>tap9</a><a>tap10</a><a>tap11</a><a>tap12</a>
              <a>tap9</a><a>tap10</a><a>tap11</a><a>tap12</a>
            </div>

            <div class="move right fl ct-r ct-c">
              <div icon="arrow_right" class="ctn font-2"></div>
            </div>
          </div>
          <div class="menu-item date">
            <p>ngay 30 thang 6 nam 2021</p>
          </div>
        </div>
      </div>
    `
}

export default connect()(Menu)
