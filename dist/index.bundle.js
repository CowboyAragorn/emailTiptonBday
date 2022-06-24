/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/skeleton.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/skeleton.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./ucfKnights.otf */ "./src/ucfKnights.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./NotoSansJP-Regular.otf */ "./src/NotoSansJP-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nhtml{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\nbody{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\n@font-face{\n    font-family: 'ucf';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    font-weight: 600;\n    font-style: normal;\n}\n@font-face{\n    font-family: 'noto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "); \n    font-weight: 600;\n    font-style: normal;\n}\n#banner{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: RGB(255, 202, 6);\n    height: 20%;\n    width: 100%;\n    \n}\n\n#bannerFlexContainer{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n   \n    height: 100%;\n    width: 90%;\n}\n    #bannerTitleContainer, #currentDisplayedInboxContainer{\n        display: flex;\n        height: 50%;\n        align-items: end;\n        justify-content: center;\n    }\n        #bannerHeader1{\n            font-family: 'ucf';\n            font-size:70pt;\n        }\n        #bannerHeader2,#currentDisplayedInbox{\n            font-family: 'ucf';\n            font-size:45pt;\n        }\n    \n\n#base{\n    display: flex;\n    height: 80%;\n    width: 100%;\n}\n.btn{\n    height: fit-content;\n}\n\n\n\n#menuBarContainer{\n    display: flex;\n    flex-direction: column;\n    width: 15%;\n    border: 2pt black solid;\n    background-color: black;\n    justify-content: center;  \n    align-items: top;  \n}\n\n\n#menuBarContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#overallListMenuContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10%;\n    height: 80%;\n    gap: 10%\n}\n\n.listBtn{\n    font-family: 'ucf';\n    font-size: 24pt;\n    height: 5%;\n    background-color: black;\n    border: none;\n    cursor: pointer;\n    width: 60%;\n    width: fit-content;\n    color: RGB(255, 202, 6);\n}\n\n\n\n\n\n/*Right hand window for displaying emails*/\n        #emailDisplayContainer{\n            height: 100%;\n            width: 85%;\n            background-position: center top;\n            justify-content: center;\n            align-items: center;\n            background-repeat: no-repeat;\n            background-size: cover;\n            display: flex;\n            font-family: sans-serif;\n\n        }\n        #emailDisplayFlexContainer{\n            display: flex;\n            flex-direction: column;\n            height: 80%;\n            width: 80%;\n            border: solid 1pt black;\n            gap: 5pt;\n        }\n        #emailFlexContainer{\n            display: flex;\n            height: fit-content;\n            width: 100%;\n            align-items: center;\n            background-color: whitesmoke;\n            cursor: pointer;\n            border: none;\n            gap:2%;\n            font-size: 13pt;\n        }\n        #emailFlexContainer:hover{\n            border: inset 1pt RGB(255, 202, 6);\n        }\n\n\n        .emailFrom{\n            display: flex;\n            margin: 0;\n            padding: 5pt;\n            width: 20%;\n            \n        }\n        .emailTitle{\n            display: flex;\n            margin: 0;\n            padding: 5pt;\n            width: 65%;\n            \n        }\n\n\n/*open email popout*/\n/*Add List popout Box*/\n#emailPopoutBoxContainer{\n    position: fixed;\n    background-color: rgba(0, 0 , 0, 0.5);\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 1;\n}\n\n\n#emailPopoutBoxFlexContainer{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n#emailPopoutBox{\n    height: 300pt;\n    width: 500pt;\n    background-color: white;\n    margin-left: 7%;\n    margin-bottom: 4%;\n    border: 1pt #d8d8d8 inset;\n    border-radius: 4%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: top;\n\n}\n\n#emailDisplayTaskbar{\n    display: flex;\n    width: 100%;\n    height: 10%;\n    align-items: center;\n    \n}\n\n    #emailNameDisplay{\n        display: flex;\n        align-items: center;\n        justify-content: left;\n        padding-top: 5%;\n        padding-left: 6%;\n        font-size: 18pt;\n        font-weight: bold;\n        width: 92%;\n    }\n    #emailExitBtnContainer{\n        display: flex;\n        justify-content: right;\n        align-content:  center;\n        padding-right: 5px;\n        padding-top: 5px;\n        height: 90%;\n        width: 10%;\n    }\n    #emailExitBtn{\n        display: flex;\n        justify-content: center;\n        align-content:  center;\n        border-radius: 15px;\n        border: none;\n        background-color: RGB(255, 202, 6);\n        cursor: pointer;\n        font-size: 10pt;\n        padding: 8px 12px;\n    }\n#emailBodyInputContainer{\n    display: flex;\n    padding-top: 5pt;\n    justify-content: space-between;\n    height: 80%;\n    width: 100%;\n}\n#emailBody{\n    \n    font-size: 15pt;\n    margin-left: 2pt;\n    height: 100%;\n    width: 100%;\n    padding-left: 6%;\n    padding-right: 6%;\n    overflow: scroll;\n}\n::-webkit-scrollbar {\n    width: 0px;\n    background: transparent; /* make scrollbar transparent */\n}\n\n\n/*Login screen popup*/\n\n#loginScreenBackground{\n    position: fixed;\n    background-color: black;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 1;\n}\n\n#loginScreenBackgroundContainer{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n#loginPopupBox{\n    height: 250pt;\n    width: 500pt;\n    background-color: white;\n    border: 1pt #d8d8d8 inset;\n    border-radius: 4%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: top;\n\n}\n\n#loginHeaderContainer{\n    display: flex;\n    justify-content: left;\n    align-items: flex-end;\n    height: 15%;\n    width: 100%;\n    font-family: 'ucf';\n    margin-bottom: 3%;\n}\n#loginHeader1{\n    font-size: 30pt;\n}\n#loginHeader2{\n    font-size: 20pt;\n\n}\n\n\n#loginHeader1{\n    margin-left: 2%;\n}\n\n#inputsFlexContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 50%;\n    width: 50%;\n    gap: 10%;\n    font-family: 'ucf';\n    font-size: 15pt;\n}\n\n\n\n#userNameFlexContainer, #passwordFlexContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 5pt;\n}\n\n#userNameInput, #passwordInput{\n    width: 100%;\n    padding: 5pt;\n    font-family: sans-serif;\n    font-size: 15pt;\n}\n\n#loginBtn{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 10pt;\n    background-color: black;\n    font-family: 'ucf';\n    font-size: 12pt;\n    border: none;\n    cursor: pointer;\n    padding: 12pt 32pt;\n    width: fit-content;\n    color: RGB(255, 202, 6);\n} \n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/skeleton.css"],"names":[],"mappings":"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","sourcesContent":["\nhtml{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\nbody{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\n@font-face{\n    font-family: 'ucf';\n    src: url('./ucfKnights.otf');\n    font-weight: 600;\n    font-style: normal;\n}\n@font-face{\n    font-family: 'noto';\n    src: url('./NotoSansJP-Regular.otf'); \n    font-weight: 600;\n    font-style: normal;\n}\n#banner{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: RGB(255, 202, 6);\n    height: 20%;\n    width: 100%;\n    \n}\n\n#bannerFlexContainer{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n   \n    height: 100%;\n    width: 90%;\n}\n    #bannerTitleContainer, #currentDisplayedInboxContainer{\n        display: flex;\n        height: 50%;\n        align-items: end;\n        justify-content: center;\n    }\n        #bannerHeader1{\n            font-family: 'ucf';\n            font-size:70pt;\n        }\n        #bannerHeader2,#currentDisplayedInbox{\n            font-family: 'ucf';\n            font-size:45pt;\n        }\n    \n\n#base{\n    display: flex;\n    height: 80%;\n    width: 100%;\n}\n.btn{\n    height: fit-content;\n}\n\n\n\n#menuBarContainer{\n    display: flex;\n    flex-direction: column;\n    width: 15%;\n    border: 2pt black solid;\n    background-color: black;\n    justify-content: center;  \n    align-items: top;  \n}\n\n\n#menuBarContainer{\n    display: flex;\n    flex-direction: column;\n}\n\n#overallListMenuContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10%;\n    height: 80%;\n    gap: 10%\n}\n\n.listBtn{\n    font-family: 'ucf';\n    font-size: 24pt;\n    height: 5%;\n    background-color: black;\n    border: none;\n    cursor: pointer;\n    width: 60%;\n    width: fit-content;\n    color: RGB(255, 202, 6);\n}\n\n\n\n\n\n/*Right hand window for displaying emails*/\n        #emailDisplayContainer{\n            height: 100%;\n            width: 85%;\n            background-position: center top;\n            justify-content: center;\n            align-items: center;\n            background-repeat: no-repeat;\n            background-size: cover;\n            display: flex;\n            font-family: sans-serif;\n\n        }\n        #emailDisplayFlexContainer{\n            display: flex;\n            flex-direction: column;\n            height: 80%;\n            width: 80%;\n            border: solid 1pt black;\n            gap: 5pt;\n        }\n        #emailFlexContainer{\n            display: flex;\n            height: fit-content;\n            width: 100%;\n            align-items: center;\n            background-color: whitesmoke;\n            cursor: pointer;\n            border: none;\n            gap:2%;\n            font-size: 13pt;\n        }\n        #emailFlexContainer:hover{\n            border: inset 1pt RGB(255, 202, 6);\n        }\n\n\n        .emailFrom{\n            display: flex;\n            margin: 0;\n            padding: 5pt;\n            width: 20%;\n            \n        }\n        .emailTitle{\n            display: flex;\n            margin: 0;\n            padding: 5pt;\n            width: 65%;\n            \n        }\n\n\n/*open email popout*/\n/*Add List popout Box*/\n#emailPopoutBoxContainer{\n    position: fixed;\n    background-color: rgba(0, 0 , 0, 0.5);\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 1;\n}\n\n\n#emailPopoutBoxFlexContainer{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n#emailPopoutBox{\n    height: 300pt;\n    width: 500pt;\n    background-color: white;\n    margin-left: 7%;\n    margin-bottom: 4%;\n    border: 1pt #d8d8d8 inset;\n    border-radius: 4%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: top;\n\n}\n\n#emailDisplayTaskbar{\n    display: flex;\n    width: 100%;\n    height: 10%;\n    align-items: center;\n    \n}\n\n    #emailNameDisplay{\n        display: flex;\n        align-items: center;\n        justify-content: left;\n        padding-top: 5%;\n        padding-left: 6%;\n        font-size: 18pt;\n        font-weight: bold;\n        width: 92%;\n    }\n    #emailExitBtnContainer{\n        display: flex;\n        justify-content: right;\n        align-content:  center;\n        padding-right: 5px;\n        padding-top: 5px;\n        height: 90%;\n        width: 10%;\n    }\n    #emailExitBtn{\n        display: flex;\n        justify-content: center;\n        align-content:  center;\n        border-radius: 15px;\n        border: none;\n        background-color: RGB(255, 202, 6);\n        cursor: pointer;\n        font-size: 10pt;\n        padding: 8px 12px;\n    }\n#emailBodyInputContainer{\n    display: flex;\n    padding-top: 5pt;\n    justify-content: space-between;\n    height: 80%;\n    width: 100%;\n}\n#emailBody{\n    \n    font-size: 15pt;\n    margin-left: 2pt;\n    height: 100%;\n    width: 100%;\n    padding-left: 6%;\n    padding-right: 6%;\n    overflow: scroll;\n}\n::-webkit-scrollbar {\n    width: 0px;\n    background: transparent; /* make scrollbar transparent */\n}\n\n\n/*Login screen popup*/\n\n#loginScreenBackground{\n    position: fixed;\n    background-color: black;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 1;\n}\n\n#loginScreenBackgroundContainer{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n#loginPopupBox{\n    height: 250pt;\n    width: 500pt;\n    background-color: white;\n    border: 1pt #d8d8d8 inset;\n    border-radius: 4%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: top;\n\n}\n\n#loginHeaderContainer{\n    display: flex;\n    justify-content: left;\n    align-items: flex-end;\n    height: 15%;\n    width: 100%;\n    font-family: 'ucf';\n    margin-bottom: 3%;\n}\n#loginHeader1{\n    font-size: 30pt;\n}\n#loginHeader2{\n    font-size: 20pt;\n\n}\n\n\n#loginHeader1{\n    margin-left: 2%;\n}\n\n#inputsFlexContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 50%;\n    width: 50%;\n    gap: 10%;\n    font-family: 'ucf';\n    font-size: 15pt;\n}\n\n\n\n#userNameFlexContainer, #passwordFlexContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    gap: 5pt;\n}\n\n#userNameInput, #passwordInput{\n    width: 100%;\n    padding: 5pt;\n    font-family: sans-serif;\n    font-size: 15pt;\n}\n\n#loginBtn{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 10pt;\n    background-color: black;\n    font-family: 'ucf';\n    font-size: 12pt;\n    border: none;\n    cursor: pointer;\n    padding: 12pt 32pt;\n    width: fit-content;\n    color: RGB(255, 202, 6);\n} \n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/skeleton.css":
/*!**************************!*\
  !*** ./src/skeleton.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./skeleton.css */ "./node_modules/css-loader/dist/cjs.js!./src/skeleton.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/emailObject.js":
/*!****************************!*\
  !*** ./src/emailObject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newEmail)
/* harmony export */ });
function newEmail(from, title, date, message){
    this.from = from,
    this.title = title,
    this.date = date,
    this.message = message
}

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inbox)
/* harmony export */ });
/* harmony import */ var _emailObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emailObject */ "./src/emailObject.js");


