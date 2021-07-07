import { ChatController, ContactController, HomeController, CartController, UserController } from '../controllers'
import { ProductController } from '../controllers/product.controller'
import { LoginController } from '../controllers/login.controller'
import { TestController } from '../controllers/test.controller'


export default [
    { path: '/contact', controller: ContactController },
    { path: '/home', controller: HomeController },
    { path: '/user', controller: UserController },
    { path: '/cart', controller: CartController },
    { path: '/chat', controller: ChatController },
    { path: '/product', controller: ProductController },
    { path: '/login', controller: LoginController },
    { path: '/test', controller: TestController },

]