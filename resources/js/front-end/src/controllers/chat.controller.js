import html from '../lib/html'
import app from '../views/app.view'


export const ChatController = () => {
    app()
    document.querySelector('#sidebar .chat div').classList.add('font-active')
    document.querySelector('#content').innerHTML = "day la chat"
    return 'ChatController'
}