function inbox(){
    let inboxBtn = document.getElementById('inboxBtn');
    let emailDisplayContainer = document.getElementById('emailDisplayContainer')
    let emailDisplayFlexContainer = document.getElementById('emailDisplayFlexContainer')
    let emailNameDisplay = document.getElementById('emailNameDisplay')
    let emailBody = document.getElementById('emailBody');
    let emailExitBtn = document.getElementById('emailExitBtn')
    let currentDisplayedInbox = document.getElementById('currentDisplayedInbox')
    let substitute = "     ' +'<br>'+'      ";

    const email1 = new _emailObject__WEBPACK_IMPORTED_MODULE_0__["default"](
        'dunaway18@ucf.edu', //from
        'Need to meet', //title
        'Nov 11', //date
        'Hey coach, ' +'<br>'+'<br>'+'I need to meet with you to discuss something. It\'s about my study group with Zach and Will. Can we talk after the game on Saturday?' +'<br>'+'<br>'+'-Isaac'
    )
    const email2 = new _emailObject__WEBPACK_IMPORTED_MODULE_0__["default"](
        'jean-baptistej11@ucf.edu', //from
        'practice', //title
        'Nov 13', //date
        'hey coach,' +'<br>'+'<br>'+'are we still having practice monday? you havent said anything about it yet and none of the other coaches know. no disrespect to isaac.' +'<br>'+'<br>'+'Jeremiah'
    )
    const email3 = new _emailObject__WEBPACK_IMPORTED_MODULE_0__["default"](
        'Candy', //from
        'Hey handsome', //title
        'Jun 13', //date
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet erat et mauris porta ultrices. Suspendisse ullamcorper justo quis placerat mattis. Mauris et nisi vel nunc dapibus cursus vitae et diam. Mauris convallis rutrum tellus aliquam pharetra. Proin volutpat eu nibh sit amet blandit. Vestibulum quis ipsum vel orci congue feugiat ut et urna. In suscipit justo nec odio congue, ac laoreet enim aliquet. Sed consequat tempor libero, nec aliquam ipsum maximus quis.'
    )
    
    let inboxArray = [email1, email2]


    _emailObject__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.displayInboxPrototype = function(){
        let emailFlexContainer = document.createElement('button'); //It being a button makes it clickable
            emailFlexContainer.id = 'emailFlexContainer';
            emailFlexContainer.classList = 'emailFlex'
        //buttons to cross a task off, moving it to bottom of the array//
        let emailFrom = document.createElement('p');
            emailFrom.innerHTML = 'FROM: '+ this.from;
            emailFrom.classList = 'emailFrom';
        let emailTitle = document.createElement('p');
            emailTitle.innerHTML = this.title;
            emailTitle.classList.add('emailTitle')
        let emailDate = document.createElement('p')
            emailDate.innerHTML = this.date;
            emailDate.classList.add('emailDate');
        emailFlexContainer.addEventListener('click', ()=>{
            emailPopoutBoxContainer.style.display = 'flex';
            emailNameDisplay.innerHTML = 'Subject: ' + this.title;
            emailBody.innerHTML = this.message;
        })
        emailDisplayFlexContainer.append(emailFlexContainer);
        emailFlexContainer.append(emailFrom);
        emailFlexContainer.append(emailTitle);
        emailFlexContainer.append(emailDate);
        }



    function displayInbox(){
        const elements = document.getElementsByClassName('emailFlex');
        //Empties the visual display for repinning
        while(elements.length > 0){ 
            emailDisplayFlexContainer.removeChild(elements[0]);
        }
        for(let p = 0; p < inboxArray.length; p++){  //display the taskDisplayArray
            inboxArray[p].displayInboxPrototype();
        } 
        currentDisplayedInbox.innerHTML = 'Inbox'
        
    }

   
    emailExitBtn.addEventListener('click',()=>{
        emailPopoutBoxContainer.style.display = 'none';
    })
    inboxBtn.addEventListener('click', displayInbox);
    displayInbox();


}

/***/ }),

/***/ "./src/login.js":
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ login)
/* harmony export */ });
function login(){
    let loginBtn = document.getElementById('loginBtn');
    let userNameInput = document.getElementById('userNameInput');
    let passwordInput = document.getElementById('passwordInput');
    let loginScreenBackground = document.getElementById('loginScreenBackground')
    loginBtn.addEventListener('click', loginEventListener);
    
    function loginEventListener(){
        let userNameValue = userNameInput.value;
        let userNameLowercase = userNameValue.toLowerCase();
        let passwordValue = passwordInput.value;
        let passwordLowercase = passwordValue.toLowerCase();
    
        if(userNameLowercase == 'coachclark@ucf.edu' && passwordLowercase == 'graydog'){
            loginScreenBackground.style.display = 'none';
        }
        else{
            userNameInput.value = '';
            passwordInput.value = '';
        }
    }
}

/***/ }),

/***/ "./src/sent.js":
/*!*********************!*\
  !*** ./src/sent.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sent)
/* harmony export */ });
/* harmony import */ var _emailObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emailObject */ "./src/emailObject.js");


function sent(){
    let sentBtn = document.getElementById('sentBtn');
    let emailDisplayContainer = document.getElementById('emailDisplayContainer')
    let emailDisplayFlexContainer = document.getElementById('emailDisplayFlexContainer')
    let emailNameDisplay = document.getElementById('emailNameDisplay')
    let emailBody = document.getElementById('emailBody');
    let emailExitBtn = document.getElementById('emailExitBtn');
    let substitute = "     ' +'<br>'+'      ";

    const email1 = new _emailObject__WEBPACK_IMPORTED_MODULE_0__["default"](
        'LISTSERV-ucf-fb-coaches', //from
        'Dunaway Toxicology', //title
        'Nov 15', //date
        'Hello all,' +'<br>'+'<br>'+'Not sure who knows and who doesn\'t at this point ... toxicology on Dunaway came back positive for fentanyl. I don\'t want him wrapped up in this drug scandal that\'s happening on campus. His death is tragic and he deserves to die a hero. So this will be staying between us. If anyone asks, the pills he took were prescribed to him, and he got depressed and took too many of them. End of story.' +'<br>'+'<br>'+'Clark'
    )
    const email2 = new _emailObject__WEBPACK_IMPORTED_MODULE_0__["default"](
        'williamklansing@ucf.edu', //from
        'Study Group', //title
        'Nov 11', //date
        'Will,' +'<br>'+'<br>'+'Isaac reached out to me and said he wanted to talk about the study group he\'s in with you and Zach. I\'m gonna set your mind at ease ... nobody\'s getting in any trouble. I don\'t care how you\'re doing it ... you\'re getting those grades up. I need those two eligible to play for every game. Just keep doing what you\'re doing, and I\'ll talk to Isaac about it. I\'m sure he\'ll come around.' +'<br>'+'<br>'+'Coach Clark'
    )
    const email3 = new _emailObject__WEBPACK_IMPORTED_MODULE_0__["default"](
        'LISTSERV-ucf-fb-coaches', //from
        'Sports Drink Allergies', //title
        'Nov 10', //date
        'Hello Knights Coaches,' +'<br>'+'<br>'+'We anticipate a successful playoffs season this year, and with that being said, please remind your players that I am VERY allergic to red 40 dye. That means NO dumping over the sports drink on Coach, given that the sports drink is red/orange/purple. Blue and yellow are ok.' +'<br>'+'<br>'+'Clark'
    )
    const email4 = new _emailObject__WEBPACK_IMPORTED_MODULE_0__["default"](
        'mclark934@mailone.com', //from
        'Isaac', //title
        'Nov 13', //date
        'Hey honey,' +'<br>'+'<br>'+'I\'ve got no real reason to write you. I\'m just torn up about Isaac. Never saw it coming. What a great kid. I tried talking to Zach about it and he was standoffish. I wonder how he\'s feeling about it. I was beginning to think they were friends after all.' +'<br>'+'<br>'+'Love you. See you at home.' +'<br>'+'<br>'+'Dean'
    )
    let sentArray = [email1, email4, email2, email3]

    _emailObject__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.displaySentPrototype = function(){
        let emailFlexContainer = document.createElement('button'); //It being a button makes it clickable
            emailFlexContainer.id = 'emailFlexContainer';
            emailFlexContainer.classList = 'emailFlex'
        //buttons to cross a task off, moving it to bottom of the array//
        let emailFrom = document.createElement('p');
            emailFrom.innerHTML = 'TO: '+ this.from;
            emailFrom.classList = 'emailFrom';
        let emailTitle = document.createElement('p');
            emailTitle.innerHTML = this.title;
            emailTitle.classList.add('emailTitle');
        let emailDate = document.createElement('p')
            emailDate.innerHTML = this.date;
            emailDate.classList.add('emailDate');
        emailFlexContainer.addEventListener('click', ()=>{
            emailPopoutBoxContainer.style.display = 'flex';
            emailNameDisplay.innerHTML = 'Subject: ' + this.title;
            emailBody.innerHTML = this.message;
        })
        emailDisplayFlexContainer.append(emailFlexContainer);
        emailFlexContainer.append(emailFrom);
        emailFlexContainer.append(emailTitle)
        emailFlexContainer.append(emailDate);;
    }



    function displaySent(){
        const elements = document.getElementsByClassName('emailFlex');
        //Empties the visual display for repinning
        while(elements.length > 0){ 
            emailDisplayFlexContainer.removeChild(elements[0]);
        }
        for(let p = 0; p < sentArray.length; p++){  //display the taskDisplayArray
            sentArray[p].displaySentPrototype();
        } 
        currentDisplayedInbox.innerHTML = 'Sent'
    }

   

    sentBtn.addEventListener('click', displaySent);
   


}

/***/ }),

/***/ "./src/skeleton.js":
/*!*************************!*\
  !*** ./src/skeleton.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ skeleton)
/* harmony export */ });
/* harmony import */ var _skeleton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton.css */ "./src/skeleton.css");


