/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Posts = __webpack_require__(1);
	
	var _Posts2 = _interopRequireDefault(_Posts);
	
	var _search = __webpack_require__(2);
	
	var _search2 = _interopRequireDefault(_search);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var URL = location.pathname;
	var POST_ID = location.search.substring(1);
	var posts = new _Posts2.default();
	
	var Init = function () {
	    function Init() {
	        _classCallCheck(this, Init);
	    }
	
	    _createClass(Init, [{
	        key: 'index',
	        value: function index() {
	            _search2.default.openSearch();
	            posts.getPosts();
	        }
	    }, {
	        key: 'start',
	        value: function start() {
	            if (URL === '/index.html') {
	                this.index();
	            } else if (URL === '/post.html') {
	                _search2.default.openSearch();
	                _search2.default.updateButton();
	                posts.getPost(POST_ID);
	                console.log("my posts");
	            } else {
	                this.index();
	            }
	        }
	    }]);
	
	    return Init;
	}();
	
	;
	var init = new Init();
	init.start();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var URL = "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs";
	
	var Posts = function () {
	    function Posts() {
	        _classCallCheck(this, Posts);
	    }
	
	    _createClass(Posts, [{
	        key: "getPosts",
	        value: function getPosts() {
	            fetch(URL).then(function (response) {
	                if (response.ok) {
	                    console.log("requisição de posts ok");
	
	                    // Check if response went through
	                    response.json().then(function (data) {
	                        // DOM element node to render results
	                        var blogWrapper = document.getElementById("demo");
	
	                        // Map all the results
	                        var allPosts = data.map(function (item) {
	                            var capFirstChar = item.title.charAt(0).toUpperCase(); // uppercase first letter
	                            var title = "<h2 class=\"blog-post-title\">" + (capFirstChar + item.title.slice(1)) + "</h2>"; // slice first letter add capital
	                            var body = "<p>" + (item.body + item.body + item.body + item.body) + "</p>";
	                            var meta = "<p class=\"blog-post-meta\">Post #" + item.id + " Autor: <a href='#'>" + item.id + "</a></p>";
	                            var blogPost = "<div class='blog-post'>" + (title + meta + "<hr>" + body) + "</div>";
	                            return blogPost;
	                        }).splice(0, 4) // reduces array
	                        .join("");
	
	                        // add results to DOM element
	                        blogWrapper.innerHTML = allPosts;
	                    });
	                } else {
	                    // Response wasn't ok. Check dev tools
	                    console.log("response failed?");
	                }
	            });
	        }
	    }, {
	        key: "searchPost",
	        value: function searchPost(q) {
	            fetch(URL + ("?search=" + q)).then(function (response) {
	                return response.json();
	            }).then(function (json) {
	                var searchResult = document.querySelector("#searchResult");
	                var result = json.map(function (result) {
	                    return "<li><a href='post.html?" + result.id + "'>" + (result.title + "<br>" + result.body) + "</a></li>";
	                }).join("");
	                searchResult.style.visibility = "visible";
	                searchResult.innerHTML = result;
	            });
	        }
	    }, {
	        key: "getPost",
	        value: function getPost(post) {
	            var postWrapper = document.querySelector("#post");
	            var postTitle = postWrapper.querySelector("h3");
	            var postBody = postWrapper.querySelector(".blog-post");
	            fetch(URL + '/' + post).then(function (response) {
	                return response.json();
	            }).then(function (post) {
	                postTitle.innerHTML = post.title;
	                postBody.innerHTML = post.body;
	            });
	        }
	    }, {
	        key: "updateText",
	        value: function updateText(min, max) {
	            var random = Math.random() * (min, max);
	            var floor = Math.floor(random);
	            fetch(URL + '/' + floor).then(function (response) {
	                return response.json();
	            }).then(function (post) {
	                var textWrapper = document.querySelector("#updateText");
	                textWrapper.innerHTML = post.title + " " + post.body;
	            });
	        }
	    }]);
	
	    return Posts;
	}();
	
	;
	
	exports.default = Posts;
	//console

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _Posts = __webpack_require__(1);
	
	var _Posts2 = _interopRequireDefault(_Posts);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SEARCH = function () {
	    return {
	        openSearch: function openSearch() {
	            document.getElementById("searchLink").addEventListener("click", function () {
	                var wrapper = document.querySelector("#searchDiv");
	                var input = document.querySelector("#searchDiv > input");
	                var submitSearch = document.querySelector("#submitSearch");
	
	                wrapper;
	                wrapper.style.display = "block";
	                wrapper.animate([
	                // keyframes
	                { transform: "translateX(15px)" }, { transform: "translateX(0px)" }], {
	                    // timing options
	                    duration: 300,
	                    iterations: 1
	                });
	                input.focus();
	                submitSearch.addEventListener("click", function () {
	                    SEARCH.sendSearch();
	                });
	            });
	        },
	        sendSearch: function sendSearch() {
	            var searchTerm = document.querySelector("#searchTerm").value;
	            var posts1 = new _Posts2.default();
	            posts1.searchPost(searchTerm);
	        },
	        updateButton: function updateButton() {
	            var posts1 = new _Posts2.default();
	            document.querySelector("#updateButton").addEventListener("click", function () {
	                posts1.updateText(0, 50);
	            });
	        }
	
	    };
	}();
	
	exports.default = SEARCH;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map