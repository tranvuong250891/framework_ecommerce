import view from '../views/home.html'

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return await res.json()
}


export default async () => {
    require('../views/style.scss')
    const divEL = document.createElement('div')
    divEL.innerHTML = view
    const postEl = divEL.querySelector("#user")

    postEl.onclick = () => {
        // window.location.replace('/test');
    }
    const posts = await getPosts()

    posts.forEach(post => {
        postEl.innerHTML += `
            <li>
                name: ${post.name}
                phone: ${post.phone}
            </li>
        `
    });
    // console.log(divEL)
    return divEL
}