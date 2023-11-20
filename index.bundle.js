/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/Fonts/OnePieceFont.ttf */ \"./src/Assets/Fonts/OnePieceFont.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/Images/Ocean.jpg */ \"./src/Assets/Images/Ocean.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/Images/WantedBg.jpg */ \"./src/Assets/Images/WantedBg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/Images/GumGum.jpg */ \"./src/Assets/Images/GumGum.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/Images/SHEmblem.png */ \"./src/Assets/Images/SHEmblem.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../Assets/Images/MarineEmblem.png */ \"./src/Assets/Images/MarineEmblem.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    margin: 0;\n    padding: 0;\n    font-family: \"OnePieceFont\";\n}\n\nhtml,\nbody{\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n@font-face {\n    font-family: \"OnePieceFont\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n.flex{\n    display: flex;\n}\n\n#content{\n    display: flex;\n\n    flex-grow: 1;\n\n    justify-content: space-between;\n    align-items: center;\n\n    min-width: 100vw;\n    min-height: 100%;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.modalBg{\n    position: absolute;\n    \n    min-width: 100vw;\n    min-height: 100vh;\n\n    background-color: rgba(255, 255, 255, 0.3);\n\n    backdrop-filter: blur(5px);\n    \n    z-index: 180;\n}\n\n.modal{\n    position: absolute;\n    \n    top: 50%;\n    left: 50%;\n\n    transform: translate(-50%, -50%);\n\n    z-index: 200;\n\n    max-width: 350px;\n    height: 700px;\n\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n\n    text-align: center;\n\n    padding: 25px 50px;\n}\n\n.modal > p{\n    margin-top: 16px;\n\n    font-weight: 700;\n}\n\n.welcomeHeader{\n    font-size: 42px;\n}\n\n.rotateShipBtn{\n    margin-top: 25px;\n    margin-bottom: 16px;\n\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n\n    color: white;\n\n    font-size: 18px;\n    font-weight: 700;\n}\n\n.modal > .gameBoardWrapper > .gameBoard > .rowDiv > .square,\n.modal > .gameBoardWrapper > .gameBoard\n{\n    border: 2px rgb(135, 93, 9) solid;\n}\n\n.modal > .gameBoardWrapper > .gameBoard\n{\n    margin-top: 40px;\n}\n\n.modal > .gameBoardWrapper >  .gameBoard > .rowDiv{\n    height: 35px;\n}\n\n.modal > .gameBoardWrapper > .gameBoard > .rowDiv > .square\n{\n    width: 35px;\n    height: 35px;\n}\n\nh1{\n    margin-top: 8px;\n    \n    color: rgb(0, 0, 0);\n}\n\n.rotateShipBtn{\n    width: 150px;\n    height: 50px;\n}\n\n.shipPlaced{\n    background-color: brown;\n}\n\n.painted{\n    background-color: black;\n}\n\n.leftImgDiv,\n.rightImgDiv{\n    display: flex;\n\n    min-height: 100vh;\n    min-width: 15vw;\n}\n\n.LuffyImg{\n    height: min(4000px, 80vh);\n    max-width: auto;\n\n    position: absolute;\n    left: 11%;\n    top: 56%;\n\n    transform: translate(-50%, -45%);\n}\n\n.gameContainer{\n    flex-direction: column;\n\n    height: 100vh;\n    min-width: 70vw;\n\n    justify-content: center;\n    align-items: center;\n}\n\n.onePieceLogoImg{\n    position: absolute;\n\n    width: max(200px, 30%);\n    height: max(75px, 22%);\n\n    left: 49%;\n    top: 12%;\n\n    transform: translate(-50%, -50%);\n\n    z-index: 8;\n}\n\n.xLogo{\n    position: absolute;\n    width: max(200px, 40%);\n    height: max(200px, 40%);\n\n    left: 50%;\n    top: 16%;\n\n    transform: translate(-50%, -50%);\n\n}\n\n.battleshipLogo{\n    position: absolute;\n\n    width: max(200px, 28%);\n    height: max(50px, 15%);\n\n    left: 50%;\n    top: 20%;\n\n    transform: translate(-50%, -50%);\n}\n\n.gameBoardContainers{\n    display: flex;\n\n    max-width: 100%;\n    height: 70%;\n\n    justify-content: center;\n    align-items: center;\n\n    gap: 50px;\n\n    margin-top: auto;\n\n    flex-wrap: wrap;\n}\n\n.gameBoardContainer{\n    margin: 145px 15px 0 25px;\n\n    max-width: 100%;\n\n    text-align: center;\n}\n\n.playerInfoContainer,\n.AIInfoContainer{\n    align-items: center;\n\n    margin-bottom: 12px;\n\n    gap: 18px;\n}\n\n.player1Token,\n.AIToken{\n    width: 80px;\n    height: 80px;\n\n    border-radius: 50%;\n\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n}\n\n.player1Token{\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n}\n\n.AIToken{\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_5___})\n}\n\n.player1Name,\n.AIName{\n    font-size: 26px;\n    font-weight: 1000;\n    font-family: \"OnePieceFont\";\n}\n\n.player1Name,\n.player1NumShipsP{\n    color: rgb(157, 11, 230);\n}\n\n.AIName,\n.AINumShipsP{\n    color: rgb(226, 66, 12);\n}\n\n.gameBoard{\n    border: 2px solid rgb(255, 255, 255);\n    z-index: 15;\n}\n\n.player1Board{\n    margin-top: -350px;\n}\n\n.boardCover{\n    width: 392px;\n    height: 350px;\n\n    position: relative;\n    z-index: 100;\n\n    transform: translate(2px, 4px);\n}\n\n.AIBoardCover{\n    position: absolute;\n}\n\n.rowDiv{\n    display: flex;\n    height: 35px;\n}\n\n.square{\n    width: 35px;\n    height: inherit;\n    border: 2px solid rgb(255, 255, 255);\n    z-index: 50;\n}\n\n.imgContainer{\n    position: relative;\n\n    pointer-events: none;\n    z-index: -10;\n}\n\n.shipInfoContainer{\n    \n    padding-left: 50px;\n    padding-top: 12px;\n\n    align-items: center;\n\n    gap: 25px;\n}\n\n.shipImgIcon{\n    width: 60px;\n    height: 60px;\n}\n\n.player1NumShipsP,\n.AINumShipsP{\n    font-weight: 700;\n\n    font-size: 24px;\n\n    font-family: \"OnePieceFont\";\n}\n\n.akainuImg{\n    height: min(4000px, 80vh);\n    max-width: auto;\n\n    position: absolute;\n    left: 12%;\n    top: 60%;\n\n    transform: translate(260%, -50%);\n}\n\n.actionButtonsDiv{\n    margin-bottom: 25px;\n    margin-right: 50px;\n\n    gap: 20px;\n}\n\n.sound{\n    width: 40px;\n    height: 40px;\n}\n\n.quitGameBtn,\n.restartBtn{\n    width: 150px;\n    height: 40px;\n\n    font-size: 18px;\n    font-weight: 700;\n\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n    \n    color: white\n}\n\n.explosion,\n.miss{\n    width: 25px;\n    height: 25px;\n\n    margin-top: 5px;\n\n    z-index: 20;\n}\n\n#invalid{\n    background-color: red;\n}\n\n.winMsgP{\n    font-size: 50px;\n    font-weight: 1000;\n}\n\n.consequenceMsgP,\n.restartMsgP{\n    font-size: 20px;\n    font-weight: 1000;\n\n    margin-top: 12px;\n}\n\n.loseEndImg{\n    width: 90%;\n    height: auto;\n    \n    margin-top: 50px;\n}\n\n.winEndImg{\n    width: 90%;\n    height: 300px;\n\n    margin-top: 50px;\n}\n\n.restartMsgP{\n    font-size: 30px;\n}\n\n.actionButtonsDiv.gameOver{\n    justify-content: center;\n    align-items: center;\n\n    margin-top: 25px;\n}\n\n.actionButtonsDiv.gameOver > .sound{\n    margin-top: 15px;\n}\n\n.restartBtn{\n    margin-top: 12px;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-battleship/./src/Styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/Assets/Images/BattleshipLogo.webp":
/*!***********************************************!*\
  !*** ./src/Assets/Images/BattleshipLogo.webp ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/BattleshipLogo.webp\");\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/BattleshipLogo.webp?");

/***/ }),

