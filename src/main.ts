import { loadNextPage, handleScroll, handleInput } from './service'
import { FILTER_INPUT_ID } from './constants'

window.addEventListener('scroll', handleScroll)
document.getElementById(FILTER_INPUT_ID)?.addEventListener('input', handleInput)

loadNextPage()
