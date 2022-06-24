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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxZQUFZLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLHdCQUF3QixRQUFRLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxV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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdFdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ047QUFDRjtBQUNFOztBQUU1QixxREFBUTtBQUNSLGtEQUFLO0FBQ0w7QUFDQSxrREFBSztBQUNMLGlEQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25pZ2h0bWFpbC8uL3NyYy9za2VsZXRvbi5jc3MiLCJ3ZWJwYWNrOi8va25pZ2h0bWFpbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va25pZ2h0bWFpbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va25pZ2h0bWFpbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2tuaWdodG1haWwvLi9zcmMvc2tlbGV0b24uY3NzPzNlZmMiLCJ3ZWJwYWNrOi8va25pZ2h0bWFpbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rbmlnaHRtYWlsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rbmlnaHRtYWlsLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2tuaWdodG1haWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va25pZ2h0bWFpbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2tuaWdodG1haWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9rbmlnaHRtYWlsLy4vc3JjL2VtYWlsT2JqZWN0LmpzIiwid2VicGFjazovL2tuaWdodG1haWwvLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8va25pZ2h0bWFpbC8uL3NyYy9sb2dpbi5qcyIsIndlYnBhY2s6Ly9rbmlnaHRtYWlsLy4vc3JjL3NlbnQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0bWFpbC8uL3NyYy9za2VsZXRvbi5qcyIsIndlYnBhY2s6Ly9rbmlnaHRtYWlsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodG1haWwvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va25pZ2h0bWFpbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va25pZ2h0bWFpbC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2tuaWdodG1haWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRtYWlsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0bWFpbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9rbmlnaHRtYWlsL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2tuaWdodG1haWwvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2tuaWdodG1haWwvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi91Y2ZLbmlnaHRzLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vTm90b1NhbnNKUC1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG5odG1se1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICd1Y2YnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdub3RvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpOyBcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4jYmFubmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogUkdCKDI1NSwgMjAyLCA2KTtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG59XFxuXFxuI2Jhbm5lckZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICBcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG4gICAgI2Jhbm5lclRpdGxlQ29udGFpbmVyLCAjY3VycmVudERpc3BsYXllZEluYm94Q29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGhlaWdodDogNTAlO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuICAgICAgICAjYmFubmVySGVhZGVyMXtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3VjZic7XFxuICAgICAgICAgICAgZm9udC1zaXplOjcwcHQ7XFxuICAgICAgICB9XFxuICAgICAgICAjYmFubmVySGVhZGVyMiwjY3VycmVudERpc3BsYXllZEluYm94e1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAndWNmJztcXG4gICAgICAgICAgICBmb250LXNpemU6NDVwdDtcXG4gICAgICAgIH1cXG4gICAgXFxuXFxuI2Jhc2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmJ0bntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuXFxuXFxuI21lbnVCYXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGJvcmRlcjogMnB0IGJsYWNrIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICBcXG4gICAgYWxpZ24taXRlbXM6IHRvcDsgIFxcbn1cXG5cXG5cXG4jbWVudUJhckNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI292ZXJhbGxMaXN0TWVudUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgZ2FwOiAxMCVcXG59XFxuXFxuLmxpc3RCdG57XFxuICAgIGZvbnQtZmFtaWx5OiAndWNmJztcXG4gICAgZm9udC1zaXplOiAyNHB0O1xcbiAgICBoZWlnaHQ6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgY29sb3I6IFJHQigyNTUsIDIwMiwgNik7XFxufVxcblxcblxcblxcblxcblxcbi8qUmlnaHQgaGFuZCB3aW5kb3cgZm9yIGRpc3BsYXlpbmcgZW1haWxzKi9cXG4gICAgICAgICNlbWFpbERpc3BsYXlDb250YWluZXJ7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcblxcbiAgICAgICAgfVxcbiAgICAgICAgI2VtYWlsRGlzcGxheUZsZXhDb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGhlaWdodDogODAlO1xcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHQgYmxhY2s7XFxuICAgICAgICAgICAgZ2FwOiA1cHQ7XFxuICAgICAgICB9XFxuICAgICAgICAjZW1haWxGbGV4Q29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBnYXA6MiU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B0O1xcbiAgICAgICAgfVxcbiAgICAgICAgI2VtYWlsRmxleENvbnRhaW5lcjpob3ZlcntcXG4gICAgICAgICAgICBib3JkZXI6IGluc2V0IDFwdCBSR0IoMjU1LCAyMDIsIDYpO1xcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgLmVtYWlsRnJvbXtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHQ7XFxuICAgICAgICAgICAgd2lkdGg6IDIwJTtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgICAgIC5lbWFpbFRpdGxle1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVwdDtcXG4gICAgICAgICAgICB3aWR0aDogNjUlO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgfVxcblxcblxcbi8qb3BlbiBlbWFpbCBwb3BvdXQqL1xcbi8qQWRkIExpc3QgcG9wb3V0IEJveCovXFxuI2VtYWlsUG9wb3V0Qm94Q29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCAsIDAsIDAuNSk7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuXFxuI2VtYWlsUG9wb3V0Qm94RmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNlbWFpbFBvcG91dEJveHtcXG4gICAgaGVpZ2h0OiAzMDBwdDtcXG4gICAgd2lkdGg6IDUwMHB0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcXG4gICAgYm9yZGVyOiAxcHQgI2Q4ZDhkOCBpbnNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogdG9wO1xcblxcbn1cXG5cXG4jZW1haWxEaXNwbGF5VGFza2JhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuICAgICNlbWFpbE5hbWVEaXNwbGF5e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNSU7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDYlO1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB0O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB3aWR0aDogOTIlO1xcbiAgICB9XFxuICAgICNlbWFpbEV4aXRCdG5Db250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiByaWdodDtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6ICBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICAgICAgaGVpZ2h0OiA5MCU7XFxuICAgICAgICB3aWR0aDogMTAlO1xcbiAgICB9XFxuICAgICNlbWFpbEV4aXRCdG57XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiAgY2VudGVyO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IFJHQigyNTUsIDIwMiwgNik7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDEwcHQ7XFxuICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgfVxcbiNlbWFpbEJvZHlJbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy10b3A6IDVwdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiNlbWFpbEJvZHl7XFxuICAgIFxcbiAgICBmb250LXNpemU6IDE1cHQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAycHQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctbGVmdDogNiU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDYlO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IC8qIG1ha2Ugc2Nyb2xsYmFyIHRyYW5zcGFyZW50ICovXFxufVxcblxcblxcbi8qTG9naW4gc2NyZWVuIHBvcHVwKi9cXG5cXG4jbG9naW5TY3JlZW5CYWNrZ3JvdW5ke1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNsb2dpblNjcmVlbkJhY2tncm91bmRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG9naW5Qb3B1cEJveHtcXG4gICAgaGVpZ2h0OiAyNTBwdDtcXG4gICAgd2lkdGg6IDUwMHB0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHQgI2Q4ZDhkOCBpbnNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogdG9wO1xcblxcbn1cXG5cXG4jbG9naW5IZWFkZXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAndWNmJztcXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcbiNsb2dpbkhlYWRlcjF7XFxuICAgIGZvbnQtc2l6ZTogMzBwdDtcXG59XFxuI2xvZ2luSGVhZGVyMntcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcblxcbn1cXG5cXG5cXG4jbG9naW5IZWFkZXIxe1xcbiAgICBtYXJnaW4tbGVmdDogMiU7XFxufVxcblxcbiNpbnB1dHNGbGV4Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGdhcDogMTAlO1xcbiAgICBmb250LWZhbWlseTogJ3VjZic7XFxuICAgIGZvbnQtc2l6ZTogMTVwdDtcXG59XFxuXFxuXFxuXFxuI3VzZXJOYW1lRmxleENvbnRhaW5lciwgI3Bhc3N3b3JkRmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVwdDtcXG59XFxuXFxuI3VzZXJOYW1lSW5wdXQsICNwYXNzd29yZElucHV0e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB0O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB0O1xcbn1cXG5cXG4jbG9naW5CdG57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgZm9udC1mYW1pbHk6ICd1Y2YnO1xcbiAgICBmb250LXNpemU6IDEycHQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxMnB0IDMycHQ7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgY29sb3I6IFJHQigyNTUsIDIwMiwgNik7XFxufSBcXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMv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LGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5odG1se1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICd1Y2YnO1xcbiAgICBzcmM6IHVybCgnLi91Y2ZLbmlnaHRzLm90ZicpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAnbm90byc7XFxuICAgIHNyYzogdXJsKCcuL05vdG9TYW5zSlAtUmVndWxhci5vdGYnKTsgXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuI2Jhbm5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IFJHQigyNTUsIDIwMiwgNik7XFxuICAgIGhlaWdodDogMjAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxufVxcblxcbiNiYW5uZXJGbGV4Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDkwJTtcXG59XFxuICAgICNiYW5uZXJUaXRsZUNvbnRhaW5lciwgI2N1cnJlbnREaXNwbGF5ZWRJbmJveENvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBoZWlnaHQ6IDUwJTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAgICAgI2Jhbm5lckhlYWRlcjF7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICd1Y2YnO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo3MHB0O1xcbiAgICAgICAgfVxcbiAgICAgICAgI2Jhbm5lckhlYWRlcjIsI2N1cnJlbnREaXNwbGF5ZWRJbmJveHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3VjZic7XFxuICAgICAgICAgICAgZm9udC1zaXplOjQ1cHQ7XFxuICAgICAgICB9XFxuICAgIFxcblxcbiNiYXNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5idG57XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcblxcblxcbiNtZW51QmFyQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBib3JkZXI6IDJwdCBibGFjayBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7ICBcXG59XFxuXFxuXFxuI21lbnVCYXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNvdmVyYWxsTGlzdE1lbnVDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGdhcDogMTAlXFxufVxcblxcbi5saXN0QnRue1xcbiAgICBmb250LWZhbWlseTogJ3VjZic7XFxuICAgIGZvbnQtc2l6ZTogMjRwdDtcXG4gICAgaGVpZ2h0OiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGNvbG9yOiBSR0IoMjU1LCAyMDIsIDYpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKlJpZ2h0IGhhbmQgd2luZG93IGZvciBkaXNwbGF5aW5nIGVtYWlscyovXFxuICAgICAgICAjZW1haWxEaXNwbGF5Q29udGFpbmVye1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogODUlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG5cXG4gICAgICAgIH1cXG4gICAgICAgICNlbWFpbERpc3BsYXlGbGV4Q29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB0IGJsYWNrO1xcbiAgICAgICAgICAgIGdhcDogNXB0O1xcbiAgICAgICAgfVxcbiAgICAgICAgI2VtYWlsRmxleENvbnRhaW5lcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgZ2FwOjIlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcXG4gICAgICAgIH1cXG4gICAgICAgICNlbWFpbEZsZXhDb250YWluZXI6aG92ZXJ7XFxuICAgICAgICAgICAgYm9yZGVyOiBpbnNldCAxcHQgUkdCKDI1NSwgMjAyLCA2KTtcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgICAgIC5lbWFpbEZyb217XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB0O1xcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgICAgICAuZW1haWxUaXRsZXtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHQ7XFxuICAgICAgICAgICAgd2lkdGg6IDY1JTtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG5cXG4vKm9wZW4gZW1haWwgcG9wb3V0Ki9cXG4vKkFkZCBMaXN0IHBvcG91dCBCb3gqL1xcbiNlbWFpbFBvcG91dEJveENvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAgLCAwLCAwLjUpO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcblxcbiNlbWFpbFBvcG91dEJveEZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZW1haWxQb3BvdXRCb3h7XFxuICAgIGhlaWdodDogMzAwcHQ7XFxuICAgIHdpZHRoOiA1MDBwdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XFxuICAgIGJvcmRlcjogMXB0ICNkOGQ4ZDggaW5zZXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcXG5cXG59XFxuXFxuI2VtYWlsRGlzcGxheVRhc2tiYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbiAgICAjZW1haWxOYW1lRGlzcGxheXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA2JTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThwdDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgd2lkdGg6IDkyJTtcXG4gICAgfVxcbiAgICAjZW1haWxFeGl0QnRuQ29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiAgY2VudGVyO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgICAgIGhlaWdodDogOTAlO1xcbiAgICAgICAgd2lkdGg6IDEwJTtcXG4gICAgfVxcbiAgICAjZW1haWxFeGl0QnRue1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogIGNlbnRlcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBSR0IoMjU1LCAyMDIsIDYpO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xcbiAgICAgICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIH1cXG4jZW1haWxCb2R5SW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctdG9wOiA1cHQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4jZW1haWxCb2R5e1xcbiAgICBcXG4gICAgZm9udC1zaXplOiAxNXB0O1xcbiAgICBtYXJnaW4tbGVmdDogMnB0O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA2JTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyAvKiBtYWtlIHNjcm9sbGJhciB0cmFuc3BhcmVudCAqL1xcbn1cXG5cXG5cXG4vKkxvZ2luIHNjcmVlbiBwb3B1cCovXFxuXFxuI2xvZ2luU2NyZWVuQmFja2dyb3VuZHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbG9naW5TY3JlZW5CYWNrZ3JvdW5kQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ2luUG9wdXBCb3h7XFxuICAgIGhlaWdodDogMjUwcHQ7XFxuICAgIHdpZHRoOiA1MDBwdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB0ICNkOGQ4ZDggaW5zZXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcXG5cXG59XFxuXFxuI2xvZ2luSGVhZGVyQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ3VjZic7XFxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG4jbG9naW5IZWFkZXIxe1xcbiAgICBmb250LXNpemU6IDMwcHQ7XFxufVxcbiNsb2dpbkhlYWRlcjJ7XFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXG5cXG59XFxuXFxuXFxuI2xvZ2luSGVhZGVyMXtcXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xcbn1cXG5cXG4jaW5wdXRzRmxleENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBnYXA6IDEwJTtcXG4gICAgZm9udC1mYW1pbHk6ICd1Y2YnO1xcbiAgICBmb250LXNpemU6IDE1cHQ7XFxufVxcblxcblxcblxcbiN1c2VyTmFtZUZsZXhDb250YWluZXIsICNwYXNzd29yZEZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHQ7XFxufVxcblxcbiN1c2VyTmFtZUlucHV0LCAjcGFzc3dvcmRJbnB1dHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVwdDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVwdDtcXG59XFxuXFxuI2xvZ2luQnRue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTBwdDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAndWNmJztcXG4gICAgZm9udC1zaXplOiAxMnB0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTJwdCAzMnB0O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGNvbG9yOiBSR0IoMjU1LCAyMDIsIDYpO1xcbn0gXFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NrZWxldG9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2tlbGV0b24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld0VtYWlsKGZyb20sIHRpdGxlLCBkYXRlLCBtZXNzYWdlKXtcbiAgICB0aGlzLmZyb20gPSBmcm9tLFxuICAgIHRoaXMudGl0bGUgPSB0aXRsZSxcbiAgICB0aGlzLmRhdGUgPSBkYXRlLFxuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2Vcbn0iLCJpbXBvcnQgbmV3RW1haWwgZnJvbSBcIi4vZW1haWxPYmplY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmJveCgpe1xuICAgIGxldCBpbmJveEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmJveEJ0bicpO1xuICAgIGxldCBlbWFpbERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWxEaXNwbGF5Q29udGFpbmVyJylcbiAgICBsZXQgZW1haWxEaXNwbGF5RmxleENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbERpc3BsYXlGbGV4Q29udGFpbmVyJylcbiAgICBsZXQgZW1haWxOYW1lRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbE5hbWVEaXNwbGF5JylcbiAgICBsZXQgZW1haWxCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsQm9keScpO1xuICAgIGxldCBlbWFpbEV4aXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWxFeGl0QnRuJylcbiAgICBsZXQgY3VycmVudERpc3BsYXllZEluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnREaXNwbGF5ZWRJbmJveCcpXG4gICAgbGV0IHN1YnN0aXR1dGUgPSBcIiAgICAgJyArJzxicj4nKycgICAgICBcIjtcblxuICAgIGNvbnN0IGVtYWlsMSA9IG5ldyBuZXdFbWFpbChcbiAgICAgICAgJ2R1bmF3YXkxOEB1Y2YuZWR1JywgLy9mcm9tXG4gICAgICAgICdOZWVkIHRvIG1lZXQnLCAvL3RpdGxlXG4gICAgICAgICdOb3YgMTEnLCAvL2RhdGVcbiAgICAgICAgJ0hleSBjb2FjaCwgJyArJzxicj4nKyc8YnI+JysnSSBuZWVkIHRvIG1lZXQgd2l0aCB5b3UgdG8gZGlzY3VzcyBzb21ldGhpbmcuIEl0XFwncyBhYm91dCBteSBzdHVkeSBncm91cCB3aXRoIFphY2ggYW5kIFdpbGwuIENhbiB3ZSB0YWxrIGFmdGVyIHRoZSBnYW1lIG9uIFNhdHVyZGF5PycgKyc8YnI+JysnPGJyPicrJy1Jc2FhYydcbiAgICApXG4gICAgY29uc3QgZW1haWwyID0gbmV3IG5ld0VtYWlsKFxuICAgICAgICAnamVhbi1iYXB0aXN0ZWoxMUB1Y2YuZWR1JywgLy9mcm9tXG4gICAgICAgICdwcmFjdGljZScsIC8vdGl0bGVcbiAgICAgICAgJ05vdiAxMycsIC8vZGF0ZVxuICAgICAgICAnaGV5IGNvYWNoLCcgKyc8YnI+JysnPGJyPicrJ2FyZSB3ZSBzdGlsbCBoYXZpbmcgcHJhY3RpY2UgbW9uZGF5PyB5b3UgaGF2ZW50IHNhaWQgYW55dGhpbmcgYWJvdXQgaXQgeWV0IGFuZCBub25lIG9mIHRoZSBvdGhlciBjb2FjaGVzIGtub3cuIG5vIGRpc3Jlc3BlY3QgdG8gaXNhYWMuJyArJzxicj4nKyc8YnI+JysnSmVyZW1pYWgnXG4gICAgKVxuICAgIGNvbnN0IGVtYWlsMyA9IG5ldyBuZXdFbWFpbChcbiAgICAgICAgJ0NhbmR5JywgLy9mcm9tXG4gICAgICAgICdIZXkgaGFuZHNvbWUnLCAvL3RpdGxlXG4gICAgICAgICdKdW4gMTMnLCAvL2RhdGVcbiAgICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIGFsaXF1ZXQgZXJhdCBldCBtYXVyaXMgcG9ydGEgdWx0cmljZXMuIFN1c3BlbmRpc3NlIHVsbGFtY29ycGVyIGp1c3RvIHF1aXMgcGxhY2VyYXQgbWF0dGlzLiBNYXVyaXMgZXQgbmlzaSB2ZWwgbnVuYyBkYXBpYnVzIGN1cnN1cyB2aXRhZSBldCBkaWFtLiBNYXVyaXMgY29udmFsbGlzIHJ1dHJ1bSB0ZWxsdXMgYWxpcXVhbSBwaGFyZXRyYS4gUHJvaW4gdm9sdXRwYXQgZXUgbmliaCBzaXQgYW1ldCBibGFuZGl0LiBWZXN0aWJ1bHVtIHF1aXMgaXBzdW0gdmVsIG9yY2kgY29uZ3VlIGZldWdpYXQgdXQgZXQgdXJuYS4gSW4gc3VzY2lwaXQganVzdG8gbmVjIG9kaW8gY29uZ3VlLCBhYyBsYW9yZWV0IGVuaW0gYWxpcXVldC4gU2VkIGNvbnNlcXVhdCB0ZW1wb3IgbGliZXJvLCBuZWMgYWxpcXVhbSBpcHN1bSBtYXhpbXVzIHF1aXMuJ1xuICAgIClcbiAgICBcbiAgICBsZXQgaW5ib3hBcnJheSA9IFtlbWFpbDEsIGVtYWlsMl1cblxuXG4gICAgbmV3RW1haWwucHJvdG90eXBlLmRpc3BsYXlJbmJveFByb3RvdHlwZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBlbWFpbEZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgLy9JdCBiZWluZyBhIGJ1dHRvbiBtYWtlcyBpdCBjbGlja2FibGVcbiAgICAgICAgICAgIGVtYWlsRmxleENvbnRhaW5lci5pZCA9ICdlbWFpbEZsZXhDb250YWluZXInO1xuICAgICAgICAgICAgZW1haWxGbGV4Q29udGFpbmVyLmNsYXNzTGlzdCA9ICdlbWFpbEZsZXgnXG4gICAgICAgIC8vYnV0dG9ucyB0byBjcm9zcyBhIHRhc2sgb2ZmLCBtb3ZpbmcgaXQgdG8gYm90dG9tIG9mIHRoZSBhcnJheS8vXG4gICAgICAgIGxldCBlbWFpbEZyb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBlbWFpbEZyb20uaW5uZXJIVE1MID0gJ0ZST006ICcrIHRoaXMuZnJvbTtcbiAgICAgICAgICAgIGVtYWlsRnJvbS5jbGFzc0xpc3QgPSAnZW1haWxGcm9tJztcbiAgICAgICAgbGV0IGVtYWlsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBlbWFpbFRpdGxlLmlubmVySFRNTCA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICBlbWFpbFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2VtYWlsVGl0bGUnKVxuICAgICAgICBsZXQgZW1haWxEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICBlbWFpbERhdGUuaW5uZXJIVE1MID0gdGhpcy5kYXRlO1xuICAgICAgICAgICAgZW1haWxEYXRlLmNsYXNzTGlzdC5hZGQoJ2VtYWlsRGF0ZScpO1xuICAgICAgICBlbWFpbEZsZXhDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgZW1haWxQb3BvdXRCb3hDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGVtYWlsTmFtZURpc3BsYXkuaW5uZXJIVE1MID0gJ1N1YmplY3Q6ICcgKyB0aGlzLnRpdGxlO1xuICAgICAgICAgICAgZW1haWxCb2R5LmlubmVySFRNTCA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgfSlcbiAgICAgICAgZW1haWxEaXNwbGF5RmxleENvbnRhaW5lci5hcHBlbmQoZW1haWxGbGV4Q29udGFpbmVyKTtcbiAgICAgICAgZW1haWxGbGV4Q29udGFpbmVyLmFwcGVuZChlbWFpbEZyb20pO1xuICAgICAgICBlbWFpbEZsZXhDb250YWluZXIuYXBwZW5kKGVtYWlsVGl0bGUpO1xuICAgICAgICBlbWFpbEZsZXhDb250YWluZXIuYXBwZW5kKGVtYWlsRGF0ZSk7XG4gICAgICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5SW5ib3goKXtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlbWFpbEZsZXgnKTtcbiAgICAgICAgLy9FbXB0aWVzIHRoZSB2aXN1YWwgZGlzcGxheSBmb3IgcmVwaW5uaW5nXG4gICAgICAgIHdoaWxlKGVsZW1lbnRzLmxlbmd0aCA+IDApeyBcbiAgICAgICAgICAgIGVtYWlsRGlzcGxheUZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQoZWxlbWVudHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgcCA9IDA7IHAgPCBpbmJveEFycmF5Lmxlbmd0aDsgcCsrKXsgIC8vZGlzcGxheSB0aGUgdGFza0Rpc3BsYXlBcnJheVxuICAgICAgICAgICAgaW5ib3hBcnJheVtwXS5kaXNwbGF5SW5ib3hQcm90b3R5cGUoKTtcbiAgICAgICAgfSBcbiAgICAgICAgY3VycmVudERpc3BsYXllZEluYm94LmlubmVySFRNTCA9ICdJbmJveCdcbiAgICAgICAgXG4gICAgfVxuXG4gICBcbiAgICBlbWFpbEV4aXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGVtYWlsUG9wb3V0Qm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSlcbiAgICBpbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlJbmJveCk7XG4gICAgZGlzcGxheUluYm94KCk7XG5cblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luKCl7XG4gICAgbGV0IGxvZ2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luQnRuJyk7XG4gICAgbGV0IHVzZXJOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlck5hbWVJbnB1dCcpO1xuICAgIGxldCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkSW5wdXQnKTtcbiAgICBsZXQgbG9naW5TY3JlZW5CYWNrZ3JvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luU2NyZWVuQmFja2dyb3VuZCcpXG4gICAgbG9naW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dpbkV2ZW50TGlzdGVuZXIpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGxvZ2luRXZlbnRMaXN0ZW5lcigpe1xuICAgICAgICBsZXQgdXNlck5hbWVWYWx1ZSA9IHVzZXJOYW1lSW5wdXQudmFsdWU7XG4gICAgICAgIGxldCB1c2VyTmFtZUxvd2VyY2FzZSA9IHVzZXJOYW1lVmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgbGV0IHBhc3N3b3JkVmFsdWUgPSBwYXNzd29yZElucHV0LnZhbHVlO1xuICAgICAgICBsZXQgcGFzc3dvcmRMb3dlcmNhc2UgPSBwYXNzd29yZFZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgXG4gICAgICAgIGlmKHVzZXJOYW1lTG93ZXJjYXNlID09ICdjb2FjaGNsYXJrQHVjZi5lZHUnICYmIHBhc3N3b3JkTG93ZXJjYXNlID09ICdncmF5ZG9nJyl7XG4gICAgICAgICAgICBsb2dpblNjcmVlbkJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdXNlck5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBuZXdFbWFpbCBmcm9tIFwiLi9lbWFpbE9iamVjdFwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbnQoKXtcbiAgICBsZXQgc2VudEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW50QnRuJyk7XG4gICAgbGV0IGVtYWlsRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbERpc3BsYXlDb250YWluZXInKVxuICAgIGxldCBlbWFpbERpc3BsYXlGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsRGlzcGxheUZsZXhDb250YWluZXInKVxuICAgIGxldCBlbWFpbE5hbWVEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsTmFtZURpc3BsYXknKVxuICAgIGxldCBlbWFpbEJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWxCb2R5Jyk7XG4gICAgbGV0IGVtYWlsRXhpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbEV4aXRCdG4nKTtcbiAgICBsZXQgc3Vic3RpdHV0ZSA9IFwiICAgICAnICsnPGJyPicrJyAgICAgIFwiO1xuXG4gICAgY29uc3QgZW1haWwxID0gbmV3IG5ld0VtYWlsKFxuICAgICAgICAnTElTVFNFUlYtdWNmLWZiLWNvYWNoZXMnLCAvL2Zyb21cbiAgICAgICAgJ0R1bmF3YXkgVG94aWNvbG9neScsIC8vdGl0bGVcbiAgICAgICAgJ05vdiAxNScsIC8vZGF0ZVxuICAgICAgICAnSGVsbG8gYWxsLCcgKyc8YnI+JysnPGJyPicrJ05vdCBzdXJlIHdobyBrbm93cyBhbmQgd2hvIGRvZXNuXFwndCBhdCB0aGlzIHBvaW50IC4uLiB0b3hpY29sb2d5IG9uIER1bmF3YXkgY2FtZSBiYWNrIHBvc2l0aXZlIGZvciBmZW50YW55bC4gSSBkb25cXCd0IHdhbnQgaGltIHdyYXBwZWQgdXAgaW4gdGhpcyBkcnVnIHNjYW5kYWwgdGhhdFxcJ3MgaGFwcGVuaW5nIG9uIGNhbXB1cy4gSGlzIGRlYXRoIGlzIHRyYWdpYyBhbmQgaGUgZGVzZXJ2ZXMgdG8gZGllIGEgaGVyby4gU28gdGhpcyB3aWxsIGJlIHN0YXlpbmcgYmV0d2VlbiB1cy4gSWYgYW55b25lIGFza3MsIHRoZSBwaWxscyBoZSB0b29rIHdlcmUgcHJlc2NyaWJlZCB0byBoaW0sIGFuZCBoZSBnb3QgZGVwcmVzc2VkIGFuZCB0b29rIHRvbyBtYW55IG9mIHRoZW0uIEVuZCBvZiBzdG9yeS4nICsnPGJyPicrJzxicj4nKydDbGFyaydcbiAgICApXG4gICAgY29uc3QgZW1haWwyID0gbmV3IG5ld0VtYWlsKFxuICAgICAgICAnd2lsbGlhbWtsYW5zaW5nQHVjZi5lZHUnLCAvL2Zyb21cbiAgICAgICAgJ1N0dWR5IEdyb3VwJywgLy90aXRsZVxuICAgICAgICAnTm92IDExJywgLy9kYXRlXG4gICAgICAgICdXaWxsLCcgKyc8YnI+JysnPGJyPicrJ0lzYWFjIHJlYWNoZWQgb3V0IHRvIG1lIGFuZCBzYWlkIGhlIHdhbnRlZCB0byB0YWxrIGFib3V0IHRoZSBzdHVkeSBncm91cCBoZVxcJ3MgaW4gd2l0aCB5b3UgYW5kIFphY2guIElcXCdtIGdvbm5hIHNldCB5b3VyIG1pbmQgYXQgZWFzZSAuLi4gbm9ib2R5XFwncyBnZXR0aW5nIGluIGFueSB0cm91YmxlLiBJIGRvblxcJ3QgY2FyZSBob3cgeW91XFwncmUgZG9pbmcgaXQgLi4uIHlvdVxcJ3JlIGdldHRpbmcgdGhvc2UgZ3JhZGVzIHVwLiBJIG5lZWQgdGhvc2UgdHdvIGVsaWdpYmxlIHRvIHBsYXkgZm9yIGV2ZXJ5IGdhbWUuIEp1c3Qga2VlcCBkb2luZyB3aGF0IHlvdVxcJ3JlIGRvaW5nLCBhbmQgSVxcJ2xsIHRhbGsgdG8gSXNhYWMgYWJvdXQgaXQuIElcXCdtIHN1cmUgaGVcXCdsbCBjb21lIGFyb3VuZC4nICsnPGJyPicrJzxicj4nKydDb2FjaCBDbGFyaydcbiAgICApXG4gICAgY29uc3QgZW1haWwzID0gbmV3IG5ld0VtYWlsKFxuICAgICAgICAnTElTVFNFUlYtdWNmLWZiLWNvYWNoZXMnLCAvL2Zyb21cbiAgICAgICAgJ1Nwb3J0cyBEcmluayBBbGxlcmdpZXMnLCAvL3RpdGxlXG4gICAgICAgICdOb3YgMTAnLCAvL2RhdGVcbiAgICAgICAgJ0hlbGxvIEtuaWdodHMgQ29hY2hlcywnICsnPGJyPicrJzxicj4nKydXZSBhbnRpY2lwYXRlIGEgc3VjY2Vzc2Z1bCBwbGF5b2ZmcyBzZWFzb24gdGhpcyB5ZWFyLCBhbmQgd2l0aCB0aGF0IGJlaW5nIHNhaWQsIHBsZWFzZSByZW1pbmQgeW91ciBwbGF5ZXJzIHRoYXQgSSBhbSBWRVJZIGFsbGVyZ2ljIHRvIHJlZCA0MCBkeWUuIFRoYXQgbWVhbnMgTk8gZHVtcGluZyBvdmVyIHRoZSBzcG9ydHMgZHJpbmsgb24gQ29hY2gsIGdpdmVuIHRoYXQgdGhlIHNwb3J0cyBkcmluayBpcyByZWQvb3JhbmdlL3B1cnBsZS4gQmx1ZSBhbmQgeWVsbG93IGFyZSBvay4nICsnPGJyPicrJzxicj4nKydDbGFyaydcbiAgICApXG4gICAgY29uc3QgZW1haWw0ID0gbmV3IG5ld0VtYWlsKFxuICAgICAgICAnbWNsYXJrOTM0QG1haWxvbmUuY29tJywgLy9mcm9tXG4gICAgICAgICdJc2FhYycsIC8vdGl0bGVcbiAgICAgICAgJ05vdiAxMycsIC8vZGF0ZVxuICAgICAgICAnSGV5IGhvbmV5LCcgKyc8YnI+JysnPGJyPicrJ0lcXCd2ZSBnb3Qgbm8gcmVhbCByZWFzb24gdG8gd3JpdGUgeW91LiBJXFwnbSBqdXN0IHRvcm4gdXAgYWJvdXQgSXNhYWMuIE5ldmVyIHNhdyBpdCBjb21pbmcuIFdoYXQgYSBncmVhdCBraWQuIEkgdHJpZWQgdGFsa2luZyB0byBaYWNoIGFib3V0IGl0IGFuZCBoZSB3YXMgc3RhbmRvZmZpc2guIEkgd29uZGVyIGhvdyBoZVxcJ3MgZmVlbGluZyBhYm91dCBpdC4gSSB3YXMgYmVnaW5uaW5nIHRvIHRoaW5rIHRoZXkgd2VyZSBmcmllbmRzIGFmdGVyIGFsbC4nICsnPGJyPicrJzxicj4nKydMb3ZlIHlvdS4gU2VlIHlvdSBhdCBob21lLicgKyc8YnI+JysnPGJyPicrJ0RlYW4nXG4gICAgKVxuICAgIGxldCBzZW50QXJyYXkgPSBbZW1haWwxLCBlbWFpbDQsIGVtYWlsMiwgZW1haWwzXVxuXG4gICAgbmV3RW1haWwucHJvdG90eXBlLmRpc3BsYXlTZW50UHJvdG90eXBlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGVtYWlsRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvL0l0IGJlaW5nIGEgYnV0dG9uIG1ha2VzIGl0IGNsaWNrYWJsZVxuICAgICAgICAgICAgZW1haWxGbGV4Q29udGFpbmVyLmlkID0gJ2VtYWlsRmxleENvbnRhaW5lcic7XG4gICAgICAgICAgICBlbWFpbEZsZXhDb250YWluZXIuY2xhc3NMaXN0ID0gJ2VtYWlsRmxleCdcbiAgICAgICAgLy9idXR0b25zIHRvIGNyb3NzIGEgdGFzayBvZmYsIG1vdmluZyBpdCB0byBib3R0b20gb2YgdGhlIGFycmF5Ly9cbiAgICAgICAgbGV0IGVtYWlsRnJvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGVtYWlsRnJvbS5pbm5lckhUTUwgPSAnVE86ICcrIHRoaXMuZnJvbTtcbiAgICAgICAgICAgIGVtYWlsRnJvbS5jbGFzc0xpc3QgPSAnZW1haWxGcm9tJztcbiAgICAgICAgbGV0IGVtYWlsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBlbWFpbFRpdGxlLmlubmVySFRNTCA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICBlbWFpbFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2VtYWlsVGl0bGUnKTtcbiAgICAgICAgbGV0IGVtYWlsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgZW1haWxEYXRlLmlubmVySFRNTCA9IHRoaXMuZGF0ZTtcbiAgICAgICAgICAgIGVtYWlsRGF0ZS5jbGFzc0xpc3QuYWRkKCdlbWFpbERhdGUnKTtcbiAgICAgICAgZW1haWxGbGV4Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGVtYWlsUG9wb3V0Qm94Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBlbWFpbE5hbWVEaXNwbGF5LmlubmVySFRNTCA9ICdTdWJqZWN0OiAnICsgdGhpcy50aXRsZTtcbiAgICAgICAgICAgIGVtYWlsQm9keS5pbm5lckhUTUwgPSB0aGlzLm1lc3NhZ2U7XG4gICAgICAgIH0pXG4gICAgICAgIGVtYWlsRGlzcGxheUZsZXhDb250YWluZXIuYXBwZW5kKGVtYWlsRmxleENvbnRhaW5lcik7XG4gICAgICAgIGVtYWlsRmxleENvbnRhaW5lci5hcHBlbmQoZW1haWxGcm9tKTtcbiAgICAgICAgZW1haWxGbGV4Q29udGFpbmVyLmFwcGVuZChlbWFpbFRpdGxlKVxuICAgICAgICBlbWFpbEZsZXhDb250YWluZXIuYXBwZW5kKGVtYWlsRGF0ZSk7O1xuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5U2VudCgpe1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VtYWlsRmxleCcpO1xuICAgICAgICAvL0VtcHRpZXMgdGhlIHZpc3VhbCBkaXNwbGF5IGZvciByZXBpbm5pbmdcbiAgICAgICAgd2hpbGUoZWxlbWVudHMubGVuZ3RoID4gMCl7IFxuICAgICAgICAgICAgZW1haWxEaXNwbGF5RmxleENvbnRhaW5lci5yZW1vdmVDaGlsZChlbGVtZW50c1swXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBwID0gMDsgcCA8IHNlbnRBcnJheS5sZW5ndGg7IHArKyl7ICAvL2Rpc3BsYXkgdGhlIHRhc2tEaXNwbGF5QXJyYXlcbiAgICAgICAgICAgIHNlbnRBcnJheVtwXS5kaXNwbGF5U2VudFByb3RvdHlwZSgpO1xuICAgICAgICB9IFxuICAgICAgICBjdXJyZW50RGlzcGxheWVkSW5ib3guaW5uZXJIVE1MID0gJ1NlbnQnXG4gICAgfVxuXG4gICBcblxuICAgIHNlbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5U2VudCk7XG4gICBcblxuXG59IiwiaW1wb3J0ICcuL3NrZWxldG9uLmNzcydcblxuLy90aGlzIGZ1bmN0aW9uIGRlZmluZXMgdGhlIGJhc2ljIGxheW91dCBmb3IgdGhlIHdlYnBhZ2UvL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2tlbGV0b24gKCl7XG4gICAgbGV0IGJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFzZS5pZCA9ICdiYXNlJztcbiAgICBsZXQgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYmFubmVyJyk7XG4gICAgICAgIGJhbm5lci5pZCA9ICdiYW5uZXInO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJhbm5lcik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYmFzZSk7XG5cbi8vYmFubmVyXG5sZXQgYmFubmVyRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhbm5lckZsZXhDb250YWluZXIuaWQgPSAnYmFubmVyRmxleENvbnRhaW5lcic7XG4gICAgYmFubmVyLmFwcGVuZChiYW5uZXJGbGV4Q29udGFpbmVyKTtcbiAgICBsZXQgYmFubmVyVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFubmVyVGl0bGVDb250YWluZXIuaWQgPSAnYmFubmVyVGl0bGVDb250YWluZXInXG5cbiAgICAgICAgYmFubmVyRmxleENvbnRhaW5lci5hcHBlbmQoYmFubmVyVGl0bGVDb250YWluZXIpO1xuXG4gICAgICAgIGxldCBiYW5uZXJIZWFkZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBiYW5uZXJIZWFkZXIxLmlkID0gJ2Jhbm5lckhlYWRlcjEnO1xuICAgICAgICAgICAgYmFubmVySGVhZGVyMS5pbm5lckhUTUwgPSAnS05JR0hUJztcbiAgICAgICAgICAgIGJhbm5lclRpdGxlQ29udGFpbmVyLmFwcGVuZChiYW5uZXJIZWFkZXIxKVxuICAgICAgICBsZXQgYmFubmVySGVhZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmFubmVySGVhZGVyMi5pZCA9ICdiYW5uZXJIZWFkZXIyJztcbiAgICAgICAgICAgIGJhbm5lckhlYWRlcjIuaW5uZXJIVE1MID0gJ21haWwnO1xuICAgICAgICAgICAgYmFubmVyVGl0bGVDb250YWluZXIuYXBwZW5kKGJhbm5lckhlYWRlcjIpXG4gICAgbGV0IGN1cnJlbnREaXNwbGF5ZWRJbmJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjdXJyZW50RGlzcGxheWVkSW5ib3hDb250YWluZXIuaWQgPSAnY3VycmVudERpc3BsYXllZEluYm94Q29udGFpbmVyJztcbiAgICAgICAgYmFubmVyRmxleENvbnRhaW5lci5hcHBlbmQoY3VycmVudERpc3BsYXllZEluYm94Q29udGFpbmVyKVxuICAgICAgICBsZXQgY3VycmVudERpc3BsYXllZEluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjdXJyZW50RGlzcGxheWVkSW5ib3guaWQgPSAnY3VycmVudERpc3BsYXllZEluYm94JztcbiAgICAgICAgICAgIGN1cnJlbnREaXNwbGF5ZWRJbmJveENvbnRhaW5lci5hcHBlbmQoY3VycmVudERpc3BsYXllZEluYm94KVxuXG5cblxuLy9MZWZ0IGhhbmQgbWVudSBiYXIvL1xuICAgIGxldCBtZW51QmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IC8vVGhpcyBpcyB0aGUgbWVudS9uYXYgYmFyIG9uIGxlZnQgc2lkZSBvZiBzY3JlZW5cbiAgICAgICAgbWVudUJhckNvbnRhaW5lci5pZCA9ICdtZW51QmFyQ29udGFpbmVyJztcblxuICAgICAgIFxuICAgICAgICBsZXQgb3ZlcmFsbExpc3RNZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBvdmVyYWxsTGlzdE1lbnVDb250YWluZXIuaWQgPSAnb3ZlcmFsbExpc3RNZW51Q29udGFpbmVyJztcbiAgICAgICAgICAgIG1lbnVCYXJDb250YWluZXIuYXBwZW5kKG92ZXJhbGxMaXN0TWVudUNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBpbmJveEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGluYm94QnRuLmNsYXNzTGlzdCA9ICdsaXN0JztcbiAgICAgICAgICAgICAgICBpbmJveEJ0bi5pbm5lckhUTUwgPSAnSW5ib3gnXG4gICAgICAgICAgICAgICAgaW5ib3hCdG4uaWQgPSAnaW5ib3hCdG4nO1xuICAgICAgICAgICAgICAgIGluYm94QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdsaXN0QnRuJylcbiAgICAgICAgICAgICAgICBvdmVyYWxsTGlzdE1lbnVDb250YWluZXIuYXBwZW5kKGluYm94QnRuKVxuXG4gICAgICAgICAgICBsZXQgc2VudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHNlbnRCdG4uY2xhc3NMaXN0ID0gJ2xpc3QnO1xuICAgICAgICAgICAgICAgIHNlbnRCdG4uaW5uZXJIVE1MID0gJ1NlbnQnXG4gICAgICAgICAgICAgICAgc2VudEJ0bi5pZCA9ICdzZW50QnRuJztcbiAgICAgICAgICAgICAgICBzZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdsaXN0QnRuJylcbiAgICAgICAgICAgICAgICBvdmVyYWxsTGlzdE1lbnVDb250YWluZXIuYXBwZW5kKHNlbnRCdG4pO1xuXG4gICAgICAgICAgICBsZXQganVua0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGp1bmtCdG4uY2xhc3NMaXN0ID0gJ2xpc3QnO1xuICAgICAgICAgICAgICAgIGp1bmtCdG4uaW5uZXJIVE1MID0gJ0p1bmsnXG4gICAgICAgICAgICAgICAganVua0J0bi5pZCA9ICdqdW5rQnRuJztcbiAgICAgICAgICAgICAgICBqdW5rQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdsaXN0QnRuJylcbiAgICAgICAgICAgICAgICBvdmVyYWxsTGlzdE1lbnVDb250YWluZXIuYXBwZW5kKGp1bmtCdG4pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB0cmFzaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHRyYXNoQnRuLmNsYXNzTGlzdCA9ICdsaXN0JztcbiAgICAgICAgICAgICAgICB0cmFzaEJ0bi5pbm5lckhUTUwgPSAnVHJhc2gnXG4gICAgICAgICAgICAgICAgdHJhc2hCdG4uaWQgPSAndHJhc2hCdG4nO1xuICAgICAgICAgICAgICAgIHRyYXNoQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdsaXN0QnRuJylcbiAgICAgICAgICAgICAgICBvdmVyYWxsTGlzdE1lbnVDb250YWluZXIuYXBwZW5kKHRyYXNoQnRuKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG5cblxuLy9SaWdodCBoYW5kIHBvcHVwIGZvciB0YXNrcyBhbmQgaW50ZXJhY3Rpb25zIGluY2x1ZGVzIHBvcG91dCBib3hlcy8vXG4gICAgbGV0IGVtYWlsRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbWFpbERpc3BsYXlDb250YWluZXIuaWQgPSAnZW1haWxEaXNwbGF5Q29udGFpbmVyJztcblxuICAgICAgICBsZXQgZW1haWxEaXNwbGF5RmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZW1haWxEaXNwbGF5RmxleENvbnRhaW5lci5pZCA9ICdlbWFpbERpc3BsYXlGbGV4Q29udGFpbmVyJ1xuICAgICAgICAgICAgZW1haWxEaXNwbGF5Q29udGFpbmVyLmFwcGVuZChlbWFpbERpc3BsYXlGbGV4Q29udGFpbmVyKVxuXG5cblxuXG4vL2FkZExpc3QgcG9wb3V0IGJveCAtIGNyZWF0ZWQgc28gdGhhdCBpdCBkaXNhbGxvd3MgY2xpY2tpbmcgb3V0c2lkZSB0aGUgYm94Ly9cbiAgICBsZXQgZW1haWxQb3BvdXRCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZW1haWxQb3BvdXRCb3hDb250YWluZXIuaWQgPSAnZW1haWxQb3BvdXRCb3hDb250YWluZXInO1xuICAgICAgICBlbWFpbFBvcG91dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBlbWFpbERpc3BsYXlDb250YWluZXIuYXBwZW5kKGVtYWlsUG9wb3V0Qm94Q29udGFpbmVyKVxuICAgIGxldCBlbWFpbFBvcG91dEJveEZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZW1haWxQb3BvdXRCb3hGbGV4Q29udGFpbmVyLmlkID0gJ2VtYWlsUG9wb3V0Qm94RmxleENvbnRhaW5lcic7XG4gICAgICAgIGVtYWlsUG9wb3V0Qm94Q29udGFpbmVyLmFwcGVuZChlbWFpbFBvcG91dEJveEZsZXhDb250YWluZXIpO1xuICAgIGxldCBlbWFpbFBvcG91dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZW1haWxQb3BvdXRCb3guaWQgPSAnZW1haWxQb3BvdXRCb3gnO1xuICAgICAgICAgICAgZW1haWxQb3BvdXRCb3hGbGV4Q29udGFpbmVyLmFwcGVuZChlbWFpbFBvcG91dEJveCk7XG5cbiAgICAgICAgbGV0IGVtYWlsRGlzcGxheVRhc2tiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBlbWFpbERpc3BsYXlUYXNrYmFyLmlkID0gJ2VtYWlsRGlzcGxheVRhc2tiYXInO1xuICAgICAgICAgICAgICAgIGVtYWlsRGlzcGxheVRhc2tiYXIuY2xhc3NMaXN0ID0gJ2xpc3REaXNwbGF5VGFza2Jhcic7XG4gICAgICAgICAgICAgICAgZW1haWxQb3BvdXRCb3guYXBwZW5kKGVtYWlsRGlzcGxheVRhc2tiYXIpO1xuICAgICAgICAgICAvKiBsZXQgZW1haWxOYW1lRmxleERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBlbWFpbERpc3BsYXlUYXNrQmFyZW1haWxOYW1lRmxleERpc3BsYXkgKi9cbiAgICAgICAgICAgIGxldCBlbWFpbE5hbWVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsTmFtZURpc3BsYXkuaWQgPSAnZW1haWxOYW1lRGlzcGxheSc7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsTmFtZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgnbGlzdEhlYWRlcnMnKTtcbiAgICAgICAgICAgICAgICAgICAgZW1haWxEaXNwbGF5VGFza2Jhci5hcHBlbmQoZW1haWxOYW1lRGlzcGxheSk7XG4gICAgICAgICAgICBsZXQgZW1haWxFeGl0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZW1haWxFeGl0QnRuQ29udGFpbmVyLmlkID0gKCdlbWFpbEV4aXRCdG5Db250YWluZXInKTtcbiAgICAgICAgICAgICAgICBlbWFpbERpc3BsYXlUYXNrYmFyLmFwcGVuZChlbWFpbEV4aXRCdG5Db250YWluZXIpO1xuICAgICAgICAgICAgbGV0IGVtYWlsRXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbEV4aXRCdG4uaWQgPSAnZW1haWxFeGl0QnRuJztcbiAgICAgICAgICAgICAgICAgICAgZW1haWxFeGl0QnRuLmNsYXNzTGlzdCA9ICdidG4nO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbEV4aXRCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDY7J1xuICAgICAgICAgICAgICAgICAgICBlbWFpbEV4aXRCdG5Db250YWluZXIuYXBwZW5kKGVtYWlsRXhpdEJ0bik7XG4gICAgICAgIC8vYWRkTGlzdCBpbnB1dCBib3gvL1xuICAgICAgICBsZXQgZW1haWxCb2R5SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBlbWFpbEJvZHlJbnB1dENvbnRhaW5lci5pZCA9ICdlbWFpbEJvZHlJbnB1dENvbnRhaW5lcic7XG4gICAgICAgICAgICAgICAgZW1haWxQb3BvdXRCb3guYXBwZW5kKGVtYWlsQm9keUlucHV0Q29udGFpbmVyKVxuXG4gICAgICAgICAgICAgICAgbGV0IGVtYWlsQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgZW1haWxCb2R5LmlkID0gJ2VtYWlsQm9keSc7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsQm9keS5jbGFzc0xpc3QuYWRkKCdwb3BvdXRJdGVtJylcbiAgICAgICAgICAgICAgICAgICAgZW1haWxCb2R5SW5wdXRDb250YWluZXIuYXBwZW5kKGVtYWlsQm9keSk7XG4gICAgICAgICAgICAgICAgXG5cbi8vbG9naW4gc2NyZWVuXG4gICAgbGV0IGxvZ2luU2NyZWVuQmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsb2dpblNjcmVlbkJhY2tncm91bmQuaWQ9KCdsb2dpblNjcmVlbkJhY2tncm91bmQnKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChsb2dpblNjcmVlbkJhY2tncm91bmQpO1xuXG4gICAgbGV0IGxvZ2luU2NyZWVuQmFja2dyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsb2dpblNjcmVlbkJhY2tncm91bmRDb250YWluZXIuaWQgPSAnbG9naW5TY3JlZW5CYWNrZ3JvdW5kQ29udGFpbmVyJ1xuICAgICAgICBsb2dpblNjcmVlbkJhY2tncm91bmQuYXBwZW5kKGxvZ2luU2NyZWVuQmFja2dyb3VuZENvbnRhaW5lcik7XG5cbiAgICBsZXQgbG9naW5Qb3B1cEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsb2dpblBvcHVwQm94LmlkID0gJ2xvZ2luUG9wdXBCb3gnO1xuICAgICAgICBsb2dpblNjcmVlbkJhY2tncm91bmRDb250YWluZXIuYXBwZW5kKGxvZ2luUG9wdXBCb3gpO1xuICAgIGxldCBsb2dpbkhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsb2dpbkhlYWRlckNvbnRhaW5lci5pZCA9ICdsb2dpbkhlYWRlckNvbnRhaW5lcic7XG4gICAgICAgIGxvZ2luUG9wdXBCb3guYXBwZW5kKGxvZ2luSGVhZGVyQ29udGFpbmVyKTtcbiAgICAgICAgbGV0IGxvZ2luSGVhZGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbG9naW5IZWFkZXIxLmlkID0gJ2xvZ2luSGVhZGVyMSc7XG4gICAgICAgICAgICBsb2dpbkhlYWRlcjEuaW5uZXJIVE1MID0gJ0tOSUdIVCc7XG4gICAgICAgICAgICBsb2dpbkhlYWRlckNvbnRhaW5lci5hcHBlbmQobG9naW5IZWFkZXIxKTtcbiAgICAgICAgIGxldCBsb2dpbkhlYWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxvZ2luSGVhZGVyMi5pZCA9ICdsb2dpbkhlYWRlcjInO1xuICAgICAgICAgICAgbG9naW5IZWFkZXIyLmlubmVySFRNTCA9ICdtYWlsJztcbiAgICAgICAgICAgIGxvZ2luSGVhZGVyQ29udGFpbmVyLmFwcGVuZChsb2dpbkhlYWRlcjIpO1xuICAgIGxldCBpbnB1dHNGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlucHV0c0ZsZXhDb250YWluZXIuaWQgPSAnaW5wdXRzRmxleENvbnRhaW5lcic7XG4gICAgICAgIGxvZ2luUG9wdXBCb3guYXBwZW5kKGlucHV0c0ZsZXhDb250YWluZXIpO1xuICAgICAgICBsZXQgdXNlck5hbWVGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyTmFtZUZsZXhDb250YWluZXIuaWQgPSAndXNlck5hbWVGbGV4Q29udGFpbmVyJ1xuICAgICAgICAgICAgaW5wdXRzRmxleENvbnRhaW5lci5hcHBlbmQodXNlck5hbWVGbGV4Q29udGFpbmVyKSBcbiAgICAgICAgICAgIGxldCB1c2VyTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdXNlck5hbWVMYWJlbC5pZCA9ICd1c2VyTmFtZUxhYmVsJztcbiAgICAgICAgICAgICAgICB1c2VyTmFtZUxhYmVsLmlubmVySFRNTCA9ICdFbWFpbCdcbiAgICAgICAgICAgICAgICB1c2VyTmFtZUZsZXhDb250YWluZXIuYXBwZW5kKHVzZXJOYW1lTGFiZWwpXG4gICAgICAgICAgICBsZXQgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgdXNlck5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgIHVzZXJOYW1lSW5wdXQuaWQgPSd1c2VyTmFtZUlucHV0JztcbiAgICAgICAgICAgICAgICB1c2VyTmFtZUZsZXhDb250YWluZXIuYXBwZW5kKHVzZXJOYW1lSW5wdXQpO1xuICAgICAgICBsZXQgcGFzc3dvcmRGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwYXNzd29yZEZsZXhDb250YWluZXIuaWQgPSAncGFzc3dvcmRGbGV4Q29udGFpbmVyJztcbiAgICAgICAgICAgIGlucHV0c0ZsZXhDb250YWluZXIuYXBwZW5kKHBhc3N3b3JkRmxleENvbnRhaW5lcik7XG4gICAgICAgICAgICBsZXQgcGFzc3dvcmRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkTGFiZWwuaWQgPSAncGFzc3dvcmRMYWJlbCc7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRMYWJlbC5pbm5lckhUTUwgPSAnUGFzc3dvcmQnO1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkRmxleENvbnRhaW5lci5hcHBlbmQocGFzc3dvcmRMYWJlbCk7XG4gICAgICAgICAgICBsZXQgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0LmlkID0gJ3Bhc3N3b3JkSW5wdXQnO1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkRmxleENvbnRhaW5lci5hcHBlbmQocGFzc3dvcmRJbnB1dCk7XG4gICAgbGV0IGxvZ2luQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGxvZ2luQnRuLmlkID0gJ2xvZ2luQnRuJztcbiAgICAgICAgbG9naW5CdG4uaW5uZXJIVE1MID0gJ0xvZ2luJ1xuICAgICAgICBsb2dpblBvcHVwQm94LmFwcGVuZChsb2dpbkJ0bik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiAgICAgICAgICBcbiAgICAvL1Rhc2sgcG9wb3V0IGJveC8vXG4gICAgbGV0IHRhc2tQb3BvdXRCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1BvcG91dEJveENvbnRhaW5lci5pZCA9ICd0YXNrUG9wb3V0Qm94Q29udGFpbmVyJztcbiAgICAgICAgZW1haWxEaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0YXNrUG9wb3V0Qm94Q29udGFpbmVyKVxuICAgICAgICBsZXQgdGFza1BvcG91dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza1BvcG91dEJveC5pZCA9ICd0YXNrUG9wb3V0Qm94JztcbiAgICAgICAgICAgIHRhc2tQb3BvdXRCb3guY2xhc3NMaXN0LmFkZCgndGFza1BvcG91dEJveCcpXG4gICAgICAgICAgICB0YXNrUG9wb3V0Qm94Q29udGFpbmVyLmFwcGVuZCh0YXNrUG9wb3V0Qm94KTtcblxuICAgICAgICAgICAgbGV0IGxpc3REaXNwbGF5VGFza2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGxpc3REaXNwbGF5VGFza2Jhci5pZCA9ICdsaXN0RGlzcGxheVRhc2tiYXInO1xuICAgICAgICAgICAgICAgIGxpc3REaXNwbGF5VGFza2Jhci5jbGFzc0xpc3QgPSAnbGlzdERpc3BsYXlUYXNrYmFyJztcbiAgICAgICAgICAgICAgICB0YXNrUG9wb3V0Qm94LmFwcGVuZChsaXN0RGlzcGxheVRhc2tiYXIpO1xuICAgICAgICAgICAgICAgIGxldCBsaXN0TmFtZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdE5hbWVEaXNwbGF5LmlkID0gJ2xpc3ROYW1lRGlzcGxheSc7XG4gICAgICAgICAgICAgICAgICAgIGxpc3ROYW1lRGlzcGxheS5jbGFzc0xpc3QgPSAnbGlzdEhlYWRlcnMnO1xuICAgICAgICAgICAgICAgICAgICBsaXN0RGlzcGxheVRhc2tiYXIuYXBwZW5kKGxpc3ROYW1lRGlzcGxheSk7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RFeGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RFeGl0QnRuLmlkID0gJ2xpc3RFeGl0QnRuJztcbiAgICAgICAgICAgICAgICAgICAgbGlzdEV4aXRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywnbGlzdEV4aXRCdG4nKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEV4aXRCdG4uaW5uZXJIVE1MID0gJ3gnXG4gICAgICAgICAgICAgICAgICAgIGxpc3REaXNwbGF5VGFza2Jhci5hcHBlbmQobGlzdEV4aXRCdG4pO1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy93aGVyZSB1c2VyIHR5cGVzIG5ldyB0YXNrcyBpbnRvIHBvcHVwL1xuICAgICAgICAgICAgbGV0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuaWQgPSAnaW5wdXRDb250YWluZXInO1xuICAgICAgICAgICAgICAgIHRhc2tQb3BvdXRCb3guYXBwZW5kKGlucHV0Q29udGFpbmVyKVxuICAgICAgICAgICAgICAgIGxldCB1c2VyVGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdXNlclRhc2tJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgICAgICB1c2VyVGFza0lucHV0LmlkID0gJ3VzZXJUYXNrSW5wdXQnO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmQodXNlclRhc2tJbnB1dCk7XG4gICAgICAgICAgICAgICAgbGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkVGFza0J0bi5pZCA9ICdhZGRUYXNrQnRuJztcbiAgICAgICAgICAgICAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QgPSAnYnRuJztcbiAgICAgICAgICAgICAgICAgICAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSAnKyc7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChhZGRUYXNrQnRuKTtcblxuXG4vL1Rhc2sgaW5mbyByaWdodCBuZXh0IHRvIHRhc2sgcG9wb3V0IGJveC8vXG5sZXQgdGFza0luZm9Qb3BvdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrSW5mb1BvcG91dENvbnRhaW5lci5pZCA9ICd0YXNrSW5mb1BvcG91dENvbnRhaW5lcic7XG4gICAgZW1haWxEaXNwbGF5Q29udGFpbmVyLmFwcGVuZCh0YXNrSW5mb1BvcG91dENvbnRhaW5lcilcbmxldCB0YXNrSW5mb1BvcG91dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tJbmZvUG9wb3V0Qm94LmlkID0gJ3Rhc2tJbmZvUG9wb3V0Qm94JztcbiAgICB0YXNrSW5mb1BvcG91dEJveC5jbGFzc0xpc3QuYWRkKCd0YXNrUG9wb3V0Qm94JylcbiAgICB0YXNrSW5mb1BvcG91dENvbnRhaW5lci5hcHBlbmQodGFza0luZm9Qb3BvdXRCb3gpO1xuLy90aXRsZSBkaXNwbGF5XG4gICAgbGV0IHRhc2tUaXRsZURpc3BsYXlCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1RpdGxlRGlzcGxheUJveC5pZCA9ICd0YXNrVGl0bGVEaXNwbGF5Qm94JztcbiAgICAgICAgdGFza1RpdGxlRGlzcGxheUJveC5jbGFzc0xpc3QgPSAnbGlzdEhlYWRlcnMnO1xuICAgICAgICB0YXNrSW5mb1BvcG91dEJveC5hcHBlbmQodGFza1RpdGxlRGlzcGxheUJveCk7XG4gICAgICAgIGxldCB0YXNrVGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrVGl0bGVEaXNwbGF5LmlkID0gJ3Rhc2tUaXRsZURpc3BsYXknO1xuICAgICAgICAgICAgdGFza1RpdGxlRGlzcGxheS5jbGFzc0xpc3QgPSAnbGlzdEhlYWRlcnMnO1xuICAgICAgICAgICAgdGFza1RpdGxlRGlzcGxheUJveC5hcHBlbmQodGFza1RpdGxlRGlzcGxheSk7XG4vL2luZm8gZGlzcGxheSB3aXRoIHRpdGxlcyAmIGJveGVzIGhhcmRjb2RlZCBpbiwgYnV0IGZpbGxlZCBpbiBkaXNwbGF5VGFza0RldGFpbHNcbi8qIFxubGV0IHRhc2tJbmZvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0luZm9EaXNwbGF5Q29udGFpbmVyLmlkID0gJ3Rhc2tJbmZvRGlzcGxheUNvbnRhaW5lcidcbiAgICAgICAgICAgIC8vdGFza0luZm9Qb3BvdXRCb3guYXBwZW5kKHRhc2tJbmZvRGlzcGxheUNvbnRhaW5lcilcbiAgICAgICAgbGV0IGR1ZURhdGVEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkdWVEYXRlRGlzcGxheUNvbnRhaW5lci5pZCA9IFwiZHVlRGF0ZURpc3BsYXlDb250YWluZXJcIlxuICAgICAgICAgICAgLy90YXNrSW5mb0Rpc3BsYXlDb250YWluZXIuYXBwZW5kKGR1ZURhdGVEaXNwbGF5Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVUaXRsZS5pZCA9ICdkdWVEYXRlVGl0bGUnO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgnaW5mb1RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVUaXRsZS5pbm5lckhUTUwgPSAnRmluaXNoIGJ5JztcbiAgICAgICAgICAgICAgICAgICAgLy9kdWVEYXRlRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZHVlRGF0ZVRpdGxlKTtcbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZURpc3BsYXkuaWQgPSAnZHVlRGF0ZURpc3BsYXknO1xuICAgICAgICAgICAgICAgICAgICAvL2R1ZURhdGVEaXNwbGF5Q29udGFpbmVyLmFwcGVuZChkdWVEYXRlRGlzcGxheSk7XG4gICAgICAgICAgICAgICAgbGV0IGNoYW5nZUR1ZURhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRHVlRGF0ZUJ0bi5pZCA9ICdjaGFuZ2VEdWVEYXRlQnRuJztcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRHVlRGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgICAgICAgICAgICAgLy9kdWVEYXRlRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoY2hhbmdlRHVlRGF0ZUJ0bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGxldCBwcmlvcml0eURpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eURpc3BsYXlDb250YWluZXIuaWQgPSBcInByaW9yaXR5RGlzcGxheUNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0luZm9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZChwcmlvcml0eURpc3BsYXlDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlUaXRsZS5pZCA9ICdwcmlvcml0eVRpdGxlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VGl0bGUuY2xhc3NMaXN0LmFkZCgnaW5mb1RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdQcmlvcml0eSBMZXZlbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eURpc3BsYXlDb250YWluZXIuYXBwZW5kKHByaW9yaXR5VGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eURpc3BsYXkuaWQgPSAncHJpb3JpdHlEaXNwbGF5JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5RGlzcGxheUNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlEaXNwbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBsZXQgZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXIuaWQgPSBcImRlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lclwiXG4gICAgICAgICAgICAvL3Rhc2tJbmZvRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRpdGxlLmlkID0gJ2Rlc2NyaXB0aW9uVGl0bGUnO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm9UaXRsZScpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRpdGxlLmlubmVySFRNTCA9ICdOb3Rlcyc7XG4gICAgICAgICAgICAgICAgICAgIC8vZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvblRpdGxlKTtcbiAgICAgICAgICAgICAgICAvL2xldCBkZXNjcmlwdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkRpc3BsYXkuaWQgPSAnZGVzY3JpcHRpb25EaXNwbGF5JztcbiAgICAgICAgICAgICAgICAgICAgLy9kZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uRGlzcGxheSk7XG5cblxuICAgIFxuXG4gICAgLy9hZGRMaXN0IHBvcG91dCBib3ggLSBjcmVhdGVkIHNvIHRoYXQgaXQgZGlzYWxsb3dzIGNsaWNraW5nIG91dHNpZGUgdGhlIGJveC8vXG4gICAgbGV0IGVtYWlsUG9wb3V0Qm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVtYWlsUG9wb3V0Qm94Q29udGFpbmVyLmlkID0gJ2VtYWlsUG9wb3V0Qm94Q29udGFpbmVyJztcbiAgICAgICAgZW1haWxQb3BvdXRCb3hDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZW1haWxEaXNwbGF5Q29udGFpbmVyLmFwcGVuZChlbWFpbFBvcG91dEJveENvbnRhaW5lcilcbiAgICBsZXQgZW1haWxQb3BvdXRCb3hGbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVtYWlsUG9wb3V0Qm94RmxleENvbnRhaW5lci5pZCA9ICdlbWFpbFBvcG91dEJveEZsZXhDb250YWluZXInO1xuICAgICAgICBlbWFpbFBvcG91dEJveENvbnRhaW5lci5hcHBlbmQoZW1haWxQb3BvdXRCb3hGbGV4Q29udGFpbmVyKTtcbiAgICBsZXQgZW1haWxQb3BvdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVtYWlsUG9wb3V0Qm94LmlkID0gJ2VtYWlsUG9wb3V0Qm94JztcbiAgICAgICAgICAgIGVtYWlsUG9wb3V0Qm94RmxleENvbnRhaW5lci5hcHBlbmQoZW1haWxQb3BvdXRCb3gpO1xuXG4gICAgICAgIGxldCBlbWFpbERpc3BsYXlUYXNrYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZW1haWxEaXNwbGF5VGFza2Jhci5pZCA9ICdlbWFpbERpc3BsYXlUYXNrYmFyJztcbiAgICAgICAgICAgICAgICBlbWFpbERpc3BsYXlUYXNrYmFyLmNsYXNzTGlzdCA9ICdsaXN0RGlzcGxheVRhc2tiYXInO1xuICAgICAgICAgICAgICAgIGVtYWlsUG9wb3V0Qm94LmFwcGVuZChlbWFpbERpc3BsYXlUYXNrYmFyKTtcbiAgICAgICAgICAgIGxldCBlbWFpbE5hbWVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsTmFtZURpc3BsYXkuaWQgPSAnZW1haWxOYW1lRGlzcGxheSc7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsTmFtZURpc3BsYXkuY2xhc3NMaXN0LmFkZCgnbGlzdEhlYWRlcnMnKTtcbiAgICAgICAgICAgICAgICAgICAgZW1haWxEaXNwbGF5VGFza2Jhci5hcHBlbmQoZW1haWxOYW1lRGlzcGxheSk7XG4gICAgICAgICAgICBsZXQgZW1haWxFeGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsRXhpdEJ0bi5pZCA9ICdlbWFpbEV4aXRCdG4nO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbEV4aXRCdG4uY2xhc3NMaXN0ID0gJ2J0bic7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsRXhpdEJ0bi5pbm5lckhUTUwgPSAneCdcbiAgICAgICAgICAgICAgICAgICAgZW1haWxEaXNwbGF5VGFza2Jhci5hcHBlbmQoZW1haWxFeGl0QnRuKTtcbiAgICAgICAgLy9hZGRMaXN0IGlucHV0IGJveC8vXG4gICAgICAgIGxldCBlbWFpbEJvZHlJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGVtYWlsQm9keUlucHV0Q29udGFpbmVyLmlkID0gJ2VtYWlsQm9keUlucHV0Q29udGFpbmVyJztcbiAgICAgICAgICAgICAgICBlbWFpbFBvcG91dEJveC5hcHBlbmQoZW1haWxCb2R5SW5wdXRDb250YWluZXIpXG5cbiAgICAgICAgICAgICAgICBsZXQgZW1haWxCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgZW1haWxCb2R5LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsQm9keS5pZCA9ICdlbWFpbEJvZHknO1xuICAgICAgICAgICAgICAgICAgICBlbWFpbEJvZHkuY2xhc3NMaXN0LmFkZCgncG9wb3V0SXRlbScpXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsQm9keUlucHV0Q29udGFpbmVyLmFwcGVuZChlbWFpbEJvZHkpO1xuICAgICAgICAgICAgICAgIGxldCBhZGRMaXN0UG9wdXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdFBvcHVwQnRuLmlkID0gJ2FkZExpc3RQb3B1cEJ0bic7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RQb3B1cEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCdwb3BvdXRJdGVtJyk7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RQb3B1cEJ0bi5pbm5lckhUTUwgPSAnKyc7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsQm9keUlucHV0Q29udGFpbmVyLmFwcGVuZChhZGRMaXN0UG9wdXBCdG4pO1xuICAgIFxuICAgICAgICAvL0FkZCBkYXRlIHBvcG91dCBpdGVtc1xuICAgICAgICBsZXQgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY2FsZW5kYXIudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG4gICAgICAgICAgICBjYWxlbmRhci5pZCA9ICdjYWxlbmRhcic7XG4gICAgICAgICAgICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKCdwb3BvdXRJdGVtJyk7XG4gICAgICAgICAgICBlbWFpbEJvZHlJbnB1dENvbnRhaW5lci5hcHBlbmQoY2FsZW5kYXIpXG4qL1xuXG5cblxuICAgIGJhc2UuYXBwZW5kKG1lbnVCYXJDb250YWluZXIpO1xuICAgIGJhc2UuYXBwZW5kKGVtYWlsRGlzcGxheUNvbnRhaW5lcik7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHNrZWxldG9uIGZyb20gXCIuL3NrZWxldG9uXCI7XG5pbXBvcnQgaW5ib3ggZnJvbSBcIi4vaW5ib3hcIjtcbmltcG9ydCBzZW50IGZyb20gXCIuL3NlbnRcIjtcbmltcG9ydCBsb2dpbiBmcm9tIFwiLi9sb2dpblwiO1xuXG5za2VsZXRvbigpO1xubG9naW4oKTtcbi8vbG9naW5TY3JlZW5CYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbmluYm94KCk7XG5zZW50KCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9