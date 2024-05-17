import Api from "./Api"

export const API_URL: string = 'https://jsonplaceholder.typicode.com'
export const POSTS_CONTAINER_ID: string = 'postsContainer'
export const FILTER_INPUT_ID: string = 'filterInput'
export const INITIAL_PAGE: number = 1
export const POSTS_PER_PAGE: number = 10
export const SCROLL_THRESHOLD: number = 5

export const API: Api = new Api(API_URL)