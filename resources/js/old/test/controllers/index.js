import HomeController from './home.controller'
import ContactController from './contact.controller'
import NotFoundController from './notfound.controller'


export default [
    { controller: NotFoundController, uri: '*' },
    { controller: HomeController, uri: '/' },
    { controller: HomeController, uri: '/home' },
    { controller: ContactController, uri: '/contact' },


]