/***/ "./src/Assets/Images/missX.webp":
/*!**************************************!*\
  !*** ./src/Assets/Images/missX.webp ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/missX.webp\");\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/missX.webp?");

/***/ }),

/***/ "./src/Assets/Music/Background Music/Lose_BG.mp4":
/*!*******************************************************!*\
  !*** ./src/Assets/Music/Background Music/Lose_BG.mp4 ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/audio/Lose_BG.mp4\");\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Music/Background_Music/Lose_BG.mp4?");

/***/ }),

/***/ "./src/Assets/Music/Background Music/Overtaken.mp3":
/*!*********************************************************!*\
  !*** ./src/Assets/Music/Background Music/Overtaken.mp3 ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/audio/Overtaken.mp3\");\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Music/Background_Music/Overtaken.mp3?");

/***/ }),

/***/ "./src/Assets/Music/Background Music/VeryStrongest_BG.mp4":
/*!****************************************************************!*\
  !*** ./src/Assets/Music/Background Music/VeryStrongest_BG.mp4 ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/audio/VeryStrongest_BG.mp4\");\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Music/Background_Music/VeryStrongest_BG.mp4?");

/***/ }),

/***/ "./src/Assets/Music/Background Music/Victory_BG.mp3":
/*!**********************************************************!*\
  !*** ./src/Assets/Music/Background Music/Victory_BG.mp3 ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/audio/Victory_BG.mp3\");\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Music/Background_Music/Victory_BG.mp3?");

/***/ }),

/***/ "./src/Assets/Music/Background Music/Wano.mp3":
/*!****************************************************!*\
  !*** ./src/Assets/Music/Background Music/Wano.mp3 ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/audio/Wano.mp3\");\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Music/Background_Music/Wano.mp3?");

/***/ }),

/***/ "./src/Assets/Music/SFX/Cannon_SFX.mp4":
/*!*********************************************!*\
  !*** ./src/Assets/Music/SFX/Cannon_SFX.mp4 ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/audio/Cannon_SFX.mp4\");\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Music/SFX/Cannon_SFX.mp4?");

/***/ }),

/***/ "./src/Assets/Music/SFX/Explosion_SFX.mp4":
/*!************************************************!*\
  !*** ./src/Assets/Music/SFX/Explosion_SFX.mp4 ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/audio/Explosion_SFX.mp4\");\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Music/SFX/Explosion_SFX.mp4?");

/***/ }),

/***/ "./src/Assets/Music/SFX/Ridicule_SFX.mp4":
/*!***********************************************!*\
  !*** ./src/Assets/Music/SFX/Ridicule_SFX.mp4 ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/audio/Ridicule_SFX.mp4\");\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Music/SFX/Ridicule_SFX.mp4?");

/***/ }),

/***/ "./src/Assets/Music/SFX/Splash_SFX.mp4":
/*!*********************************************!*\
  !*** ./src/Assets/Music/SFX/Splash_SFX.mp4 ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/audio/Splash_SFX.mp4\");\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Music/SFX/Splash_SFX.mp4?");

/***/ }),

