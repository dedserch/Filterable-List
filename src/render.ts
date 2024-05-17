interface Post {
    id: number
    title: string
    body: string
}

const renderPosts = (posts: Post[], container: HTMLElement): void => {
    container.innerHTML = ''
    const uniquePosts: Post[] = removeDuplicates(posts, 'id')
    uniquePosts.forEach(post => {
        const postElement: HTMLDivElement = document.createElement('div')
        postElement.classList.add('post')

        const titleElement: HTMLHeadingElement = document.createElement('h2')
        titleElement.textContent = post.title

        const bodyElement: HTMLParagraphElement = document.createElement('p')
        bodyElement.textContent = post.body

        postElement.appendChild(titleElement)
        postElement.appendChild(bodyElement)

        container.appendChild(postElement)
    })
}

const removeDuplicates = <T>(arr: T[], prop: keyof T): T[] => {
    return arr.filter((obj, index, self) =>
        index === self.findIndex((o) => o[prop] === obj[prop])
    )
}

export { renderPosts }
