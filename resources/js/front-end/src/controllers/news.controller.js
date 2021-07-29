import { delay } from '../lib/delay'
import appView from '../views/app.view'
import { NewsView } from '../views/news'


export const NewsController = async (params) => {

    if (params.get('category'))
        await appView({ data: delay(NewsView(params.get('category')), 0) })
    // await appView({ data: delay(NewsView(), 0) })

}