/***/ "./src/Styles/styles.css":
/*!*******************************!*\
  !*** ./src/Styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-battleship/./src/Styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/LoadPage.js":
/*!*************************!*\
  !*** ./src/LoadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeSquareColor: () => (/* binding */ changeSquareColor),\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   createImage: () => (/* binding */ createImage),\n/* harmony export */   createPage: () => (/* binding */ createPage),\n/* harmony export */   displayGameOverModal: () => (/* binding */ displayGameOverModal),\n/* harmony export */   makeAIClickSquare: () => (/* binding */ makeAIClickSquare),\n/* harmony export */   quitGame: () => (/* binding */ quitGame),\n/* harmony export */   startTurn: () => (/* binding */ startTurn)\n/* harmony export */ });\n/* harmony import */ var _Assets_Images_Luffy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assets/Images/Luffy.png */ \"./src/Assets/Images/Luffy.png\");\n/* harmony import */ var _Assets_Images_Akainu_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assets/Images/Akainu.png */ \"./src/Assets/Images/Akainu.png\");\n/* harmony import */ var _Assets_Images_One_Piece_Logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/Images/One-Piece-Logo.png */ \"./src/Assets/Images/One-Piece-Logo.png\");\n/* harmony import */ var _Assets_Images_XLogo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Assets/Images/XLogo.png */ \"./src/Assets/Images/XLogo.png\");\n/* harmony import */ var _Assets_Images_BattleshipLogo_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Assets/Images/BattleshipLogo.webp */ \"./src/Assets/Images/BattleshipLogo.webp\");\n/* harmony import */ var _Assets_Images_Thousand_Sunny_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Assets/Images/Thousand_Sunny.png */ \"./src/Assets/Images/Thousand_Sunny.png\");\n/* harmony import */ var _Assets_Images_Submarine_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Assets/Images/Submarine.png */ \"./src/Assets/Images/Submarine.png\");\n/* harmony import */ var _Assets_Images_Queen_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Assets/Images/Queen.png */ \"./src/Assets/Images/Queen.png\");\n/* harmony import */ var _Assets_Images_Oro_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Assets/Images/Oro.png */ \"./src/Assets/Images/Oro.png\");\n/* harmony import */ var _Assets_Images_Boa_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Assets/Images/Boa.png */ \"./src/Assets/Images/Boa.png\");\n/* harmony import */ var _Assets_Images_NavyShip_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Assets/Images/NavyShip.png */ \"./src/Assets/Images/NavyShip.png\");\n/* harmony import */ var _Assets_Images_NavyCarrier_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Assets/Images/NavyCarrier.png */ \"./src/Assets/Images/NavyCarrier.png\");\n/* harmony import */ var _Assets_Images_NavyDestroyer_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Assets/Images/NavyDestroyer.png */ \"./src/Assets/Images/NavyDestroyer.png\");\n/* harmony import */ var _Assets_Images_Win_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Assets/Images/Win.jpeg */ \"./src/Assets/Images/Win.jpeg\");\n/* harmony import */ var _Assets_Images_Lose_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Assets/Images/Lose.jpg */ \"./src/Assets/Images/Lose.jpg\");\n/* harmony import */ var _Assets_Images_sound_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Assets/Images/sound.png */ \"./src/Assets/Images/sound.png\");\n/* harmony import */ var _Assets_Music_Background_Music_Overtaken_mp3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Assets/Music/Background Music/Overtaken.mp3 */ \"./src/Assets/Music/Background Music/Overtaken.mp3\");\n/* harmony import */ var _Assets_Music_Background_Music_VeryStrongest_BG_mp4__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Assets/Music/Background Music/VeryStrongest_BG.mp4 */ \"./src/Assets/Music/Background Music/VeryStrongest_BG.mp4\");\n/* harmony import */ var _Assets_Music_Background_Music_Wano_mp3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Assets/Music/Background Music/Wano.mp3 */ \"./src/Assets/Music/Background Music/Wano.mp3\");\n/* harmony import */ var _Assets_Music_Background_Music_Victory_BG_mp3__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Assets/Music/Background Music/Victory_BG.mp3 */ \"./src/Assets/Music/Background Music/Victory_BG.mp3\");\n/* harmony import */ var _Assets_Music_Background_Music_Lose_BG_mp4__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Assets/Music/Background Music/Lose_BG.mp4 */ \"./src/Assets/Music/Background Music/Lose_BG.mp4\");\n/* harmony import */ var _Assets_Music_SFX_Ridicule_SFX_mp4__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Assets/Music/SFX/Ridicule_SFX.mp4 */ \"./src/Assets/Music/SFX/Ridicule_SFX.mp4\");\n/* harmony import */ var _Assets_Music_SFX_Cannon_SFX_mp4__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Assets/Music/SFX/Cannon_SFX.mp4 */ \"./src/Assets/Music/SFX/Cannon_SFX.mp4\");\n/* harmony import */ var _Assets_Music_SFX_Splash_SFX_mp4__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Assets/Music/SFX/Splash_SFX.mp4 */ \"./src/Assets/Music/SFX/Splash_SFX.mp4\");\n/* harmony import */ var _Assets_Music_SFX_Explosion_SFX_mp4__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Assets/Music/SFX/Explosion_SFX.mp4 */ \"./src/Assets/Music/SFX/Explosion_SFX.mp4\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* eslint-disable no-use-before-define */\n/* eslint-disable no-param-reassign */\n/* eslint-disable import/no-import-module-exports */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Page background music\n\n\n\n\n// End background music\n\n\n\n// Sfx\n\n\n\n\n\n\n\nconst createElement = (elementName, elemenetClassName, elementID = \"\") => {\n  const newElement = document.createElement(elementName);\n  const classNames = elemenetClassName.split(\" \");\n  for (let i = 0; i < classNames.length; i += 1) {\n    newElement.classList.add(classNames[i]);\n  }\n  if (elementID !== \"\") {\n    newElement.setAttribute(\"id\", elementID);\n  }\n  return newElement;\n};\n\nconst createImage = (ImportedImg, className) => {\n  const myImg = new Image();\n  myImg.src = ImportedImg;\n  myImg.classList.add(className);\n  return myImg;\n};\n\nconst contentDiv = document.getElementById(\"content\");\ncontentDiv.style.backgroundRepeat = \"no-repeat\";\ncontentDiv.style.backgroundSize = \"cover\";\ncontentDiv.style.backgroundPosition = \"center\";\n\nconst pageBgAudio = createElement(\"audio\", \"pageBgAudio\");\nconst veryStrongest = createElement(\"source\", \"bg\");\nveryStrongest.src = _Assets_Music_Background_Music_VeryStrongest_BG_mp4__WEBPACK_IMPORTED_MODULE_17__[\"default\"];\nveryStrongest.volume = 0.8;\nconst overtaken = createElement(\"source\", \"bg\");\novertaken.src = _Assets_Music_Background_Music_Overtaken_mp3__WEBPACK_IMPORTED_MODULE_16__[\"default\"];\novertaken.volume = 0.8;\nconst wanoTheme = createElement(\"source\", \"bg\");\nwanoTheme.src = _Assets_Music_Background_Music_Wano_mp3__WEBPACK_IMPORTED_MODULE_18__[\"default\"];\nwanoTheme.volume = 0.8;\nwanoTheme.playbackRate = 0.8;\n\npageBgAudio.appendChild(overtaken);\npageBgAudio.appendChild(veryStrongest);\npageBgAudio.appendChild(wanoTheme);\n\nconst cannonSfx = createElement(\"audio\", \"cannonSfx\");\ncannonSfx.src = _Assets_Music_SFX_Cannon_SFX_mp4__WEBPACK_IMPORTED_MODULE_22__[\"default\"];\ncannonSfx.volume = 1;\nconst explosionSfx = createElement(\"audio\", \"explosionSfx\");\nexplosionSfx.src = _Assets_Music_SFX_Explosion_SFX_mp4__WEBPACK_IMPORTED_MODULE_24__[\"default\"];\nexplosionSfx.volume = 1;\nconst splashSfx = createElement(\"audio\", \"splashSfx\");\nsplashSfx.src = _Assets_Music_SFX_Splash_SFX_mp4__WEBPACK_IMPORTED_MODULE_23__[\"default\"];\nsplashSfx.volume = 1;\n\nconst loseSfx = createElement(\"audio\", \"sfx\");\nloseSfx.src = _Assets_Music_SFX_Ridicule_SFX_mp4__WEBPACK_IMPORTED_MODULE_21__[\"default\"];\nconst loseBg = createElement(\"audio\", \"bg\");\nloseBg.src = _Assets_Music_Background_Music_Lose_BG_mp4__WEBPACK_IMPORTED_MODULE_20__[\"default\"];\n\nconst winAudio = createElement(\"audio\", \"winAudio\");\nconst victory = createElement(\"source\", \"bg\");\nvictory.src = _Assets_Music_Background_Music_Victory_BG_mp3__WEBPACK_IMPORTED_MODULE_19__[\"default\"];\nwinAudio.appendChild(victory);\n\ncontentDiv.appendChild(cannonSfx);\ncontentDiv.appendChild(explosionSfx);\ncontentDiv.appendChild(splashSfx);\ncontentDiv.appendChild(loseSfx);\ncontentDiv.appendChild(loseBg);\ncontentDiv.appendChild(winAudio);\ncontentDiv.appendChild(pageBgAudio);\n\n// Variables to help AI become smarter\nlet prevAIMove = \"\";\nlet prevAIMoveResult = \"\";\n\nconst changeSquareColor = (event) => {\n  const square = event.currentTarget;\n  if (square.classList.contains(\"clicked\")) {\n    square.style.background = \"#b40808\";\n  } else {\n    square.style.background = \"#0db849\";\n  }\n};\n\nconst eraseSquares = () => {\n  const allPaintedSqaures = document.querySelectorAll(\".painted\");\n  allPaintedSqaures.forEach((paintedSquare) => {\n    // eslint-disable-next-line no-param-reassign\n    paintedSquare.classList.remove(\"painted\");\n  });\n};\n\n// Places the image of a ship on game board\nconst placeShipImg = (square, shipImage, shipLength, shipName, orientation) => {\n  const squareWidth = square.offsetWidth;\n\n  if (orientation === \"vertical\") {\n    // Create a container for the image\n    const imgContainer = createElement(\"div\", `imgContainer ${shipName}`);\n    imgContainer.style.width = `${squareWidth - 4}px`;\n    imgContainer.style.height = `${(squareWidth - 3) * shipLength}px`;\n    imgContainer.style.background = \"rgb(83, 129, 237)\";\n    // Positioning the ship with absolute so we can move it up when it rotates\n    shipImage.style.height = `${squareWidth - 4}px`;\n    shipImage.style.width = `${(squareWidth - 3) * shipLength}px`;\n\n    shipImage.style.transformOrigin = \"bottom left\";\n    shipImage.style.transform = \"translate(0%, -100%) rotate(90deg)\";\n\n    imgContainer.appendChild(shipImage);\n    square.appendChild(imgContainer);\n    square.classList.add(\"imgHolderVertical\");\n  } else {\n    // Create a container for the image\n    const imgContainer = createElement(\"div\", `imgContainer ${shipName}`);\n    imgContainer.style.width = `${squareWidth * shipLength}px`;\n    imgContainer.style.height = `${squareWidth - 4}px`;\n\n    shipImage.style.height = `${squareWidth - 4}px`;\n    shipImage.style.width = `${(squareWidth) * shipLength}px`;\n    imgContainer.style.background = \"rgb(83, 129, 237)\";\n    imgContainer.appendChild(shipImage);\n    square.appendChild(imgContainer);\n    square.classList.add(\"imgHolderHorizontal\");\n  }\n\n  return square;\n};\n// Marks placed ships on modal and places ship on actual board\nconst placeShipOnBoard = (playerName, ships, square, orientation) => {\n  const firstKeyName = Object.keys(ships)[0];\n  const firstShipLength = Object.values(ships)[0][0];\n  const firstShipImage = Object.values(ships)[0][1];\n  const pointAAttribute = square.getAttribute(\"data-state\");\n  const PointAStr = pointAAttribute.match(/\\d+/g);\n  const pointA = PointAStr.map((match) => parseInt(match, 10));\n  const image = createImage(firstShipImage, \"shipImg\");\n\n  // Select board based on who is placing ships\n  const boardName = `${playerName}Board`;\n\n  const player1Board = document.querySelector(\".player1Board\");\n  const player1BoardSquare = player1Board.querySelector(`[data-state = \"${pointAAttribute}\"]`);\n\n  const paintedSquares = document.querySelectorAll(\".painted\");\n  paintedSquares.forEach((paintedSquare) => {\n    paintedSquare.classList.add(\"shipPlaced\");\n  });\n\n  if (playerName === \"AI\") {\n    const squareToPlaceImg = placeShipImg(square, image, firstShipLength, firstKeyName, orientation);\n\n    // Clear AI board of mmarkings\n    const shipsPlacedSquares = document.querySelectorAll(\".shipPlaced\");\n    shipsPlacedSquares.forEach((markedSquare) => {\n      markedSquare.style.background = \"none\";\n    });\n    // Hide AI ships\n    const imageContainer = squareToPlaceImg.querySelector(\".imgContainer\");\n    // Add name of ship to square to make it easier to mark square\n    imageContainer.classList.add(`${firstKeyName}`);\n    imageContainer.style.background = \"none\";\n    image.style.opacity = 0;\n  } else {\n    // Avoid placing image on modal gameboard\n    placeShipImg(player1BoardSquare, image, firstShipLength, firstKeyName, orientation);\n  }\n\n  // Place ship in array\n  _index_js__WEBPACK_IMPORTED_MODULE_25__.GameBoard.placeShip(pointA, orientation, firstKeyName, boardName);\n\n  // Prevent user from double clicking on a square\n  eraseSquares();\n\n  // eslint-disable-next-line no-param-reassign\n  const keys = Object.keys(ships);\n  const firstKey = keys[0];\n  // eslint-disable-next-line no-param-reassign\n  delete ships[firstKey];\n  // All ships are placed\n  if (Object.keys(ships).length === 0) {\n    if (playerName === \"player1\") {\n      const modalBg = document.querySelector(\".modalBg\");\n      modalBg.style.display = \"none\";\n      pageBgAudio.play();\n    }\n  }\n};\n// Checks to make sure move is legal and not overlapping with other ships\nconst checkForIllegalMove = (square, orientation, ships, playerName) => {\n  // Get (x, y) coordinate of square as strings in an array\n  const squareCoordinateStr = square.getAttribute(\"data-state\").match(/\\d+/g);\n  // Turn those strings into ints\n  const squareCoordinate = squareCoordinateStr.map((match) => parseInt(match, 10));\n  // Select appropriate gameboard\n  const board = document.querySelector(`.${playerName}Board`);\n  // Will determine if a square can be clicked instead of repeating logic from mouseover\n  let legalMove;\n\n  // Paint squares equivalent to ship length\n  for (let k = 0; k < Object.values(ships)[0][0]; k += 1) {\n    legalMove = false;\n    if (orientation === \"horizontal\") {\n      const dataState = `(${squareCoordinate[0] + k}, ${squareCoordinate[1]})`;\n      const placementSquare = board.querySelector(`[data-state=\"${dataState}\"]`);\n      if (placementSquare === null || placementSquare.classList.contains(\"shipPlaced\")) {\n        // Visual message letting the user know they're attempting to place a ship\n        // on an invalid spot on the board\n        eraseSquares();\n        // Don't need to check other squares\n        break;\n      } else {\n        placementSquare.classList.add(\"painted\");\n        legalMove = true;\n      }\n    } else {\n      const dataState = `(${squareCoordinate[0]}, ${squareCoordinate[1] + k})`;\n      const placementSquare = board.querySelector(`[data-state=\"${dataState}\"]`);\n      if (placementSquare === null || placementSquare.classList.contains(\"shipPlaced\")) {\n        eraseSquares();\n        break;\n      } else {\n        placementSquare.classList.add(\"painted\");\n        legalMove = true;\n      }\n    }\n  }\n  return legalMove;\n};\n// Starts the game loop when a square is clicked\nconst startTurn = (event) => {\n  const square = event.currentTarget;\n  cannonSfx.play();\n\n  if (square.classList.contains(\"AI\")) {\n    // Prevent player from double-clicking (causes AI to go twice)\n    square.removeEventListener(\"click\", startTurn);\n    // Player clicked AI square\n    _index_js__WEBPACK_IMPORTED_MODULE_25__.GameController.playTurn(square, \"player1\", \"AIBoard\");\n  } else {\n    prevAIMoveResult = _index_js__WEBPACK_IMPORTED_MODULE_25__.GameController.playTurn(square, \"AI\", \"player1Board\");\n  }\n};\n\nconst createGameBoardGUI = (playerName, placementBoard = false, ships = \"\") => {\n  const gameBoard = createElement(\"div\", \"gameBoard\");\n  gameBoard.classList.add(`${playerName}Board`);\n  let legalMove;\n  for (let i = 0; i < 10; i += 1) {\n    // Make it easier to give squares (x, y) coordinates\n    const rowDiv = createElement(\"div\", \"rowDiv\");\n    rowDiv.setAttribute(\"data-state\", i);\n    gameBoard.appendChild(rowDiv);\n    for (let j = 0; j < 10; j += 1) {\n      const square = createElement(\"div\", `square ${playerName}`);\n      square.setAttribute(\"data-state\", `(${j}, ${i})`);\n      // Add a different eventListener for a board that only places ships\n      if (placementBoard) {\n        // eslint-disable-next-line no-loop-func\n        square.addEventListener(\"mouseenter\", () => {\n          const orientation = document.querySelector(\".rotateShipBtn\").getAttribute(\"id\");\n          legalMove = checkForIllegalMove(square, orientation, ships, \"placement\");\n        });\n        square.addEventListener(\"mouseleave\", () => {\n          // Clear squares of bg color\n          eraseSquares();\n        });\n        // eslint-disable-next-line no-loop-func\n        square.addEventListener(\"click\", () => {\n          if (legalMove) {\n            const orientation = document.querySelector(\".rotateShipBtn\").getAttribute(\"id\");\n            placeShipOnBoard(\"player1\", ships, square, orientation);\n            // Prevents user from double-clicking\n            legalMove = false;\n          } else { // Invalid move\n\n          }\n        });\n      } else { // Regular gameboard\n        if (playerName === \"AI\") {\n          square.addEventListener(\"mouseover\", changeSquareColor);\n          square.addEventListener(\"mouseout\", () => {\n            square.style.background = \"none\";\n          });\n        }\n        square.addEventListener(\"click\", startTurn);\n      }\n      rowDiv.appendChild(square);\n    }\n  }\n  return gameBoard;\n};\n\n// generates a random coordinate and then selects a random square form the coordinates\nconst makeAIMOve = () => {\n  const x = Math.floor(Math.random() * 10); // Random number between 0 and 9\n  const y = Math.floor(Math.random() * 10);\n\n  const dataState = `(${x}, ${y})`;\n  return dataState;\n};\n// Makes a smarter move if the AI hits a ship\nconst makeSmartAIMove = () => {\n  // Get (x, y) coordinate of prevMove as strings in an array\n  const prevMoveCoordinatesStr = prevAIMove.match(/\\d+/g);\n  // Turn coordinates into ints\n  const prevMoveCoordinates = prevMoveCoordinatesStr.map((match) => parseInt(match, 10));\n  const x = prevMoveCoordinates[0];\n  const y = prevMoveCoordinates[1];\n  const moveDirections = {\n    left: [x - 1, y],\n    right: [x + 1, y],\n    up: [x, y + 1],\n    down: [x, y - 1],\n  };\n\n  let moveDirection;\n  // Ensure AI is in bounds of game board\n  do {\n    // Generate a number 0-3 inlusive\n    const randomDirection = Math.floor(Math.random() * 4);\n    moveDirection = Object.values(moveDirections)[randomDirection];\n    // eslint-disable-next-line max-len\n  } while (moveDirection[0] < 0 || moveDirection[1] < 0 || moveDirection[0] > 9 || moveDirection[1] > 9);\n\n  const dataState = `(${moveDirection[0]}, ${moveDirection[1]})`;\n  return dataState;\n};\n// Initializes AI's turn\nconst makeAIClickSquare = () => {\n  const playerBoard = document.querySelector(\".player1Board\");\n  let dataState;\n  let targetSquare;\n\n  if (prevAIMoveResult === \"hit\") {\n    // Keep making a move close to the hit while invalid\n    do {\n      dataState = makeSmartAIMove();\n      targetSquare = playerBoard.querySelector(`[data-state = \"${dataState}\"]`);\n    } while (targetSquare.classList.contains(\"clicked\"));\n  } else {\n    // Keep picking a square while the selected one is invalid\n    do {\n      dataState = makeAIMOve();\n      targetSquare = playerBoard.querySelector(`[data-state = \"${dataState}\"]`);\n    } while (targetSquare.classList.contains(\"clicked\"));\n  }\n  prevAIMove = dataState;\n  targetSquare.click();\n  targetSquare.classList.add(\"clicked\");\n};\n\nconst restartGame = () => {\n  const gameBoardWrappers = document.querySelectorAll(\".gameBoardWrapper\");\n  gameBoardWrappers.forEach((boardWrapper) => {\n    boardWrapper.innerHTML = \" \";\n\n    // Create new fresh boards\n    if (boardWrapper.classList.contains(\"player1Wrapper\")) {\n      const boardCover = createElement(\"div\", \"boardCover\");\n      boardWrapper.appendChild(boardCover);\n      boardWrapper.appendChild(createGameBoardGUI(\"player1\"));\n      const playerNumShipsP = document.querySelector(\".player1NumShipsP\");\n      playerNumShipsP.textContent = \"Ships Remaining: 5\";\n    } else if (boardWrapper.classList.contains(\"AIWrapper\")) {\n      const AIboardCover = createElement(\"div\", \"boardCover AIBoardCover\");\n      boardWrapper.appendChild(AIboardCover);\n      AIboardCover.style.display = \"none\";\n      boardWrapper.appendChild(createGameBoardGUI(\"AI\"));\n      const AINumShipsP = document.querySelector(\".AINumShipsP\");\n      AINumShipsP.textContent = \"Ships Remaining: 5\";\n      // eslint-disable-next-line no-use-before-define\n      placeAIShips();\n    } else {\n      const ships = {\n        carrier: [5, _Assets_Images_Queen_png__WEBPACK_IMPORTED_MODULE_7__],\n        battleship: [4, _Assets_Images_Boa_png__WEBPACK_IMPORTED_MODULE_9__],\n        cruiser: [3, _Assets_Images_Oro_png__WEBPACK_IMPORTED_MODULE_8__],\n        submarine: [3, _Assets_Images_Submarine_png__WEBPACK_IMPORTED_MODULE_6__],\n        destroyer: [2, _Assets_Images_Thousand_Sunny_png__WEBPACK_IMPORTED_MODULE_5__],\n      };\n      boardWrapper.appendChild(createGameBoardGUI(\"placement\", true, ships));\n    }\n  });\n};\nconst quitGame = () => {\n  pageBgAudio.pause();\n  pageBgAudio.currentTime = 0;\n  _index_js__WEBPACK_IMPORTED_MODULE_25__.GameController.resetGame();\n  restartGame();\n  const modalBg = document.querySelector(\".modalBg\");\n  modalBg.style.display = \"block\";\n};\n\n// Displays the board where player will place their ships\nconst displayPlacementBoardModal = () => {\n  const ships = {\n    carrier: [5, _Assets_Images_Queen_png__WEBPACK_IMPORTED_MODULE_7__],\n    battleship: [4, _Assets_Images_Boa_png__WEBPACK_IMPORTED_MODULE_9__],\n    cruiser: [3, _Assets_Images_Oro_png__WEBPACK_IMPORTED_MODULE_8__],\n    submarine: [3, _Assets_Images_Submarine_png__WEBPACK_IMPORTED_MODULE_6__],\n    destroyer: [2, _Assets_Images_Thousand_Sunny_png__WEBPACK_IMPORTED_MODULE_5__],\n  };\n  // Backgroudn to cover game boards when modal is displayed\n  const modalBg = createElement(\"div\", \"modalBg\");\n  const modal = createElement(\"modal\", \"modal\");\n  modalBg.appendChild(modal);\n\n  const welcomeHeader = createElement(\"h1\", \"welcomeHeader\");\n  welcomeHeader.textContent = \"Welcome to One Piece Battleship!\";\n  const welcomeMsg = createElement(\"p\", \"welcomeMsg\");\n  welcomeMsg.textContent = \"Oh No! Adimral Akainu has targeted your ships with his new ship-targeting system! Place your ships strategically to escape his wrath and sink those Navy Ships!\";\n\n  const placeShipMsg = createElement(\"p\", \"placeSHipMsg\");\n  placeShipMsg.textContent = \"Place your \";\n\n  const rotateShipBtn = createElement(\"button\", \"rotateShipBtn\");\n  rotateShipBtn.setAttribute(\"id\", \"horizontal\");\n  rotateShipBtn.textContent = \"Rotate Ship\";\n  rotateShipBtn.addEventListener(\"click\", () => {\n    if (rotateShipBtn.getAttribute(\"id\") === \"horizontal\") {\n      rotateShipBtn.setAttribute(\"id\", \"vertical\");\n    } else {\n      rotateShipBtn.setAttribute(\"id\", \"horizontal\");\n    }\n  });\n  const gameBoardWrapper = createElement(\"div\", \"gameBoardWrapper\");\n  const placementBoard = createGameBoardGUI(\"placement\", true, ships);\n  placementBoard.classList.add(\"placementBoard\");\n  gameBoardWrapper.appendChild(placementBoard);\n\n  modal.appendChild(welcomeHeader);\n  modal.appendChild(welcomeMsg);\n  modal.appendChild(placeShipMsg);\n  modal.appendChild(rotateShipBtn);\n  modal.appendChild(gameBoardWrapper);\n\n  contentDiv.appendChild(modalBg);\n};\n\nconst displayGameOverModal = (loser) => {\n  const gameOverModalBg = createElement(\"div\", \"modalBg\");\n  const gameOverModal = createElement(\"modal\", \"modal\");\n  gameOverModalBg.appendChild(gameOverModal);\n\n  const winMsgP = createElement(\"h1\", \"winMsgP\");\n  const consequenceMsgP = createElement(\"p\", \"consequenceMsgP\");\n  let endImg;\n\n  pageBgAudio.pause();\n  let audioToPlay;\n  if (loser === \"player1\") {\n    loseSfx.play();\n    audioToPlay = loseBg;\n    audioToPlay.play();\n    audioToPlay.volume = 1;\n    winMsgP.textContent = \"YOU LOSE!!!\";\n    endImg = createImage(_Assets_Images_Lose_jpg__WEBPACK_IMPORTED_MODULE_14__, \"loseEndImg\");\n    consequenceMsgP.textContent = \"The Navy has captured your crew and Monkey D. Luffy has been sentenced to LIFE in Impeldown!\";\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_25__.sleep)(2000);\n    loseBg.play();\n  } else {\n    audioToPlay = winAudio;\n    audioToPlay.play();\n    winMsgP.textContent = \"YOI WIN!!!\";\n    endImg = createImage(_Assets_Images_Win_jpeg__WEBPACK_IMPORTED_MODULE_13__, \"winEndImg\");\n    consequenceMsgP.textContent = \"You have saved your crew and yourself from the clutches of Akainu! You live to sail another day!!\";\n  }\n\n  const restartMsgP = createElement(\"p\", \"restartMsgP\");\n  restartMsgP.textContent = \"Do you wish to restart the game?\";\n\n  const actionButtonsDiv = createElement(\"div\", \"actionButtonsDiv gameOver flex\");\n  const restartBtn = createElement(\"button\", \"restartBtn\");\n  restartBtn.textContent = \"Restart Game\";\n  restartBtn.addEventListener(\"click\", () => {\n    audioToPlay.pause();\n    pageBgAudio.currentTime = 0;\n    restartGame();\n    contentDiv.removeChild(gameOverModalBg);\n    const modalBg = document.querySelector(\".modalBg\");\n    modalBg.style.display = \"block\";\n  });\n  const sound = createImage(_Assets_Images_sound_png__WEBPACK_IMPORTED_MODULE_15__, \"sound\");\n  sound.addEventListener(\"click\", () => {\n    audioToPlay.muted = !audioToPlay.muted;\n  });\n  actionButtonsDiv.appendChild(sound);\n  actionButtonsDiv.appendChild(restartBtn);\n\n  gameOverModal.appendChild(winMsgP);\n  gameOverModal.appendChild(consequenceMsgP);\n  gameOverModal.appendChild(endImg);\n  gameOverModal.appendChild(restartMsgP);\n  gameOverModal.appendChild(actionButtonsDiv);\n\n  contentDiv.appendChild(gameOverModalBg);\n};\n\nconst placeAIShips = () => {\n  const AIShips = {\n    carrier: [5, _Assets_Images_NavyCarrier_png__WEBPACK_IMPORTED_MODULE_11__],\n    battleship: [4, _Assets_Images_NavyDestroyer_png__WEBPACK_IMPORTED_MODULE_12__],\n    cruiser: [3, _Assets_Images_NavyDestroyer_png__WEBPACK_IMPORTED_MODULE_12__],\n    submarine: [3, _Assets_Images_NavyShip_png__WEBPACK_IMPORTED_MODULE_10__],\n    destroyer: [2, _Assets_Images_NavyShip_png__WEBPACK_IMPORTED_MODULE_10__],\n  };\n\n  while (Object.keys(AIShips).length > 0) {\n    // AI picks a random orientation\n    const randomNumber = Math.random();\n    const orientation = randomNumber < 0.5 ? \"horizontal\" : \"vertical\";\n    const AIBoard = document.querySelector(\".AIBoard\");\n\n    let squareDataState = makeAIMOve();\n    let moveSquare = AIBoard.querySelector(`[data-state = \"${squareDataState}\"]`);\n\n    // Check if move is legal and ships are not overlapping\n    while (!checkForIllegalMove(moveSquare, orientation, AIShips, \"AI\")) {\n      squareDataState = makeAIMOve();\n      moveSquare = AIBoard.querySelector(`[data-state = \"${squareDataState}\"]`);\n    }\n\n    placeShipOnBoard(\"AI\", AIShips, moveSquare, orientation);\n  }\n};\n\nconst createPage = () => {\n  displayPlacementBoardModal();\n  const leftImgDiv = createElement(\"div\", \"leftImgDiv\");\n  const luffyImg = createImage(_Assets_Images_Luffy_png__WEBPACK_IMPORTED_MODULE_0__, \"LuffyImg\");\n  leftImgDiv.appendChild(luffyImg);\n\n  const gameContainer = createElement(\"div\", \"gameContainer flex\");\n\n  const titleContainer = createElement(\"div\", \"titleContainer flex\");\n  const onePieceLogoImg = createImage(_Assets_Images_One_Piece_Logo_png__WEBPACK_IMPORTED_MODULE_2__, \"onePieceLogoImg\");\n  const xCollabLogo = createImage(_Assets_Images_XLogo_png__WEBPACK_IMPORTED_MODULE_3__, \"xLogo\");\n  const battleshipLogo = createImage(_Assets_Images_BattleshipLogo_webp__WEBPACK_IMPORTED_MODULE_4__[\"default\"], \"battleshipLogo\");\n  titleContainer.appendChild(onePieceLogoImg);\n  titleContainer.appendChild(xCollabLogo);\n  titleContainer.appendChild(battleshipLogo);\n\n  const gameBoardContainers = createElement(\"div\", \"gameBoardContainers\");\n\n  const player1GameBoardContainer = createElement(\"div\", \"gameBoardContainer\");\n  const playerInfoContainer = createElement(\"div\", \"playerInfoContainer flex\");\n  const player1Token = createElement(\"div\", \"player1Token\");\n  playerInfoContainer.appendChild(player1Token);\n  const player1NameP = createElement(\"p\", \"player1Name\");\n  player1NameP.textContent = \"Monkey D. Luffy\";\n  playerInfoContainer.appendChild(player1NameP);\n\n  // Make it easier to make a new gameboard by clearing out current one\n  const gameBoardWrapper = createElement(\"div\", \"gameBoardWrapper player1Wrapper\");\n  const boardCover = createElement(\"div\", \"boardCover\");\n  const player1GameBoard = createGameBoardGUI(\"player1\");\n  gameBoardWrapper.appendChild(boardCover);\n  gameBoardWrapper.appendChild(player1GameBoard);\n\n  // Prevent user form clicking their own squares\n\n  const shipInfoContainer = createElement(\"div\", \"shipInfoContainer flex\");\n  const shipImgIcon = createImage(_Assets_Images_Thousand_Sunny_png__WEBPACK_IMPORTED_MODULE_5__, \"shipImgIcon\");\n  const numShipsP = createElement(\"p\", \"player1NumShipsP\");\n  numShipsP.textContent = \"Ships Remaining: 5\";\n  shipInfoContainer.appendChild(shipImgIcon);\n  shipInfoContainer.appendChild(numShipsP);\n\n  player1GameBoardContainer.appendChild(playerInfoContainer);\n  player1GameBoardContainer.appendChild(gameBoardWrapper);\n  player1GameBoardContainer.appendChild(shipInfoContainer);\n\n  const AIGameBoardContainer = createElement(\"div\", \"gameBoardContainer\");\n  const AIInfoContainer = createElement(\"div\", \"AIInfoContainer flex\");\n  const AIToken = createElement(\"div\", \"AIToken\");\n  const AINameP = createElement(\"p\", \"AIName\");\n  AINameP.textContent = \"Admiral Sakazuki\";\n  AIInfoContainer.appendChild(AIToken);\n  AIInfoContainer.appendChild(AINameP);\n  const AIGameBoardWrapper = createElement(\"div\", \"gameBoardWrapper AIWrapper\");\n  // Temp cover to block player from clicking while AI plays (need 5 sec delay for audios to play)\n  const AIBoardCover = createElement(\"div\", \"boardCover AIBoardCover\");\n  AIBoardCover.style.display = \"none\";\n  const AIGameBoard = createGameBoardGUI(\"AI\");\n  AIGameBoardWrapper.appendChild(AIBoardCover);\n  AIGameBoardWrapper.appendChild(AIGameBoard);\n\n  const AIshipInfoContainer = createElement(\"div\", \"shipInfoContainer flex\");\n  const AIshipImgIcon = createImage(_Assets_Images_NavyShip_png__WEBPACK_IMPORTED_MODULE_10__, \"shipImgIcon\");\n  const AInumShipsP = createElement(\"p\", \"AINumShipsP\");\n  AInumShipsP.textContent = \"Ships Remaining: 5\";\n  AIshipInfoContainer.appendChild(AIshipImgIcon);\n  AIshipInfoContainer.appendChild(AInumShipsP);\n\n  AIGameBoardContainer.appendChild(AIInfoContainer);\n  AIGameBoardContainer.appendChild(AIGameBoardWrapper);\n  AIGameBoardContainer.appendChild(AIshipInfoContainer);\n\n  gameBoardContainers.appendChild(player1GameBoardContainer);\n  gameBoardContainers.appendChild(AIGameBoardContainer);\n\n  const actionButtonsDiv = createElement(\"div\", \"actionButtonsDiv flex\");\n  const quitGameBtn = createElement(\"button\", \"quitGameBtn\");\n  quitGameBtn.textContent = \"Quit Game\";\n\n  quitGameBtn.addEventListener(\"click\", quitGame);\n\n  const sound = createImage(_Assets_Images_sound_png__WEBPACK_IMPORTED_MODULE_15__, \"sound\");\n\n  pageBgAudio.addEventListener(\"timeupdate\", () => {\n    // Check if the audio is close to the end (e.g., within 1 second)\n    if (pageBgAudio.currentTime >= pageBgAudio.duration - 0.01) {\n      const activeSource = document.querySelector(\".pageBgAudio source.active\");\n      const nextSource = document.querySelector(\".pageBgAudio source.active + source\")\n            || document.querySelector(\".pageBgAudio source:first-child\");\n\n      // Deactivate current source and activate next source\n      activeSource.className = \"\";\n      nextSource.className = \"active\";\n\n      // Update audio source and start playback\n      pageBgAudio.src = nextSource.src;\n      pageBgAudio.play();\n    }\n  });\n\n  // Set the initial source to the first one\n  const firstSource = document.querySelector(\".pageBgAudio source:first-child\");\n  firstSource.className = \"active\";\n  pageBgAudio.src = firstSource.src;\n  pageBgAudio.muted = true;\n\n  sound.addEventListener(\"click\", () => {\n    // Toggle mute\n    pageBgAudio.muted = !pageBgAudio.muted;\n  });\n  actionButtonsDiv.appendChild(sound);\n  actionButtonsDiv.appendChild(quitGameBtn);\n\n  gameContainer.appendChild(titleContainer);\n  gameContainer.appendChild(gameBoardContainers);\n  gameContainer.appendChild(actionButtonsDiv);\n\n  const rightImgDiv = createElement(\"div\", \"rightImgDiv\");\n  const akainuImg = createImage(_Assets_Images_Akainu_png__WEBPACK_IMPORTED_MODULE_1__, \"akainuImg\");\n  rightImgDiv.appendChild(akainuImg);\n\n  contentDiv.appendChild(leftImgDiv);\n  contentDiv.appendChild(gameContainer);\n  contentDiv.appendChild(rightImgDiv);\n  placeAIShips();\n};\n\n\n\n//# sourceURL=webpack://project-battleship/./src/LoadPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameBoard: () => (/* binding */ GameBoard),\n/* harmony export */   GameController: () => (/* binding */ GameController),\n/* harmony export */   sleep: () => (/* binding */ sleep)\n/* harmony export */ });\n/* harmony import */ var _Styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Styles/styles.css */ \"./src/Styles/styles.css\");\n/* harmony import */ var _LoadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadPage */ \"./src/LoadPage.js\");\n/* harmony import */ var _Assets_Images_Explosion_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/Images/Explosion.png */ \"./src/Assets/Images/Explosion.png\");\n/* harmony import */ var _Assets_Images_missX_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Assets/Images/missX.webp */ \"./src/Assets/Images/missX.webp\");\n/* eslint-disable prefer-destructuring */\n/* eslint-disable no-param-reassign */\n/* eslint-disable import/no-import-module-exports */\n\n\n\n\n\n\n// Sleep function to delay code execution\n// eslint-disable-next-line no-promise-executor-return\nconst sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));\n\nconst Battleship = (shipType) => {\n  let numTimesHit = 0;\n  let sunk = false;\n  let lengthOfShip;\n  switch (shipType) {\n    case \"carrier\":\n      lengthOfShip = 5;\n      break;\n    case \"battleship\":\n      lengthOfShip = 4;\n      break;\n    case \"cruiser\":\n      lengthOfShip = 3;\n      break;\n    case \"submarine\":\n      lengthOfShip = 3;\n      break;\n    case \"destroyer\":\n      lengthOfShip = 2;\n      break;\n    default:\n      break;\n  }\n\n  const getLengthOfShip = () => lengthOfShip;\n  const getSunkState = () => sunk;\n\n  const isSunk = () => {\n    sunk = true;\n  };\n  const hit = () => {\n    numTimesHit += 1;\n    if (numTimesHit === lengthOfShip) {\n      isSunk();\n    }\n  };\n  const getShipType = () => shipType;\n\n  return {\n    hit, getLengthOfShip, getSunkState, getShipType,\n  };\n};\n\nconst player = (name) => {\n  const getName = () => name;\n  let numShips = 5;\n  const getNumShips = () => numShips;\n  const reduceNumShips = () => {\n    numShips -= 1;\n  };\n  const setNumShips = () => {\n    numShips = 5;\n  };\n  return {\n    getName, getNumShips, reduceNumShips, setNumShips,\n  };\n};\n\nconst GameBoard = (() => {\n  const createGameBoard = () => {\n    const board = [];\n    for (let i = 0; i < 10; i += 1) {\n      board[i] = [];\n      for (let j = 0; j < 10; j += 1) {\n        board[i][j] = \"0\";\n      }\n    }\n    return board;\n  };\n\n  const boards = {\n    player1Board: createGameBoard(),\n    AIBoard: createGameBoard(),\n  };\n\n  const placeShip = (pointA, orientation, shipName, boardName) => {\n    const newShip = Battleship(shipName);\n    const board = boards[boardName];\n    for (let i = 0; i < newShip.getLengthOfShip(); i += 1) {\n      // Flipped orientation since array is flipped\n      if (orientation === \"horizontal\") {\n        board[pointA[1]][pointA[0] + i] = newShip;\n      } else if (orientation === \"vertical\") {\n        board[pointA[1] + i][pointA[0]] = newShip;\n      }\n    }\n  };\n  const recieveAttack = (attackCoordinate, attackingPlayer, opponentBoardName) => {\n    const x = attackCoordinate[0];\n    const y = attackCoordinate[1];\n    const board = boards[opponentBoardName];\n    const attackedSquare = board[y][x];\n    if (typeof attackedSquare === \"object\") {\n      attackedSquare.hit();\n      board[y][x] = \"1\";\n      if (attackedSquare.getSunkState()) {\n        attackingPlayer.reduceNumShips();\n        return [\"sunk\", attackedSquare.getShipType()];\n      }\n      return \"hit\";\n    }\n    if (board[y][x] === \"0\") {\n      board[y][x] = \"X\";\n      return \"miss\";\n    }\n    // Player or AI tries to attack same spot twice\n    return \"invalid\";\n  };\n\n  const resetBoards = () => {\n    for (const board in boards) {\n      if (boards.hasOwnProperty(board)) {\n        boards[board] = createGameBoard();\n      }\n    }\n  };\n\n  return {\n    placeShip, recieveAttack, resetBoards,\n  };\n})();\n\nconst GUIController = (() => {\n  const markSquare = (square, isHit, opponentBoardName) => {\n    if (isHit === \"miss\") {\n      const missedMark = (0,_LoadPage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets_Images_missX_webp__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \"miss\");\n      const missSfx = document.querySelector(\".splashSfx\");\n      missSfx.play();\n      square.appendChild(missedMark);\n      // So AI doesn't have to go through all functions when it makes a wrong move\n      square.classList.add(\"clicked\");\n    } else if (isHit === \"hit\" || isHit[0] === \"sunk\") {\n      const explosion = (0,_LoadPage__WEBPACK_IMPORTED_MODULE_1__.createImage)(_Assets_Images_Explosion_png__WEBPACK_IMPORTED_MODULE_2__, \"explosion\");\n      const explosionSfx = document.querySelector(\".explosionSfx\");\n      explosionSfx.play();\n      // Shift explosion img for first square to avoid pushing down the explosion img\n      if (square.classList.contains(\"imgHolderHorizontal\")) {\n        explosion.style.transform = \"translate(0%, -138%)\";\n        square.appendChild(explosion);\n        // Same thing but now we avoid shifting it all the way down\n        // Since it will be pushed all the way below vertical div (pretty low)\n      } else if (square.classList.contains(\"imgHolderVertical\")) {\n        const imgContainer = square.querySelector(\".imgContainer\");\n        imgContainer.appendChild(explosion);\n        explosion.style.transform = \"translate(0%, -155%)\";\n        // Append exploson like normal\n      } else {\n        square.appendChild(explosion);\n      }\n\n      if (isHit[0] === \"sunk\") {\n        const board = document.querySelector(`.${opponentBoardName}`);\n        const imgContainer = board.querySelector(`.imgContainer.${isHit[1]}`);\n        imgContainer.style.background = \"rgba(59, 59, 59, 0.4)\";\n        if (opponentBoardName === \"AIBoard\") {\n          imgContainer.style.display = \"block\";\n          const shipImg = imgContainer.querySelector(\".shipImg\");\n          shipImg.style.opacity = 2;\n        }\n      }\n      square.classList.add(\"clicked\");\n    }\n  };\n  return { markSquare };\n})();\n\n(0,_LoadPage__WEBPACK_IMPORTED_MODULE_1__.createPage)();\n\nconst GameController = (() => {\n  const players = [player(\"player1\"), player(\"AI\")];\n  const quitGameBtn = document.querySelector(\".quitGameBtn\");\n\n  const playTurn = async (square, playerName, opponentBoardName) => {\n    const squareCoordinateStr = square.getAttribute(\"data-state\").match(/\\d+/g);\n    // Turn those strings into ints\n    const squareCoordinate = squareCoordinateStr.map((match) => parseInt(match, 10));\n    const AIBoardCover = document.querySelector(\".AIBoardCover\");\n\n    let opponent;\n    if (playerName === \"player1\") {\n      opponent = players[1];\n    } else {\n      opponent = players[0];\n    }\n    const opponentName = opponent.getName();\n    const isHit = GameBoard.recieveAttack(squareCoordinate, opponent, opponentBoardName);\n    if (isHit[0] === \"sunk\") {\n      const numShipsP = document.querySelector(`.${opponentName}NumShipsP`);\n      numShipsP.textContent = `Ships Remaining: ${opponent.getNumShips()}`;\n    }\n    AIBoardCover.style.display = \"block\";\n    quitGameBtn.style.border = \"2px solid grey\";\n    quitGameBtn.removeEventListener(\"click\", _LoadPage__WEBPACK_IMPORTED_MODULE_1__.quitGame);\n    await sleep(2000);\n    GUIController.markSquare(square, isHit, opponentBoardName);\n\n    if (opponent.getNumShips() === 0) {\n      const allAISquares = document.querySelectorAll(\".square.AI\");\n      allAISquares.forEach((AISquare) => {\n        AISquare.removeEventListener(\"click\", _LoadPage__WEBPACK_IMPORTED_MODULE_1__.startTurn);\n        AISquare.removeEventListener(\"mouseover\", _LoadPage__WEBPACK_IMPORTED_MODULE_1__.changeSquareColor);\n      });\n      (0,_LoadPage__WEBPACK_IMPORTED_MODULE_1__.displayGameOverModal)(opponentName);\n      resetGame();\n      return \"over\"; // Game over\n    }\n\n    if (opponentName === \"AI\") {\n      // Delay move to let sfxs of player attack finish playing\n      // Prevent player from clicking board while AI waits\n      await sleep(2000);\n      (0,_LoadPage__WEBPACK_IMPORTED_MODULE_1__.makeAIClickSquare)();\n      await sleep(3000);\n      quitGameBtn.addEventListener(\"click\", _LoadPage__WEBPACK_IMPORTED_MODULE_1__.quitGame);\n      quitGameBtn.style.border = \"2px solid white\";\n      AIBoardCover.style.display = \"none\";\n    }\n    return isHit;\n  };\n\n  const resetGame = () => {\n    players.forEach((player) => {\n      player.setNumShips();\n    });\n    GameBoard.resetBoards();\n  };\n  return { playTurn, resetGame };\n})();\n\n\n\n\n//# sourceURL=webpack://project-battleship/./src/index.js?");

