import { connect } from '../core/store'
import { html } from '../core/store/html'
require('./scss/sidebar.scss')

const Sidebar = ({ state }) => {

  return html`
       <sidebar id="sidebar" class="">
       
        <div class="ctn-sidebar">
          <div class="item">
            <a url="/home" ><div
              url="home.html"
              href="index.html#/home.html"
              onclick="activeFont(this, 'sidebar-item')"
              class="sidebar-item font-active"
              icon="home"
            >
              Home
            </div></a>
            <a url="/contact" ><div
              url="contact.html"
              onclick="activeFont(this, 'sidebar-item')"
              class="sidebar-item"
              icon="import_contacts"
            >
              Contacts
            </div></a>
            <a href="#/chat" ><div
              url="chat.html"
              onclick="activeFont(this, 'sidebar-item')"
              class="sidebar-item"
              icon="chat"
            >
              Chat
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
              icon="comment"
            >
              Comment
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
}



export default connect()(Sidebar)