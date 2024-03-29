//yikes scary code goes brrr// listens for the submit button submit event and performs a function
document.getElementById("blogForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // takes all inputed info and trims excess spaces
    const username = document.getElementById("username").value.trim();
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    //checks that the fields have been filled out
    if (username === "" || title === "" || content === "") {
        alert("Please complete all fields.");
        return;
    }
    //creates a post object to store users post data
    const post = {
        username: username,
        title: title,
        content: content
    };
    // uses local storage to store object data, adds the new post object to the array or initializes the array if it is the first submission
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    // directs user to the blog page where they can view all posts
    window.location.href = "blog.html";
    // resets input boxes to empty strings
    document.getElementById("username").value = "";
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
});

