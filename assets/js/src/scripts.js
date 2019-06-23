import Posts from './Posts.js';
import SEARCH from './search.js';

const POST_ID = location.search.substring(1);
const posts = new Posts();

class Init {

    index() {
        SEARCH.openSearch();
        posts.getPosts();
    }

    start() {
        // const regex = URL == "/(.*?)\/index.html/gm";
        const regexIndex = location.pathname.match(/(.*?)\/index.html/) ? true : false;
        const regexPost = location.pathname.match(/(.*?)\/post.html/) ? true : false;
        // console.log("pathname before regex", URL.pathname);
        if (regexIndex) {
            // console.log("index page");
            // console.log("pathname", URL.pathname);
            this.index();
        } else if (regexPost) {
            SEARCH.openSearch();
            SEARCH.updateButton();
            posts.getPost(POST_ID)
            // console.log("pathname", URL.pathname);
            // console.log("post page");
        } else {
            // console.log("no route specified");
            // console.log("pathname", URL.pathname);
            this.index();
        }
    }
};
const init = new Init();
init.start();