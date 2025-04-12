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

/***/ "./src/backend/gameboard.js":
/*!**********************************!*\
  !*** ./src/backend/gameboard.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ship = __webpack_require__(/*! ./ship */ \"./src/backend/ship.js\")\n\nfunction gameboard(length){\n    let arr =[]\nfor (let i=0; i< length; i++){\n    arr[i] = []\n    for (let j=0; j<length; j++){\n        arr[i][j]=0\n    }\n}\nfunction place(ship){\n    let arr = getBoard()\n    let startArr = ship.getStartLocation()\n    let endArr = ship.getEndLocation()\n    console.log(startArr)\n    console.log(endArr)\n    for (let i=startArr[1];i<=endArr[1];i++){\n        for(let j=startArr[0];j<=endArr[0];j++){\n            arr[i][j] = ship.get_Name()\n            //where i is x starting at top\n            //where j is y starting at left\n            //shit no i is y, because it's row and j is actually x so we just swap them\n        }\n    }\n    console.log(arr)\n\n}\nfunction recieveAttack(cord, ships){\n    let board = getBoard()\n    let arr_ships = ships\n    let [x,y] = cord\n\n    if(board[y][x] != \"XXX\"&&board[y][x] != \"x\"&&board[y][x] != \"0\"){\n        arr_ships.forEach((ship)=>{\n            if(board[y][x]===ship.get_Name()){\n                board[y][x] = \"XXX\"\n                ship.hit()\n            }\n        })\n    } else {\n        board[y][x] = \"x\"\n        console.log('ship missed')\n        //this returns the cord, should we just return a cord? or add it to a list of missed\n        //or this just upadtes board in the arr\n    }\n    // console.log(board)\n}\nfunction sunk(){\n    let arr = [\"x\",0,\"XXX\"]\n    let board = getBoard()\n    console.log(board)\n    let board_len = board.length\n    for(let i=0; i< board_len;i++){\n        for(let j=0; j< board_len;j++){\n            let value = board[i][j]\n            if (arr.includes(value) === false){\n                return false\n            }\n        }\n    }\n    return true\n}\n//getters\nfunction getBoard(){\n    return arr\n}\nfunction getLength(){\n    return length\n}\nreturn {getBoard,place,recieveAttack,getLength,sunk}\n}\n\n\nmodule.exports = gameboard\n\n\n//# sourceURL=webpack:///./src/backend/gameboard.js?");

/***/ }),

/***/ "./src/backend/ship.js":
/*!*****************************!*\
  !*** ./src/backend/ship.js ***!
  \*****************************/
/***/ ((module) => {

eval(" function ship(len,x,y, horizontal=true,name=\"null\"){\n    let length = len\n    let times_hit =0\n    let sunk=false\n    let start_location = [x,y]\n    let end_location = find_end_location()\n    function find_end_location(){\n        if(horizontal === true){\n            return [x + length-1, y]\n        } else {\n            return [x , y+length-1]\n        }\n    }\n\n    //getter functions\n    function hit() {\n        times_hit++;\n    }\n    function isSunk() {\n        return times_hit >= length;\n    }\n    function get_times_hit() {\n        return times_hit;\n    }\n    function getStartLocation() {\n        return start_location;\n    }\n    function getEndLocation() {\n        return end_location;\n    }\n    function get_Name(){\n        return name\n    }\n    return {length,get_Name,get_times_hit,isSunk,getStartLocation,getEndLocation,hit,horizontal,x,y}\n}\nmodule.exports = ship\n// let boat = ship(5,3,2)\n// console.log(boat.end_location)\n\n//# sourceURL=webpack:///./src/backend/ship.js?");

/***/ }),

/***/ "./src/frontend/operator.js":
/*!**********************************!*\
  !*** ./src/frontend/operator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _backend_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend/gameboard.js */ \"./src/backend/gameboard.js\");\n/* harmony import */ var _backend_gameboard_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_backend_gameboard_js__WEBPACK_IMPORTED_MODULE_0__);\nfunction addElement(parent,elem,text=null,clas,id=null){\n    const parent_elem = document.querySelector(parent.toString())\n    const element = document.createElement(elem.toString())\n    element.classList.add(clas.toString())\n    if(id != null){\n        element.id = id.toString()\n    }\n    if(text!=null)\n    {\n        element.textContent = text\n    }\n    parent_elem.appendChild(element)\n\n\n}\n// const board = require(\"../backend/gameboard\")\n\nlet computer_board = (0,_backend_gameboard_js__WEBPACK_IMPORTED_MODULE_0__.board)(5)\nconsole.log(computer_board.getLength())\nfor (let i=0; i< computer_board.getLength(); i++){\n    \n}\naddElement(\"#computer_grid\", \"box\",3,\"player\")\naddElement(\"#computer_grid\", \"box\",4,\"player\")\naddElement(\"#computer_grid\", \"box\",5,\"player\")\naddElement(\"#computer_grid\", \"box\",6,\"player\")\naddElement(\"#computer_grid\", \"box\",7,\"player\")\naddElement(\"#computer_grid\", \"box\",8,\"player\")\naddElement(\"#computer_grid\", \"box\",9,\"player\")\naddElement(\"#computer_grid\", \"box\",10,\"player\")\n\n\n//remember this does it in reverse\n\n//# sourceURL=webpack:///./src/frontend/operator.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/frontend/operator.js");
/******/ 	
/******/ })()
;