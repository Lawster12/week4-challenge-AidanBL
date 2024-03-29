// oo wowee this one adds all exsisting posts to the main element with class blogPosts

function toggleDarkMode() {
    if (dark) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

function enableDarkMode() {
    dark = true;
    document.body.style.backgroundColor = "var(--colorBlack)";
    document.querySelector('header').style.backgroundColor = "var(--colorDark)";
    document.querySelector('footer').style.backgroundColor = "var(--colorDark)";
    document.getElementById('blogForm').style.backgroundColor = "var(--colorDark)";
    document.getElementById("Darkmode").checked = true; 
}

function disableDarkMode() {
    dark = false;
    document.body.style.backgroundColor = "var(--colorWhite)"; 
    document.querySelector('header').style.backgroundColor = "var(--colorLight)";
    document.querySelector('footer').style.backgroundColor = "var(--colorLight)";
    document.getElementById('blogForm').style.backgroundColor = "var(--colorLight)";
    document.getElementById("Darkmode").checked = false; 
}

document.getElementById("Darkmode").addEventListener("change", function(event){
    if (event.target.checked) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

window.addEventListener('beforeunload', function() {
    localStorage.setItem('darkModeEnabled', dark.toString());
});

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
    if (localStorage.getItem('darkModeEnabled') === 'true') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
};
