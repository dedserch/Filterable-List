const renderPosts = (posts, container) => {
    container.innerHTML = '';
    const uniquePosts = removeDuplicates(posts, 'id');
    uniquePosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;
        const bodyElement = document.createElement('p');
        bodyElement.textContent = post.body;
        postElement.appendChild(titleElement);
        postElement.appendChild(bodyElement);
        container.appendChild(postElement);
    });
};
const removeDuplicates = (arr, prop) => {
    return arr.filter((obj, index, self) => index === self.findIndex((o) => o[prop] === obj[prop]));
};
export { renderPosts };