/***/ }),

/***/ "./src/Assets/Fonts/OnePieceFont.ttf":
/*!*******************************************!*\
  !*** ./src/Assets/Fonts/OnePieceFont.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"951ce8e89b9138e6d37a.ttf\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Fonts/OnePieceFont.ttf?");

/***/ }),

/***/ "./src/Assets/Images/Akainu.png":
/*!**************************************!*\
  !*** ./src/Assets/Images/Akainu.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5a6d4acf8ba50fb70720.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/Akainu.png?");

/***/ }),

/***/ "./src/Assets/Images/Boa.png":
/*!***********************************!*\
  !*** ./src/Assets/Images/Boa.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"23625832b37d9c7e3230.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/Boa.png?");

/***/ }),

/***/ "./src/Assets/Images/Explosion.png":
/*!*****************************************!*\
  !*** ./src/Assets/Images/Explosion.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"293b1da3116658f50147.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/Explosion.png?");

/***/ }),

/***/ "./src/Assets/Images/GumGum.jpg":
/*!**************************************!*\
  !*** ./src/Assets/Images/GumGum.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"caa270496977ddba6464.jpg\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/GumGum.jpg?");

/***/ }),

/***/ "./src/Assets/Images/Lose.jpg":
/*!************************************!*\
  !*** ./src/Assets/Images/Lose.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"37c9bb5041fd9873d162.jpg\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/Lose.jpg?");

/***/ }),

