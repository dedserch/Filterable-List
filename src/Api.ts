export default class Api {
    private serverURL: string

    constructor(serverURL: string) {
        this.serverURL = serverURL
    }

    async getPosts(title: string, page: number = 1, perPage: number = 10): Promise<any[]> {
        try {
            await new Promise(resolve => setTimeout(resolve, 500))
            const url: URL = new URL(this.serverURL + "/posts")
            url.searchParams.append('_page', page.toString())
            url.searchParams.append('_limit', perPage.toString())
            if (title) {
                url.searchParams.append('title_like', title)
            }

            const response: Response = await fetch(url.toString())
            if (!response.ok) {
                throw new Error('Не удалось загрузить посты')
            }

            return response.json()
        } catch (error) {
            console.error('Ошибка при получении постов:', (error as Error).message)
            return []
        }
    }
}
