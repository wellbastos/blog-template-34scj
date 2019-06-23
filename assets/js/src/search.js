import Posts from "./Posts";

// MODULE DESIGN PATTERN
// IIFE
// IMPORT / EXPORT ES6
const SEARCH = (function () {
    return {
        openSearch: function () {
            document.getElementById("searchLink").addEventListener("click", () => {
                let wrapper = document.querySelector("#searchDiv");
                let input = document.querySelector("#searchDiv > input");
                let submitSearch = document.querySelector("#submitSearch");

                wrapper
                wrapper.style.display = "block";
                wrapper.animate(
                    [
                        // keyframes
                        { transform: "translateX(15px)" },
                        { transform: "translateX(0px)" }
                    ],
                    {
                        // timing options
                        duration: 300,
                        iterations: 1
                    }
                );
                input.focus();
                submitSearch.addEventListener("click", function () {
                    SEARCH.sendSearch();
                });
            });
        },
        sendSearch: function () {
            let searchTerm = document.querySelector("#searchTerm").value;
            const posts1 = new Posts;
            posts1.searchPost(searchTerm);
        },
        updateButton: function () {
            const postsUpdate = new Posts;
            document.querySelector("#updateButton")
                .addEventListener("click", function () { postsUpdate.updateText(0, 50) });
        }
    };
})();

export default SEARCH;