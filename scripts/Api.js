export default class Api {
    constructor(serverURL) {
        this.serverURL = serverURL
    }

    async getPosts(title, page = 1, perPage = 10) {
        try {
            await new Promise(resolve => setTimeout(resolve, 500))
            const url = new URL(this.serverURL + "/posts")
            url.searchParams.append('_page', page)
            url.searchParams.append('_limit', perPage)
            if (title) {
                url.searchParams.append('title_like', title)
            }

            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Не удалось загрузить посты')
            }

            return response.json()
        } catch (error) {
            console.error('Ошибка при получении постов:', error.message)
            return []
        }
    }
}