/***/ "./src/Assets/Images/Luffy.png":
/*!*************************************!*\
  !*** ./src/Assets/Images/Luffy.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb8be4edb9c06a9873d8.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/Luffy.png?");

/***/ }),

/***/ "./src/Assets/Images/MarineEmblem.png":
/*!********************************************!*\
  !*** ./src/Assets/Images/MarineEmblem.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5b24c8f92d4073c7985f.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/MarineEmblem.png?");

/***/ }),

/***/ "./src/Assets/Images/NavyCarrier.png":
/*!*******************************************!*\
  !*** ./src/Assets/Images/NavyCarrier.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f53479bb993738047d90.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/NavyCarrier.png?");

/***/ }),

/***/ "./src/Assets/Images/NavyDestroyer.png":
/*!*********************************************!*\
  !*** ./src/Assets/Images/NavyDestroyer.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ff4c02835a4bd87d1282.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/NavyDestroyer.png?");

/***/ }),

/***/ "./src/Assets/Images/NavyShip.png":
/*!****************************************!*\
  !*** ./src/Assets/Images/NavyShip.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7f4d91af7bb478b46f5.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/NavyShip.png?");

/***/ }),

/***/ "./src/Assets/Images/Ocean.jpg":
/*!*************************************!*\
  !*** ./src/Assets/Images/Ocean.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"625d34292e74a942e62d.jpg\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/Ocean.jpg?");

/***/ }),

