// oo wowee this one adds all exsisting posts to the main element with class blogPosts
window.onload = function() {
    const blogPosts = document.getElementById("blogPosts");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    //creates a separate div element for each post object
    posts.forEach(function(post) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        //makes the content of username into a paragraph 
        const usernamePara = document.createElement('h2');
        usernamePara.textContent = "Username: " + post.username;
        //makes the content of title into a paragraph 
        const titlePara = document.createElement('h3');
        titlePara.textContent = "Title: " + post.title;
        //makes the content of 'Content' into a paragraph
        const contentPara = document.createElement('p');
        contentPara.textContent = "Content: " + post.content;
        //adds all changes
        postDiv.appendChild(usernamePara);
        postDiv.appendChild(titlePara);
        postDiv.appendChild(contentPara);

        blogPosts.appendChild(postDiv);
    });
};

