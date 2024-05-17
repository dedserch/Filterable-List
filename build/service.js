import { renderPosts } from './render.js';
import { POSTS_CONTAINER_ID, INITIAL_PAGE, POSTS_PER_PAGE, SCROLL_THRESHOLD, API } from './constants.js';
const postsContainer = document.getElementById(POSTS_CONTAINER_ID);
let currentPage = INITIAL_PAGE;
let perPage = POSTS_PER_PAGE;
let loading = false;
let filterTitle = '';
let allPosts = [];
const loadNextPage = async () => {
    try {
        loading = true;
        const posts = await API.getPosts(filterTitle, currentPage, perPage);
        allPosts = [...allPosts, ...posts];
        renderPosts(allPosts, postsContainer);
        currentPage++;
    }
    catch (error) {
        console.error('Ошибка при загрузке постов:', error.message);
    }
    finally {
        loading = false;
    }
};
const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - SCROLL_THRESHOLD && !loading) {
        loadNextPage();
    }
};
const handleInput = (event) => {
    const target = event.target;
    filterTitle = target.value;
    currentPage = INITIAL_PAGE;
    allPosts = [];
    loadNextPage();
};
export { loadNextPage, handleScroll, handleInput };
