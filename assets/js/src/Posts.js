const URL = "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs";

class Posts {

    getPosts() {
        fetch(URL).then(function (response) {
            if (response.ok) {
                console.log("requisição de posts ok");

                // Check if response went through
                response.json().then(function (data) {
                    // DOM element node to render results
                    let blogWrapper = document.getElementById("demo");

                    // Map all the results
                    let allPosts = data
                        .map(function (item) {
                            let capFirstChar = item.title.charAt(0).toUpperCase(); // uppercase first letter
                            let title = `<h2 class="blog-post-title">${capFirstChar +
                                item.title.slice(1)}</h2>`; // slice first letter add capital
                            let body = `<p>${item.body + item.body + item.body + item.body}</p>`;
                            let meta = `<p class="blog-post-meta">Post #${
                                item.id
                                } Autor: <a href='#'>${item.id}</a></p>`;
                            let blogPost = `<div class='blog-post'>${title +
                                meta +
                                "<hr>" +
                                body}</div>`;
                            return blogPost;
                        })
                        .splice(0, 4) // reduces array
                        .join("");

                    // add results to DOM element
                    blogWrapper.innerHTML = allPosts;
                });
            } else {
                // Response wasn't ok. Check dev tools
                console.log("response failed?");
            }
        });
    };

    searchPost(q) {
        fetch(URL + `?search=${q}`)
            .then(response => response.json())
            .then(json => {
                let searchResult = document.querySelector("#searchResult");
                let result = json.map(result => (
                    `<li><a href='post.html?${result.id}'>${result.title + "<br>" + result.body}</a></li>`
                )).join("");
                searchResult.style.visibility = "visible";
                searchResult.innerHTML = result;
            })
    }

    getPost(post) {
        const postWrapper = document.querySelector("#post");
        const postTitle = postWrapper.querySelector("h3");
        const postBody = postWrapper.querySelector(".blog-post");
        fetch(URL + '/' + post).then(
            response => response.json()
        ).then(
            post => {
                postTitle.innerHTML = post.title;
                postBody.innerHTML = post.body;
            }
        )
    }

    updateText(min, max) {
        const random = Math.random() * (min, max);
        const floor = Math.floor(random);
        fetch(URL + '/' + floor)
            .then(response => response.json())
            .then(post => {
                const textWrapper = document.querySelector("#updateText");
                textWrapper.innerHTML = post.title + " " + post.body;
            })
    }
};

export default Posts;
//console