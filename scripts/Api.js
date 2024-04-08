export default class Api {
    constructor(serverURL){
        this.serverURL = serverURL
    }
    async getPost(title) {
        try {
            await new Promise(resolve => setTimeout(resolve, 300))
            const url = new URL(this.serverURL + "/posts")
            if (title) {
                url.searchParams.append('title_like', title)
            }
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Не удалось загрузить посты')
            }
            return response.json()
        } catch (error) {
            console.error('Ошибка при загрузке постов:', error.message)
            return []
        }
    }
}