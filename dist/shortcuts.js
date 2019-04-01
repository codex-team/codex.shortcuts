/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.1.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Shortcut"] = factory();
	else
		root["Shortcut"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/shortcuts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/shortcuts.js":
/*!**************************!*\
  !*** ./src/shortcuts.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * CodeX Shortcut module\n * Used to create shortcuts on element\n *\n * @copyright CodeX <team@codex.so>\n * @license MIT https://github.com/codex-team/dispatcher/LICENSE\n * @author @khaydarovm https://github.com/khaydarov\n * @version 1.0.0\n *\n * @example\n * new Shortcut({\n *   name : 'CMD+S',\n *   on : document.body,\n *   callback : function(event) {\n *       // handle CMD+S\n *   }\n * });\n */\n\n/**\n * @typedef {ShortcutConfig} ShortcutConfig\n * @property {String} name - shortcut name\n * @property {Element} on - element that passed on shortcut creation\n * @property {Function} callback - custom user function\n */\n\n/**\n * List of key codes\n */\nvar keyCodes = {\n  '0': 48,\n  '1': 49,\n  '2': 50,\n  '3': 51,\n  '4': 52,\n  '5': 53,\n  '6': 54,\n  '7': 55,\n  '8': 56,\n  '9': 57,\n  'A': 65,\n  'B': 66,\n  'C': 67,\n  'D': 68,\n  'E': 69,\n  'F': 70,\n  'G': 71,\n  'H': 72,\n  'I': 73,\n  'J': 74,\n  'K': 75,\n  'L': 76,\n  'M': 77,\n  'N': 78,\n  'O': 79,\n  'P': 80,\n  'Q': 81,\n  'R': 82,\n  'S': 83,\n  'T': 84,\n  'U': 85,\n  'V': 86,\n  'W': 87,\n  'X': 88,\n  'Y': 89,\n  'Z': 90,\n  'BACKSPACE': 8,\n  'ENTER': 13,\n  'ESCAPE': 27,\n  'LEFT': 37,\n  'UP': 38,\n  'RIGHT': 39,\n  'DOWN': 40,\n  'INSERT': 45,\n  'DELETE': 46\n};\nvar supportedCommands = {\n  'SHIFT': ['SHIFT'],\n  'CMD': ['CMD', 'CONTROL', 'COMMAND', 'WINDOWS', 'CTRL'],\n  'ALT': ['ALT', 'OPTION']\n}; //\n// /**\n//  * @class Shortcut\n//  * @classdesc Callback will be fired with two params:\n//  *   - event: standard keyDown param\n//  *   - target: element which registered on shortcut creation\n//  */\n// export default class Shortcut {\n//   /**\n//    * @constructor\n//    *\n//    * Create new shortcut\n//    * @param {ShortcutConfig} shortcut\n//    */\n//   constructor(shortcut) {\n//     this.commands = {};\n//     this.keys = {};\n//\n//     this.parseShortcutName(shortcut.name);\n//\n//     this.element = shortcut.on;\n//     this.callback = shortcut.callback;\n//\n//     this.executeShortcut = (event) => {\n//       this.execute(event);\n//     };\n//     this.element.addEventListener('keydown', this.executeShortcut, false);\n//   }\n//\n//   /**\n//    * Parses string to get shortcut commands in uppercase\n//    * @param {String} shortcut\n//    */\n//   parseShortcutName(shortcut) {\n//     shortcut = shortcut.split('+');\n//\n//     for (let key = 0; key < shortcut.length; key++) {\n//       shortcut[key] = shortcut[key].toUpperCase();\n//\n//       let isCommand = false;\n//\n//       for (let command in supportedCommands) {\n//         if (supportedCommands[command].includes(shortcut[key])) {\n//           this.commands[command] = true;\n//           isCommand = true;\n//           break;\n//         }\n//       }\n//\n//       if (!isCommand) {\n//         this.keys[shortcut[key]] = true;\n//       }\n//     }\n//   }\n//\n//   /**\n//    * Check all passed commands and keys before firing callback\n//    * @param event\n//    */\n//   execute(event) {\n//     let cmdKey = event.ctrlKey || event.metaKey,\n//       shiftKey = event.shiftKey,\n//       altKey = event.altKey,\n//       passed = {\n//         'CMD': cmdKey,\n//         'SHIFT': shiftKey,\n//         'ALT': altKey\n//       };\n//\n//     let command,\n//       allCommandsPassed = true;\n//\n//     for (command in this.commands) {\n//       allCommandsPassed = allCommandsPassed && passed[command];\n//     }\n//\n//     let key,\n//       allKeysPassed = true;\n//\n//     for (key in this.keys) {\n//       allKeysPassed = allKeysPassed && (event.keyCode === keyCodes[key]);\n//     }\n//\n//     if (allCommandsPassed && allKeysPassed) {\n//       this.callback(event);\n//     }\n//   }\n//\n//   /**\n//    * Destroy shortcut: remove listener from element\n//    */\n//   remove() {\n//     this.element.removeEventListener('keydown', this.executeShortcut);\n//   }\n// }\n\n//# sourceURL=webpack://Shortcut/./src/shortcuts.js?");

/***/ })

/******/ })["default"];
});