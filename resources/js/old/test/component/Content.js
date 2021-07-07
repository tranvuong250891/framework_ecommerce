import { connect } from '../core/store'
import { html } from '../core/store/html'
require('./scss/content.scss')
require('./scss/productdetail.scss')

const Content = ({ state }) => {

    return html`
          <div id="content">
        
        <div class="ctn-content">
          
          <div class="ctn-product">
            <h1 class="name-title">danh muc hang</h1>
            <div id="product-detail" class="fl col">
              <div
                class="img-bg"
                style="
                  background-image: url('../../img/lenovo-ideapad-gaming-3-15imh05-i7-81y4013uvn-org-1.jpg');
                "
              ></div>
              <span class="label tragop">tra gop 0%</span>
              <div class="discount">
                <span> - 30% </span>
              </div>
              <div class="content">
                <h2 class="name">Lenovo Laptop</h2>
                <div class="compare">
                  <span class="label">Ram: 8GB</span>
                  <span class="label">SSD: 128GB</span>
                  <span class="label">CPU: coreI5</span>
                </div>
                <div class="star">
                  <span class="item-star active">&starf;</span
                  ><span class="item-star active">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span>
                  <span> (12 danh gia)</span> <span> (12 danh comment)</span>
                </div>
                <h3>12.000.000 <sup></sup>đ</h3>
              </div>
            </div>
            <div id="product-detail" class="fl col">
              <div
                class="img-bg"
                style="
                  background-image: url('../../img/lenovo-ideapad-gaming-3-15imh05-i7-81y4013uvn-org-1.jpg');
                "
              ></div>
              <span class="label tragop">tra gop 0%</span>
              <div class="discount">
                <span> - 30% </span>
              </div>
              <div class="content">
                <h2 class="name">Lenovo Laptop</h2>
                <div class="compare">
                  <span class="label">Ram: 8GB</span>
                  <span class="label">SSD: 128GB</span>
                  <span class="label">CPU: coreI5</span>
                </div>
                <div class="star">
                  <span class="item-star active">&starf;</span
                  ><span class="item-star active">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span>
                  <span> (12 danh gia)</span> <span> (12 danh comment)</span>
                </div>
                <h3>12.000.000 <sup></sup>đ</h3>
              </div>
            </div>
            <div id="product-detail" class="fl col">
              <div
                class="img-bg"
                style="
                  background-image: url('../../img/lenovo-ideapad-gaming-3-15imh05-i7-81y4013uvn-org-1.jpg');
                "
              ></div>
              <span class="label tragop">tra gop 0%</span>
              <div class="discount">
                <span> - 30% </span>
              </div>
              <div class="content">
                <h2 class="name">Lenovo Laptop</h2>
                <div class="compare">
                  <span class="label">Ram: 8GB</span>
                  <span class="label">SSD: 128GB</span>
                  <span class="label">CPU: coreI5</span>
                </div>
                <div class="star">
                  <span class="item-star active">&starf;</span
                  ><span class="item-star active">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span>
                  <span> (12 danh gia)</span> <span> (12 danh comment)</span>
                </div>
                <h3>12.000.000 <sup></sup>đ</h3>
              </div>
            </div>
            <div id="product-detail" class="fl col">
              <div
                class="img-bg"
                style="
                  background-image: url('../../img/lenovo-ideapad-gaming-3-15imh05-i7-81y4013uvn-org-1.jpg');
                "
              ></div>
              <span class="label tragop">tra gop 0%</span>
              <div class="discount">
                <span> - 30% </span>
              </div>
              <div class="content">
                <h2 class="name">Lenovo Laptop</h2>
                <div class="compare">
                  <span class="label">Ram: 8GB</span>
                  <span class="label">SSD: 128GB</span>
                  <span class="label">CPU: coreI5</span>
                </div>
                <div class="star">
                  <span class="item-star active">&starf;</span
                  ><span class="item-star active">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span>
                  <span> (12 danh gia)</span> <span> (12 danh comment)</span>
                </div>
                <h3>12.000.000 <sup></sup>đ</h3>
              </div>
            </div>
            <div id="product-detail" class="fl col">
              <div
                class="img-bg"
                style="
                  background-image: url('../../img/lenovo-ideapad-gaming-3-15imh05-i7-81y4013uvn-org-1.jpg');
                "
              ></div>
              <span class="label tragop">tra gop 0%</span>
              <div class="discount">
                <span> - 30% </span>
              </div>
              <div class="content">
                <h2 class="name">Lenovo Laptop</h2>
                <div class="compare">
                  <span class="label">Ram: 8GB</span>
                  <span class="label">SSD: 128GB</span>
                  <span class="label">CPU: coreI5</span>
                </div>
                <div class="star">
                  <span class="item-star active">&starf;</span
                  ><span class="item-star active">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span>
                  <span> (12 danh gia)</span> <span> (12 danh comment)</span>
                </div>
                <h3>12.000.000 <sup></sup>đ</h3>
              </div>
            </div>
            <div id="product-detail" class="fl col">
              <div
                class="img-bg"
                style="
                  background-image: url('../../img/lenovo-ideapad-gaming-3-15imh05-i7-81y4013uvn-org-1.jpg');
                "
              ></div>
              <span class="label tragop">tra gop 0%</span>
              <div class="discount">
                <span> - 30% </span>
              </div>
              <div class="content">
                <h2 class="name">Lenovo Laptop</h2>
                <div class="compare">
                  <span class="label">Ram: 8GB</span>
                  <span class="label">SSD: 128GB</span>
                  <span class="label">CPU: coreI5</span>
                </div>
                <div class="star">
                  <span class="item-star active">&starf;</span
                  ><span class="item-star active">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span>
                  <span> (12 danh gia)</span> <span> (12 danh comment)</span>
                </div>
                <h3>12.000.000 <sup></sup>đ</h3>
              </div>
            </div>
            <div id="product-detail" class="fl col">
              <div
                class="img-bg"
                style="
                  background-image: url('../../img/lenovo-ideapad-gaming-3-15imh05-i7-81y4013uvn-org-1.jpg');
                "
              ></div>
              <span class="label tragop">tra gop 0%</span>
              <div class="discount">
                <span> - 30% </span>
              </div>
              <div class="content">
                <h2 class="name">Lenovo Laptop</h2>
                <div class="compare">
                  <span class="label">Ram: 8GB</span>
                  <span class="label">SSD: 128GB</span>
                  <span class="label">CPU: coreI5</span>
                </div>
                <div class="star">
                  <span class="item-star active">&starf;</span
                  ><span class="item-star active">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span>
                  <span> (12 danh gia)</span> <span> (12 danh comment)</span>
                </div>
                <h3>12.000.000 <sup></sup>đ</h3>
              </div>
            </div>
            <div id="product-detail" class="fl col">
              <div
                class="img-bg"
                style="
                  background-image: url('../../img/lenovo-ideapad-gaming-3-15imh05-i7-81y4013uvn-org-1.jpg');
                "
              ></div>
              <span class="label tragop">tra gop 0%</span>
              <div class="discount">
                <span> - 30% </span>
              </div>
              <div class="content">
                <h2 class="name">Lenovo Laptop</h2>
                <div class="compare">
                  <span class="label">Ram: 8GB</span>
                  <span class="label">SSD: 128GB</span>
                  <span class="label">CPU: coreI5</span>
                </div>
                <div class="star">
                  <span class="item-star active">&starf;</span
                  ><span class="item-star active">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span>
                  <span> (12 danh gia)</span> <span> (12 danh comment)</span>
                </div>
                <h3>12.000.000 <sup></sup>đ</h3>
              </div>
            </div>
            <div id="product-detail" class="fl col">
              <div
                class="img-bg"
                style="
                  background-image: url('../../img/lenovo-ideapad-gaming-3-15imh05-i7-81y4013uvn-org-1.jpg');
                "
              ></div>
              <span class="label tragop">tra gop 0%</span>
              <div class="discount">
                <span> - 30% </span>
              </div>
              <div class="content">
                <h2 class="name">Lenovo Laptop</h2>
                <div class="compare">
                  <span class="label">Ram: 8GB</span>
                  <span class="label">SSD: 128GB</span>
                  <span class="label">CPU: coreI5</span>
                </div>
                <div class="star">
                  <span class="item-star active">&starf;</span
                  ><span class="item-star active">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span
                  ><span class="item-star">&starf;</span>
                  <span> (12 danh gia)</span> <span> (12 danh comment)</span>
                </div>
                <h3>12.000.000 <sup></sup>đ</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
}



export default connect()(Content)