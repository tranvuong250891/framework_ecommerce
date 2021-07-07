import Routes from '../controllers'

const content = document.getElementById('content')

export const Router = async (path) => {
    content.innerHTML = ''
    const router = Routes.find(route => route.uri === path) ?? Routes.find(route => route.uri === '*')
    const controller = router.controller

    return content.appendChild(await controller())
}