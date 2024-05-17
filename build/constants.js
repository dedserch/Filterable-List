import Api from "./Api.js";
export const API_URL = 'https://jsonplaceholder.typicode.com';
export const POSTS_CONTAINER_ID = 'postsContainer';
export const FILTER_INPUT_ID = 'filterInput';
export const INITIAL_PAGE = 1;
export const POSTS_PER_PAGE = 10;
export const SCROLL_THRESHOLD = 5;
export const API = new Api(API_URL);
