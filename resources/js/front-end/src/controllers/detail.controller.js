import createEl from "../lib/createEl"
import { delay } from "../lib/delay"
import { fetchApi } from "../lib/fetch"
import appView from "../views/app.view"
import { PageProductDetailView } from "../views/product/page.detail.product"

export const DetailController = async (params) => {
    const El = createEl({ classNames: ['ctn'] })
    const nameUrl = window.location.pathname.substring(1)
    let data = await fetchApi({
        url: "/detail",
        data: {
            filter: { nameUrl: nameUrl }
        }
    })
    // console.log(data)
    data = JSON.parse(data)


    switch (data.view) {
        case 'product':
            await appView({ data: delay(PageProductDetailView(data), 0) })
            break;

        default:
            break;
    }


}