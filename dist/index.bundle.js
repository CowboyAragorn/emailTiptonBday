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
___CSS_LOADER_EXPORT___.push([module.id, "\nhtml{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\nbody{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\n@font-face{\n    font-family: 'UCF';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('otf');\n    font-weight: 600;\n    font-style: normal;\n}\n@font-face{\n    font-family: 'noto';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('otf');\n    font-weight: 600;\n    font-style: normal;\n}\n#banner{\n    display: flex;\n    border: 1pt blue solid;\n    height: 20%;\n    width: 100%;\n}\n\n    #bannerTitleContainer{\n        display: flex;\n        height: 100%;\n        align-items: center;\n        justify-content: center;\n    }\n    #bannerHeader{\n        font-family: 'noto';\n        font-size:50pt;\n    }\n\n#base{\n    display: flex;\n    height: 80%;\n    width: 100%;\n}\n.btn{\n    height: fit-content;\n}\n\n\n\n#menuBarContainer{\n    display: flex;\n    flex-direction: column;\n    width: 15%;\n    border: 2pt black solid;\n    justify-content:top;  \n    align-items: top;  \n}\n\n\n#menuBarContainer{\n    display: flex;\n    flex-direction: column;\n    gap: 10%;\n}\n\n\n\n#listHeaderContainer{\n    display: flex;\n    justify-content: space-between;\n    padding: 5pt;\n}\n\n.listHeaders{\n    font-size: 20pt;\n\n}\n\n#overallListMenuContainer{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#currentListsFlexContainer{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n\n/* right hand tasks display and interactions popup*/\n        #taskAndListContainer{\n            height: 100%;\n            width: 85%;\n            background-position: center top;\n            background-repeat: no-repeat;\n            background-size: cover;\n            display: flex;\n            align-items:flex-end;\n        }\n\n\n\n        #taskPopoutBoxContainer, #taskInfoPopoutContainer{\n            height: 550pt;\n            width: 300pt;\n            border-radius: 4%;\n            margin-left: 50pt;\n            justify-content: end;\n            align-items: center;\n            margin-bottom: 3%;;\n        }\n\n        #taskPopoutBox, #taskInfoPopoutBox{\n        height: 100%;\n        width: 100%;\n            background-color: white;\n            border: 1pt #d8d8d8 inset;\n            border-radius: 4%;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n        }\n\n        .listDisplayTaskbar, #taskTitleDisplayBox {\n            width: 100%;\n            height: 10%;\n            display: flex;\n            justify-content: space-between;\n            margin: 0;\n        }\n        #listNameDisplay, #taskTitleDisplay{\n            display: flex;\n            align-items: center;\n            padding: 5pt;\n        }\n        .listExitBtn{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            \n        }\n\n        #taskDisplayContainer, #taskInfoDisplayContainer{\n            display: flex;\n            flex-direction: column;\n            overflow: auto;\n            background-color: whitesmoke;\n            height: 90%;\n            width: 100%;\n            margin: 0;\n            \n        }\n\n        #taskFlexContainer{\n            display: flex;\n            height: fit-content;\n            align-items: center;\n            background-color: whitesmoke;\n            border: none;\n            gap:2%;\n            font-size: 13pt;\n        }\n        .taskCrossBtn{\n            height: 50%;\n            border-radius: 15px;\n            margin-left: 5%;\n            padding: 6pt;\n            border: 1pt, black, solid;\n        }\n\n        .task{\n            display: flex;\n            margin: 0;\n            padding: 5pt;\n            width: 100%;\n            \n        }\n\n        /*Crossout achieved with linear gradient, shamelessly took this*/\n        .crossed{\n            background: linear-gradient(180deg, \n                rgba(0,0,0,0) calc(50% - 1px), \n                rgba(192,192,192,1) calc(50%), \n                rgba(0,0,0,0) calc(50% + 1px)\n                );\n        }\n\n        .crossedColors{\n            color: grey;\n\n        }\n        .deleteTaskBtn, .crossedTaskBtn{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            padding: 8px;\n            width: 20px;\n            height: 20px;\n            font-size: 11pt;\n            background-color: grey;\n            color: white;\n            border: none;\n        }\n        .deleteTaskBtn{\n            margin: 0;\n        }\n        .crossedTaskBtn{\n            font-size: 14pt;\n        }\n\n        #inputContainer{\n            display: flex;\n            gap: 4%;\n            padding-top: 5pt;\n            height: 10%;\n            width: 100%;\n        }\n\n        #userTaskInput{\n            border-radius: 15px;\n            border: 1pt blue solid;\n            margin-left: 2pt;\n            height: 60%;\n            width: 85%;\n        }\n\n        #addTaskBtn{\n            border-radius: 15px;\n            background-color: white;\n            border: 1pt blue solid;\n            height: 70%;\n            width: 10%;\n            margin: 0;\n            margin-right: 3pt;\n        }\n\n/*Info and Display Box*/\n        #taskInfoDisplayContainer{\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n        }\n        #dueDateDisplayContainer{\n           height: 20%;\n           width: 100%;\n        }\n            #changeDueDateBtn{\n                height: 30pt;\n                width: pt;;\n            }\n        \n        #descriptionDisplayContainer{\n            height: 80%;\n        }\n            #descriptionDisplay, #descriptionDisplayInput{\n                display: flex;\n                justify-content: top;\n                align-items: top;\n                overflow-wrap: break-word;\n                width: 100%;\n                height: 95%;\n            }\n        .infoTitle{\n            font-size: 15pt;\n            font-weight: bold;\n        }\n\n/*Add List popout Box*/\n#addListPopoutBoxContainer{\n    position: fixed;\n    background-color: rgba(0, 0 , 0, 0.5);\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 1;\n}\n\n\n#addListPopoutBoxFlexContainer{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n#addListPopoutBox{\n    height: 100pt;\n    width: 300pt;\n    background-color: white;\n    margin-left: 7%;\n    margin-bottom: 4%;\n    border: 1pt #d8d8d8 inset;\n    border-radius: 4%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: top;\n    gap: 30%;\n}\n#addListInputContainer{\n    display: flex;\n    padding-top: 5pt;\n    justify-content: space-between;\n    height: 30%;\n    width: 100%;\n}\n#userListInput{\n    border-radius: 15px;\n    border: 1pt black solid;\n    margin-left: 2pt;\n    width: 85%;\n}\n#addListPopupBtn{\n    border-radius: 15px;\n    background-color: white;\n    border: 1pt black solid;\n    width: 10%;\n    height: 100%;\n    margin: 0;\n    margin-right: 3pt;\n}", "",{"version":3,"sources":["webpack://./src/skeleton.css"],"names":[],"mappings":"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","sourcesContent":["\nhtml{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\nbody{\n    height: 100%;\n    width: 100%;\n    margin: 0;\n}\n@font-face{\n    font-family: 'UCF';\n    src: url('./ucfKnights.otf') format('otf');\n    font-weight: 600;\n    font-style: normal;\n}\n@font-face{\n    font-family: 'noto';\n    src: url('./NotoSansJP-Regular.otf') format('otf');\n    font-weight: 600;\n    font-style: normal;\n}\n#banner{\n    display: flex;\n    border: 1pt blue solid;\n    height: 20%;\n    width: 100%;\n}\n\n    #bannerTitleContainer{\n        display: flex;\n        height: 100%;\n        align-items: center;\n        justify-content: center;\n    }\n    #bannerHeader{\n        font-family: 'noto';\n        font-size:50pt;\n    }\n\n#base{\n    display: flex;\n    height: 80%;\n    width: 100%;\n}\n.btn{\n    height: fit-content;\n}\n\n\n\n#menuBarContainer{\n    display: flex;\n    flex-direction: column;\n    width: 15%;\n    border: 2pt black solid;\n    justify-content:top;  \n    align-items: top;  \n}\n\n\n#menuBarContainer{\n    display: flex;\n    flex-direction: column;\n    gap: 10%;\n}\n\n\n\n#listHeaderContainer{\n    display: flex;\n    justify-content: space-between;\n    padding: 5pt;\n}\n\n.listHeaders{\n    font-size: 20pt;\n\n}\n\n#overallListMenuContainer{\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#currentListsFlexContainer{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n\n/* right hand tasks display and interactions popup*/\n        #taskAndListContainer{\n            height: 100%;\n            width: 85%;\n            background-position: center top;\n            background-repeat: no-repeat;\n            background-size: cover;\n            display: flex;\n            align-items:flex-end;\n        }\n\n\n\n        #taskPopoutBoxContainer, #taskInfoPopoutContainer{\n            height: 550pt;\n            width: 300pt;\n            border-radius: 4%;\n            margin-left: 50pt;\n            justify-content: end;\n            align-items: center;\n            margin-bottom: 3%;;\n        }\n\n        #taskPopoutBox, #taskInfoPopoutBox{\n        height: 100%;\n        width: 100%;\n            background-color: white;\n            border: 1pt #d8d8d8 inset;\n            border-radius: 4%;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n        }\n\n        .listDisplayTaskbar, #taskTitleDisplayBox {\n            width: 100%;\n            height: 10%;\n            display: flex;\n            justify-content: space-between;\n            margin: 0;\n        }\n        #listNameDisplay, #taskTitleDisplay{\n            display: flex;\n            align-items: center;\n            padding: 5pt;\n        }\n        .listExitBtn{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            \n        }\n\n        #taskDisplayContainer, #taskInfoDisplayContainer{\n            display: flex;\n            flex-direction: column;\n            overflow: auto;\n            background-color: whitesmoke;\n            height: 90%;\n            width: 100%;\n            margin: 0;\n            \n        }\n\n        #taskFlexContainer{\n            display: flex;\n            height: fit-content;\n            align-items: center;\n            background-color: whitesmoke;\n            border: none;\n            gap:2%;\n            font-size: 13pt;\n        }\n        .taskCrossBtn{\n            height: 50%;\n            border-radius: 15px;\n            margin-left: 5%;\n            padding: 6pt;\n            border: 1pt, black, solid;\n        }\n\n        .task{\n            display: flex;\n            margin: 0;\n            padding: 5pt;\n            width: 100%;\n            \n        }\n\n        /*Crossout achieved with linear gradient, shamelessly took this*/\n        .crossed{\n            background: linear-gradient(180deg, \n                rgba(0,0,0,0) calc(50% - 1px), \n                rgba(192,192,192,1) calc(50%), \n                rgba(0,0,0,0) calc(50% + 1px)\n                );\n        }\n\n        .crossedColors{\n            color: grey;\n\n        }\n        .deleteTaskBtn, .crossedTaskBtn{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            padding: 8px;\n            width: 20px;\n            height: 20px;\n            font-size: 11pt;\n            background-color: grey;\n            color: white;\n            border: none;\n        }\n        .deleteTaskBtn{\n            margin: 0;\n        }\n        .crossedTaskBtn{\n            font-size: 14pt;\n        }\n\n        #inputContainer{\n            display: flex;\n            gap: 4%;\n            padding-top: 5pt;\n            height: 10%;\n            width: 100%;\n        }\n\n        #userTaskInput{\n            border-radius: 15px;\n            border: 1pt blue solid;\n            margin-left: 2pt;\n            height: 60%;\n            width: 85%;\n        }\n\n        #addTaskBtn{\n            border-radius: 15px;\n            background-color: white;\n            border: 1pt blue solid;\n            height: 70%;\n            width: 10%;\n            margin: 0;\n            margin-right: 3pt;\n        }\n\n/*Info and Display Box*/\n        #taskInfoDisplayContainer{\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n        }\n        #dueDateDisplayContainer{\n           height: 20%;\n           width: 100%;\n        }\n            #changeDueDateBtn{\n                height: 30pt;\n                width: pt;;\n            }\n        \n        #descriptionDisplayContainer{\n            height: 80%;\n        }\n            #descriptionDisplay, #descriptionDisplayInput{\n                display: flex;\n                justify-content: top;\n                align-items: top;\n                overflow-wrap: break-word;\n                width: 100%;\n                height: 95%;\n            }\n        .infoTitle{\n            font-size: 15pt;\n            font-weight: bold;\n        }\n\n/*Add List popout Box*/\n#addListPopoutBoxContainer{\n    position: fixed;\n    background-color: rgba(0, 0 , 0, 0.5);\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    z-index: 1;\n}\n\n\n#addListPopoutBoxFlexContainer{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\n#addListPopoutBox{\n    height: 100pt;\n    width: 300pt;\n    background-color: white;\n    margin-left: 7%;\n    margin-bottom: 4%;\n    border: 1pt #d8d8d8 inset;\n    border-radius: 4%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: top;\n    gap: 30%;\n}\n#addListInputContainer{\n    display: flex;\n    padding-top: 5pt;\n    justify-content: space-between;\n    height: 30%;\n    width: 100%;\n}\n#userListInput{\n    border-radius: 15px;\n    border: 1pt black solid;\n    margin-left: 2pt;\n    width: 85%;\n}\n#addListPopupBtn{\n    border-radius: 15px;\n    background-color: white;\n    border: 1pt black solid;\n    width: 10%;\n    height: 100%;\n    margin: 0;\n    margin-right: 3pt;\n}"],"sourceRoot":""}]);
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
let bannerTitleContainer = document.createElement('div');
    bannerTitleContainer.id = 'bannerTitleContainer'
    banner.append(bannerTitleContainer);

    let bannerHeader = document.createElement('div');
        bannerHeader.id = 'bannerHeader';
        bannerHeader.innerHTML = 'KNIGHTSmail';
        bannerTitleContainer.append(bannerHeader)