//this function defines the basic layout for the webpage//
function skeleton (){
    let base = document.createElement('div');
        base.id = 'base';
    let banner = document.createElement('banner');
        banner.id = 'banner';
    document.body.append(banner);
    document.body.append(base);

//banner
let bannerFlexContainer = document.createElement('div');
    bannerFlexContainer.id = 'bannerFlexContainer';
    banner.append(bannerFlexContainer);
    let bannerTitleContainer = document.createElement('div');
        bannerTitleContainer.id = 'bannerTitleContainer'

        bannerFlexContainer.append(bannerTitleContainer);

        let bannerHeader1 = document.createElement('div');
            bannerHeader1.id = 'bannerHeader1';
            bannerHeader1.innerHTML = 'KNIGHT';
            bannerTitleContainer.append(bannerHeader1)
        let bannerHeader2 = document.createElement('div');
            bannerHeader2.id = 'bannerHeader2';
            bannerHeader2.innerHTML = 'mail';
            bannerTitleContainer.append(bannerHeader2)
    let currentDisplayedInboxContainer = document.createElement('div');
        currentDisplayedInboxContainer.id = 'currentDisplayedInboxContainer';
        bannerFlexContainer.append(currentDisplayedInboxContainer)
        let currentDisplayedInbox = document.createElement('div');
            currentDisplayedInbox.id = 'currentDisplayedInbox';
            currentDisplayedInboxContainer.append(currentDisplayedInbox)



//Left hand menu bar//
    let menuBarContainer = document.createElement('div'); //This is the menu/nav bar on left side of screen
        menuBarContainer.id = 'menuBarContainer';

       
        let overallListMenuContainer = document.createElement('div');
            overallListMenuContainer.id = 'overallListMenuContainer';
            menuBarContainer.append(overallListMenuContainer);

            
           
            let inboxBtn = document.createElement('button');
                inboxBtn.classList = 'list';
                inboxBtn.innerHTML = 'Inbox'
                inboxBtn.id = 'inboxBtn';
                inboxBtn.classList.add('btn', 'listBtn')
                overallListMenuContainer.append(inboxBtn)

            let sentBtn = document.createElement('button');
                sentBtn.classList = 'list';
                sentBtn.innerHTML = 'Sent'
                sentBtn.id = 'sentBtn';
                sentBtn.classList.add('btn', 'listBtn')
                overallListMenuContainer.append(sentBtn);

            let junkBtn = document.createElement('button');
                junkBtn.classList = 'list';
                junkBtn.innerHTML = 'Junk'
                junkBtn.id = 'junkBtn';
                junkBtn.classList.add('btn', 'listBtn')
                overallListMenuContainer.append(junkBtn)
            
            let trashBtn = document.createElement('button');
                trashBtn.classList = 'list';
                trashBtn.innerHTML = 'Trash'
                trashBtn.id = 'trashBtn';
                trashBtn.classList.add('btn', 'listBtn')
                overallListMenuContainer.append(trashBtn)
            
                
                


//Right hand popup for tasks and interactions includes popout boxes//
    let emailDisplayContainer = document.createElement('div');
        emailDisplayContainer.id = 'emailDisplayContainer';

        let emailDisplayFlexContainer = document.createElement('div');
            emailDisplayFlexContainer.id = 'emailDisplayFlexContainer'
            emailDisplayContainer.append(emailDisplayFlexContainer)




//addList popout box - created so that it disallows clicking outside the box//
    let emailPopoutBoxContainer = document.createElement('div');
        emailPopoutBoxContainer.id = 'emailPopoutBoxContainer';
        emailPopoutBoxContainer.style.display = 'none';
        emailDisplayContainer.append(emailPopoutBoxContainer)
    let emailPopoutBoxFlexContainer = document.createElement('div');
        emailPopoutBoxFlexContainer.id = 'emailPopoutBoxFlexContainer';
        emailPopoutBoxContainer.append(emailPopoutBoxFlexContainer);
    let emailPopoutBox = document.createElement('div');
            emailPopoutBox.id = 'emailPopoutBox';
            emailPopoutBoxFlexContainer.append(emailPopoutBox);

        let emailDisplayTaskbar = document.createElement('div');
                emailDisplayTaskbar.id = 'emailDisplayTaskbar';
                emailDisplayTaskbar.classList = 'listDisplayTaskbar';
                emailPopoutBox.append(emailDisplayTaskbar);
           /* let emailNameFlexDisplay = document.createElement('div');
                emailDisplayTaskBaremailNameFlexDisplay */
            let emailNameDisplay = document.createElement('div');
                    emailNameDisplay.id = 'emailNameDisplay';
                    emailNameDisplay.classList.add('listHeaders');
                    emailDisplayTaskbar.append(emailNameDisplay);
            let emailExitBtnContainer = document.createElement('div');
                emailExitBtnContainer.id = ('emailExitBtnContainer');
                emailDisplayTaskbar.append(emailExitBtnContainer);
            let emailExitBtn = document.createElement('button');
                    emailExitBtn.id = 'emailExitBtn';
                    emailExitBtn.classList = 'btn';
                    emailExitBtn.innerHTML = '&#10006;'
                    emailExitBtnContainer.append(emailExitBtn);
        //addList input box//
        let emailBodyInputContainer = document.createElement('div');
                emailBodyInputContainer.id = 'emailBodyInputContainer';
                emailPopoutBox.append(emailBodyInputContainer)

                let emailBody = document.createElement('p');
                    emailBody.id = 'emailBody';
                    emailBody.classList.add('popoutItem')
                    emailBodyInputContainer.append(emailBody);
                

//login screen
    let loginScreenBackground = document.createElement('div');
        loginScreenBackground.id=('loginScreenBackground')
        document.body.append(loginScreenBackground);

    let loginScreenBackgroundContainer = document.createElement('div');
        loginScreenBackgroundContainer.id = 'loginScreenBackgroundContainer'
        loginScreenBackground.append(loginScreenBackgroundContainer);

    let loginPopupBox = document.createElement('div');
        loginPopupBox.id = 'loginPopupBox';
        loginScreenBackgroundContainer.append(loginPopupBox);
    let loginHeaderContainer = document.createElement('div');
        loginHeaderContainer.id = 'loginHeaderContainer';
        loginPopupBox.append(loginHeaderContainer);
        let loginHeader1 = document.createElement('div');
            loginHeader1.id = 'loginHeader1';
            loginHeader1.innerHTML = 'KNIGHT';
            loginHeaderContainer.append(loginHeader1);
         let loginHeader2 = document.createElement('div');
            loginHeader2.id = 'loginHeader2';
            loginHeader2.innerHTML = 'mail';
            loginHeaderContainer.append(loginHeader2);
    let inputsFlexContainer = document.createElement('div');
        inputsFlexContainer.id = 'inputsFlexContainer';
        loginPopupBox.append(inputsFlexContainer);
        let userNameFlexContainer = document.createElement('div');
            userNameFlexContainer.id = 'userNameFlexContainer'
            inputsFlexContainer.append(userNameFlexContainer) 
            let userNameLabel = document.createElement('div');
                userNameLabel.id = 'userNameLabel';
                userNameLabel.innerHTML = 'Email'
                userNameFlexContainer.append(userNameLabel)
            let userNameInput = document.createElement('input');
                userNameInput.type = 'text';
                userNameInput.id ='userNameInput';
                userNameFlexContainer.append(userNameInput);
        let passwordFlexContainer = document.createElement('div');
            passwordFlexContainer.id = 'passwordFlexContainer';
            inputsFlexContainer.append(passwordFlexContainer);
            let passwordLabel = document.createElement('div');
                passwordLabel.id = 'passwordLabel';
                passwordLabel.innerHTML = 'Password';
                passwordFlexContainer.append(passwordLabel);
            let passwordInput = document.createElement('input');
                passwordInput.type = 'password';
                passwordInput.id = 'passwordInput';
                passwordFlexContainer.append(passwordInput);
    let loginBtn = document.createElement('button');
        loginBtn.id = 'loginBtn';
        loginBtn.innerHTML = 'Login'
        loginPopupBox.append(loginBtn);















/*          
    //Task popout box//
    let taskPopoutBoxContainer = document.createElement('div');
        taskPopoutBoxContainer.id = 'taskPopoutBoxContainer';
        emailDisplayContainer.append(taskPopoutBoxContainer)
        let taskPopoutBox = document.createElement('div');
            taskPopoutBox.id = 'taskPopoutBox';
            taskPopoutBox.classList.add('taskPopoutBox')
            taskPopoutBoxContainer.append(taskPopoutBox);

            let listDisplayTaskbar = document.createElement('div');
                listDisplayTaskbar.id = 'listDisplayTaskbar';
                listDisplayTaskbar.classList = 'listDisplayTaskbar';
                taskPopoutBox.append(listDisplayTaskbar);
                let listNameDisplay = document.createElement('div');
                    listNameDisplay.id = 'listNameDisplay';
                    listNameDisplay.classList = 'listHeaders';
                    listDisplayTaskbar.append(listNameDisplay);
                let listExitBtn = document.createElement('button');
                    listExitBtn.id = 'listExitBtn';
                    listExitBtn.classList.add('btn','listExitBtn');
                    listExitBtn.innerHTML = 'x'
                    listDisplayTaskbar.append(listExitBtn);

            

            //where user types new tasks into popup/
            let inputContainer = document.createElement('div');
                inputContainer.id = 'inputContainer';
                taskPopoutBox.append(inputContainer)
                let userTaskInput = document.createElement('input');
                    userTaskInput.type = 'text';
                    userTaskInput.id = 'userTaskInput';
                    inputContainer.append(userTaskInput);
                let addTaskBtn = document.createElement('button');
                    addTaskBtn.id = 'addTaskBtn';
                    addTaskBtn.classList = 'btn';
                    addTaskBtn.innerHTML = '+';
                    inputContainer.append(addTaskBtn);


//Task info right next to task popout box//
let taskInfoPopoutContainer = document.createElement('div');
    taskInfoPopoutContainer.id = 'taskInfoPopoutContainer';
    emailDisplayContainer.append(taskInfoPopoutContainer)
let taskInfoPopoutBox = document.createElement('div');
    taskInfoPopoutBox.id = 'taskInfoPopoutBox';
    taskInfoPopoutBox.classList.add('taskPopoutBox')
    taskInfoPopoutContainer.append(taskInfoPopoutBox);
//title display
    let taskTitleDisplayBox = document.createElement('div');
        taskTitleDisplayBox.id = 'taskTitleDisplayBox';
        taskTitleDisplayBox.classList = 'listHeaders';
        taskInfoPopoutBox.append(taskTitleDisplayBox);
        let taskTitleDisplay = document.createElement('div');
            taskTitleDisplay.id = 'taskTitleDisplay';
            taskTitleDisplay.classList = 'listHeaders';
            taskTitleDisplayBox.append(taskTitleDisplay);
//info display with titles & boxes hardcoded in, but filled in displayTaskDetails
/* 
let taskInfoDisplayContainer = document.createElement('div');
            taskInfoDisplayContainer.id = 'taskInfoDisplayContainer'
            //taskInfoPopoutBox.append(taskInfoDisplayContainer)
        let dueDateDisplayContainer = document.createElement('div');
            dueDateDisplayContainer.id = "dueDateDisplayContainer"
            //taskInfoDisplayContainer.append(dueDateDisplayContainer);
                let dueDateTitle = document.createElement('div');
                    dueDateTitle.id = 'dueDateTitle';
                    dueDateTitle.classList.add('infoTitle');
                    dueDateTitle.innerHTML = 'Finish by';
                    //dueDateDisplayContainer.append(dueDateTitle);
                let dueDateDisplay = document.createElement('div');
                    dueDateDisplay.id = 'dueDateDisplay';
                    //dueDateDisplayContainer.append(dueDateDisplay);
                let changeDueDateBtn = document.createElement('button');
                    changeDueDateBtn.id = 'changeDueDateBtn';
                    changeDueDateBtn.classList.add('btn');
                    //dueDateDisplayContainer.append(changeDueDateBtn);
                                            /* let priorityDisplayContainer = document.createElement('div');
                                                    priorityDisplayContainer.id = "priorityDisplayContainer"
                                                    taskInfoDisplayContainer.append(priorityDisplayContainer);
                                                        let priorityTitle = document.createElement('div');
                                                            priorityTitle.id = 'priorityTitle';
                                                            priorityTitle.classList.add('infoTitle');
                                                            priorityTitle.innerHTML = 'Priority Level';
                                                            priorityDisplayContainer.append(priorityTitle);
                                                        let priorityDisplay = document.createElement('div');
                                                            priorityDisplay.id = 'priorityDisplay';
                                                            priorityDisplayContainer.append(priorityDisplay);
                                                            
        let descriptionDisplayContainer = document.createElement('div');
            descriptionDisplayContainer.id = "descriptionDisplayContainer"
            //taskInfoDisplayContainer.append(descriptionDisplayContainer);
                let descriptionTitle = document.createElement('div');
                    descriptionTitle.id = 'descriptionTitle';
                    descriptionTitle.classList.add('infoTitle');
                    descriptionTitle.innerHTML = 'Notes';
                    //descriptionDisplayContainer.append(descriptionTitle);
                //let descriptionDisplay = document.createElement('button');
                let descriptionDisplay = document.createElement('textarea')
                    descriptionDisplay.id = 'descriptionDisplay';
                    //descriptionDisplayContainer.append(descriptionDisplay);


    

    //addList popout box - created so that it disallows clicking outside the box//
    let emailPopoutBoxContainer = document.createElement('div');
        emailPopoutBoxContainer.id = 'emailPopoutBoxContainer';
        emailPopoutBoxContainer.style.display = 'none';
        emailDisplayContainer.append(emailPopoutBoxContainer)
    let emailPopoutBoxFlexContainer = document.createElement('div');
        emailPopoutBoxFlexContainer.id = 'emailPopoutBoxFlexContainer';
        emailPopoutBoxContainer.append(emailPopoutBoxFlexContainer);
    let emailPopoutBox = document.createElement('div');
            emailPopoutBox.id = 'emailPopoutBox';
            emailPopoutBoxFlexContainer.append(emailPopoutBox);

        let emailDisplayTaskbar = document.createElement('div');
                emailDisplayTaskbar.id = 'emailDisplayTaskbar';
                emailDisplayTaskbar.classList = 'listDisplayTaskbar';
                emailPopoutBox.append(emailDisplayTaskbar);
            let emailNameDisplay = document.createElement('div');
                    emailNameDisplay.id = 'emailNameDisplay';
                    emailNameDisplay.classList.add('listHeaders');
                    emailDisplayTaskbar.append(emailNameDisplay);
            let emailExitBtn = document.createElement('button');
                    emailExitBtn.id = 'emailExitBtn';
                    emailExitBtn.classList = 'btn';
                    emailExitBtn.innerHTML = 'x'
                    emailDisplayTaskbar.append(emailExitBtn);
        //addList input box//
        let emailBodyInputContainer = document.createElement('div');
                emailBodyInputContainer.id = 'emailBodyInputContainer';
                emailPopoutBox.append(emailBodyInputContainer)

                let emailBody = document.createElement('input');
                    emailBody.type = 'text';
                    emailBody.id = 'emailBody';
                    emailBody.classList.add('popoutItem')
                    emailBodyInputContainer.append(emailBody);
                let addListPopupBtn = document.createElement('button');
                    addListPopupBtn.id = 'addListPopupBtn';
                    addListPopupBtn.classList.add('btn','popoutItem');
                    addListPopupBtn.innerHTML = '+';
                    emailBodyInputContainer.append(addListPopupBtn);
    
        //Add date popout items
        let calendar = document.createElement('input');
            calendar.type = 'datetime-local';
            calendar.id = 'calendar';
            calendar.classList.add('popoutItem');
            emailBodyInputContainer.append(calendar)
*/



    base.append(menuBarContainer);
    base.append(emailDisplayContainer);
};

/***/ }),

/***/ "./src/NotoSansJP-Regular.otf":
/*!************************************!*\
  !*** ./src/NotoSansJP-Regular.otf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9e559308cc2a99847c1b.otf";

/***/ }),

/***/ "./src/ucfKnights.otf":
/*!****************************!*\
  !*** ./src/ucfKnights.otf ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58b4225014ec51c9abc0.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skeleton */ "./src/skeleton.js");
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");
/* harmony import */ var _sent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sent */ "./src/sent.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/login.js");





