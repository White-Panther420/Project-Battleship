/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

eval("// eslint-disable-next-line max-len\n// eslint-disable-next-line import/no-absolute-path, import/no-unresolved, import/no-import-module-exports\n// import \"./Styles/style.css\";\n\nconst Battleship = (length) => {\n  let numTimesHit = 0;\n  let sunk = false;\n\n  const isSunk = () => {\n    sunk = true;\n  };\n  const hit = () => {\n    numTimesHit += 1;\n    if (numTimesHit === length) {\n      isSunk();\n    }\n  };\n\n  return (hit);\n};\n\nconst gameBoard = () => {\n  const createGameBoard = () => {\n    const board = [];\n    for (let i = 0; i < 10; i += 1) {\n      board[i] = [];\n      for (let j = 0; j < 10; j += 1) {\n        board[i][j] = \"0\";\n      }\n    }\n  };\n  const calcShipLength = (pointA, pointB) => {\n    const xLength = pointB[0] - pointA[0]; // X2 - X1\n    const yLength = pointB[1] - pointA[1]; // Y2 - Y1\n    const distance = Math.sqrt((xLength * xLength) + (yLength * yLength));\n    return distance;\n  };\n  const placeShip = (pointA, pointB) => {\n    const shipLength = calcShipLength(pointA, pointB);\n    const newShip = Battleship(shipLength);\n  };\n\n  return { calcShipLength };\n};\n\nmodule.exports = gameBoard;\n\n\n//# sourceURL=webpack://project-battleship/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;