//Left hand menu bar//
    let menuBarContainer = document.createElement('div'); //This is the menu/nav bar on left side of screen
        menuBarContainer.id = 'menuBarContainer';

       
        let overallListMenuContainer = document.createElement('div');
            overallListMenuContainer.id = 'overallListMenuContainer';
            menuBarContainer.append(overallListMenuContainer);

            let listHeaderContainer = document.createElement('div');
                listHeaderContainer.id = 'listHeaderContainer';
                overallListMenuContainer.append(listHeaderContainer);
                let currentListsHeader = document.createElement('div');
                    currentListsHeader.classList = 'listHeaders'
                    currentListsHeader.innerHTML = 'It\'s your email yo!'
                    listHeaderContainer.append(currentListsHeader);
                

        let currentListsFlexContainer = document.createElement('div');
            currentListsFlexContainer.id = 'currentListsFlexContainer'
            overallListMenuContainer.append(currentListsFlexContainer);
            let groceryList = document.createElement('button');
                groceryList.classList = 'list';
                groceryList.innerHTML = 'Inbox'
                groceryList.id = '0';
                groceryList.classList.add('btn', 'listBtn')
                currentListsFlexContainer.append(groceryList)

            let houseList = document.createElement('button');
                houseList.classList = 'list';
                houseList.innerHTML = 'Sent'
                houseList.id = '1';
                houseList.classList.add('btn', 'listBtn')
                currentListsFlexContainer.append(houseList)
                
                


