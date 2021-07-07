import view from '../views/contact.html'

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await res.json()
}


export default async () => {
    require('../views/style.scss')
    const divEL = document.createElement('div')
    divEL.innerHTML = view
    const posts = await getPosts()
    posts.forEach(post => {
        divEL.innerHTML += ` <li>
                name: ${post.title}
                phone: ${post.name}
            </li>`
    });
    return divEL
}