import Api from "./Api.js";
const api = new Api("https://jsonplaceholder.typicode.com")


const filterInput = document.getElementById('filterInput')
const postsContainer = document.getElementById('postsContainer')

filterInput.addEventListener('input', async (event) => {
    const title = event.target.value.trim()
    const posts = await api.getPost(title)
    renderPosts(posts)
})

const renderPosts = (posts) => {
    postsContainer.innerHTML = ''

    posts.forEach(post => {
        const postElement = document.createElement('div')
        postElement.classList.add('post')
        postElement.textContent = post.title
        postsContainer.appendChild(postElement)
    })
}