//Right hand popup for tasks and interactions includes popout boxes//
    let taskAndListContainer = document.createElement('div');
        taskAndListContainer.id = 'taskAndListContainer';
/*
    //Task popout box//
    let taskPopoutBoxContainer = document.createElement('div');
        taskPopoutBoxContainer.id = 'taskPopoutBoxContainer';
        taskAndListContainer.append(taskPopoutBoxContainer)
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

            let taskDisplayContainer = document.createElement('div');
                taskDisplayContainer.id = 'taskDisplayContainer'
                taskPopoutBox.append(taskDisplayContainer)

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
    taskAndListContainer.append(taskInfoPopoutContainer)
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
    let addListPopoutBoxContainer = document.createElement('div');
        addListPopoutBoxContainer.id = 'addListPopoutBoxContainer';
        addListPopoutBoxContainer.style.display = 'none';
        taskAndListContainer.append(addListPopoutBoxContainer)
    let addListPopoutBoxFlexContainer = document.createElement('div');
        addListPopoutBoxFlexContainer.id = 'addListPopoutBoxFlexContainer';
        addListPopoutBoxContainer.append(addListPopoutBoxFlexContainer);
    let addListPopoutBox = document.createElement('div');
            addListPopoutBox.id = 'addListPopoutBox';
            addListPopoutBoxFlexContainer.append(addListPopoutBox);

        let addListDisplayTaskbar = document.createElement('div');
                addListDisplayTaskbar.id = 'addListDisplayTaskbar';
                addListDisplayTaskbar.classList = 'listDisplayTaskbar';
                addListPopoutBox.append(addListDisplayTaskbar);
            let addListNameDisplay = document.createElement('div');
                    addListNameDisplay.id = 'addListNameDisplay';
                    addListNameDisplay.classList.add('listHeaders');
                    addListDisplayTaskbar.append(addListNameDisplay);
            let addListExitBtn = document.createElement('button');
                    addListExitBtn.id = 'addListExitBtn';
                    addListExitBtn.classList = 'btn';
                    addListExitBtn.innerHTML = 'x'
                    addListDisplayTaskbar.append(addListExitBtn);
        //addList input box//
        let addListInputContainer = document.createElement('div');
                addListInputContainer.id = 'addListInputContainer';
                addListPopoutBox.append(addListInputContainer)

                let userListInput = document.createElement('input');
                    userListInput.type = 'text';
                    userListInput.id = 'userListInput';
                    userListInput.classList.add('popoutItem')
                    addListInputContainer.append(userListInput);
                let addListPopupBtn = document.createElement('button');
                    addListPopupBtn.id = 'addListPopupBtn';
                    addListPopupBtn.classList.add('btn','popoutItem');
                    addListPopupBtn.innerHTML = '+';
                    addListInputContainer.append(addListPopupBtn);
    
        //Add date popout items
        let calendar = document.createElement('input');
            calendar.type = 'datetime-local';
            calendar.id = 'calendar';
            calendar.classList.add('popoutItem');
            addListInputContainer.append(calendar)
*/



    base.append(menuBarContainer);
    base.append(taskAndListContainer);
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


