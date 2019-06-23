import Posts from './Posts.js';
import SEARCH from './search.js';

const URL = location.pathname; // location é objeto do DOM (window.location)
const POST_ID = location.search.substring(1);
const posts = new Posts();

class Init {

    index() {
        SEARCH.openSearch();
        posts.getPosts();
    }

    start() {
        if (URL === '/index.html') {
            this.index();
        } else if (URL === '/post.html') {
            SEARCH.openSearch();
            SEARCH.updateButton();
            posts.getPost(POST_ID)
            console.log("my posts");
        } else {
            this.index();
        }
    }
};
const init = new Init();
init.start();