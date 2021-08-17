const elApp = document.getElementById('app')
const elSidebar = document.getElementById('sidebar')
const elMenu = document.getElementById('menu')
const elNavSearch = document.querySelector('#form-nav-search')
document.querySelectorAll('[icon]').forEach((icon) => {
    let i = document.createElement('I')
    let text = document.createElement('SPAN')
    let fontSize = parseFloat(window.getComputedStyle(icon).fontSize)
    text.innerText = icon.innerText.trim()
    icon.innerHTML = null
    i.innerText = icon.getAttribute('icon')
    i.classList.add('material-icons')
    i.style.fontSize = `${fontSize + (fontSize / 16) * 8}px`
    icon.appendChild(i)
    if (text.innerText) { icon.appendChild(text) }
    icon.onmousedown = (e) => {
        e.preventDefault()
        icon.classList.add('down')
        icon.classList.remove('up')
        window.onmouseup = () => {
            icon.classList.remove('down')
            icon.classList.add('up')
        }
    }
})
const checkboxChangeTheme = (el) => {
    if (el.previousElementSibling.checked) {
        (document.documentElement.setAttribute('data-theme', 'light'))
    } else { (document.documentElement.setAttribute('data-theme', 'dark')) }
}
const elTapMenu = document.querySelector('#menu .ctn-menu .tap')
const elTapRight = document.querySelector('#menu .ctn-menu .right')
const elTapLeft = document.querySelector('#menu .ctn-menu .left')
let isDown = false, x = 0, startX, scrollLeft, translateX, scrollX = elTapMenu.scrollLeft;
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