(0,_skeleton__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDak9BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQWtDOztBQUVsQyxxREFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vc3JjL3NrZWxldG9uLmNzcyIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2VtYWlsdGlwdG9uYmRheS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vc3JjL3NrZWxldG9uLmNzcz8zZWZjIiwid2VicGFjazovL2VtYWlsdGlwdG9uYmRheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2VtYWlsdGlwdG9uYmRheS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vc3JjL3NrZWxldG9uLmpzIiwid2VicGFjazovL2VtYWlsdGlwdG9uYmRheS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbWFpbHRpcHRvbmJkYXkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2VtYWlsdGlwdG9uYmRheS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZW1haWx0aXB0b25iZGF5Ly4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vdWNmS25pZ2h0cy5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL05vdG9TYW5zSlAtUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaHRtbHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAnVUNGJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnb3RmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdub3RvJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnb3RmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuI2Jhbm5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHQgYmx1ZSBzb2xpZDtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4gICAgI2Jhbm5lclRpdGxlQ29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAjYmFubmVySGVhZGVye1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdub3RvJztcXG4gICAgICAgIGZvbnQtc2l6ZTo1MHB0O1xcbiAgICB9XFxuXFxuI2Jhc2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmJ0bntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuXFxuXFxuI21lbnVCYXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGJvcmRlcjogMnB0IGJsYWNrIHNvbGlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6dG9wOyAgXFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7ICBcXG59XFxuXFxuXFxuI21lbnVCYXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTAlO1xcbn1cXG5cXG5cXG5cXG4jbGlzdEhlYWRlckNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1cHQ7XFxufVxcblxcbi5saXN0SGVhZGVyc3tcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcblxcbn1cXG5cXG4jb3ZlcmFsbExpc3RNZW51Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI2N1cnJlbnRMaXN0c0ZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuXFxuLyogcmlnaHQgaGFuZCB0YXNrcyBkaXNwbGF5IGFuZCBpbnRlcmFjdGlvbnMgcG9wdXAqL1xcbiAgICAgICAgI3Rhc2tBbmRMaXN0Q29udGFpbmVye1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogODUlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XFxuICAgICAgICB9XFxuXFxuXFxuXFxuICAgICAgICAjdGFza1BvcG91dEJveENvbnRhaW5lciwgI3Rhc2tJbmZvUG9wb3V0Q29udGFpbmVye1xcbiAgICAgICAgICAgIGhlaWdodDogNTUwcHQ7XFxuICAgICAgICAgICAgd2lkdGg6IDMwMHB0O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB0O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3Rhc2tQb3BvdXRCb3gsICN0YXNrSW5mb1BvcG91dEJveHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB0ICNkOGQ4ZDggaW5zZXQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5saXN0RGlzcGxheVRhc2tiYXIsICN0YXNrVGl0bGVEaXNwbGF5Qm94IHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgICAgICAjbGlzdE5hbWVEaXNwbGF5LCAjdGFza1RpdGxlRGlzcGxheXtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB0O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmxpc3RFeGl0QnRue1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICN0YXNrRGlzcGxheUNvbnRhaW5lciwgI3Rhc2tJbmZvRGlzcGxheUNvbnRhaW5lcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdGFza0ZsZXhDb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgZ2FwOjIlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50YXNrQ3Jvc3NCdG57XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgICAgICAgICAgcGFkZGluZzogNnB0O1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB0LCBibGFjaywgc29saWQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFza3tcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHQ7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKkNyb3Nzb3V0IGFjaGlldmVkIHdpdGggbGluZWFyIGdyYWRpZW50LCBzaGFtZWxlc3NseSB0b29rIHRoaXMqL1xcbiAgICAgICAgLmNyb3NzZWR7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgXFxuICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsMCkgY2FsYyg1MCUgLSAxcHgpLCBcXG4gICAgICAgICAgICAgICAgcmdiYSgxOTIsMTkyLDE5MiwxKSBjYWxjKDUwJSksIFxcbiAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLDApIGNhbGMoNTAlICsgMXB4KVxcbiAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyb3NzZWRDb2xvcnN7XFxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XFxuXFxuICAgICAgICB9XFxuICAgICAgICAuZGVsZXRlVGFza0J0biwgLmNyb3NzZWRUYXNrQnRue1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFwdDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICAuZGVsZXRlVGFza0J0bntcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgICAgICAuY3Jvc3NlZFRhc2tCdG57XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2lucHV0Q29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZ2FwOiA0JTtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB0O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3VzZXJUYXNrSW5wdXR7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBib3JkZXI6IDFwdCBibHVlIHNvbGlkO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHQ7XFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XFxuICAgICAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNhZGRUYXNrQnRue1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHQgYmx1ZSBzb2xpZDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNwdDtcXG4gICAgICAgIH1cXG5cXG4vKkluZm8gYW5kIERpc3BsYXkgQm94Ki9cXG4gICAgICAgICN0YXNrSW5mb0Rpc3BsYXlDb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG4gICAgICAgICNkdWVEYXRlRGlzcGxheUNvbnRhaW5lcntcXG4gICAgICAgICAgIGhlaWdodDogMjAlO1xcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgI2NoYW5nZUR1ZURhdGVCdG57XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBwdDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IHB0OztcXG4gICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICNkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXJ7XFxuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgI2Rlc2NyaXB0aW9uRGlzcGxheSwgI2Rlc2NyaXB0aW9uRGlzcGxheUlucHV0e1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHRvcDtcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOTUlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIC5pbmZvVGl0bGV7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB0O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgfVxcblxcbi8qQWRkIExpc3QgcG9wb3V0IEJveCovXFxuI2FkZExpc3RQb3BvdXRCb3hDb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwICwgMCwgMC41KTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5cXG4jYWRkTGlzdFBvcG91dEJveEZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkTGlzdFBvcG91dEJveHtcXG4gICAgaGVpZ2h0OiAxMDBwdDtcXG4gICAgd2lkdGg6IDMwMHB0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcXG4gICAgYm9yZGVyOiAxcHQgI2Q4ZDhkOCBpbnNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogdG9wO1xcbiAgICBnYXA6IDMwJTtcXG59XFxuI2FkZExpc3RJbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy10b3A6IDVwdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiN1c2VyTGlzdElucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDFwdCBibGFjayBzb2xpZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDJwdDtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuI2FkZExpc3RQb3B1cEJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB0IGJsYWNrIHNvbGlkO1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9za2VsZXRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0FBQ2I7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsMERBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiww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QUNsQztRQUNBO1dBQ0csV0FBVztXQUNYLFdBQVc7UUFDZDtZQUNJO2dCQUNJLFlBQVk7Z0JBQ1osU0FBUztZQUNiOztRQUVKO1lBQ0ksV0FBVztRQUNmO1lBQ0k7Z0JBQ0ksYUFBYTtnQkFDYixvQkFBb0I7Z0JBQ3BCLGdCQUFnQjtnQkFDaEIseUJBQXlCO2dCQUN6QixXQUFXO2dCQUNYLFdBQVc7WUFDZjtRQUNKO1lBQ0ksZUFBZTtZQUNmLGlCQUFpQjtRQUNyQjs7QUFFUixzQkFBc0I7QUFDdEI7SUFDSSxlQUFlO0lBQ2YscUNBQXFDO0lBQ3JDLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCxVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsUUFBUTtBQUNaO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUztJQUNULGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5odG1se1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxufVxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdVQ0YnO1xcbiAgICBzcmM6IHVybCgnLi91Y2ZLbmlnaHRzLm90ZicpIGZvcm1hdCgnb3RmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdub3RvJztcXG4gICAgc3JjOiB1cmwoJy4vTm90b1NhbnNKUC1SZWd1bGFyLm90ZicpIGZvcm1hdCgnb3RmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuI2Jhbm5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAxcHQgYmx1ZSBzb2xpZDtcXG4gICAgaGVpZ2h0OiAyMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4gICAgI2Jhbm5lclRpdGxlQ29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAjYmFubmVySGVhZGVye1xcbiAgICAgICAgZm9udC1mYW1pbHk6ICdub3RvJztcXG4gICAgICAgIGZvbnQtc2l6ZTo1MHB0O1xcbiAgICB9XFxuXFxuI2Jhc2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmJ0bntcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuXFxuXFxuI21lbnVCYXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGJvcmRlcjogMnB0IGJsYWNrIHNvbGlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6dG9wOyAgXFxuICAgIGFsaWduLWl0ZW1zOiB0b3A7ICBcXG59XFxuXFxuXFxuI21lbnVCYXJDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTAlO1xcbn1cXG5cXG5cXG5cXG4jbGlzdEhlYWRlckNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1cHQ7XFxufVxcblxcbi5saXN0SGVhZGVyc3tcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcblxcbn1cXG5cXG4jb3ZlcmFsbExpc3RNZW51Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI2N1cnJlbnRMaXN0c0ZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuXFxuLyogcmlnaHQgaGFuZCB0YXNrcyBkaXNwbGF5IGFuZCBpbnRlcmFjdGlvbnMgcG9wdXAqL1xcbiAgICAgICAgI3Rhc2tBbmRMaXN0Q29udGFpbmVye1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICB3aWR0aDogODUlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1lbmQ7XFxuICAgICAgICB9XFxuXFxuXFxuXFxuICAgICAgICAjdGFza1BvcG91dEJveENvbnRhaW5lciwgI3Rhc2tJbmZvUG9wb3V0Q29udGFpbmVye1xcbiAgICAgICAgICAgIGhlaWdodDogNTUwcHQ7XFxuICAgICAgICAgICAgd2lkdGg6IDMwMHB0O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQlO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB0O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMyU7O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3Rhc2tQb3BvdXRCb3gsICN0YXNrSW5mb1BvcG91dEJveHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB0ICNkOGQ4ZDggaW5zZXQ7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNCU7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5saXN0RGlzcGxheVRhc2tiYXIsICN0YXNrVGl0bGVEaXNwbGF5Qm94IHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwJTtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgICAgICAjbGlzdE5hbWVEaXNwbGF5LCAjdGFza1RpdGxlRGlzcGxheXtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB0O1xcbiAgICAgICAgfVxcbiAgICAgICAgLmxpc3RFeGl0QnRue1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICN0YXNrRGlzcGxheUNvbnRhaW5lciwgI3Rhc2tJbmZvRGlzcGxheUNvbnRhaW5lcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAjdGFza0ZsZXhDb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgZ2FwOjIlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcXG4gICAgICAgIH1cXG4gICAgICAgIC50YXNrQ3Jvc3NCdG57XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XFxuICAgICAgICAgICAgcGFkZGluZzogNnB0O1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB0LCBibGFjaywgc29saWQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFza3tcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHQ7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgXFxuICAgICAgICB9XFxuXFxuICAgICAgICAvKkNyb3Nzb3V0IGFjaGlldmVkIHdpdGggbGluZWFyIGdyYWRpZW50LCBzaGFtZWxlc3NseSB0b29rIHRoaXMqL1xcbiAgICAgICAgLmNyb3NzZWR7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgXFxuICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsMCkgY2FsYyg1MCUgLSAxcHgpLCBcXG4gICAgICAgICAgICAgICAgcmdiYSgxOTIsMTkyLDE5MiwxKSBjYWxjKDUwJSksIFxcbiAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLDApIGNhbGMoNTAlICsgMXB4KVxcbiAgICAgICAgICAgICAgICApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyb3NzZWRDb2xvcnN7XFxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XFxuXFxuICAgICAgICB9XFxuICAgICAgICAuZGVsZXRlVGFza0J0biwgLmNyb3NzZWRUYXNrQnRue1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFwdDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICAuZGVsZXRlVGFza0J0bntcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB9XFxuICAgICAgICAuY3Jvc3NlZFRhc2tCdG57XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB0O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2lucHV0Q29udGFpbmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZ2FwOiA0JTtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB0O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI3VzZXJUYXNrSW5wdXR7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgICAgICAgICBib3JkZXI6IDFwdCBibHVlIHNvbGlkO1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHQ7XFxuICAgICAgICAgICAgaGVpZ2h0OiA2MCU7XFxuICAgICAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNhZGRUYXNrQnRue1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHQgYmx1ZSBzb2xpZDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNwdDtcXG4gICAgICAgIH1cXG5cXG4vKkluZm8gYW5kIERpc3BsYXkgQm94Ki9cXG4gICAgICAgICN0YXNrSW5mb0Rpc3BsYXlDb250YWluZXJ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIH1cXG4gICAgICAgICNkdWVEYXRlRGlzcGxheUNvbnRhaW5lcntcXG4gICAgICAgICAgIGhlaWdodDogMjAlO1xcbiAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgI2NoYW5nZUR1ZURhdGVCdG57XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBwdDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IHB0OztcXG4gICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICNkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXJ7XFxuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgICB9XFxuICAgICAgICAgICAgI2Rlc2NyaXB0aW9uRGlzcGxheSwgI2Rlc2NyaXB0aW9uRGlzcGxheUlucHV0e1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHRvcDtcXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogOTUlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIC5pbmZvVGl0bGV7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB0O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgfVxcblxcbi8qQWRkIExpc3QgcG9wb3V0IEJveCovXFxuI2FkZExpc3RQb3BvdXRCb3hDb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwICwgMCwgMC41KTtcXG4gICAgdG9wOiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5cXG4jYWRkTGlzdFBvcG91dEJveEZsZXhDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkTGlzdFBvcG91dEJveHtcXG4gICAgaGVpZ2h0OiAxMDBwdDtcXG4gICAgd2lkdGg6IDMwMHB0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcXG4gICAgYm9yZGVyOiAxcHQgI2Q4ZDhkOCBpbnNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogdG9wO1xcbiAgICBnYXA6IDMwJTtcXG59XFxuI2FkZExpc3RJbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy10b3A6IDVwdDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDMwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbiN1c2VyTGlzdElucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IDFwdCBibGFjayBzb2xpZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDJwdDtcXG4gICAgd2lkdGg6IDg1JTtcXG59XFxuI2FkZExpc3RQb3B1cEJ0bntcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMXB0IGJsYWNrIHNvbGlkO1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9za2VsZXRvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NrZWxldG9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc2tlbGV0b24uY3NzJ1xuXG4vL3RoaXMgZnVuY3Rpb24gZGVmaW5lcyB0aGUgYmFzaWMgbGF5b3V0IGZvciB0aGUgd2VicGFnZS8vXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBza2VsZXRvbiAoKXtcbiAgICBsZXQgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYXNlLmlkID0gJ2Jhc2UnO1xuICAgIGxldCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiYW5uZXInKTtcbiAgICAgICAgYmFubmVyLmlkID0gJ2Jhbm5lcic7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYmFubmVyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChiYXNlKTtcblxuLy9iYW5uZXJcbmxldCBiYW5uZXJUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhbm5lclRpdGxlQ29udGFpbmVyLmlkID0gJ2Jhbm5lclRpdGxlQ29udGFpbmVyJ1xuICAgIGJhbm5lci5hcHBlbmQoYmFubmVyVGl0bGVDb250YWluZXIpO1xuXG4gICAgbGV0IGJhbm5lckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBiYW5uZXJIZWFkZXIuaWQgPSAnYmFubmVySGVhZGVyJztcbiAgICAgICAgYmFubmVySGVhZGVyLmlubmVySFRNTCA9ICdLTklHSFRTbWFpbCc7XG4gICAgICAgIGJhbm5lclRpdGxlQ29udGFpbmVyLmFwcGVuZChiYW5uZXJIZWFkZXIpXG5cblxuXG4vL0xlZnQgaGFuZCBtZW51IGJhci8vXG4gICAgbGV0IG1lbnVCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgLy9UaGlzIGlzIHRoZSBtZW51L25hdiBiYXIgb24gbGVmdCBzaWRlIG9mIHNjcmVlblxuICAgICAgICBtZW51QmFyQ29udGFpbmVyLmlkID0gJ21lbnVCYXJDb250YWluZXInO1xuXG4gICAgICAgXG4gICAgICAgIGxldCBvdmVyYWxsTGlzdE1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG92ZXJhbGxMaXN0TWVudUNvbnRhaW5lci5pZCA9ICdvdmVyYWxsTGlzdE1lbnVDb250YWluZXInO1xuICAgICAgICAgICAgbWVudUJhckNvbnRhaW5lci5hcHBlbmQob3ZlcmFsbExpc3RNZW51Q29udGFpbmVyKTtcblxuICAgICAgICAgICAgbGV0IGxpc3RIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBsaXN0SGVhZGVyQ29udGFpbmVyLmlkID0gJ2xpc3RIZWFkZXJDb250YWluZXInO1xuICAgICAgICAgICAgICAgIG92ZXJhbGxMaXN0TWVudUNvbnRhaW5lci5hcHBlbmQobGlzdEhlYWRlckNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRMaXN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGlzdHNIZWFkZXIuY2xhc3NMaXN0ID0gJ2xpc3RIZWFkZXJzJ1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TGlzdHNIZWFkZXIuaW5uZXJIVE1MID0gJ0l0XFwncyB5b3VyIGVtYWlsIHlvISdcbiAgICAgICAgICAgICAgICAgICAgbGlzdEhlYWRlckNvbnRhaW5lci5hcHBlbmQoY3VycmVudExpc3RzSGVhZGVyKTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICBsZXQgY3VycmVudExpc3RzRmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3VycmVudExpc3RzRmxleENvbnRhaW5lci5pZCA9ICdjdXJyZW50TGlzdHNGbGV4Q29udGFpbmVyJ1xuICAgICAgICAgICAgb3ZlcmFsbExpc3RNZW51Q29udGFpbmVyLmFwcGVuZChjdXJyZW50TGlzdHNGbGV4Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGxldCBncm9jZXJ5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGdyb2NlcnlMaXN0LmNsYXNzTGlzdCA9ICdsaXN0JztcbiAgICAgICAgICAgICAgICBncm9jZXJ5TGlzdC5pbm5lckhUTUwgPSAnSW5ib3gnXG4gICAgICAgICAgICAgICAgZ3JvY2VyeUxpc3QuaWQgPSAnMCc7XG4gICAgICAgICAgICAgICAgZ3JvY2VyeUxpc3QuY2xhc3NMaXN0LmFkZCgnYnRuJywgJ2xpc3RCdG4nKVxuICAgICAgICAgICAgICAgIGN1cnJlbnRMaXN0c0ZsZXhDb250YWluZXIuYXBwZW5kKGdyb2NlcnlMaXN0KVxuXG4gICAgICAgICAgICBsZXQgaG91c2VMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgaG91c2VMaXN0LmNsYXNzTGlzdCA9ICdsaXN0JztcbiAgICAgICAgICAgICAgICBob3VzZUxpc3QuaW5uZXJIVE1MID0gJ1NlbnQnXG4gICAgICAgICAgICAgICAgaG91c2VMaXN0LmlkID0gJzEnO1xuICAgICAgICAgICAgICAgIGhvdXNlTGlzdC5jbGFzc0xpc3QuYWRkKCdidG4nLCAnbGlzdEJ0bicpXG4gICAgICAgICAgICAgICAgY3VycmVudExpc3RzRmxleENvbnRhaW5lci5hcHBlbmQoaG91c2VMaXN0KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuXG5cbi8vUmlnaHQgaGFuZCBwb3B1cCBmb3IgdGFza3MgYW5kIGludGVyYWN0aW9ucyBpbmNsdWRlcyBwb3BvdXQgYm94ZXMvL1xuICAgIGxldCB0YXNrQW5kTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrQW5kTGlzdENvbnRhaW5lci5pZCA9ICd0YXNrQW5kTGlzdENvbnRhaW5lcic7XG4vKlxuICAgIC8vVGFzayBwb3BvdXQgYm94Ly9cbiAgICBsZXQgdGFza1BvcG91dEJveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrUG9wb3V0Qm94Q29udGFpbmVyLmlkID0gJ3Rhc2tQb3BvdXRCb3hDb250YWluZXInO1xuICAgICAgICB0YXNrQW5kTGlzdENvbnRhaW5lci5hcHBlbmQodGFza1BvcG91dEJveENvbnRhaW5lcilcbiAgICAgICAgbGV0IHRhc2tQb3BvdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tQb3BvdXRCb3guaWQgPSAndGFza1BvcG91dEJveCc7XG4gICAgICAgICAgICB0YXNrUG9wb3V0Qm94LmNsYXNzTGlzdC5hZGQoJ3Rhc2tQb3BvdXRCb3gnKVxuICAgICAgICAgICAgdGFza1BvcG91dEJveENvbnRhaW5lci5hcHBlbmQodGFza1BvcG91dEJveCk7XG5cbiAgICAgICAgICAgIGxldCBsaXN0RGlzcGxheVRhc2tiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBsaXN0RGlzcGxheVRhc2tiYXIuaWQgPSAnbGlzdERpc3BsYXlUYXNrYmFyJztcbiAgICAgICAgICAgICAgICBsaXN0RGlzcGxheVRhc2tiYXIuY2xhc3NMaXN0ID0gJ2xpc3REaXNwbGF5VGFza2Jhcic7XG4gICAgICAgICAgICAgICAgdGFza1BvcG91dEJveC5hcHBlbmQobGlzdERpc3BsYXlUYXNrYmFyKTtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdE5hbWVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3ROYW1lRGlzcGxheS5pZCA9ICdsaXN0TmFtZURpc3BsYXknO1xuICAgICAgICAgICAgICAgICAgICBsaXN0TmFtZURpc3BsYXkuY2xhc3NMaXN0ID0gJ2xpc3RIZWFkZXJzJztcbiAgICAgICAgICAgICAgICAgICAgbGlzdERpc3BsYXlUYXNrYmFyLmFwcGVuZChsaXN0TmFtZURpc3BsYXkpO1xuICAgICAgICAgICAgICAgIGxldCBsaXN0RXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBsaXN0RXhpdEJ0bi5pZCA9ICdsaXN0RXhpdEJ0bic7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RFeGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsJ2xpc3RFeGl0QnRuJyk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RFeGl0QnRuLmlubmVySFRNTCA9ICd4J1xuICAgICAgICAgICAgICAgICAgICBsaXN0RGlzcGxheVRhc2tiYXIuYXBwZW5kKGxpc3RFeGl0QnRuKTtcblxuICAgICAgICAgICAgbGV0IHRhc2tEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0Rpc3BsYXlDb250YWluZXIuaWQgPSAndGFza0Rpc3BsYXlDb250YWluZXInXG4gICAgICAgICAgICAgICAgdGFza1BvcG91dEJveC5hcHBlbmQodGFza0Rpc3BsYXlDb250YWluZXIpXG5cbiAgICAgICAgICAgIC8vd2hlcmUgdXNlciB0eXBlcyBuZXcgdGFza3MgaW50byBwb3B1cC9cbiAgICAgICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmlkID0gJ2lucHV0Q29udGFpbmVyJztcbiAgICAgICAgICAgICAgICB0YXNrUG9wb3V0Qm94LmFwcGVuZChpbnB1dENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICBsZXQgdXNlclRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJUYXNrSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICAgICAgdXNlclRhc2tJbnB1dC5pZCA9ICd1c2VyVGFza0lucHV0JztcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kKHVzZXJUYXNrSW5wdXQpO1xuICAgICAgICAgICAgICAgIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uaWQgPSAnYWRkVGFza0J0bic7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uY2xhc3NMaXN0ID0gJ2J0bic7XG4gICAgICAgICAgICAgICAgICAgIGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gJysnO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmQoYWRkVGFza0J0bik7XG5cblxuLy9UYXNrIGluZm8gcmlnaHQgbmV4dCB0byB0YXNrIHBvcG91dCBib3gvL1xubGV0IHRhc2tJbmZvUG9wb3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0luZm9Qb3BvdXRDb250YWluZXIuaWQgPSAndGFza0luZm9Qb3BvdXRDb250YWluZXInO1xuICAgIHRhc2tBbmRMaXN0Q29udGFpbmVyLmFwcGVuZCh0YXNrSW5mb1BvcG91dENvbnRhaW5lcilcbmxldCB0YXNrSW5mb1BvcG91dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tJbmZvUG9wb3V0Qm94LmlkID0gJ3Rhc2tJbmZvUG9wb3V0Qm94JztcbiAgICB0YXNrSW5mb1BvcG91dEJveC5jbGFzc0xpc3QuYWRkKCd0YXNrUG9wb3V0Qm94JylcbiAgICB0YXNrSW5mb1BvcG91dENvbnRhaW5lci5hcHBlbmQodGFza0luZm9Qb3BvdXRCb3gpO1xuLy90aXRsZSBkaXNwbGF5XG4gICAgbGV0IHRhc2tUaXRsZURpc3BsYXlCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza1RpdGxlRGlzcGxheUJveC5pZCA9ICd0YXNrVGl0bGVEaXNwbGF5Qm94JztcbiAgICAgICAgdGFza1RpdGxlRGlzcGxheUJveC5jbGFzc0xpc3QgPSAnbGlzdEhlYWRlcnMnO1xuICAgICAgICB0YXNrSW5mb1BvcG91dEJveC5hcHBlbmQodGFza1RpdGxlRGlzcGxheUJveCk7XG4gICAgICAgIGxldCB0YXNrVGl0bGVEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrVGl0bGVEaXNwbGF5LmlkID0gJ3Rhc2tUaXRsZURpc3BsYXknO1xuICAgICAgICAgICAgdGFza1RpdGxlRGlzcGxheS5jbGFzc0xpc3QgPSAnbGlzdEhlYWRlcnMnO1xuICAgICAgICAgICAgdGFza1RpdGxlRGlzcGxheUJveC5hcHBlbmQodGFza1RpdGxlRGlzcGxheSk7XG4vL2luZm8gZGlzcGxheSB3aXRoIHRpdGxlcyAmIGJveGVzIGhhcmRjb2RlZCBpbiwgYnV0IGZpbGxlZCBpbiBkaXNwbGF5VGFza0RldGFpbHNcbi8qIFxubGV0IHRhc2tJbmZvRGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0luZm9EaXNwbGF5Q29udGFpbmVyLmlkID0gJ3Rhc2tJbmZvRGlzcGxheUNvbnRhaW5lcidcbiAgICAgICAgICAgIC8vdGFza0luZm9Qb3BvdXRCb3guYXBwZW5kKHRhc2tJbmZvRGlzcGxheUNvbnRhaW5lcilcbiAgICAgICAgbGV0IGR1ZURhdGVEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkdWVEYXRlRGlzcGxheUNvbnRhaW5lci5pZCA9IFwiZHVlRGF0ZURpc3BsYXlDb250YWluZXJcIlxuICAgICAgICAgICAgLy90YXNrSW5mb0Rpc3BsYXlDb250YWluZXIuYXBwZW5kKGR1ZURhdGVEaXNwbGF5Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVUaXRsZS5pZCA9ICdkdWVEYXRlVGl0bGUnO1xuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgnaW5mb1RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVUaXRsZS5pbm5lckhUTUwgPSAnRmluaXNoIGJ5JztcbiAgICAgICAgICAgICAgICAgICAgLy9kdWVEYXRlRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZHVlRGF0ZVRpdGxlKTtcbiAgICAgICAgICAgICAgICBsZXQgZHVlRGF0ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZURpc3BsYXkuaWQgPSAnZHVlRGF0ZURpc3BsYXknO1xuICAgICAgICAgICAgICAgICAgICAvL2R1ZURhdGVEaXNwbGF5Q29udGFpbmVyLmFwcGVuZChkdWVEYXRlRGlzcGxheSk7XG4gICAgICAgICAgICAgICAgbGV0IGNoYW5nZUR1ZURhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRHVlRGF0ZUJ0bi5pZCA9ICdjaGFuZ2VEdWVEYXRlQnRuJztcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlRHVlRGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgICAgICAgICAgICAgICAgICAgLy9kdWVEYXRlRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoY2hhbmdlRHVlRGF0ZUJ0bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGxldCBwcmlvcml0eURpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eURpc3BsYXlDb250YWluZXIuaWQgPSBcInByaW9yaXR5RGlzcGxheUNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0luZm9EaXNwbGF5Q29udGFpbmVyLmFwcGVuZChwcmlvcml0eURpc3BsYXlDb250YWluZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlUaXRsZS5pZCA9ICdwcmlvcml0eVRpdGxlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5VGl0bGUuY2xhc3NMaXN0LmFkZCgnaW5mb1RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eVRpdGxlLmlubmVySFRNTCA9ICdQcmlvcml0eSBMZXZlbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eURpc3BsYXlDb250YWluZXIuYXBwZW5kKHByaW9yaXR5VGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eURpc3BsYXkuaWQgPSAncHJpb3JpdHlEaXNwbGF5JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5RGlzcGxheUNvbnRhaW5lci5hcHBlbmQocHJpb3JpdHlEaXNwbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBsZXQgZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXIuaWQgPSBcImRlc2NyaXB0aW9uRGlzcGxheUNvbnRhaW5lclwiXG4gICAgICAgICAgICAvL3Rhc2tJbmZvRGlzcGxheUNvbnRhaW5lci5hcHBlbmQoZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRpdGxlLmlkID0gJ2Rlc2NyaXB0aW9uVGl0bGUnO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ2luZm9UaXRsZScpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRpdGxlLmlubmVySFRNTCA9ICdOb3Rlcyc7XG4gICAgICAgICAgICAgICAgICAgIC8vZGVzY3JpcHRpb25EaXNwbGF5Q29udGFpbmVyLmFwcGVuZChkZXNjcmlwdGlvblRpdGxlKTtcbiAgICAgICAgICAgICAgICAvL2xldCBkZXNjcmlwdGlvbkRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb25EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkRpc3BsYXkuaWQgPSAnZGVzY3JpcHRpb25EaXNwbGF5JztcbiAgICAgICAgICAgICAgICAgICAgLy9kZXNjcmlwdGlvbkRpc3BsYXlDb250YWluZXIuYXBwZW5kKGRlc2NyaXB0aW9uRGlzcGxheSk7XG5cblxuICAgIFxuXG4gICAgLy9hZGRMaXN0IHBvcG91dCBib3ggLSBjcmVhdGVkIHNvIHRoYXQgaXQgZGlzYWxsb3dzIGNsaWNraW5nIG91dHNpZGUgdGhlIGJveC8vXG4gICAgbGV0IGFkZExpc3RQb3BvdXRCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkTGlzdFBvcG91dEJveENvbnRhaW5lci5pZCA9ICdhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyJztcbiAgICAgICAgYWRkTGlzdFBvcG91dEJveENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0YXNrQW5kTGlzdENvbnRhaW5lci5hcHBlbmQoYWRkTGlzdFBvcG91dEJveENvbnRhaW5lcilcbiAgICBsZXQgYWRkTGlzdFBvcG91dEJveEZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkTGlzdFBvcG91dEJveEZsZXhDb250YWluZXIuaWQgPSAnYWRkTGlzdFBvcG91dEJveEZsZXhDb250YWluZXInO1xuICAgICAgICBhZGRMaXN0UG9wb3V0Qm94Q29udGFpbmVyLmFwcGVuZChhZGRMaXN0UG9wb3V0Qm94RmxleENvbnRhaW5lcik7XG4gICAgbGV0IGFkZExpc3RQb3BvdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGFkZExpc3RQb3BvdXRCb3guaWQgPSAnYWRkTGlzdFBvcG91dEJveCc7XG4gICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94RmxleENvbnRhaW5lci5hcHBlbmQoYWRkTGlzdFBvcG91dEJveCk7XG5cbiAgICAgICAgbGV0IGFkZExpc3REaXNwbGF5VGFza2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGFkZExpc3REaXNwbGF5VGFza2Jhci5pZCA9ICdhZGRMaXN0RGlzcGxheVRhc2tiYXInO1xuICAgICAgICAgICAgICAgIGFkZExpc3REaXNwbGF5VGFza2Jhci5jbGFzc0xpc3QgPSAnbGlzdERpc3BsYXlUYXNrYmFyJztcbiAgICAgICAgICAgICAgICBhZGRMaXN0UG9wb3V0Qm94LmFwcGVuZChhZGRMaXN0RGlzcGxheVRhc2tiYXIpO1xuICAgICAgICAgICAgbGV0IGFkZExpc3ROYW1lRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0TmFtZURpc3BsYXkuaWQgPSAnYWRkTGlzdE5hbWVEaXNwbGF5JztcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdE5hbWVEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2xpc3RIZWFkZXJzJyk7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3REaXNwbGF5VGFza2Jhci5hcHBlbmQoYWRkTGlzdE5hbWVEaXNwbGF5KTtcbiAgICAgICAgICAgIGxldCBhZGRMaXN0RXhpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0RXhpdEJ0bi5pZCA9ICdhZGRMaXN0RXhpdEJ0bic7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RFeGl0QnRuLmNsYXNzTGlzdCA9ICdidG4nO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0RXhpdEJ0bi5pbm5lckhUTUwgPSAneCdcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdERpc3BsYXlUYXNrYmFyLmFwcGVuZChhZGRMaXN0RXhpdEJ0bik7XG4gICAgICAgIC8vYWRkTGlzdCBpbnB1dCBib3gvL1xuICAgICAgICBsZXQgYWRkTGlzdElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYWRkTGlzdElucHV0Q29udGFpbmVyLmlkID0gJ2FkZExpc3RJbnB1dENvbnRhaW5lcic7XG4gICAgICAgICAgICAgICAgYWRkTGlzdFBvcG91dEJveC5hcHBlbmQoYWRkTGlzdElucHV0Q29udGFpbmVyKVxuXG4gICAgICAgICAgICAgICAgbGV0IHVzZXJMaXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB1c2VyTGlzdElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJMaXN0SW5wdXQuaWQgPSAndXNlckxpc3RJbnB1dCc7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJMaXN0SW5wdXQuY2xhc3NMaXN0LmFkZCgncG9wb3V0SXRlbScpXG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RJbnB1dENvbnRhaW5lci5hcHBlbmQodXNlckxpc3RJbnB1dCk7XG4gICAgICAgICAgICAgICAgbGV0IGFkZExpc3RQb3B1cEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0UG9wdXBCdG4uaWQgPSAnYWRkTGlzdFBvcHVwQnRuJztcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdFBvcHVwQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsJ3BvcG91dEl0ZW0nKTtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdFBvcHVwQnRuLmlubmVySFRNTCA9ICcrJztcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdElucHV0Q29udGFpbmVyLmFwcGVuZChhZGRMaXN0UG9wdXBCdG4pO1xuICAgIFxuICAgICAgICAvL0FkZCBkYXRlIHBvcG91dCBpdGVtc1xuICAgICAgICBsZXQgY2FsZW5kYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgY2FsZW5kYXIudHlwZSA9ICdkYXRldGltZS1sb2NhbCc7XG4gICAgICAgICAgICBjYWxlbmRhci5pZCA9ICdjYWxlbmRhcic7XG4gICAgICAgICAgICBjYWxlbmRhci5jbGFzc0xpc3QuYWRkKCdwb3BvdXRJdGVtJyk7XG4gICAgICAgICAgICBhZGRMaXN0SW5wdXRDb250YWluZXIuYXBwZW5kKGNhbGVuZGFyKVxuKi9cblxuXG5cbiAgICBiYXNlLmFwcGVuZChtZW51QmFyQ29udGFpbmVyKTtcbiAgICBiYXNlLmFwcGVuZCh0YXNrQW5kTGlzdENvbnRhaW5lcik7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHNrZWxldG9uIGZyb20gXCIuL3NrZWxldG9uXCI7XG5cbnNrZWxldG9uKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9