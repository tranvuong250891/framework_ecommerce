import { html } from "../../lib/html";
import '../scss/sidebar.scss'

const sidebarEl = document.createElement('sidebar')
sidebarEl.id = 'sidebar'


export default () => {
  sidebarEl.innerHTML = html`
        <sidebar id="sidebar" class="">
    
        <div class="ctn-sidebar">
          <div class="item">
            <a class="home" url="/home" ><div
              url="home.html"
              href="index.html#/home.html"
              onclick="activeFont(this, 'sidebar-item')"
              class="sidebar-item"
              icon="home"
            >
              Home
            </div></a>
            <a class="contact" url="/contact" ><div
              url="contact.html"
              onclick="activeFont(this, 'sidebar-item')"
              class="sidebar-item"
              icon="import_contacts"
            >
              Contacts
            </div></a>
            <a  class="product" url="/product"><div
            
              onclick="activeFont(this, 'sidebar-item')"
              class="sidebar-item"
              icon="store"
            >
              San Pham
            </div></a>
            <a  class="test" url="/test"><div

              onclick="activeFont(this, 'sidebar-item')"
              class="sidebar-item"
              icon="build"
            >
              test
            </div></a>
            <hr />
            <div
              onclick="activeFont(this, 'sidebar-item')"
              class="sidebar-item"
              icon="copyright"
            >
              Copyright
            </div>
            <div
              onclick="activeFont(this, 'sidebar-item')"
              class="sidebar-item"
              icon="today"
            >
              Tin Tuc
            </div>
            <hr />

            <div
              onclick="activeFont(this, 'sidebar-item')"
              class="sidebar-item"
              icon="dashboard"
            >
              Dashboard
            </div>
            <div
              onclick="activeFont(this, 'sidebar-item')"
              class="sidebar-item"
              icon="edit"
            >
              Edit
            </div>
             
          </div>
        </div>
       
      </sidebar>
    `


  window.activeFont = (elActive, nameClass) => {
    elActive.parentElement.parentElement.querySelectorAll('.' + nameClass).forEach(el => { el.classList.remove('font-active') })
    elActive.classList.add("font-active")

  }




  return sidebarEl

}