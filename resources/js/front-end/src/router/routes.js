import { ProductController } from '../controllers/product.controller'
import { LoginController } from '../controllers/login.controller'
import { SignupController } from '../controllers/signup.controller'
import { TestController } from '../controllers/test.controller'
import { ChatController } from '../controllers/chat.controller'
import { CartController } from '../controllers/cart.controller'
import { UserController } from '../controllers/user.controller'
import { HomeController } from '../controllers/home.controller'
import { ContactController } from '../controllers/contact.controller'
import { NewsController } from '../controllers/news.controller'
import { DetailController } from '../controllers/detail.controller'


export default [
    { path: '/*detail', controller: DetailController },
    { path: '/contact', controller: ContactController },
    { path: '/home', controller: HomeController },
    { path: '/', controller: HomeController },
    { path: '/user', controller: UserController },
    { path: '/cart', controller: CartController },
    { path: '/chat', controller: ChatController },
    { path: '/product', controller: ProductController },
    { path: '/login', controller: LoginController },
    { path: '/signup', controller: SignupController },
    { path: '/test', controller: TestController },
    { path: '/news', controller: NewsController },

]