import { api } from "../lib/callApi"
import appView from "../views/app.view"
import { CartView } from "../views/components/cart/cart.view"

export const CartController = async () => {
    const res = await api({ url: '/api/cart/show' })
    appView({ data: CartView(res.response) })
}