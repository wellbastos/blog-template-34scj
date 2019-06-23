/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/src/Posts.js":
/*!********************************!*\
  !*** ./assets/js/src/Posts.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var URL = "https://5d04064fd1471e00149bb174.mockapi.io/api/v1/blogs"; // JAVASCRIPT ES6 CLASS

var Posts =
/*#__PURE__*/
function () {
  function Posts() {
    _classCallCheck(this, Posts);
  }

  _createClass(Posts, [{
    key: "getPosts",
    // METHOD/FUNCTIONS
    value: function getPosts() {
      fetch(URL).then(function (response) {
        if (response.ok) {
          console.log("requisição de posts ok"); // Check if response went through

          response.json().then(function (data) {
            // DOM element node to render results
            var blogWrapper = document.getElementById("demo"); // Map all the results

            var allPosts = data.map(function (item) {
              var capFirstChar = item.title.charAt(0).toUpperCase(); // uppercase first letter

              var title = "<h2 class=\"blog-post-title\">".concat(capFirstChar + item.title.slice(1), "</h2>"); // slice first letter add capital

              var body = "<p>".concat(item.body + item.body + item.body + item.body, "</p>");
              var meta = "<p class=\"blog-post-meta\">Post #".concat(item.id, " Autor: <a href='#'>").concat(item.id, "</a></p>");
              var blogPost = "<div class='blog-post'>".concat(title + meta + "<hr>" + body, "</div>");
              return blogPost;
            }).splice(0, 4) // reduces array
            .join(""); // add results to DOM element

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
      fetch(URL + "?search=".concat(q)) // fetch API
      .then(function (response) {
        return response.json();
      }) // Promise
      .then(function (json) {
        var searchResult = document.querySelector("#searchResult");
        var result = json.map(function (result) {
          return (// map array functional
            "<li><a href='post.html?".concat(result.id, "'>").concat(result.title + "<br>" + result.body, "</a></li>")
          );
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
      var random = Math.random() * (min, max); // math random number

      console.log("random => ", random);
      var floor = Math.floor(random); // arredondamento

      console.log("post floor => ", floor);
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
/* harmony default export */ __webpack_exports__["default"] = (Posts); // export default es6

/***/ }),

/***/ "./assets/js/src/scripts.js":
/*!**********************************!*\
  !*** ./assets/js/src/scripts.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Posts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Posts.js */ "./assets/js/src/Posts.js");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.js */ "./assets/js/src/search.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var URL = location.pathname; // location é objeto do DOM (window.location)

var POST_ID = location.search.substring(1);
var posts = new _Posts_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

var Init =
/*#__PURE__*/
function () {
  function Init() {
    _classCallCheck(this, Init);
  }

  _createClass(Init, [{
    key: "index",
    value: function index() {
      _search_js__WEBPACK_IMPORTED_MODULE_1__["default"].openSearch();
      posts.getPosts();
    }
  }, {
    key: "start",
    value: function start() {
      if (URL === '/index.html') {
        this.index();
      } else if (URL === '/post.html') {
        _search_js__WEBPACK_IMPORTED_MODULE_1__["default"].openSearch();
        _search_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateButton();
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

/***/ "./assets/js/src/search.js":
/*!*********************************!*\
  !*** ./assets/js/src/search.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Posts */ "./assets/js/src/Posts.js");
 // MODULE DESIGN PATTERN
// IIFE
// IMPORT / EXPORT ES6

var SEARCH = function () {
  return {
    openSearch: function openSearch() {
      document.getElementById("searchLink").addEventListener("click", function () {
        var wrapper = document.querySelector("#searchDiv");
        var input = document.querySelector("#searchDiv > input");
        var submitSearch = document.querySelector("#submitSearch");
        wrapper;
        wrapper.style.display = "block";
        wrapper.animate([// keyframes
        {
          transform: "translateX(15px)"
        }, {
          transform: "translateX(0px)"
        }], {
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
      var posts1 = new _Posts__WEBPACK_IMPORTED_MODULE_0__["default"]();
      posts1.searchPost(searchTerm);
    },
    updateButton: function updateButton() {
      var postsUpdate = new _Posts__WEBPACK_IMPORTED_MODULE_0__["default"]();
      document.querySelector("#updateButton").addEventListener("click", function () {
        postsUpdate.updateText(0, 50);
      });
    }
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (SEARCH);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map