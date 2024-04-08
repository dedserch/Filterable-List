import Api from './Api.js'

const api = new Api('https://jsonplaceholder.typicode.com')
const postsContainer = document.getElementById('postsContainer')
let currentPage = 1
let perPage = 10
let loading = false
let filterTitle = ''

const loadNextPage = async () => {
    try {
        loading = true
        const posts = await api.getPosts(filterTitle, currentPage, perPage)
        renderPosts(posts)
        currentPage++
    } catch (error) {
        console.error('Ошибка при загрузке постов:', error.message)
    } finally {
        loading = false
    }
}

const renderPosts = posts => {
    postsContainer.innerHTML = ''
    posts.forEach(post => {
        const postElement = document.createElement('div')
        postElement.classList.add('post')

        const titleElement = document.createElement('h2')
        titleElement.textContent = post.title

        const bodyElement = document.createElement('p')
        bodyElement.textContent = post.body

        postElement.appendChild(titleElement)
        postElement.appendChild(bodyElement)

        postsContainer.appendChild(postElement)
    })
}

const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        loadNextPage()
    }
}

const handleInput = event => {
    filterTitle = event.target.value
    currentPage = 1
    loadNextPage()
}

window.addEventListener('scroll', handleScroll)
document.getElementById('filterInput').addEventListener('input', handleInput)

loadNextPage()
