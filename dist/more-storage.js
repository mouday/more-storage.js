(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["moreStorage"] = factory();
	else
		root["moreStorage"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 468:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var MoreStorage = (function () {
    function MoreStorage() {
    }
    Object.defineProperty(MoreStorage.prototype, "length", {
        get: function () {
            return localStorage.length;
        },
        enumerable: true,
        configurable: true
    });
    MoreStorage.clear = function () {
        localStorage.clear();
    };
    MoreStorage.getItem = function (key) {
        var value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
        else {
            return value;
        }
    };
    MoreStorage.key = function (index) {
        return localStorage.key(index);
    };
    MoreStorage.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    MoreStorage.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    return MoreStorage;
}());
exports.MoreStorage = MoreStorage;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var more_storage_1 = __webpack_require__(468);
exports["default"] = more_storage_1.MoreStorage;

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});