/***/ "./src/Assets/Images/One-Piece-Logo.png":
/*!**********************************************!*\
  !*** ./src/Assets/Images/One-Piece-Logo.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a46be8f511299f3d0f9a.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/One-Piece-Logo.png?");

/***/ }),

/***/ "./src/Assets/Images/Oro.png":
/*!***********************************!*\
  !*** ./src/Assets/Images/Oro.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bffc286c01747f25342f.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/Oro.png?");

/***/ }),

/***/ "./src/Assets/Images/Queen.png":
/*!*************************************!*\
  !*** ./src/Assets/Images/Queen.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"730fe4863de3f296b3b9.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/Queen.png?");

/***/ }),

/***/ "./src/Assets/Images/SHEmblem.png":
/*!****************************************!*\
  !*** ./src/Assets/Images/SHEmblem.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e51d369cef7d8469c72.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/SHEmblem.png?");

/***/ }),

/***/ "./src/Assets/Images/Submarine.png":
/*!*****************************************!*\
  !*** ./src/Assets/Images/Submarine.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8aed2cb1f4fd6923ea40.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/Submarine.png?");

/***/ }),

/***/ "./src/Assets/Images/Thousand_Sunny.png":
/*!**********************************************!*\
  !*** ./src/Assets/Images/Thousand_Sunny.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aac77fbdc0780ed6f13c.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/Thousand_Sunny.png?");

/***/ }),

/***/ "./src/Assets/Images/WantedBg.jpg":
/*!****************************************!*\
  !*** ./src/Assets/Images/WantedBg.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"060b14e4607ee01a75ac.jpg\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/WantedBg.jpg?");

/***/ }),

/***/ "./src/Assets/Images/Win.jpeg":
/*!************************************!*\
  !*** ./src/Assets/Images/Win.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e806c337eb8febe20275.jpeg\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/Win.jpeg?");

/***/ }),

/***/ "./src/Assets/Images/XLogo.png":
/*!*************************************!*\
  !*** ./src/Assets/Images/XLogo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"40d0fd0adc02da6005fd.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/XLogo.png?");

/***/ }),

/***/ "./src/Assets/Images/sound.png":
/*!*************************************!*\
  !*** ./src/Assets/Images/sound.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0fedfbe5b170e333afd2.png\";\n\n//# sourceURL=webpack://project-battleship/./src/Assets/Images/sound.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;