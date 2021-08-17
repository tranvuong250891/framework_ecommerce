import { api } from "../lib/callApi"
import { delay } from "../lib/delay"
import appView from "../views/app.view"
import { CartView } from "../views/components/cart/cart.view"

export const CartController = async () => {
    const res = await api({ url: '/cart/show' })
    appView({ data: delay(CartView(res), 1000) })
}