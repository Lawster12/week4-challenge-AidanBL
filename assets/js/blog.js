// oo wowee
window.onload = function() {
    const blogPosts = document.getElementById("blogPosts");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.forEach(function(post) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const usernamePara = document.createElement('p');
        usernamePara.textContent = "Username: " + post.username;

        const titlePara = document.createElement('p');
        titlePara.textContent = "Title: " + post.title;

        const contentPara = document.createElement('p');
        contentPara.textContent = "Content: " + post.content;

        postDiv.appendChild(usernamePara);
        postDiv.appendChild(titlePara);
        postDiv.appendChild(contentPara);

        blogPosts.appendChild(postDiv);
    });
};

