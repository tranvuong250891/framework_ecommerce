import { html } from '../../lib/html'
import './scss/menu.scss'

const menuEl = document.createElement('div')
menuEl.id = 'menu'

export default () => {
  menuEl.innerHTML = html`
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
          </div>`

  const checkboxChangeTheme = (el) => {
    if (el.previousElementSibling.checked) {
      (menuEl.documentElement.setAttribute('data-theme', 'light'))
    } else { (menuEl.documentElement.setAttribute('data-theme', 'dark')) }
  }
  const elTapMenu = menuEl.querySelector('#menu .ctn-menu .tap')
  const elTapRight = menuEl.querySelector('#menu .ctn-menu .right')
  const elTapLeft = menuEl.querySelector('#menu .ctn-menu .left')
  let isDown = false, x = 0, startX, translateX
  const tapMouseDown = (e) => {
    isDown = true
    startX = e.pageX
  }
  const tapMouseMove = (e) => {
    if (!isDown) return;
    if (!x) { x = 0 }
    let i = (e.pageX - startX) * 2
    translateX = i + x
    elTapMenu.style.transform = `translateX(${translateX}px)`
  }
  const tapMouseUp = () => {
    isDown = false
    if (translateX >= 0) {
      translateX = 0
      elTapLeft.style.display = ''
      elTapRight.style.display = 'none'
    } else if (translateX < (elTapMenu.parentElement.offsetWidth - 50 * 2 - elTapMenu.offsetWidth)) {
      translateX = elTapMenu.parentElement.offsetWidth - 50 * 2 - elTapMenu.offsetWidth
      elTapLeft.style.display = 'none'
      elTapRight.style.display = ''
    } else {
      elTapLeft.style.display = ''
      elTapRight.style.display = ''
    }
    elTapMenu.style.transform = `translateX(${translateX}px)`
    x = translateX
  }
  elTapMenu.addEventListener('mousedown', tapMouseDown)
  window.addEventListener('mouseup', tapMouseUp)
  window.addEventListener('mousemove', tapMouseMove)
  function tapClick(x) {
    elTapMenu.style.transition = 'transform .3s';
    if (!translateX) { translateX = 0 }
    translateX = x + translateX
    tapMouseUp()
    setTimeout(() => { elTapMenu.style.transition = ''; }, 300)
  }
  elTapLeft.onclick = () => { tapClick(-(elTapMenu.parentElement.offsetWidth - 50 * 2) / 5) }
  elTapRight.onclick = () => { tapClick((elTapMenu.parentElement.offsetWidth - 50 * 2) / 5) }
  const activeFont = (elActive, nameClass) => {
    elActive.parentElement.parentElement.querySelectorAll('.' + nameClass).forEach(el => { el.classList.remove('font-active') })
    elActive.classList.add("font-active")
  }


  return menuEl
}

