import Api from './Api.js'
import { renderPosts } from './render.js'

const api = new Api('https://jsonplaceholder.typicode.com')
const postsContainer = document.getElementById('postsContainer')
let currentPage = 1
let perPage = 10
let loading = false
let filterTitle = ''
let allPosts = []

const loadNextPage = async () => {
    try {
        loading = true
        const posts = await api.getPosts(filterTitle, currentPage, perPage)
        allPosts = [...allPosts, ...posts]
        renderPosts(allPosts, postsContainer)
        currentPage++
    } catch (error) {
        console.error('Ошибка при загрузке постов:', error.message)
    } finally {
        loading = false
    }
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
    allPosts = []
    loadNextPage()
}

window.addEventListener('scroll', handleScroll)
document.getElementById('filterInput').addEventListener('input', handleInput)

loadNextPage()
