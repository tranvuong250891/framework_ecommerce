import { Router as app } from './router'

console.log(window.location.href)

window.router = app



// window.addEventListener('hashchange', () => {
//     console.log(1)
//     // app(window.location.hash)
// })

// console.log(1)

export { app }