(0,_skeleton__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_login__WEBPACK_IMPORTED_MODULE_3__["default"])();
//loginScreenBackground.style.display = 'none'
(0,_inbox__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_sent__WEBPACK_IMPORTED_MODULE_2__["default"])();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxZQUFZLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLHdCQUF3QixRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxV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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdFdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ047QUFDRjtBQUNFOztBQUU1QixxREFBUTtBQUNSLGtEQUFLO0FBQ0w7QUFDQSxrREFBSztBQUNMLGlEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vc3JjL3NrZWxldG9uLmNzcyIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2VtYWlsdGlwdG9uYmRheS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vc3JjL3NrZWxldG9uLmNzcz8zZWZjIiwid2VicGFjazovL2VtYWlsdGlwdG9uYmRheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2VtYWlsdGlwdG9uYmRheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vc3JjL2VtYWlsT2JqZWN0LmpzIiwid2VicGFjazovL2VtYWlsdGlwdG9uYmRheS8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvLi9zcmMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vc3JjL3NlbnQuanMiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vc3JjL3NrZWxldG9uLmpzIiwid2VicGFjazovL2VtYWlsdGlwdG9uYmRheS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2VtYWlsdGlwdG9uYmRheS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vdWNmS25pZ2h0cy5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL05vdG9TYW5zSlAtUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAndWNmJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAnbm90byc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTsgXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuI2Jhbm5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFJHQigyNTUsIDIwMiwgNik7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxufVxcblxcbiNiYW5uZXJGbGV4Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuICAgICNiYW5uZXJUaXRsZUNvbnRhaW5lciwgI2N1cnJlbnREaXNwbGF5ZWRJbmJveENvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBoZWlnaHQ6IDUwJTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAgICAgI2Jhbm5lckhlYWRlcjF7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICd1Y2YnO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo3MHB0O1xcbiAgICAgICAgfVxcbiAgICAgICAgI2Jhbm5lckhlYWRlcjIsI2N1cnJlbnREaXNwbGF5ZWRJbmJveHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3VjZic7XFxuICAgICAgICAgICAgZm9udC1zaXplOjQ1cHQ7XFxuICAgICAgICB9XFxuICAgIFxcblxcbiNiYXNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5idG57XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcblxcblxcbiNtZW51QmFyQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBib3JkZXI6IDJwdCBibGFjayBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7ICBcXG59XFxuXFxuXFxuI21lbnVCYXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNvdmVyYWxsTGlzdE1lbnVDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGdhcDogMTAlXFxufVxcblxcbi5saXN0QnRue1xcbiAgICBmb250LWZhbWlseTogJ3VjZic7XFxuICAgIGZvbnQtc2l6ZTogMjRwdDtcXG4gICAgaGVpZ2h0OiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGNvbG9yOiBSR0IoMjU1LCAyMDIsIDYpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKlJpZ2h0IGhhbmQgd2luZG93IGZvciBkaXNwbGF5aW5nIGVtYWlscyovXFxuICAgICAgICAjZW1haWxEaXNwbGF5Q29udGFpbmVye1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogODUlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG5cXG4gICAgICAgIH1cXG4gICAgICAgICNlbWFpbERpc3BsYXlGbGV4Q29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB0IGJsYWNrO1xcbiAgICAgICAgICAgIGdhcDogNXB0O1xcbiAgICAgICAgfVxcbiAgICAgICAgI2VtYWlsRmxleENvbnRhaW5lcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgZ2FwOjIlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcXG4gICAgICAgIH1cXG4gICAgICAgICNlbWFpbEZsZXhDb250YWluZXI6aG92ZXJ7XFxuICAgICAgICAgICAgYm9yZGVyOiBpbnNldCAxcHQgUkdCKDI1NSwgMjAyLCA2KTtcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgICAgIC5lbWFpbEZyb217XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB0O1xcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAuZW1haWxUaXRsZXtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHQ7XFxuICAgICAgICAgICAgd2lkdGg6IDY1JTtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG5cXG4vKm9wZW4gZW1haWwgcG9wb3V0Ki9cXG4vKkFkZCBMaXN0IHBvcG91dCBCb3gqL1xcbiNlbWFpbFBvcG91dEJveENvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAgLCAwLCAwLjUpO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcblxcbiNlbWFpbFBvcG91dEJveEZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZW1haWxQb3BvdXRCb3h7XFxuICAgIGhlaWdodDogMzAwcHQ7XFxuICAgIHdpZHRoOiA1MDBwdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XFxuICAgIGJvcmRlcjogMXB0ICNkOGQ4ZDggaW5zZXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcXG5cXG59XFxuXFxuI2VtYWlsRGlzcGxheVRhc2tiYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbiAgICAjZW1haWxOYW1lRGlzcGxheXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2JTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThwdDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgd2lkdGg6IDkyJTtcXG4gICAgfVxcbiAgICAjZW1haWxFeGl0QnRuQ29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiAgY2VudGVyO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgd2lkdGg6IDEwJTtcXG4gICAgfVxcbiAgICAjZW1haWxFeGl0QnRue1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogIGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMjU1LCAyMDIsIDYpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIH1cXG4jZW1haWxCb2R5SW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jZW1haWxCb2R5e1xcbiAgICBcXG4gICAgZm9udC1zaXplOiAxNXB0O1xcbiAgICBtYXJnaW4tbGVmdDogMnB0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA2JTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAvKiBtYWtlIHNjcm9sbGJhciB0cmFuc3BhcmVudCAqL1xcbn1cXG5cXG5cXG4vKkxvZ2luIHNjcmVlbiBwb3B1cCovXFxuXFxuI2xvZ2luU2NyZWVuQmFja2dyb3VuZHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbG9naW5TY3JlZW5CYWNrZ3JvdW5kQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ2luUG9wdXBCb3h7XFxuICAgIGhlaWdodDogMjUwcHQ7XFxuICAgIHdpZHRoOiA1MDBwdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB0ICNkOGQ4ZDggaW5zZXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcXG5cXG59XFxuXFxuI2xvZ2luSGVhZGVyQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ3VjZic7XFxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG4jbG9naW5IZWFkZXIxe1xcbiAgICBmb250LXNpemU6IDMwcHQ7XFxufVxcbiNsb2dpbkhlYWRlcjJ7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG5cXG59XFxuXFxuXFxuI2xvZ2luSGVhZGVyMXtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbn1cXG5cXG4jaW5wdXRzRmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBnYXA6IDEwJTtcXG4gICAgZm9udC1mYW1pbHk6ICd1Y2YnO1xcbiAgICBmb250LXNpemU6IDE1cHQ7XFxufVxcblxcblxcblxcbiN1c2VyTmFtZUZsZXhDb250YWluZXIsICNwYXNzd29yZEZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHQ7XFxufVxcblxcbiN1c2VyTmFtZUlucHV0LCAjcGFzc3dvcmRJbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVwdDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVwdDtcXG59XFxuXFxuI2xvZ2luQnRue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBwdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAndWNmJztcXG4gICAgZm9udC1zaXplOiAxMnB0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTJwdCAzMnB0O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGNvbG9yOiBSR0IoMjU1LCAyMDIsIDYpO1xcbn0gXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NrZWxldG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiw0Q0FBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsV0FBVztJQUNYLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7SUFFOUIsWUFBWTtJQUNaLFVBQVU7QUFDZDtJQUNJO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsdUJBQXVCO0lBQzNCO1FBQ0k7WUFDSSxrQkFBa0I7WUFDbEIsY0FBYztRQUNsQjtRQUNBO1lBQ0ksa0JBQWtCO1lBQ2xCLGNBQWM7UUFDbEI7OztBQUdSO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFl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QjtJQUNyQixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7O0FBRW5COzs7QUFHQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFVBQVU7SUFDVixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAndWNmJztcXG4gICAgc3JjOiB1cmwoJy4vdWNmS25pZ2h0cy5vdGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNle1xcbiAgICBmb250LWZhbWlseTogJ25vdG8nO1xcbiAgICBzcmM6IHVybCgnLi9Ob3RvU2Fuc0pQLVJlZ3VsYXIub3RmJyk7IFxcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbiNiYW5uZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMjU1LCAyMDIsIDYpO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbn1cXG5cXG4jYmFubmVyRmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgIFxcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcbiAgICAjYmFubmVyVGl0bGVDb250YWluZXIsICNjdXJyZW50RGlzcGxheWVkSW5ib3hDb250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgaGVpZ2h0OiA1MCU7XFxuICAgICAgICBhbGlnbi1pdGVtczogZW5kO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG4gICAgICAgICNiYW5uZXJIZWFkZXIxe1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAndWNmJztcXG4gICAgICAgICAgICBmb250LXNpemU6NzBwdDtcXG4gICAgICAgIH1cXG4gICAgICAgICNiYW5uZXJIZWFkZXIyLCNjdXJyZW50RGlzcGxheWVkSW5ib3h7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICd1Y2YnO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo0NXB0O1xcbiAgICAgICAgfVxcbiAgICBcXG5cXG4jYmFzZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYnRue1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbn1cXG5cXG5cXG5cXG4jbWVudUJhckNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgYm9yZGVyOiAycHQgYmxhY2sgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxcbiAgICBhbGlnbi1pdGVtczogdG9wOyAgXFxufVxcblxcblxcbiNtZW51QmFyQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jb3ZlcmFsbExpc3RNZW51Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBnYXA6IDEwJVxcbn1cXG5cXG4ubGlzdEJ0bntcXG4gICAgZm9udC1mYW1pbHk6ICd1Y2YnO1xcbiAgICBmb250LXNpemU6IDI0cHQ7XFxuICAgIGhlaWdodDogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBjb2xvcjogUkdCKDI1NSwgMjAyLCA2KTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLypSaWdodCBoYW5kIHdpbmRvdyBmb3IgZGlzcGxheWluZyBlbWFpbHMqL1xcbiAgICAgICAgI2VtYWlsRGlzcGxheUNvbnRhaW5lcntcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFxuICAgICAgICB9XFxuICAgICAgICAjZW1haWxEaXNwbGF5RmxleENvbnRhaW5lcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFwdCBibGFjaztcXG4gICAgICAgICAgICBnYXA6IDVwdDtcXG4gICAgICAgIH1cXG4gICAgICAgICNlbWFpbEZsZXhDb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGdhcDoyJTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHQ7XFxuICAgICAgICB9XFxuICAgICAgICAjZW1haWxGbGV4Q29udGFpbmVyOmhvdmVye1xcbiAgICAgICAgICAgIGJvcmRlcjogaW5zZXQgMXB0IFJHQigyNTUsIDIwMiwgNik7XFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAuZW1haWxGcm9te1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVwdDtcXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgICAgLmVtYWlsVGl0bGV7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB0O1xcbiAgICAgICAgICAgIHdpZHRoOiA2NSU7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuXFxuLypvcGVuIGVtYWlsIHBvcG91dCovXFxuLypBZGQgTGlzdCBwb3BvdXQgQm94Ki9cXG4jZW1haWxQb3BvdXRCb3hDb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwICwgMCwgMC41KTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5cXG4jZW1haWxQb3BvdXRCb3hGbGV4Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2VtYWlsUG9wb3V0Qm94e1xcbiAgICBoZWlnaHQ6IDMwMHB0O1xcbiAgICB3aWR0aDogNTAwcHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogNyU7XFxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xcbiAgICBib3JkZXI6IDFwdCAjZDhkOGQ4IGluc2V0O1xcbiAgICBib3JkZXItcmFkaXVzOiA0JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiB0b3A7XFxuXFxufVxcblxcbiNlbWFpbERpc3BsYXlUYXNrYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4gICAgI2VtYWlsTmFtZURpc3BsYXl7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogNiU7XFxuICAgICAgICBmb250LXNpemU6IDE4cHQ7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHdpZHRoOiA5MiU7XFxuICAgIH1cXG4gICAgI2VtYWlsRXhpdEJ0bkNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xcbiAgICAgICAgYWxpZ24tY29udGVudDogIGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICAgIHdpZHRoOiAxMCU7XFxuICAgIH1cXG4gICAgI2VtYWlsRXhpdEJ0bntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICBjZW50ZXI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogUkdCKDI1NSwgMjAyLCA2KTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICB9XFxuI2VtYWlsQm9keUlucHV0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuI2VtYWlsQm9keXtcXG4gICAgXFxuICAgIGZvbnQtc2l6ZTogMTVwdDtcXG4gICAgbWFyZ2luLWxlZnQ6IDJwdDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiA2JTtcXG4gICAgcGFkZGluZy1yaWdodDogNiU7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgLyogbWFrZSBzY3JvbGxiYXIgdHJhbnNwYXJlbnQgKi9cXG59XFxuXFxuXFxuLypMb2dpbiBzY3JlZW4gcG9wdXAqL1xcblxcbiNsb2dpblNjcmVlbkJhY2tncm91bmR7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuI2xvZ2luU2NyZWVuQmFja2dyb3VuZENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNsb2dpblBvcHVwQm94e1xcbiAgICBoZWlnaHQ6IDI1MHB0O1xcbiAgICB3aWR0aDogNTAwcHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFwdCAjZDhkOGQ4IGluc2V0O1xcbiAgICBib3JkZXItcmFkaXVzOiA0JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiB0b3A7XFxuXFxufVxcblxcbiNsb2dpbkhlYWRlckNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6ICd1Y2YnO1xcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcXG59XFxuI2xvZ2luSGVhZGVyMXtcXG4gICAgZm9udC1zaXplOiAzMHB0O1xcbn1cXG4jbG9naW5IZWFkZXIye1xcbiAgICBmb250LXNpemU6IDIwcHQ7XFxuXFxufVxcblxcblxcbiNsb2dpbkhlYWRlcjF7XFxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcXG59XFxuXFxuI2lucHV0c0ZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZ2FwOiAxMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAndWNmJztcXG4gICAgZm9udC1zaXplOiAxNXB0O1xcbn1cXG5cXG5cXG5cXG4jdXNlck5hbWVGbGV4Q29udGFpbmVyLCAjcGFzc3dvcmRGbGV4Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB0O1xcbn1cXG5cXG4jdXNlck5hbWVJbnB1dCwgI3Bhc3N3b3JkSW5wdXR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1cHQ7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE1cHQ7XFxufVxcblxcbiNsb2dpbkJ0bntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ3VjZic7XFxuICAgIGZvbnQtc2l6ZTogMTJwdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDEycHQgMzJwdDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBjb2xvcjogUkdCKDI1NSwgMjAyLCA2KTtcXG59IFxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9za2VsZXRvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NrZWxldG9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdFbWFpbChmcm9tLCB0aXRsZSwgZGF0ZSwgbWVzc2FnZSl7XG4gICAgdGhpcy5mcm9tID0gZnJvbSxcbiAgICB0aGlzLnRpdGxlID0gdGl0bGUsXG4gICAgdGhpcy5kYXRlID0gZGF0ZSxcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG59IiwiaW1wb3J0IG5ld0VtYWlsIGZyb20gXCIuL2VtYWlsT2JqZWN0XCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5ib3goKXtcbiAgICBsZXQgaW5ib3hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ib3hCdG4nKTtcbiAgICBsZXQgZW1haWxEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsRGlzcGxheUNvbnRhaW5lcicpXG4gICAgbGV0IGVtYWlsRGlzcGxheUZsZXhDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWxEaXNwbGF5RmxleENvbnRhaW5lcicpXG4gICAgbGV0IGVtYWlsTmFtZURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWxOYW1lRGlzcGxheScpXG4gICAgbGV0IGVtYWlsQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbEJvZHknKTtcbiAgICBsZXQgZW1haWxFeGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsRXhpdEJ0bicpXG4gICAgbGV0IGN1cnJlbnREaXNwbGF5ZWRJbmJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50RGlzcGxheWVkSW5ib3gnKVxuICAgIGxldCBzdWJzdGl0dXRlID0gXCIgICAgICcgKyc8YnI+JysnICAgICAgXCI7XG5cbiAgICBjb25zdCBlbWFpbDEgPSBuZXcgbmV3RW1haWwoXG4gICAgICAgICdkdW5hd2F5MThAdWNmLmVkdScsIC8vZnJvbVxuICAgICAgICAnTmVlZCB0byBtZWV0JywgLy90aXRsZVxuICAgICAgICAnTm92IDExJywgLy9kYXRlXG4gICAgICAgICdIZXkgY29hY2gsICcgKyc8YnI+JysnPGJyPicrJ0kgbmVlZCB0byBtZWV0IHdpdGggeW91IHRvIGRpc2N1c3Mgc29tZXRoaW5nLiBJdFxcJ3MgYWJvdXQgbXkgc3R1ZHkgZ3JvdXAgd2l0aCBaYWNoIGFuZCBXaWxsLiBDYW4gd2UgdGFsayBhZnRlciB0aGUgZ2FtZSBvbiBTYXR1cmRheT8nICsnPGJyPicrJzxicj4nKyctSXNhYWMnXG4gICAgKVxuICAgIGNvbnN0IGVtYWlsMiA9IG5ldyBuZXdFbWFpbChcbiAgICAgICAgJ2plYW4tYmFwdGlzdGVqMTFAdWNmLmVkdScsIC8vZnJvbVxuICAgICAgICAncHJhY3RpY2UnLCAvL3RpdGxlXG4gICAgICAgICdOb3YgMTMnLCAvL2RhdGVcbiAgICAgICAgJ2hleSBjb2FjaCwnICsnPGJyPicrJzxicj4nKydhcmUgd2Ugc3RpbGwgaGF2aW5nIHByYWN0aWNlIG1vbmRheT8geW91IGhhdmVudCBzYWlkIGFueXRoaW5nIGFib3V0IGl0IHlldCBhbmQgbm9uZSBvZiB0aGUgb3RoZXIgY29hY2hlcyBrbm93LiBubyBkaXNyZXNwZWN0IHRvIGlzYWFjLicgKyc8YnI+JysnPGJyPicrJ0plcmVtaWFoJ1xuICAgIClcbiAgICBjb25zdCBlbWFpbDMgPSBuZXcgbmV3RW1haWwoXG4gICAgICAgICdDYW5keScsIC8vZnJvbVxuICAgICAgICAnSGV5IGhhbmRzb21lJywgLy90aXRsZVxuICAgICAgICAnSnVuIDEzJywgLy9kYXRlXG4gICAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBhbGlxdWV0IGVyYXQgZXQgbWF1cmlzIHBvcnRhIHVsdHJpY2VzLiBTdXNwZW5kaXNzZSB1bGxhbWNvcnBlciBqdXN0byBxdWlzIHBsYWNlcmF0IG1hdHRpcy4gTWF1cmlzIGV0IG5pc2kgdmVsIG51bmMgZGFwaWJ1cyBjdXJzdXMgdml0YWUgZXQgZGlhbS4gTWF1cmlzIGNvbnZhbGxpcyBydXRydW0gdGVsbHVzIGFsaXF1YW0gcGhhcmV0cmEuIFByb2luIHZvbHV0cGF0IGV1IG5pYmggc2l0IGFtZXQgYmxhbmRpdC4gVmVzdGlidWx1bSBxdWlzIGlwc3VtIHZlbCBvcmNpIGNvbmd1ZSBmZXVnaWF0IHV0IGV0IHVybmEuIEluIHN1c2NpcGl0IGp1c3RvIG5lYyBvZGlvIGNvbmd1ZSwgYWMgbGFvcmVldCBlbmltIGFsaXF1ZXQuIFNlZCBjb25zZXF1YXQgdGVtcG9yIGxpYmVybywgbmVjIGFsaXF1YW0gaXBzdW0gbWF4aW11cyBxdWlzLidcbiAgICApXG4gICAgXG4gICAgbGV0IGluYm94QXJyYXkgPSBbZW1haWwxLCBlbWFpbDJdXG5cblxuICAgIG5ld0VtYWlsLnByb3RvdHlwZS5kaXNwbGF5SW5ib3hQcm90b3R5cGUgPSBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZW1haWxGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vSXQgYmVpbmcgYSBidXR0b24gbWFrZXMgaXQgY2xpY2thYmxlXG4gICAgICAgICAgICBlbWFpbEZsZXhDb250YWluZXIuaWQgPSAnZW1haWxGbGV4Q29udGFpbmVyJztcbiAgICAgICAgICAgIGVtYWlsRmxleENvbnRhaW5lci5jbGFzc0xpc3QgPSAnZW1haWxGbGV4J1xuICAgICAgICAvL2J1dHRvbnMgdG8gY3Jvc3MgYSB0YXNrIG9mZiwgbW92aW5nIGl0IHRvIGJvdHRvbSBvZiB0aGUgYXJyYXkvL1xuICAgICAgICBsZXQgZW1haWxGcm9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZW1haWxGcm9tLmlubmVySFRNTCA9ICdGUk9NOiAnKyB0aGlzLmZyb207XG4gICAgICAgICAgICBlbWFpbEZyb20uY2xhc3NMaXN0ID0gJ2VtYWlsRnJvbSc7XG4gICAgICAgIGxldCBlbWFpbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZW1haWxUaXRsZS5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xuICAgICAgICAgICAgZW1haWxUaXRsZS5jbGFzc0xpc3QuYWRkKCdlbWFpbFRpdGxlJylcbiAgICAgICAgbGV0IGVtYWlsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgZW1haWxEYXRlLmlubmVySFRNTCA9IHRoaXMuZGF0ZTtcbiAgICAgICAgICAgIGVtYWlsRGF0ZS5jbGFzc0xpc3QuYWRkKCdlbWFpbERhdGUnKTtcbiAgICAgICAgZW1haWxGbGV4Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGVtYWlsUG9wb3V0Qm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBlbWFpbE5hbWVEaXNwbGF5LmlubmVySFRNTCA9ICdTdWJqZWN0OiAnICsgdGhpcy50aXRsZTtcbiAgICAgICAgICAgIGVtYWlsQm9keS5pbm5lckhUTUwgPSB0aGlzLm1lc3NhZ2U7XG4gICAgICAgIH0pXG4gICAgICAgIGVtYWlsRGlzcGxheUZsZXhDb250YWluZXIuYXBwZW5kKGVtYWlsRmxleENvbnRhaW5lcik7XG4gICAgICAgIGVtYWlsRmxleENvbnRhaW5lci5hcHBlbmQoZW1haWxGcm9tKTtcbiAgICAgICAgZW1haWxGbGV4Q29udGFpbmVyLmFwcGVuZChlbWFpbFRpdGxlKTtcbiAgICAgICAgZW1haWxGbGV4Q29udGFpbmVyLmFwcGVuZChlbWFpbERhdGUpO1xuICAgICAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gZGlzcGxheUluYm94KCl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZW1haWxGbGV4Jyk7XG4gICAgICAgIC8vRW1wdGllcyB0aGUgdmlzdWFsIGRpc3BsYXkgZm9yIHJlcGlubmluZ1xuICAgICAgICB3aGlsZShlbGVtZW50cy5sZW5ndGggPiAwKXsgXG4gICAgICAgICAgICBlbWFpbERpc3BsYXlGbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKGVsZW1lbnRzWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IHAgPSAwOyBwIDwgaW5ib3hBcnJheS5sZW5ndGg7IHArKyl7ICAvL2Rpc3BsYXkgdGhlIHRhc2tEaXNwbGF5QXJyYXlcbiAgICAgICAgICAgIGluYm94QXJyYXlbcF0uZGlzcGxheUluYm94UHJvdG90eXBlKCk7XG4gICAgICAgIH0gXG4gICAgICAgIGN1cnJlbnREaXNwbGF5ZWRJbmJveC5pbm5lckhUTUwgPSAnSW5ib3gnXG4gICAgICAgIFxuICAgIH1cblxuICAgXG4gICAgZW1haWxFeGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBlbWFpbFBvcG91dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pXG4gICAgaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5SW5ib3gpO1xuICAgIGRpc3BsYXlJbmJveCgpO1xuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpbigpe1xuICAgIGxldCBsb2dpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbkJ0bicpO1xuICAgIGxldCB1c2VyTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJOYW1lSW5wdXQnKTtcbiAgICBsZXQgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZElucHV0Jyk7XG4gICAgbGV0IGxvZ2luU2NyZWVuQmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpblNjcmVlbkJhY2tncm91bmQnKVxuICAgIGxvZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9naW5FdmVudExpc3RlbmVyKTtcbiAgICBcbiAgICBmdW5jdGlvbiBsb2dpbkV2ZW50TGlzdGVuZXIoKXtcbiAgICAgICAgbGV0IHVzZXJOYW1lVmFsdWUgPSB1c2VyTmFtZUlucHV0LnZhbHVlO1xuICAgICAgICBsZXQgdXNlck5hbWVMb3dlcmNhc2UgPSB1c2VyTmFtZVZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBwYXNzd29yZFZhbHVlID0gcGFzc3dvcmRJbnB1dC52YWx1ZTtcbiAgICAgICAgbGV0IHBhc3N3b3JkTG93ZXJjYXNlID0gcGFzc3dvcmRWYWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIFxuICAgICAgICBpZih1c2VyTmFtZUxvd2VyY2FzZSA9PSAnY29hY2hjbGFya0B1Y2YuZWR1JyAmJiBwYXNzd29yZExvd2VyY2FzZSA9PSAnZ3JheWRvZycpe1xuICAgICAgICAgICAgbG9naW5TY3JlZW5CYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHVzZXJOYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgbmV3RW1haWwgZnJvbSBcIi4vZW1haWxPYmplY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZW50KCl7XG4gICAgbGV0IHNlbnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VudEJ0bicpO1xuICAgIGxldCBlbWFpbERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWxEaXNwbGF5Q29udGFpbmVyJylcbiAgICBsZXQgZW1haWxEaXNwbGF5RmxleENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbERpc3BsYXlGbGV4Q29udGFpbmVyJylcbiAgICBsZXQgZW1haWxOYW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbE5hbWVEaXNwbGF5JylcbiAgICBsZXQgZW1haWxCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsQm9keScpO1xuICAgIGxldCBlbWFpbEV4aXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWxFeGl0QnRuJyk7XG4gICAgbGV0IHN1YnN0aXR1dGUgPSBcIiAgICAgJyArJzxicj4nKycgICAgICBcIjtcblxuICAgIGNvbnN0IGVtYWlsMSA9IG5ldyBuZXdFbWFpbChcbiAgICAgICAgJ0xJU1RTRVJWLXVjZi1mYi1jb2FjaGVzJywgLy9mcm9tXG4gICAgICAgICdEdW5hd2F5IFRveGljb2xvZ3knLCAvL3RpdGxlXG4gICAgICAgICdOb3YgMTUnLCAvL2RhdGVcbiAgICAgICAgJ0hlbGxvIGFsbCwnICsnPGJyPicrJzxicj4nKydOb3Qgc3VyZSB3aG8ga25vd3MgYW5kIHdobyBkb2VzblxcJ3QgYXQgdGhpcyBwb2ludCAuLi4gdG94aWNvbG9neSBvbiBEdW5hd2F5IGNhbWUgYmFjayBwb3NpdGl2ZSBmb3IgZmVudGFueWwuIEkgZG9uXFwndCB3YW50IGhpbSB3cmFwcGVkIHVwIGluIHRoaXMgZHJ1ZyBzY2FuZGFsIHRoYXRcXCdzIGhhcHBlbmluZyBvbiBjYW1wdXMuIEhpcyBkZWF0aCBpcyB0cmFnaWMgYW5kIGhlIGRlc2VydmVzIHRvIGRpZSBhIGhlcm8uIFNvIHRoaXMgd2lsbCBiZSBzdGF5aW5nIGJldHdlZW4gdXMuIElmIGFueW9uZSBhc2tzLCB0aGUgcGlsbHMgaGUgdG9vayB3ZXJlIHByZXNjcmliZWQgdG8gaGltLCBhbmQgaGUgZ290IGRlcHJlc3NlZCBhbmQgdG9vayB0b28gbWFueSBvZiB0aGVtLiBFbmQgb2Ygc3RvcnkuJyArJzxicj4nKyc8YnI+JysnQ2xhcmsnXG4gICAgKVxuICAgIGNvbnN0IGVtYWlsMiA9IG5ldyBuZXdFbWFpbChcbiAgICAgICAgJ3dpbGxpYW1rbGFuc2luZ0B1Y2YuZWR1JywgLy9mcm9tXG4gICAgICAgICdTdHVkeSBHcm91cCcsIC8vdGl0bGVcbiAgICAgICAgJ05vdiAxMScsIC8vZGF0ZVxuICAgICAgICAnV2lsbCwnICsnPGJyPicrJzxicj4nKydJc2FhYyByZWFjaGVkIG91dCB0byBtZSBhbmQgc2FpZCBoZSB3YW50ZWQgdG8gdGFsayBhYm91dCB0aGUgc3R1ZHkgZ3JvdXAgaGVcXCdzIGluIHdpdGggeW91IGFuZCBaYWNoLiBJXFwnbSBnb25uYSBzZXQgeW91ciBtaW5kIGF0IGVhc2UgLi4uIG5vYm9keVxcJ3MgZ2V0dGluZyBpbiBhbnkgdHJvdWJsZS4gSSBkb25cXCd0IGNhcmUgaG93IHlvdVxcJ3JlIGRvaW5nIGl0IC4uLiB5b3VcXCdyZSBnZXR0aW5nIHRob3NlIGdyYWRlcyB1cC4gSSBuZWVkIHRob3NlIHR3byBlbGlnaWJsZSB0byBwbGF5IGZvciBldmVyeSBnYW1lLiBKdXN0IGtlZXAgZG9pbmcgd2hhdCB5b3VcXCdyZSBkb2luZywgYW5kIElcXCdsbCB0YWxrIHRvIElzYWFjIGFib3V0IGl0LiBJXFwnbSBzdXJlIGhlXFwnbGwgY29tZSBhcm91bmQuJyArJzxicj4nKyc8YnI+JysnQ29hY2ggQ2xhcmsnXG4gICAgKVxuICAgIGNvbnN0IGVtYWlsMyA9IG5ldyBuZXdFbWFpbChcbiAgICAgICAgJ0xJU1RTRVJWLXVjZi1mYi1jb2FjaGVzJywgLy9mcm9tXG4gICAgICAgICdTcG9ydHMgRHJpbmsgQWxsZXJnaWVzJywgLy90aXRsZVxuICAgICAgICAnTm92IDEwJywgLy9kYXRlXG4gICAgICAgICdIZWxsbyBLbmlnaHRzIENvYWNoZXMsJyArJzxicj4nKyc8YnI+JysnV2UgYW50aWNpcGF0ZSBhIHN1Y2Nlc3NmdWwgcGxheW9mZnMgc2Vhc29uIHRoaXMgeWVhciwgYW5kIHdpdGggdGhhdCBiZWluZyBzYWlkLCBwbGVhc2UgcmVtaW5kIHlvdXIgcGxheWVycyB0aGF0IEkgYW0gVkVSWSBhbGxlcmdpYyB0byByZWQgNDAgZHllLiBUaGF0IG1lYW5zIE5PIGR1bXBpbmcgb3ZlciB0aGUgc3BvcnRzIGRyaW5rIG9uIENvYWNoLCBnaXZlbiB0aGF0IHRoZSBzcG9ydHMgZHJpbmsgaXMgcmVkL29yYW5nZS9wdXJwbGUuIEJsdWUgYW5kIHllbGxvdyBhcmUgb2suJyArJzxicj4nKyc8YnI+JysnQ2xhcmsnXG4gICAgKVxuICAgIGNvbnN0IGVtYWlsNCA9IG5ldyBuZXdFbWFpbChcbiAgICAgICAgJ21jbGFyazkzNEBtYWlsb25lLmNvbScsIC8vZnJvbVxuICAgICAgICAnSXNhYWMnLCAvL3RpdGxlXG4gICAgICAgICdOb3YgMTMnLCAvL2RhdGVcbiAgICAgICAgJ0hleSBob25leSwnICsnPGJyPicrJzxicj4nKydJXFwndmUgZ290IG5vIHJlYWwgcmVhc29uIHRvIHdyaXRlIHlvdS4gSVxcJ20ganVzdCB0b3JuIHVwIGFib3V0IElzYWFjLiBOZXZlciBzYXcgaXQgY29taW5nLiBXaGF0IGEgZ3JlYXQga2lkLiBJIHRyaWVkIHRhbGtpbmcgdG8gWmFjaCBhYm91dCBpdCBhbmQgaGUgd2FzIHN0YW5kb2ZmaXNoLiBJIHdvbmRlciBob3cgaGVcXCdzIGZlZWxpbmcgYWJvdXQgaXQuIEkgd2FzIGJlZ2lubmluZyB0byB0aGluayB0aGV5IHdlcmUgZnJpZW5kcyBhZnRlciBhbGwuJyArJzxicj4nKyc8YnI+JysnTG92ZSB5b3UuIFNlZSB5b3UgYXQgaG9tZS4nICsnPGJyPicrJzxicj4nKydEZWFuJ1xuICAgIClcbiAgICBsZXQgc2VudEFycmF5ID0gW2VtYWlsMSwgZW1haWw0LCBlbWFpbDIsIGVtYWlsM11cblxuICAgIG5ld0VtYWlsLnByb3RvdHlwZS5kaXNwbGF5U2VudFByb3RvdHlwZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBlbWFpbEZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgLy9JdCBiZWluZyBhIGJ1dHRvbiBtYWtlcyBpdCBjbGlja2FibGVcbiAgICAgICAgICAgIGVtYWlsRmxleENvbnRhaW5lci5pZCA9ICdlbWFpbEZsZXhDb250YWluZXInO1xuICAgICAgICAgICAgZW1haWxGbGV4Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdlbWFpbEZsZXgnXG4gICAgICAgIC8vYnV0dG9ucyB0byBjcm9zcyBhIHRhc2sgb2ZmLCBtb3ZpbmcgaXQgdG8gYm90dG9tIG9mIHRoZSBhcnJheS8vXG4gICAgICAgIGxldCBlbWFpbEZyb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBlbWFpbEZyb20uaW5uZXJIVE1MID0gJ1RPOiAnKyB0aGlzLmZyb207XG4gICAgICAgICAgICBlbWFpbEZyb20uY2xhc3NMaXN0ID0gJ2VtYWlsRnJvbSc7XG4gICAgICAgIGxldCBlbWFpbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZW1haWxUaXRsZS5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xuICAgICAgICAgICAgZW1haWxUaXRsZS5jbGFzc0xpc3QuYWRkKCdlbWFpbFRpdGxlJyk7XG4gICAgICAgIGxldCBlbWFpbERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIGVtYWlsRGF0ZS5pbm5lckhUTUwgPSB0aGlzLmRhdGU7XG4gICAgICAgICAgICBlbWFpbERhdGUuY2xhc3NMaXN0LmFkZCgnZW1haWxEYXRlJyk7XG4gICAgICAgIGVtYWlsRmxleENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBlbWFpbFBvcG91dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZW1haWxOYW1lRGlzcGxheS5pbm5lckhUTUwgPSAnU3ViamVjdDogJyArIHRoaXMudGl0bGU7XG4gICAgICAgICAgICBlbWFpbEJvZHkuaW5uZXJIVE1MID0gdGhpcy5tZXNzYWdlO1xuICAgICAgICB9KVxuICAgICAgICBlbWFpbERpc3BsYXlGbGV4Q29udGFpbmVyLmFwcGVuZChlbWFpbEZsZXhDb250YWluZXIpO1xuICAgICAgICBlbWFpbEZsZXhDb250YWluZXIuYXBwZW5kKGVtYWlsRnJvbSk7XG4gICAgICAgIGVtYWlsRmxleENvbnRhaW5lci5hcHBlbmQoZW1haWxUaXRsZSlcbiAgICAgICAgZW1haWxGbGV4Q29udGFpbmVyLmFwcGVuZChlbWFpbERhdGUpOztcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVNlbnQoKXtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlbWFpbEZsZXgnKTtcbiAgICAgICAgLy9FbXB0aWVzIHRoZSB2aXN1YWwgZGlzcGxheSBmb3IgcmVwaW5uaW5nXG4gICAgICAgIHdoaWxlKGVsZW1lbnRzLmxlbmd0aCA+IDApeyBcbiAgICAgICAgICAgIGVtYWlsRGlzcGxheUZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQoZWxlbWVudHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgcCA9IDA7IHAgPCBzZW50QXJyYXkubGVuZ3RoOyBwKyspeyAgLy9kaXNwbGF5IHRoZSB0YXNrRGlzcGxheUFycmF5XG4gICAgICAgICAgICBzZW50QXJyYXlbcF0uZGlzcGxheVNlbnRQcm90b3R5cGUoKTtcbiAgICAgICAgfSBcbiAgICAgICAgY3VycmVudERpc3BsYXllZEluYm94LmlubmVySFRNTCA9ICdTZW50J1xuICAgIH1cblxuICAgXG5cbiAgICBzZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVNlbnQpO1xuICAgXG5cblxufSIsImltcG9ydCAnLi9za2VsZXRvbi5jc3MnXG5cbi8vdGhpcyBmdW5jdGlvbiBkZWZpbmVzIHRoZSBiYXNpYyBsYXlvdXQgZm9yIHRoZSB3ZWJwYWdlLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNrZWxldG9uICgpe1xuICAgIGxldCBiYXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhc2UuaWQgPSAnYmFzZSc7XG4gICAgbGV0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Jhbm5lcicpO1xuICAgICAgICBiYW5uZXIuaWQgPSAnYmFubmVyJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChiYW5uZXIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJhc2UpO1xuXG4vL2Jhbm5lclxubGV0IGJhbm5lckZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYW5uZXJGbGV4Q29udGFpbmVyLmlkID0gJ2Jhbm5lckZsZXhDb250YWluZXInO1xuICAgIGJhbm5lci5hcHBlbmQoYmFubmVyRmxleENvbnRhaW5lcik7XG4gICAgbGV0IGJhbm5lclRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhbm5lclRpdGxlQ29udGFpbmVyLmlkID0gJ2Jhbm5lclRpdGxlQ29udGFpbmVyJ1xuXG4gICAgICAgIGJhbm5lckZsZXhDb250YWluZXIuYXBwZW5kKGJhbm5lclRpdGxlQ29udGFpbmVyKTtcblxuICAgICAgICBsZXQgYmFubmVySGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmFubmVySGVhZGVyMS5pZCA9ICdiYW5uZXJIZWFkZXIxJztcbiAgICAgICAgICAgIGJhbm5lckhlYWRlcjEuaW5uZXJIVE1MID0gJ0tOSUdIVCc7XG4gICAgICAgICAgICBiYW5uZXJUaXRsZUNvbnRhaW5lci5hcHBlbmQoYmFubmVySGVhZGVyMSlcbiAgICAgICAgbGV0IGJhbm5lckhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJhbm5lckhlYWRlcjIuaWQgPSAnYmFubmVySGVhZGVyMic7XG4gICAgICAgICAgICBiYW5uZXJIZWFkZXIyLmlubmVySFRNTCA9ICdtYWlsJztcbiAgICAgICAgICAgIGJhbm5lclRpdGxlQ29udGFpbmVyLmFwcGVuZChiYW5uZXJIZWFkZXIyKVxuICAgIGxldCBjdXJyZW50RGlzcGxheWVkSW5ib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY3VycmVudERpc3BsYXllZEluYm94Q29udGFpbmVyLmlkID0gJ2N1cnJlbnREaXNwbGF5ZWRJbmJveENvbnRhaW5lcic7XG4gICAgICAgIGJhbm5lckZsZXhDb250YWluZXIuYXBwZW5kKGN1cnJlbnREaXNwbGF5ZWRJbmJveENvbnRhaW5lcilcbiAgICAgICAgbGV0IGN1cnJlbnREaXNwbGF5ZWRJbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3VycmVudERpc3BsYXllZEluYm94LmlkID0gJ2N1cnJlbnREaXNwbGF5ZWRJbmJveCc7XG4gICAgICAgICAgICBjdXJyZW50RGlzcGxheWVkSW5ib3hDb250YWluZXIuYXBwZW5kKGN1cnJlbnREaXNwbGF5ZWRJbmJveClcblxuXG5cbi8vTGVmdCBoYW5kIG1lbnUgYmFyLy9cbiAgICBsZXQgbWVudUJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL1RoaXMgaXMgdGhlIG1lbnUvbmF2IGJhciBvbiBsZWZ0IHNpZGUgb2Ygc2NyZWVuXG4gICAgICAgIG1lbnVCYXJDb250YWluZXIuaWQgPSAnbWVudUJhckNvbnRhaW5lcic7XG5cbiAgICAgICBcbiAgICAgICAgbGV0IG92ZXJhbGxMaXN0TWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgb3ZlcmFsbExpc3RNZW51Q29udGFpbmVyLmlkID0gJ292ZXJhbGxMaXN0TWVudUNvbnRhaW5lcic7XG4gICAgICAgICAgICBtZW51QmFyQ29udGFpbmVyLmFwcGVuZChvdmVyYWxsTGlzdE1lbnVDb250YWluZXIpO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaW5ib3hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBpbmJveEJ0bi5jbGFzc0xpc3QgPSAnbGlzdCc7XG4gICAgICAgICAgICAgICAgaW5ib3hCdG4uaW5uZXJIVE1MID0gJ0luYm94J1xuICAgICAgICAgICAgICAgIGluYm94QnRuLmlkID0gJ2luYm94QnRuJztcbiAgICAgICAgICAgICAgICBpbmJveEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnbGlzdEJ0bicpXG4gICAgICAgICAgICAgICAgb3ZlcmFsbExpc3RNZW51Q29udGFpbmVyLmFwcGVuZChpbmJveEJ0bilcblxuICAgICAgICAgICAgbGV0IHNlbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBzZW50QnRuLmNsYXNzTGlzdCA9ICdsaXN0JztcbiAgICAgICAgICAgICAgICBzZW50QnRuLmlubmVySFRNTCA9ICdTZW50J1xuICAgICAgICAgICAgICAgIHNlbnRCdG4uaWQgPSAnc2VudEJ0bic7XG4gICAgICAgICAgICAgICAgc2VudEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnbGlzdEJ0bicpXG4gICAgICAgICAgICAgICAgb3ZlcmFsbExpc3RNZW51Q29udGFpbmVyLmFwcGVuZChzZW50QnRuKTtcblxuICAgICAgICAgICAgbGV0IGp1bmtCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBqdW5rQnRuLmNsYXNzTGlzdCA9ICdsaXN0JztcbiAgICAgICAgICAgICAgICBqdW5rQnRuLmlubmVySFRNTCA9ICdKdW5rJ1xuICAgICAgICAgICAgICAgIGp1bmtCdG4uaWQgPSAnanVua0J0bic7XG4gICAgICAgICAgICAgICAganVua0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnbGlzdEJ0bicpXG4gICAgICAgICAgICAgICAgb3ZlcmFsbExpc3RNZW51Q29udGFpbmVyLmFwcGVuZChqdW5rQnRuKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgdHJhc2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0cmFzaEJ0bi5jbGFzc0xpc3QgPSAnbGlzdCc7XG4gICAgICAgICAgICAgICAgdHJhc2hCdG4uaW5uZXJIVE1MID0gJ1RyYXNoJ1xuICAgICAgICAgICAgICAgIHRyYXNoQnRuLmlkID0gJ3RyYXNoQnRuJztcbiAgICAgICAgICAgICAgICB0cmFzaEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnbGlzdEJ0bicpXG4gICAgICAgICAgICAgICAgb3ZlcmFsbExpc3RNZW51Q29udGFpbmVyLmFwcGVuZCh0cmFzaEJ0bilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuXG5cbi8vUmlnaHQgaGFuZCBwb3B1cCBmb3IgdGFza3MgYW5kIGludGVyYWN0aW9ucyBpbmNsdWRlcyBwb3BvdXQgYm94ZXMvL1xuICAgIGxldCBlbWFpbERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZW1haWxEaXNwbGF5Q29udGFpbmVyLmlkID0gJ2VtYWlsRGlzcGxheUNvbnRhaW5lcic7XG5cbiAgICAgICAgbGV0IGVtYWlsRGlzcGxheUZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVtYWlsRGlzcGxheUZsZXhDb250YWluZXIuaWQgPSAnZW1haWxEaXNwbGF5RmxleENvbnRhaW5lcidcbiAgICAgICAgICAgIGVtYWlsRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZW1haWxEaXNwbGF5RmxleENvbnRhaW5lcilcblxuXG5cblxuLy9hZGRMaXN0IHBvcG91dCBib3ggLSBjcmVhdGVkIHNvIHRoYXQgaXQgZGlzYWxsb3dzIGNsaWNraW5nIG91dHNpZGUgdGhlIGJveC8vXG4gICAgbGV0IGVtYWlsUG9wb3V0Qm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVtYWlsUG9wb3V0Qm94Q29udGFpbmVyLmlkID0gJ2VtYWlsUG9wb3V0Qm94Q29udGFpbmVyJztcbiAgICAgICAgZW1haWxQb3BvdXRCb3hDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZW1haWxEaXNwbGF5Q29udGFpbmVyLmFwcGVuZChlbWFpbFBvcG91dEJveENvbnRhaW5lcilcbiAgICBsZXQgZW1haWxQb3BvdXRCb3hGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVtYWlsUG9wb3V0Qm94RmxleENvbnRhaW5lci5pZCA9ICdlbWFpbFBvcG91dEJveEZsZXhDb250YWluZXInO1xuICAgICAgICBlbWFpbFBvcG91dEJveENvbnRhaW5lci5hcHBlbmQoZW1haWxQb3BvdXRCb3hGbGV4Q29udGFpbmVyKTtcbiAgICBsZXQgZW1haWxQb3BvdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVtYWlsUG9wb3V0Qm94LmlkID0gJ2VtYWlsUG9wb3V0Qm94JztcbiAgICAgICAgICAgIGVtYWlsUG9wb3V0Qm94RmxleENvbnRhaW5lci5hcHBlbmQoZW1haWxQb3BvdXRCb3gpO1xuXG4gICAgICAgIGxldCBlbWFpbERpc3BsYXlUYXNrYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZW1haWxEaXNwbGF5VGFza2Jhci5pZCA9ICdlbWFpbERpc3BsYXlUYXNrYmFyJztcbiAgICAgICAgICAgICAgICBlbWFpbERpc3BsYXlUYXNrYmFyLmNsYXNzTGlzdCA9ICdsaXN0RGlzcGxheVRhc2tiYXInO1xuICAgICAgICAgICAgICAgIGVtYWlsUG9wb3V0Qm94LmFwcGVuZChlbWFpbERpc3BsYXlUYXNrYmFyKTtcbiAgICAgICAgICAgLyogbGV0IGVtYWlsTmFtZUZsZXhEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZW1haWxEaXNwbGF5VGFza0JhcmVtYWlsTmFtZUZsZXhEaXNwbGF5ICovXG4gICAgICAgICAgICBsZXQgZW1haWxOYW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbE5hbWVEaXNwbGF5LmlkID0gJ2VtYWlsTmFtZURpc3BsYXknO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbE5hbWVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2xpc3RIZWFkZXJzJyk7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsRGlzcGxheVRhc2tiYXIuYXBwZW5kKGVtYWlsTmFtZURpc3BsYXkpO1xuICAgICAgICAgICAgbGV0IGVtYWlsRXhpdEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGVtYWlsRXhpdEJ0bkNvbnRhaW5lci5pZCA9ICgnZW1haWxFeGl0QnRuQ29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgZW1haWxEaXNwbGF5VGFza2Jhci5hcHBlbmQoZW1haWxFeGl0QnRuQ29udGFpbmVyKTtcbiAgICAgICAgICAgIGxldCBlbWFpbEV4aXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgZW1haWxFeGl0QnRuLmlkID0gJ2VtYWlsRXhpdEJ0bic7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsRXhpdEJ0bi5jbGFzc0xpc3QgPSAnYnRuJztcbiAgICAgICAgICAgICAgICAgICAgZW1haWxFeGl0QnRuLmlubmVySFRNTCA9ICcmIzEwMDA2OydcbiAgICAgICAgICAgICAgICAgICAgZW1haWxFeGl0QnRuQ29udGFpbmVyLmFwcGVuZChlbWFpbEV4aXRCdG4pO1xuICAgICAgICAvL2FkZExpc3QgaW5wdXQgYm94Ly9cbiAgICAgICAgbGV0IGVtYWlsQm9keUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZW1haWxCb2R5SW5wdXRDb250YWluZXIuaWQgPSAnZW1haWxCb2R5SW5wdXRDb250YWluZXInO1xuICAgICAgICAgICAgICAgIGVtYWlsUG9wb3V0Qm94LmFwcGVuZChlbWFpbEJvZHlJbnB1dENvbnRhaW5lcilcblxuICAgICAgICAgICAgICAgIGxldCBlbWFpbEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsQm9keS5pZCA9ICdlbWFpbEJvZHknO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbEJvZHkuY2xhc3NMaXN0LmFkZCgncG9wb3V0SXRlbScpXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsQm9keUlucHV0Q29udGFpbmVyLmFwcGVuZChlbWFpbEJvZHkpO1xuICAgICAgICAgICAgICAgIFxuXG4vL2xvZ2luIHNjcmVlblxuICAgIGxldCBsb2dpblNjcmVlbkJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbG9naW5TY3JlZW5CYWNrZ3JvdW5kLmlkPSgnbG9naW5TY3JlZW5CYWNrZ3JvdW5kJylcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQobG9naW5TY3JlZW5CYWNrZ3JvdW5kKTtcblxuICAgIGxldCBsb2dpblNjcmVlbkJhY2tncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbG9naW5TY3JlZW5CYWNrZ3JvdW5kQ29udGFpbmVyLmlkID0gJ2xvZ2luU2NyZWVuQmFja2dyb3VuZENvbnRhaW5lcidcbiAgICAgICAgbG9naW5TY3JlZW5CYWNrZ3JvdW5kLmFwcGVuZChsb2dpblNjcmVlbkJhY2tncm91bmRDb250YWluZXIpO1xuXG4gICAgbGV0IGxvZ2luUG9wdXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbG9naW5Qb3B1cEJveC5pZCA9ICdsb2dpblBvcHVwQm94JztcbiAgICAgICAgbG9naW5TY3JlZW5CYWNrZ3JvdW5kQ29udGFpbmVyLmFwcGVuZChsb2dpblBvcHVwQm94KTtcbiAgICBsZXQgbG9naW5IZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbG9naW5IZWFkZXJDb250YWluZXIuaWQgPSAnbG9naW5IZWFkZXJDb250YWluZXInO1xuICAgICAgICBsb2dpblBvcHVwQm94LmFwcGVuZChsb2dpbkhlYWRlckNvbnRhaW5lcik7XG4gICAgICAgIGxldCBsb2dpbkhlYWRlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxvZ2luSGVhZGVyMS5pZCA9ICdsb2dpbkhlYWRlcjEnO1xuICAgICAgICAgICAgbG9naW5IZWFkZXIxLmlubmVySFRNTCA9ICdLTklHSFQnO1xuICAgICAgICAgICAgbG9naW5IZWFkZXJDb250YWluZXIuYXBwZW5kKGxvZ2luSGVhZGVyMSk7XG4gICAgICAgICBsZXQgbG9naW5IZWFkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsb2dpbkhlYWRlcjIuaWQgPSAnbG9naW5IZWFkZXIyJztcbiAgICAgICAgICAgIGxvZ2luSGVhZGVyMi5pbm5lckhUTUwgPSAnbWFpbCc7XG4gICAgICAgICAgICBsb2dpbkhlYWRlckNvbnRhaW5lci5hcHBlbmQobG9naW5IZWFkZXIyKTtcbiAgICBsZXQgaW5wdXRzRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbnB1dHNGbGV4Q29udGFpbmVyLmlkID0gJ2lucHV0c0ZsZXhDb250YWluZXInO1xuICAgICAgICBsb2dpblBvcHVwQm94LmFwcGVuZChpbnB1dHNGbGV4Q29udGFpbmVyKTtcbiAgICAgICAgbGV0IHVzZXJOYW1lRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlck5hbWVGbGV4Q29udGFpbmVyLmlkID0gJ3VzZXJOYW1lRmxleENvbnRhaW5lcidcbiAgICAgICAgICAgIGlucHV0c0ZsZXhDb250YWluZXIuYXBwZW5kKHVzZXJOYW1lRmxleENvbnRhaW5lcikgXG4gICAgICAgICAgICBsZXQgdXNlck5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHVzZXJOYW1lTGFiZWwuaWQgPSAndXNlck5hbWVMYWJlbCc7XG4gICAgICAgICAgICAgICAgdXNlck5hbWVMYWJlbC5pbm5lckhUTUwgPSAnRW1haWwnXG4gICAgICAgICAgICAgICAgdXNlck5hbWVGbGV4Q29udGFpbmVyLmFwcGVuZCh1c2VyTmFtZUxhYmVsKVxuICAgICAgICAgICAgbGV0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIHVzZXJOYW1lSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICB1c2VyTmFtZUlucHV0LmlkID0ndXNlck5hbWVJbnB1dCc7XG4gICAgICAgICAgICAgICAgdXNlck5hbWVGbGV4Q29udGFpbmVyLmFwcGVuZCh1c2VyTmFtZUlucHV0KTtcbiAgICAgICAgbGV0IHBhc3N3b3JkRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcGFzc3dvcmRGbGV4Q29udGFpbmVyLmlkID0gJ3Bhc3N3b3JkRmxleENvbnRhaW5lcic7XG4gICAgICAgICAgICBpbnB1dHNGbGV4Q29udGFpbmVyLmFwcGVuZChwYXNzd29yZEZsZXhDb250YWluZXIpO1xuICAgICAgICAgICAgbGV0IHBhc3N3b3JkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwYXNzd29yZExhYmVsLmlkID0gJ3Bhc3N3b3JkTGFiZWwnO1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkTGFiZWwuaW5uZXJIVE1MID0gJ1Bhc3N3b3JkJztcbiAgICAgICAgICAgICAgICBwYXNzd29yZEZsZXhDb250YWluZXIuYXBwZW5kKHBhc3N3b3JkTGFiZWwpO1xuICAgICAgICAgICAgbGV0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC5pZCA9ICdwYXNzd29yZElucHV0JztcbiAgICAgICAgICAgICAgICBwYXNzd29yZEZsZXhDb250YWluZXIuYXBwZW5kKHBhc3N3b3JkSW5wdXQpO1xuICAgIGxldCBsb2dpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsb2dpbkJ0bi5pZCA9ICdsb2dpbkJ0bic7XG4gICAgICAgIGxvZ2luQnRuLmlubmVySFRNTCA9ICdMb2dpbidcbiAgICAgICAgbG9naW5Qb3B1cEJveC5hcHBlbmQobG9naW5CdG4pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLyogICAgICAgICAgXG4gICAgLy9UYXNrIHBvcG91dCBib3gvL1xuICAgIGxldCB0YXNrUG9wb3V0Qm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tQb3BvdXRCb3hDb250YWluZXIuaWQgPSAndGFza1BvcG91dEJveENvbnRhaW5lcic7XG4gICAgICAgIGVtYWlsRGlzcGxheUNvbnRhaW5lci5hcHBlbmQodGFza1BvcG91dEJveENvbnRhaW5lcilcbiAgICAgICAgbGV0IHRhc2tQb3BvdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tQb3BvdXRCb3guaWQgPSAndGFza1BvcG91dEJveCc7XG4gICAgICAgICAgICB0YXNrUG9wb3V0Qm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2tQb3BvdXRCb3gnKVxuICAgICAgICAgICAgdGFza1BvcG91dEJveENvbnRhaW5lci5hcHBlbmQodGFza1BvcG91dEJveCk7XG5cbiAgICAgICAgICAgIGxldCBsaXN0RGlzcGxheVRhc2tiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBsaXN0RGlzcGxheVRhc2tiYXIuaWQgPSAnbGlzdERpc3BsYXlUYXNrYmFyJztcbiAgICAgICAgICAgICAgICBsaXN0RGlzcGxheVRhc2tiYXIuY2xhc3NMaXN0ID0gJ2xpc3REaXNwbGF5VGFza2Jhcic7XG4gICAgICAgICAgICAgICAgdGFza1BvcG91dEJveC5hcHBlbmQobGlzdERpc3BsYXlUYXNrYmFyKTtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdE5hbWVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3ROYW1lRGlzcGxheS5pZCA9ICdsaXN0TmFtZURpc3BsYXknO1xuICAgICAgICAgICAgICAgICAgICBsaXN0TmFtZURpc3BsYXkuY2xhc3NMaXN0ID0gJ2xpc3RIZWFkZXJzJztcbiAgICAgICAgICAgICAgICAgICAgbGlzdERpc3BsYXlUYXNrYmFyLmFwcGVuZChsaXN0TmFtZURpc3BsYXkpO1xuICAgICAgICAgICAgICAgIGxldCBsaXN0RXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0RXhpdEJ0bi5pZCA9ICdsaXN0RXhpdEJ0bic7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RFeGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsJ2xpc3RFeGl0QnRuJyk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RFeGl0QnRuLmlubmVySFRNTCA9ICd4J1xuICAgICAgICAgICAgICAgICAgICBsaXN0RGlzcGxheVRhc2tiYXIuYXBwZW5kKGxpc3RFeGl0QnRuKTtcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vd2hlcmUgdXNlciB0eXBlcyBuZXcgdGFza3MgaW50byBwb3B1cC9cbiAgICAgICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmlkID0gJ2lucHV0Q29udGFpbmVyJztcbiAgICAgICAgICAgICAgICB0YXNrUG9wb3V0Qm94LmFwcGVuZChpbnB1dENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICBsZXQgdXNlclRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJUYXNrSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICAgICAgdXNlclRhc2tJbnB1dC5pZCA9ICd1c2VyVGFza0lucHV0JztcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kKHVzZXJUYXNrSW5wdXQpO1xuICAgICAgICAgICAgICAgIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uaWQgPSAnYWRkVGFza0J0bic7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0ID0gJ2J0bic7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gJysnO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmQoYWRkVGFza0J0bik7XG5cblxuLy9UYXNrIGluZm8gcmlnaHQgbmV4dCB0byB0YXNrIHBvcG91dCBib3gvL1xubGV0IHRhc2tJbmZvUG9wb3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0luZm9Qb3BvdXRDb250YWluZXIuaWQgPSAndGFza0luZm9Qb3BvdXRDb250YWluZXInO1xuICAgIGVtYWlsRGlzcGxheUNvbnRhaW5lci5hcHBlbmQodGFza0luZm9Qb3BvdXRDb250YWluZXIpXG5sZXQgdGFza0luZm9Qb3BvdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrSW5mb1BvcG91dEJveC5pZCA9ICd0YXNrSW5mb1BvcG91dEJveCc7XG4gICAgdGFza0luZm9Qb3BvdXRCb3guY2xhc3NMaXN0LmFkZCgndGFza1BvcG91dEJveCcpXG4gICAgdGFza0luZm9Qb3BvdXRDb250YWluZXIuYXBwZW5kKHRhc2tJbmZvUG9wb3V0Qm94KTtcbi8vdGl0bGUgZGlzcGxheVxuICAgIGxldCB0YXNrVGl0bGVEaXNwbGF5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tUaXRsZURpc3BsYXlCb3guaWQgPSAndGFza1RpdGxlRGlzcGxheUJveCc7XG4gICAgICAgIHRhc2tUaXRsZURpc3BsYXlCb3guY2xhc3NMaXN0ID0gJ2xpc3RIZWFkZXJzJztcbiAgICAgICAgdGFza0luZm9Qb3BvdXRCb3guYXBwZW5kKHRhc2tUaXRsZURpc3BsYXlCb3gpO1xuICAgICAgICBsZXQgdGFza1RpdGxlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza1RpdGxlRGlzcGxheS5pZCA9ICd0YXNrVGl0bGVEaXNwbGF5JztcbiAgICAgICAgICAgIHRhc2tUaXRsZURpc3BsYXkuY2xhc3NMaXN0ID0gJ2xpc3RIZWFkZXJzJztcbiAgICAgICAgICAgIHRhc2tUaXRsZURpc3BsYXlCb3guYXBwZW5kKHRhc2tUaXRsZURpc3BsYXkpO1xuLy9pbmZvIGRpc3BsYXkgd2l0aCB0aXRsZXMgJiBib3hlcyBoYXJkY29kZWQgaW4sIGJ1dCBmaWxsZWQgaW4gZGlzcGxheVRhc2tEZXRhaWxzXG4vKiBcbmxldCB0YXNrSW5mb0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tJbmZvRGlzcGxheUNvbnRhaW5lci5pZCA9ICd0YXNrSW5mb0Rpc3BsYXlDb250YWluZXInXG4gICAgICAgICAgICAvL3Rhc2tJbmZvUG9wb3V0Qm94LmFwcGVuZCh0YXNrSW5mb0Rpc3BsYXlDb250YWluZXIpXG4gICAgICAgIGxldCBkdWVEYXRlRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZHVlRGF0ZURpc3BsYXlDb250YWluZXIuaWQgPSBcImR1ZURhdGVEaXNwbGF5Q29udGFpbmVyXCJcbiAgICAgICAgICAgIC8vdGFza0luZm9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZChkdWVEYXRlRGlzcGxheUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlVGl0bGUuaWQgPSAnZHVlRGF0ZVRpdGxlJztcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm9UaXRsZScpO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlVGl0bGUuaW5uZXJIVE1MID0gJ0ZpbmlzaCBieSc7XG4gICAgICAgICAgICAgICAgICAgIC8vZHVlRGF0ZURpc3BsYXlDb250YWluZXIuYXBwZW5kKGR1ZURhdGVUaXRsZSk7XG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVEaXNwbGF5LmlkID0gJ2R1ZURhdGVEaXNwbGF5JztcbiAgICAgICAgICAgICAgICAgICAgLy9kdWVEYXRlRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZHVlRGF0ZURpc3BsYXkpO1xuICAgICAgICAgICAgICAgIGxldCBjaGFuZ2VEdWVEYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUR1ZURhdGVCdG4uaWQgPSAnY2hhbmdlRHVlRGF0ZUJ0bic7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUR1ZURhdGVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vZHVlRGF0ZURpc3BsYXlDb250YWluZXIuYXBwZW5kKGNoYW5nZUR1ZURhdGVCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBsZXQgcHJpb3JpdHlEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlEaXNwbGF5Q29udGFpbmVyLmlkID0gXCJwcmlvcml0eURpc3BsYXlDb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJbmZvRGlzcGxheUNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlEaXNwbGF5Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VGl0bGUuaWQgPSAncHJpb3JpdHlUaXRsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm9UaXRsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlUaXRsZS5pbm5lckhUTUwgPSAnUHJpb3JpdHkgTGV2ZWwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlEaXNwbGF5Q29udGFpbmVyLmFwcGVuZChwcmlvcml0eVRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlEaXNwbGF5LmlkID0gJ3ByaW9yaXR5RGlzcGxheSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eURpc3BsYXlDb250YWluZXIuYXBwZW5kKHByaW9yaXR5RGlzcGxheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyLmlkID0gXCJkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXJcIlxuICAgICAgICAgICAgLy90YXNrSW5mb0Rpc3BsYXlDb250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25UaXRsZS5pZCA9ICdkZXNjcmlwdGlvblRpdGxlJztcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdpbmZvVGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25UaXRsZS5pbm5lckhUTUwgPSAnTm90ZXMnO1xuICAgICAgICAgICAgICAgICAgICAvL2Rlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25UaXRsZSk7XG4gICAgICAgICAgICAgICAgLy9sZXQgZGVzY3JpcHRpb25EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25EaXNwbGF5LmlkID0gJ2Rlc2NyaXB0aW9uRGlzcGxheSc7XG4gICAgICAgICAgICAgICAgICAgIC8vZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvbkRpc3BsYXkpO1xuXG5cbiAgICBcblxuICAgIC8vYWRkTGlzdCBwb3BvdXQgYm94IC0gY3JlYXRlZCBzbyB0aGF0IGl0IGRpc2FsbG93cyBjbGlja2luZyBvdXRzaWRlIHRoZSBib3gvL1xuICAgIGxldCBlbWFpbFBvcG91dEJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbWFpbFBvcG91dEJveENvbnRhaW5lci5pZCA9ICdlbWFpbFBvcG91dEJveENvbnRhaW5lcic7XG4gICAgICAgIGVtYWlsUG9wb3V0Qm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGVtYWlsRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZW1haWxQb3BvdXRCb3hDb250YWluZXIpXG4gICAgbGV0IGVtYWlsUG9wb3V0Qm94RmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbWFpbFBvcG91dEJveEZsZXhDb250YWluZXIuaWQgPSAnZW1haWxQb3BvdXRCb3hGbGV4Q29udGFpbmVyJztcbiAgICAgICAgZW1haWxQb3BvdXRCb3hDb250YWluZXIuYXBwZW5kKGVtYWlsUG9wb3V0Qm94RmxleENvbnRhaW5lcik7XG4gICAgbGV0IGVtYWlsUG9wb3V0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlbWFpbFBvcG91dEJveC5pZCA9ICdlbWFpbFBvcG91dEJveCc7XG4gICAgICAgICAgICBlbWFpbFBvcG91dEJveEZsZXhDb250YWluZXIuYXBwZW5kKGVtYWlsUG9wb3V0Qm94KTtcblxuICAgICAgICBsZXQgZW1haWxEaXNwbGF5VGFza2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGVtYWlsRGlzcGxheVRhc2tiYXIuaWQgPSAnZW1haWxEaXNwbGF5VGFza2Jhcic7XG4gICAgICAgICAgICAgICAgZW1haWxEaXNwbGF5VGFza2Jhci5jbGFzc0xpc3QgPSAnbGlzdERpc3BsYXlUYXNrYmFyJztcbiAgICAgICAgICAgICAgICBlbWFpbFBvcG91dEJveC5hcHBlbmQoZW1haWxEaXNwbGF5VGFza2Jhcik7XG4gICAgICAgICAgICBsZXQgZW1haWxOYW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbE5hbWVEaXNwbGF5LmlkID0gJ2VtYWlsTmFtZURpc3BsYXknO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbE5hbWVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2xpc3RIZWFkZXJzJyk7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsRGlzcGxheVRhc2tiYXIuYXBwZW5kKGVtYWlsTmFtZURpc3BsYXkpO1xuICAgICAgICAgICAgbGV0IGVtYWlsRXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbEV4aXRCdG4uaWQgPSAnZW1haWxFeGl0QnRuJztcbiAgICAgICAgICAgICAgICAgICAgZW1haWxFeGl0QnRuLmNsYXNzTGlzdCA9ICdidG4nO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbEV4aXRCdG4uaW5uZXJIVE1MID0gJ3gnXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsRGlzcGxheVRhc2tiYXIuYXBwZW5kKGVtYWlsRXhpdEJ0bik7XG4gICAgICAgIC8vYWRkTGlzdCBpbnB1dCBib3gvL1xuICAgICAgICBsZXQgZW1haWxCb2R5SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBlbWFpbEJvZHlJbnB1dENvbnRhaW5lci5pZCA9ICdlbWFpbEJvZHlJbnB1dENvbnRhaW5lcic7XG4gICAgICAgICAgICAgICAgZW1haWxQb3BvdXRCb3guYXBwZW5kKGVtYWlsQm9keUlucHV0Q29udGFpbmVyKVxuXG4gICAgICAgICAgICAgICAgbGV0IGVtYWlsQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsQm9keS50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbEJvZHkuaWQgPSAnZW1haWxCb2R5JztcbiAgICAgICAgICAgICAgICAgICAgZW1haWxCb2R5LmNsYXNzTGlzdC5hZGQoJ3BvcG91dEl0ZW0nKVxuICAgICAgICAgICAgICAgICAgICBlbWFpbEJvZHlJbnB1dENvbnRhaW5lci5hcHBlbmQoZW1haWxCb2R5KTtcbiAgICAgICAgICAgICAgICBsZXQgYWRkTGlzdFBvcHVwQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RQb3B1cEJ0bi5pZCA9ICdhZGRMaXN0UG9wdXBCdG4nO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0UG9wdXBCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywncG9wb3V0SXRlbScpO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0UG9wdXBCdG4uaW5uZXJIVE1MID0gJysnO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbEJvZHlJbnB1dENvbnRhaW5lci5hcHBlbmQoYWRkTGlzdFBvcHVwQnRuKTtcbiAgICBcbiAgICAgICAgLy9BZGQgZGF0ZSBwb3BvdXQgaXRlbXNcbiAgICAgICAgbGV0IGNhbGVuZGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGNhbGVuZGFyLnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnO1xuICAgICAgICAgICAgY2FsZW5kYXIuaWQgPSAnY2FsZW5kYXInO1xuICAgICAgICAgICAgY2FsZW5kYXIuY2xhc3NMaXN0LmFkZCgncG9wb3V0SXRlbScpO1xuICAgICAgICAgICAgZW1haWxCb2R5SW5wdXRDb250YWluZXIuYXBwZW5kKGNhbGVuZGFyKVxuKi9cblxuXG5cbiAgICBiYXNlLmFwcGVuZChtZW51QmFyQ29udGFpbmVyKTtcbiAgICBiYXNlLmFwcGVuZChlbWFpbERpc3BsYXlDb250YWluZXIpO1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBza2VsZXRvbiBmcm9tIFwiLi9za2VsZXRvblwiO1xuaW1wb3J0IGluYm94IGZyb20gXCIuL2luYm94XCI7XG5pbXBvcnQgc2VudCBmcm9tIFwiLi9zZW50XCI7XG5pbXBvcnQgbG9naW4gZnJvbSBcIi4vbG9naW5cIjtcblxuc2tlbGV0b24oKTtcbmxvZ2luKCk7XG4vL2xvZ2luU2NyZWVuQmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5pbmJveCgpO1xuc2VudCgpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==