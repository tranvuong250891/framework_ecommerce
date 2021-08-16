import app from '../views/app.view'
import { delay } from '../lib/delay'
import { CategoryProductView } from '../views/product/category.product.view'
import { ProductView } from '../views/product/product.view'

export const ProductController = async (params) => {
    const catygoryId = params.get('category')
    const categoryName = params.get('name')
    // console.log(categoryName)
    categoryName && catygoryId && await app({ data: delay(ProductView({ categoryId: catygoryId, categoryName: categoryName }), 0) })
    !categoryName && await app({ data: delay(ProductView(), 0) })


    return 'ProductController'
}