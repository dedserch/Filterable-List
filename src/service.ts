
import { renderPosts } from './render'
import { 
    POSTS_CONTAINER_ID, 
    INITIAL_PAGE, 
    POSTS_PER_PAGE, 
    SCROLL_THRESHOLD,
    API 
} from './constants'

const postsContainer: HTMLElement = document.getElementById(POSTS_CONTAINER_ID) as HTMLElement
let currentPage = INITIAL_PAGE
let perPage = POSTS_PER_PAGE
let loading: boolean = false
let filterTitle: string = ''
let allPosts: any[] = []

const loadNextPage = async (): Promise<void> => {
    try {
        loading = true
        const posts: any[] = await API.getPosts(filterTitle, currentPage, perPage)
        allPosts = [...allPosts, ...posts]
        renderPosts(allPosts, postsContainer)
        currentPage++
    } catch (error) {
        console.error('Ошибка при загрузке постов:', (error as Error).message)
    } finally {
        loading = false
    }
}

const handleScroll = (): void => {
    const { scrollTop, scrollHeight, clientHeight }: { scrollTop: number, scrollHeight: number, clientHeight: number } = document.documentElement

    if (scrollTop + clientHeight >= scrollHeight - SCROLL_THRESHOLD && !loading) {
        loadNextPage()
    }
}

const handleInput = (event: Event): void => {
    const target: HTMLInputElement = event.target as HTMLInputElement
    filterTitle = target.value
    currentPage = INITIAL_PAGE
    allPosts = []
    loadNextPage()
}

export { loadNextPage, handleScroll, handleInput }
