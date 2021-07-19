import appView from '../views/app.view'
import { NewsView } from '../views/news'
import { NewsDetailView } from '../views/news/detail'

var test = "test"

export const NewsController = async (params) => {

    if (params.get('news_id'))
        return appView({ data: NewsDetailView(params.get('news_id')) })

    return appView({ data: NewsView() })
}