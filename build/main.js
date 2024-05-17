import { loadNextPage, handleScroll, handleInput } from './service.js';
import { FILTER_INPUT_ID } from './constants.js';
window.addEventListener('scroll', handleScroll);
document.getElementById(FILTER_INPUT_ID)?.addEventListener('input', handleInput);
loadNextPage();
