(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./web-src/animations/boosterToMove.js":
/*!*********************************************!*\
  !*** ./web-src/animations/boosterToMove.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/Animation */ \"./web-src/animations/private/Animation.js\");\n/* harmony import */ var _frameRenderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameRenderers */ \"./web-src/frameRenderers/index.js\");\n\n\n\nconst boosterToMove = new _private_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](({\n  setFrameId,\n  done,\n\n  previouslyAvailableBoosters,\n  availableMoves,\n  ownBooster,\n  opponentBooster,\n  ownPoints,\n  opponentPoints,\n}) => {\n  let last = Date.now();\n  let t = 0;\n  const finishTime = 2000;\n\n  // store.repaint = () => {\n  //   renderers.nothingToCharacter({\n  //     availableCharacters,\n  //     completionFactor: 1,\n  //   });\n  // };\n\n  const render = () => {\n    const now = Date.now();\n    t += now - last;\n    last = now;\n\n    if (t > finishTime) {\n      t = finishTime;\n    }\n\n    _frameRenderers__WEBPACK_IMPORTED_MODULE_1__[\"boosterToMove\"]({\n      previouslyAvailableBoosters,\n      availableMoves,\n      ownBooster,\n      opponentBooster,\n      ownPoints,\n      opponentPoints,\n      completionFactor: t / finishTime,\n    });\n\n    if (t < finishTime) {\n      setFrameId(requestAnimationFrame(render));\n    } else {\n      done();\n    }\n  };\n\n  render();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (boosterToMove);\n\n\n//# sourceURL=webpack:///./web-src/animations/boosterToMove.js?");

/***/ }),

/***/ "./web-src/animations/characterToBooster.js":
/*!**************************************************!*\
  !*** ./web-src/animations/characterToBooster.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/Animation */ \"./web-src/animations/private/Animation.js\");\n/* harmony import */ var _frameRenderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameRenderers */ \"./web-src/frameRenderers/index.js\");\n\n\n\nconst characterToBooster = new _private_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](({\n  setFrameId,\n  done,\n\n  previouslyAvailableCharacters,\n  availableBoosters,\n  ownCharacter,\n  opponentCharacter,\n  whoGetsTheHeadstart,\n}) => {\n  let last = Date.now();\n  let t = 0;\n  const finishTime = 2000;\n\n  // store.repaint = () => {\n  //   renderers.nothingToCharacter({\n  //     availableCharacters,\n  //     completionFactor: 1,\n  //   });\n  // };\n\n  const render = () => {\n    const now = Date.now();\n    t += now - last;\n    last = now;\n\n    if (t > finishTime) {\n      t = finishTime;\n    }\n\n    _frameRenderers__WEBPACK_IMPORTED_MODULE_1__[\"characterToBooster\"]({\n      previouslyAvailableCharacters,\n      availableBoosters,\n      ownCharacter,\n      opponentCharacter,\n      whoGetsTheHeadstart,\n      completionFactor: t / finishTime,\n    });\n\n    if (t < finishTime) {\n      setFrameId(requestAnimationFrame(render));\n    } else {\n      done();\n    }\n  };\n\n  render();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (characterToBooster);\n\n\n//# sourceURL=webpack:///./web-src/animations/characterToBooster.js?");

/***/ }),

/***/ "./web-src/animations/characterToCharacter.js":
/*!****************************************************!*\
  !*** ./web-src/animations/characterToCharacter.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/Animation */ \"./web-src/animations/private/Animation.js\");\n/* harmony import */ var _frameRenderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameRenderers */ \"./web-src/frameRenderers/index.js\");\n\n\n\nconst characterToCharacter = new _private_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](({\n  setFrameId,\n  done,\n\n  previouslyAvailableCharacters,\n  availableCharacters,\n  bothCharacter,\n}) => {\n  let last = Date.now();\n  let t = 0;\n  const finishTime = 2000;\n\n  // store.repaint = () => {\n  //   renderers.nothingToCharacter({\n  //     availableCharacters,\n  //     completionFactor: 1,\n  //   });\n  // };\n\n  const render = () => {\n    const now = Date.now();\n    t += now - last;\n    last = now;\n\n    if (t > finishTime) {\n      t = finishTime;\n    }\n\n    _frameRenderers__WEBPACK_IMPORTED_MODULE_1__[\"characterToCharacter\"]({\n      previouslyAvailableCharacters,\n      availableCharacters,\n      bothCharacter,\n      completionFactor: t / finishTime,\n    });\n\n    if (t < finishTime) {\n      setFrameId(requestAnimationFrame(render));\n    } else {\n      done();\n    }\n  };\n\n  render();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (characterToCharacter);\n\n\n//# sourceURL=webpack:///./web-src/animations/characterToCharacter.js?");

/***/ }),

/***/ "./web-src/animations/finalMoveClash.js":
/*!**********************************************!*\
  !*** ./web-src/animations/finalMoveClash.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/Animation */ \"./web-src/animations/private/Animation.js\");\n/* harmony import */ var _frameRenderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameRenderers */ \"./web-src/frameRenderers/index.js\");\n\n\n\nconst finalMoveClash = new _private_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](({\n  setFrameId,\n  done,\n\n  previouslyAvailableMoves,\n  ownMove,\n  opponentMove,\n  whoGetsThePoint,\n  ownPoints,\n  opponentPoints,\n}) => {\n  let last = Date.now();\n  let t = 0;\n  const finishTime = 2000;\n\n  // store.repaint = () => {\n  //   renderers.nothingToCharacter({\n  //     availableCharacters,\n  //     completionFactor: 1,\n  //   });\n  // };\n\n  const render = () => {\n    const now = Date.now();\n    t += now - last;\n    last = now;\n\n    if (t > finishTime) {\n      t = finishTime;\n    }\n\n    _frameRenderers__WEBPACK_IMPORTED_MODULE_1__[\"finalMoveClash\"]({\n      previouslyAvailableMoves,\n      ownMove,\n      opponentMove,\n      whoGetsThePoint,\n      ownPoints,\n      opponentPoints,\n      completionFactor: t / finishTime,\n    });\n\n    if (t < finishTime) {\n      setFrameId(requestAnimationFrame(render));\n    } else {\n      done();\n    }\n  };\n\n  render();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (finalMoveClash);\n\n\n//# sourceURL=webpack:///./web-src/animations/finalMoveClash.js?");

/***/ }),

/***/ "./web-src/animations/index.js":
/*!*************************************!*\
  !*** ./web-src/animations/index.js ***!
  \*************************************/
/*! exports provided: loading, waitingForNetwork, nothingToCharacter, ownCharacterSelection, characterToCharacter, characterToBooster, ownBoosterSelection, boosterToMove, ownMoveSelection, moveClash, finalMoveClash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading */ \"./web-src/animations/loading.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loading\", function() { return _loading__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _waitingForNetwork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waitingForNetwork */ \"./web-src/animations/waitingForNetwork.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"waitingForNetwork\", function() { return _waitingForNetwork__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _nothingToCharacter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nothingToCharacter */ \"./web-src/animations/nothingToCharacter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nothingToCharacter\", function() { return _nothingToCharacter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _ownCharacterSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ownCharacterSelection */ \"./web-src/animations/ownCharacterSelection.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ownCharacterSelection\", function() { return _ownCharacterSelection__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _characterToCharacter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characterToCharacter */ \"./web-src/animations/characterToCharacter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"characterToCharacter\", function() { return _characterToCharacter__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _characterToBooster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characterToBooster */ \"./web-src/animations/characterToBooster.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"characterToBooster\", function() { return _characterToBooster__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _ownBoosterSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ownBoosterSelection */ \"./web-src/animations/ownBoosterSelection.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ownBoosterSelection\", function() { return _ownBoosterSelection__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _boosterToMove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boosterToMove */ \"./web-src/animations/boosterToMove.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"boosterToMove\", function() { return _boosterToMove__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _ownMoveSelection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ownMoveSelection */ \"./web-src/animations/ownMoveSelection.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ownMoveSelection\", function() { return _ownMoveSelection__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _moveClash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./moveClash */ \"./web-src/animations/moveClash.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"moveClash\", function() { return _moveClash__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _finalMoveClash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finalMoveClash */ \"./web-src/animations/finalMoveClash.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"finalMoveClash\", function() { return _finalMoveClash__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./web-src/animations/index.js?");

/***/ }),

/***/ "./web-src/animations/loading.js":
/*!***************************************!*\
  !*** ./web-src/animations/loading.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/Animation */ \"./web-src/animations/private/Animation.js\");\n/* harmony import */ var _frameRenderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameRenderers */ \"./web-src/frameRenderers/index.js\");\n\n\n\nconst TAU = 2 * Math.PI;\nconst SPIN_SPEED = 0.01;\n\nconst loading = new _private_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](({ setFrameId, }) => {\n  let then = Date.now();\n  let time = 0;\n\n  const render = () => {\n    const now = Date.now();\n    time += now - then;\n    then = now;\n\n    const theta = (time * SPIN_SPEED) % TAU;\n    const completionFactor = theta / TAU;\n\n    _frameRenderers__WEBPACK_IMPORTED_MODULE_1__[\"loading\"]({\n      completionFactor,\n    });\n\n    setFrameId(requestAnimationFrame(render));\n  };\n\n  render();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loading);\n\n\n//# sourceURL=webpack:///./web-src/animations/loading.js?");

/***/ }),

/***/ "./web-src/animations/moveClash.js":
/*!*****************************************!*\
  !*** ./web-src/animations/moveClash.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/Animation */ \"./web-src/animations/private/Animation.js\");\n/* harmony import */ var _frameRenderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameRenderers */ \"./web-src/frameRenderers/index.js\");\n\n\n\nconst moveClash = new _private_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](({\n  setFrameId,\n  done,\n\n  previouslyAvailableMoves,\n  availableMoves,\n  ownMove,\n  opponentMove,\n  whoGetsThePoint,\n  ownPoints,\n  opponentPoints,\n}) => {\n  let last = Date.now();\n  let t = 0;\n  const finishTime = 2000;\n\n  // store.repaint = () => {\n  //   renderers.nothingToCharacter({\n  //     availableCharacters,\n  //     completionFactor: 1,\n  //   });\n  // };\n\n  const render = () => {\n    const now = Date.now();\n    t += now - last;\n    last = now;\n\n    if (t > finishTime) {\n      t = finishTime;\n    }\n\n    _frameRenderers__WEBPACK_IMPORTED_MODULE_1__[\"moveClash\"]({\n      previouslyAvailableMoves,\n      availableMoves,\n      ownMove,\n      opponentMove,\n      whoGetsThePoint,\n      ownPoints,\n      opponentPoints,\n      completionFactor: t / finishTime,\n    });\n\n    if (t < finishTime) {\n      setFrameId(requestAnimationFrame(render));\n    } else {\n      done();\n    }\n  };\n\n  render();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (moveClash);\n\n\n//# sourceURL=webpack:///./web-src/animations/moveClash.js?");

/***/ }),

/***/ "./web-src/animations/nothingToCharacter.js":
/*!**************************************************!*\
  !*** ./web-src/animations/nothingToCharacter.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/Animation */ \"./web-src/animations/private/Animation.js\");\n/* harmony import */ var _frameRenderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameRenderers */ \"./web-src/frameRenderers/index.js\");\n\n\n\nconst nothingToCharacter = new _private_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](({ setFrameId, done, }) => {\n  let last = Date.now();\n  let t = 0;\n  const finishTime = 500;\n\n  //const availableCharacters = JSON.parse(store.currentOutput.question()).availableCharacters;\n  const availableCharacters = 'Ninja Zombie Samurai Clown'.split(' ');\n\n  // store.repaint = () => {\n  //   renderers.nothingToCharacter({\n  //     availableCharacters,\n  //     completionFactor: 1,\n  //   });\n  // };\n\n  const render = () => {\n    const now = Date.now();\n    t += now - last;\n    last = now;\n\n    if (t > finishTime) {\n      t = finishTime;\n    }\n\n    _frameRenderers__WEBPACK_IMPORTED_MODULE_1__[\"nothingToCharacter\"]({\n      availableCharacters,\n      completionFactor: t / finishTime,\n    });\n\n    if (t < finishTime) {\n      setFrameId(requestAnimationFrame(render));\n    } else {\n      done();\n    }\n  };\n\n  render();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nothingToCharacter);\n\n\n//# sourceURL=webpack:///./web-src/animations/nothingToCharacter.js?");

/***/ }),

/***/ "./web-src/animations/ownBoosterSelection.js":
/*!***************************************************!*\
  !*** ./web-src/animations/ownBoosterSelection.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/Animation */ \"./web-src/animations/private/Animation.js\");\n/* harmony import */ var _frameRenderers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameRenderers/index */ \"./web-src/frameRenderers/index.js\");\n\n\n\nconst ownBoosterSelection = new _private_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](({ setFrameId, previouslyAvailableBoosters, ownBooster, }) => {\n  let last = Date.now();\n  let t = 0;\n  const finishTime = 500;\n\n  /*store.repaint = () => {\n    renderers.ownBoosterSelection({\n      previouslyAvailableBoosters,\n      ownBooster,\n      completionFactor: 1,\n    });\n  };*/\n\n  const render = () => {\n    const now = Date.now();\n    t += now - last;\n    last = now;\n\n    _frameRenderers_index__WEBPACK_IMPORTED_MODULE_1__[\"ownBoosterSelection\"]({\n      previouslyAvailableBoosters,\n      ownBooster,\n      completionFactor: t / finishTime,\n    });\n\n    setFrameId(requestAnimationFrame(render));\n  };\n\n  render();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ownBoosterSelection);\n\n\n//# sourceURL=webpack:///./web-src/animations/ownBoosterSelection.js?");

/***/ }),

/***/ "./web-src/animations/ownCharacterSelection.js":
/*!*****************************************************!*\
  !*** ./web-src/animations/ownCharacterSelection.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/Animation */ \"./web-src/animations/private/Animation.js\");\n/* harmony import */ var _frameRenderers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameRenderers/index */ \"./web-src/frameRenderers/index.js\");\n\n\n\nconst ownCharacterSelection = new _private_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](({ setFrameId, previouslyAvailableCharacters, ownCharacter, }) => {\n  let last = Date.now();\n  let t = 0;\n  const finishTime = 500;\n\n  /*store.repaint = () => {\n    renderers.ownCharacterSelection({\n      previouslyAvailableCharacters,\n      ownCharacter,\n      completionFactor: 1,\n    });\n  };*/\n\n  const render = () => {\n    const now = Date.now();\n    t += now - last;\n    last = now;\n\n    _frameRenderers_index__WEBPACK_IMPORTED_MODULE_1__[\"ownCharacterSelection\"]({\n      previouslyAvailableCharacters,\n      ownCharacter,\n      completionFactor: t / finishTime,\n    });\n\n    setFrameId(requestAnimationFrame(render));\n  };\n\n  render();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ownCharacterSelection);\n\n\n//# sourceURL=webpack:///./web-src/animations/ownCharacterSelection.js?");

/***/ }),

/***/ "./web-src/animations/ownMoveSelection.js":
/*!************************************************!*\
  !*** ./web-src/animations/ownMoveSelection.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/Animation */ \"./web-src/animations/private/Animation.js\");\n/* harmony import */ var _frameRenderers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameRenderers/index */ \"./web-src/frameRenderers/index.js\");\n\n\n\nconst ownMoveSelection = new _private_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](({ setFrameId, previouslyAvailableMoves, ownMove, ownPoints, opponentPoints, }) => {\n  let last = Date.now();\n  let t = 0;\n  const finishTime = 500;\n\n  /*store.repaint = () => {\n    renderers.ownMoveSelection({\n      previouslyAvailableMoves,\n      ownMove,\n      completionFactor: 1,\n    });\n  };*/\n\n  const render = () => {\n    const now = Date.now();\n    t += now - last;\n    last = now;\n\n    _frameRenderers_index__WEBPACK_IMPORTED_MODULE_1__[\"ownMoveSelection\"]({\n      previouslyAvailableMoves,\n      ownMove,\n      ownPoints,\n      opponentPoints,\n      completionFactor: t / finishTime,\n    });\n\n    setFrameId(requestAnimationFrame(render));\n  };\n\n  render();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ownMoveSelection);\n\n\n//# sourceURL=webpack:///./web-src/animations/ownMoveSelection.js?");

/***/ }),

/***/ "./web-src/animations/private/Animation.js":
/*!*************************************************!*\
  !*** ./web-src/animations/private/Animation.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Animation {\n  constructor(start) {\n    this.frameId_ = null;\n    this.start_ = start;\n  }\n\n  start(props) {\n    return new Promise((resolve) => {\n      this.start_({\n        ...props,\n        setFrameId: (id) => {\n          this.frameId_ = id;\n        },\n        done: resolve,\n      });\n    });\n  }\n\n  stop() {\n    if (this.frameId_ !== null) {\n      cancelAnimationFrame(this.frameId_);\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Animation);\n\n\n//# sourceURL=webpack:///./web-src/animations/private/Animation.js?");

/***/ }),

/***/ "./web-src/animations/waitingForNetwork.js":
/*!*************************************************!*\
  !*** ./web-src/animations/waitingForNetwork.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _private_Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/Animation */ \"./web-src/animations/private/Animation.js\");\n/* harmony import */ var _frameRenderers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frameRenderers */ \"./web-src/frameRenderers/index.js\");\n\n\n\nconst WIFI_PERIOD = 1500;\n\nconst waitingForNetwork = new _private_Animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](({ setFrameId, }) => {\n  let then = Date.now();\n  let time = 0;\n\n  const render = () => {\n    const now = Date.now();\n    time += now - then;\n    then = now;\n\n    const completionFactor = (time % WIFI_PERIOD) / WIFI_PERIOD;\n    \n    _frameRenderers__WEBPACK_IMPORTED_MODULE_1__[\"waitingForNetwork\"]({\n      completionFactor,\n    });\n\n    setFrameId(requestAnimationFrame(render));\n  };\n\n  render();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (waitingForNetwork);\n\n\n//# sourceURL=webpack:///./web-src/animations/waitingForNetwork.js?");

/***/ }),

/***/ "./web-src/buttons.js":
/*!****************************!*\
  !*** ./web-src/buttons.js ***!
  \****************************/
/*! exports provided: playButtonCircle, playButtonTriangle, isPlayButtonClicked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playButtonCircle\", function() { return playButtonCircle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playButtonTriangle\", function() { return playButtonTriangle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPlayButtonClicked\", function() { return isPlayButtonClicked; });\nconst playButtonCircle = {\n  radius: 100,\n  color: '#08B',\n};\n\nconst playButtonTriangle = {\n  altitude: 100,\n  color: '#EEE',\n};\n\n// Calculate triangle vertices\n{\n  const r = playButtonTriangle.altitude * 2/3;\n  const A = Math.PI * 2/3;\n  const B = Math.PI * 4/3;\n\n  playButtonTriangle.vertices = [\n    [900 + r, 500],\n    [900 + Math.cos(A) * r, 500 + Math.sin(A) * r],\n    [900 + Math.cos(B) * r, 500 + Math.sin(B) * r]\n  ];\n}\n\nconst isPlayButtonClicked = (x, y) => {\n  const [cx, cy, cr] = [900, 500, playButtonCircle.radius];\n\n  const dx = cx - x;\n  const dy = cy - y;\n\n  return dx*dx + dy*dy <= cr*cr;\n};\n\n\n\n\n//# sourceURL=webpack:///./web-src/buttons.js?");

/***/ }),

/***/ "./web-src/canvas.js":
/*!***************************!*\
  !*** ./web-src/canvas.js ***!
  \***************************/
/*! exports provided: canvas, ctx, getDimensions, clientToLocalCoords, correctCanvasDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ctx\", function() { return ctx; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDimensions\", function() { return getDimensions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clientToLocalCoords\", function() { return clientToLocalCoords; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"correctCanvasDimensions\", function() { return correctCanvasDimensions; });\nconst canvas = document.getElementById('nzsc-canvas');\n\nconst ctx = canvas.getContext('2d');\n\nconst DIMENSIONS = {\n  width: 1800,\n  height: 1000,\n};\n\nconst sizeCanvas = (canvas, dimensions) => {\n  const wFactor = window.innerWidth / dimensions.width;\n  const hFactor = window.innerHeight / dimensions.height;\n  const scaleFactor = Math.min(wFactor, hFactor);\n  const cssWidth = dimensions.width * scaleFactor;\n  const cssHeight = dimensions.height * scaleFactor;\n\n  canvas.width = dimensions.width;\n  canvas.height = dimensions.height;\n\n  canvas.style.width = cssWidth + 'px';\n  canvas.style.height = cssHeight + 'px';\n\n  canvas.style.position = 'fixed';\n  canvas.style.left = (window.innerWidth - cssWidth) / 2 + 'px';\n  canvas.style.top = (window.innerHeight - cssHeight) / 2 + 'px';\n};\n\nconst correctCanvasDimensions = () => {\n  sizeCanvas(canvas, DIMENSIONS);\n};\n\ncorrectCanvasDimensions();\n\nconst getDimensions = () => {\n  return {\n    width: canvas.width,\n    height: canvas.height,\n  };\n};\n\nconst clientToLocalCoords = (x, y) => {\n  const br = canvas.getBoundingClientRect();\n\n  x -= br.left;\n  y -= br.top;\n\n  const wFactor = window.innerWidth / canvas.width;\n  const hFactor = window.innerHeight / canvas.height;\n  const scaleFactor = Math.min(wFactor, hFactor);\n\n  x /= scaleFactor;\n  y /= scaleFactor;\n\n  return [x, y];\n};\n\n\n\n\n//# sourceURL=webpack:///./web-src/canvas.js?");

/***/ }),

/***/ "./web-src/circle.js":
/*!***************************!*\
  !*** ./web-src/circle.js ***!
  \***************************/
/*! exports provided: nthCircle, getCircleIndexAt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nthCircle\", function() { return nthCircle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCircleIndexAt\", function() { return getCircleIndexAt; });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./web-src/canvas.js\");\n\n\nconst CIRCLE = {\n  radius: 210,\n  margin: 100,\n};\n\n// Returns an array representing a circle: [x, y, r]\nconst nthCircle = (n) => {\n  const dimensions = Object(_canvas__WEBPACK_IMPORTED_MODULE_0__[\"getDimensions\"])();\n  const w = dimensions.width;\n  const h = dimensions.height;\n  const r = CIRCLE.radius;\n  const m = CIRCLE.margin;\n\n  // Top horizontal margin\n  const thm = (w - 6*r - 2*m) / 2;\n  // Bottom horizontal margin\n  const bhm = (w - 4*r - m) / 2;\n  // Vertical margin\n  const vm = (h - 4*r -m) / 2;\n\n  const circleCoords = [\n    [thm + r, vm + r],\n    [thm + 3*r + m, vm + r],\n    [thm + 5*r + 2*m, vm + r],\n    [bhm + r, vm + 3*r + m],\n    [bhm + 3*r + m, vm + 3*r + m]\n  ];\n\n  if (!(n in circleCoords)) {\n    throw new RangeError('nthCircle() expects 0 <= n <= 4');\n  }\n\n  return circleCoords[n].concat([r]);\n};\n\nconst getCircleIndexAt = (x, y) => {\n  const dimensions = Object(_canvas__WEBPACK_IMPORTED_MODULE_0__[\"getDimensions\"])();\n  const circles = [0, 1, 2, 3, 4].map(i => nthCircle(i, dimensions.width, dimensions.height));\n\n  for (const i in circles) {\n    const [cx, cy, cr] = circles[i];\n\n    const dx = cx - x;\n    const dy = cy - y;\n\n    if (dx*dx + dy*dy <= cr*cr) {\n      return i;\n    }\n  }\n\n  return -1;\n};\n\n\n\n\n//# sourceURL=webpack:///./web-src/circle.js?");

/***/ }),

/***/ "./web-src/clickListeners/boosterListener.js":
/*!***************************************************!*\
  !*** ./web-src/clickListeners/boosterListener.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rect */ \"./web-src/rect.js\");\n/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/index */ \"./web-src/animations/index.js\");\n/* harmony import */ var _clownkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clownkit */ \"./web-src/clownkit.js\");\n\n\n\n\n\nconst boosterListener = (event, store, ownQuestion) => {\n  const [x, y] = Object(_canvas__WEBPACK_IMPORTED_MODULE_0__[\"clientToLocalCoords\"])(event.clientX, event.clientY);\n\n  const rectIndex = Object(_rect__WEBPACK_IMPORTED_MODULE_1__[\"getRectIndexAt\"])(x, y);\n\n  const availableBoosters = ownQuestion.available_boosters;\n\n  if (!(rectIndex in availableBoosters)) {\n    return;\n  }\n\n  const selectedBooster = availableBoosters[rectIndex];\n\n  store.beforeOwnChoicePhase = JSON.parse(store.game.get_phase());\n  store.beforeOwnChoiceQuestion = JSON.parse(store.game.get_question());\n\n  store.game.process_choice(store.aOrB, selectedBooster);\n  _clownkit__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deposit(store.roomName, store.aOrB, selectedBooster);\n\n  _animations_index__WEBPACK_IMPORTED_MODULE_2__[\"ownBoosterSelection\"].start({\n    previouslyAvailableBoosters: availableBoosters,\n    ownBooster: selectedBooster,\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (boosterListener);\n\n\n//# sourceURL=webpack:///./web-src/clickListeners/boosterListener.js?");

/***/ }),

/***/ "./web-src/clickListeners/characterListener.js":
/*!*****************************************************!*\
  !*** ./web-src/clickListeners/characterListener.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rect */ \"./web-src/rect.js\");\n/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/index */ \"./web-src/animations/index.js\");\n/* harmony import */ var _clownkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clownkit */ \"./web-src/clownkit.js\");\n\n\n\n\n\nconst characterListener = (event, store, ownQuestion) => {\n  const [x, y] = Object(_canvas__WEBPACK_IMPORTED_MODULE_0__[\"clientToLocalCoords\"])(event.clientX, event.clientY);\n\n  const rectIndex = Object(_rect__WEBPACK_IMPORTED_MODULE_1__[\"getRectIndexAt\"])(x, y);\n\n  const availableCharacters = ownQuestion.available_characters;\n\n  if (!(rectIndex in availableCharacters)) {\n    return;\n  }\n\n  const selectedCharacter = availableCharacters[rectIndex];\n\n  store.beforeOwnChoicePhase = JSON.parse(store.game.get_phase());\n  store.beforeOwnChoiceQuestion = JSON.parse(store.game.get_question());\n  \n  store.game.process_choice(store.aOrB, selectedCharacter);\n  _clownkit__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deposit(store.roomName, store.aOrB, selectedCharacter);\n\n  _animations_index__WEBPACK_IMPORTED_MODULE_2__[\"ownCharacterSelection\"].start({\n    previouslyAvailableCharacters: availableCharacters,\n    ownCharacter: selectedCharacter,\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (characterListener);\n\n\n//# sourceURL=webpack:///./web-src/clickListeners/characterListener.js?");

/***/ }),

/***/ "./web-src/clickListeners/createClickListener.js":
/*!*******************************************************!*\
  !*** ./web-src/clickListeners/createClickListener.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _characterListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characterListener */ \"./web-src/clickListeners/characterListener.js\");\n/* harmony import */ var _boosterListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boosterListener */ \"./web-src/clickListeners/boosterListener.js\");\n/* harmony import */ var _moveListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moveListener */ \"./web-src/clickListeners/moveListener.js\");\n/* harmony import */ var _playAgainListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playAgainListener */ \"./web-src/clickListeners/playAgainListener.js\");\n\n\n\n\n\nconst createClickListener = (store) => (event) => {\n  if (store.aOrB === null) {\n    return;\n  }\n\n  const phase = JSON.parse(store.game.get_phase());\n  const questions = JSON.parse(store.game.get_question());\n  const ownQuestion = store.aOrB === 'A'\n    ? questions.a\n    : questions.b;\n\n  switch (ownQuestion.question) {\n    case 'CHOOSE_CHARACTER':\n      Object(_characterListener__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(event, store, ownQuestion);\n      break;\n    case 'CHOOSE_BOOSTER':\n      Object(_boosterListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event, store, ownQuestion);\n      break;\n    case 'CHOOSE_MOVE':\n      Object(_moveListener__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event, store, ownQuestion);\n      break;\n    case null:\n      if (phase.phase === 'GAME_OVER') {\n        Object(_playAgainListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(event, store, ownQuestion);\n      }\n      break;\n    default:\n      console.log(ownQuestion);\n      throw new TypeError('Unexpected question type: ' + ownQuestion);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createClickListener);\n\n\n//# sourceURL=webpack:///./web-src/clickListeners/createClickListener.js?");

/***/ }),

/***/ "./web-src/clickListeners/moveListener.js":
/*!************************************************!*\
  !*** ./web-src/clickListeners/moveListener.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../circle */ \"./web-src/circle.js\");\n/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/index */ \"./web-src/animations/index.js\");\n/* harmony import */ var _clownkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clownkit */ \"./web-src/clownkit.js\");\n\n\n\n\n\nconst moveListener = (event, store, ownQuestion) => {\n  const [x, y] = Object(_canvas__WEBPACK_IMPORTED_MODULE_0__[\"clientToLocalCoords\"])(event.clientX, event.clientY);\n\n  const circleIndex = Object(_circle__WEBPACK_IMPORTED_MODULE_1__[\"getCircleIndexAt\"])(x, y);\n\n  const availableMoves = ownQuestion.available_moves;\n\n  if (!(circleIndex in availableMoves)) {\n    return;\n  }\n\n  const selectedMove = availableMoves[circleIndex];\n\n  store.beforeOwnChoicePhase = JSON.parse(store.game.get_phase());\n  store.beforeOwnChoiceQuestion = JSON.parse(store.game.get_question());\n\n  store.game.process_choice(store.aOrB, selectedMove);\n  _clownkit__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deposit(store.roomName, store.aOrB, selectedMove);\n\n  const phase = JSON.parse(store.game.get_phase());\n\n  const opponent = store.aOrB === 'A'\n    ? 'B'\n    : 'A';\n\n  _animations_index__WEBPACK_IMPORTED_MODULE_2__[\"ownMoveSelection\"].start({\n    previouslyAvailableMoves: availableMoves,\n    ownMove: selectedMove,\n    ownPoints: phase[store.aOrB.toLowerCase()].points,\n    opponentPoints: phase[opponent.toLowerCase()].points,\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (moveListener);\n\n\n//# sourceURL=webpack:///./web-src/clickListeners/moveListener.js?");

/***/ }),

/***/ "./web-src/clickListeners/playAgainListener.js":
/*!*****************************************************!*\
  !*** ./web-src/clickListeners/playAgainListener.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons */ \"./web-src/buttons.js\");\n/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/index */ \"./web-src/animations/index.js\");\n/* harmony import */ var _newGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../newGame */ \"./web-src/newGame.js\");\n\n\n\n\n\nconst playAgainListener = (event, store) => {\n  const [x, y] = Object(_canvas__WEBPACK_IMPORTED_MODULE_0__[\"clientToLocalCoords\"])(event.clientX, event.clientY);\n\n  if (!Object(_buttons__WEBPACK_IMPORTED_MODULE_1__[\"isPlayButtonClicked\"])(x, y)) {\n    return;\n  }\n\n  _animations_index__WEBPACK_IMPORTED_MODULE_2__[\"finalMoveClash\"].stop();\n  _animations_index__WEBPACK_IMPORTED_MODULE_2__[\"loading\"].start();\n\n  Object(_newGame__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(store);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playAgainListener);\n\n\n//# sourceURL=webpack:///./web-src/clickListeners/playAgainListener.js?");

/***/ }),

/***/ "./web-src/clownkit.js":
/*!*****************************!*\
  !*** ./web-src/clownkit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nzsc_clownkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nzsc/clownkit */ \"./node_modules/@nzsc/clownkit/src/index.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase */ \"./web-src/firebase.js\");\n\n\n\nconst clownkit = new _nzsc_clownkit__WEBPACK_IMPORTED_MODULE_0__[\"Clownkit\"](_firebase__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nwindow.clownkit = clownkit;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clownkit);\n\n\n//# sourceURL=webpack:///./web-src/clownkit.js?");

/***/ }),

/***/ "./web-src/createTurnEndListener.js":
/*!******************************************!*\
  !*** ./web-src/createTurnEndListener.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _clownkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clownkit */ \"./web-src/clownkit.js\");\n/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/index */ \"./web-src/animations/index.js\");\n\n\n\nconst createTurnEndListener = (store) => async (aPayload, bPayload) => {\n  await _clownkit__WEBPACK_IMPORTED_MODULE_0__[\"default\"].acceptResults(store.roomName, store.aOrB);\n\n  const prevPhase = JSON.parse(store.game.get_phase());\n\n  const opponent = store.aOrB === 'A'\n    ? 'B'\n    : 'A';\n  const opponentPayload = opponent === 'A'\n    ? aPayload\n    : bPayload;\n  store.game.process_choice(opponent, opponentPayload);\n\n  const phase = JSON.parse(store.game.get_phase());\n  const question = JSON.parse(store.game.get_question());\n\n  // TODO check for hacks\n\n  if (prevPhase.phase === 'CHARACTER_CHOOSING') {\n    _animations_index__WEBPACK_IMPORTED_MODULE_1__[\"ownCharacterSelection\"].stop();\n    if (phase.phase === 'BOOSTER_CHOOSING') {\n      const whoGetsTheHeadstart = phase[store.aOrB.toLowerCase()].points === 1\n        ? 'SELF'\n        : phase[opponent.toLowerCase()].points === 1\n          ? 'OPPONENT'\n          : 'NEITHER';\n\n      _animations_index__WEBPACK_IMPORTED_MODULE_1__[\"characterToBooster\"].start({\n        previouslyAvailableCharacters: store.beforeOwnChoiceQuestion[store.aOrB.toLowerCase()].available_characters,\n        availableBoosters: question[store.aOrB.toLowerCase()].available_boosters,\n        ownCharacter: phase[store.aOrB.toLowerCase()].character,\n        opponentCharacter: phase[opponent.toLowerCase()].character,\n        whoGetsTheHeadstart,\n      });\n    } else {\n      _animations_index__WEBPACK_IMPORTED_MODULE_1__[\"characterToCharacter\"].start({\n        previouslyAvailableCharacters: store.beforeOwnChoiceQuestion[store.aOrB.toLowerCase()].available_characters,\n        availableCharacters: question[store.aOrB.toLowerCase()].available_characters,\n        bothCharacter: prevPhase[store.aOrB.toLowerCase()].selected_character,\n      });\n    }\n  } else if (prevPhase.phase === 'BOOSTER_CHOOSING') {\n    _animations_index__WEBPACK_IMPORTED_MODULE_1__[\"ownBoosterSelection\"].stop();\n    _animations_index__WEBPACK_IMPORTED_MODULE_1__[\"boosterToMove\"].start({\n      previouslyAvailableBoosters: store.beforeOwnChoiceQuestion[store.aOrB.toLowerCase()].available_boosters,\n      availableMoves: question[store.aOrB.toLowerCase()].available_moves,\n      ownBooster: phase[store.aOrB.toLowerCase()].booster,\n      opponentBooster: phase[opponent.toLowerCase()].booster,\n      ownPoints: phase[store.aOrB.toLowerCase()].points,\n      opponentPoints: phase[opponent.toLowerCase()].points,\n    });\n  } else if (prevPhase.phase === 'MOVE_CHOOSING') {\n    const ownPointDiff = phase[store.aOrB.toLowerCase()].points - prevPhase[store.aOrB.toLowerCase()].points;\n    const opponentPointDiff = phase[opponent.toLowerCase()].points - prevPhase[opponent.toLowerCase()].points;\n    const whoGetsThePoint = ownPointDiff === 1\n      ? opponentPointDiff === 1\n        ? 'BOTH'\n        : 'SELF'\n      : opponentPointDiff === 1\n        ? 'OPPONENT'\n        : 'NEITHER';\n\n    _animations_index__WEBPACK_IMPORTED_MODULE_1__[\"ownMoveSelection\"].stop();\n\n    if (\n      phase[store.aOrB.toLowerCase()].points < 5\n      && phase[opponent.toLowerCase()].points < 5\n    ) {\n      _animations_index__WEBPACK_IMPORTED_MODULE_1__[\"moveClash\"].start({\n        previouslyAvailableMoves: store.beforeOwnChoiceQuestion[store.aOrB.toLowerCase()].available_moves,\n        availableMoves: question[store.aOrB.toLowerCase()].available_moves,\n        ownMove: prevPhase[store.aOrB.toLowerCase()].selected_move,\n        opponentMove: opponentPayload,\n        whoGetsThePoint,\n        ownPoints: phase[store.aOrB.toLowerCase()].points,\n        opponentPoints: phase[opponent.toLowerCase()].points,\n      });\n    } else {\n      _animations_index__WEBPACK_IMPORTED_MODULE_1__[\"finalMoveClash\"].start({\n        previouslyAvailableMoves: store.beforeOwnChoiceQuestion[store.aOrB.toLowerCase()].available_moves,\n        ownMove: prevPhase[store.aOrB.toLowerCase()].selected_move,\n        opponentMove: opponentPayload,\n        whoGetsThePoint,\n        ownPoints: phase[store.aOrB.toLowerCase()],\n        opponentPoints: phase[opponent.toLowerCase()],\n      });\n    }\n  } else {\n    alert('TODO ' + prevPhase.phase);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createTurnEndListener);\n\n\n//# sourceURL=webpack:///./web-src/createTurnEndListener.js?");

/***/ }),

/***/ "./web-src/firebase.js":
/*!*****************************!*\
  !*** ./web-src/firebase.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.cjs.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n\n\n\n\nconst config = {\n  apiKey: \"AIzaSyDf4-lOD9WulQ28HGLIIibkmVcr-hnjDC4\",\n  authDomain: \"nzsc2p.firebaseapp.com\",\n  databaseURL: \"https://nzsc2p.firebaseio.com\",\n  projectId: \"nzsc2p\",\n  storageBucket: \"nzsc2p.appspot.com\",\n  messagingSenderId: \"736929435180\"\n};\n\nfirebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a);\n\n\n//# sourceURL=webpack:///./web-src/firebase.js?");

/***/ }),

/***/ "./web-src/frameRenderers/boosterToMove.js":
/*!*************************************************!*\
  !*** ./web-src/frameRenderers/boosterToMove.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _private_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/colors */ \"./web-src/frameRenderers/private/colors.js\");\n/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logos */ \"./web-src/logos.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images */ \"./web-src/images.js\");\n/* harmony import */ var _getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getBackgroundColorOf */ \"./web-src/getBackgroundColorOf.js\");\n/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rect */ \"./web-src/rect.js\");\n/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../circle */ \"./web-src/circle.js\");\n/* harmony import */ var _private_phases__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private/phases */ \"./web-src/frameRenderers/private/phases.js\");\n/* harmony import */ var _private_lerp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./private/lerp */ \"./web-src/frameRenderers/private/lerp.js\");\n\n\n\n\n\n\n\n\n\n\nconst boosterToMove = ({\n  previouslyAvailableBoosters,\n  availableMoves: availableMovesWithSpaces,\n  ownBooster,\n  opponentBooster,\n  ownPoints,\n  opponentPoints,\n  completionFactor,\n}) => {\n  const PHASE_LENGTHS = [0.176, 0.648, 0.176];\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND\"];\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n\n  const previouslyAvailableBoosterLogoMoves = previouslyAvailableBoosters.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfBooster\"]);\n  const availableMoves = availableMovesWithSpaces.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"]);\n\n  const ownBoosterIndex = previouslyAvailableBoosters.findIndex(booster => booster === ownBooster);\n\n  if (completionFactor !== 1) {\n    for (let i = 0; i < previouslyAvailableBoosterLogoMoves.length; i++) {\n      // Don't draw selected human character.\n      if (i === ownBoosterIndex) {\n        continue;\n      }\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableBoosterLogoMoves[i]);\n\n      const rect = Object(_rect__WEBPACK_IMPORTED_MODULE_5__[\"nthRect\"])(i);\n      const [x, y, w, h] = rect;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableBoosterLogoMoves[i]], x, 300, 400, 400);\n    }\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"OVERLAY\"];\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n  } else {\n    for (let i = 0; i < availableMoves.length; i++) {\n      const [x, y, r] = Object(_circle__WEBPACK_IMPORTED_MODULE_6__[\"nthCircle\"])(i);\n      const d = 2 * r;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(availableMoves[i]);\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][availableMoves[i]], x - r, y - r, d, d);\n    }\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"SCORE_COLOR\"];\n    if (ownPoints === 1) {\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(100, 850, 20, 100);\n    }\n    if (opponentPoints === 1) {\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(1700, 850, 20, 100);\n    }\n  }\n\n  const phase = Object(_private_phases__WEBPACK_IMPORTED_MODULE_7__[\"getPhase\"])(completionFactor, PHASE_LENGTHS);\n  const phaseLength = PHASE_LENGTHS[phase];\n  const phaseTime = Object(_private_phases__WEBPACK_IMPORTED_MODULE_7__[\"getPhaseTime\"])(completionFactor, PHASE_LENGTHS);\n\n  switch (phase) {\n    case 0: {\n      // Draw own booster\n      {\n        const selectedHumanMoveEndRect = [200, 100, 600, 800];\n        const [x, y, w, h] = selectedHumanMoveEndRect;\n\n        const imageEndRect = [200, 200, 600, 600]; //< TODO\n        const [ix, iy, iw, ih] = imageEndRect;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableBoosterLogoMoves[ownBoosterIndex]);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableBoosterLogoMoves[ownBoosterIndex]], ix, iy, iw, ih);\n      }\n\n      // Draw opponent booster\n      const selectedComputerMoveStartRect = [1800, 100, 600, 800];\n      const selectedComputerMoveEndRect = [1000, 100, 600, 800];\n      const selectedComputerMoveCurrentRect = selectedComputerMoveStartRect.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(n, selectedComputerMoveEndRect[i], phaseTime / phaseLength));\n      const [x, y, w, h] = selectedComputerMoveCurrentRect;\n\n      const imageStartRect = [1800, 200, 600, 600]; //< TODO\n      const imageEndRect = [1000, 200, 600, 600]; //< TODO\n      const imageCurrentRect = imageStartRect.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(n, imageEndRect[i], phaseTime / phaseLength));\n      const [ix, iy, iw, ih] = imageCurrentRect;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfBooster\"])(opponentBooster));\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfBooster\"])(opponentBooster)], ix, iy, iw, ih);\n\n      break;\n    }\n\n    case 1: {\n      // Draw own booster\n      {\n        const selectedHumanMoveEndRect = [200, 100, 600, 800];\n        const [x, y, w, h] = selectedHumanMoveEndRect;\n\n        const imageEndRect = [200, 200, 600, 600]; //< TODO\n        const [ix, iy, iw, ih] = imageEndRect;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableBoosterLogoMoves[ownBoosterIndex]);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableBoosterLogoMoves[ownBoosterIndex]], ix, iy, iw, ih);\n      }\n\n      // Draw opponent booster\n      {\n        const selectedComputerMoveEndRect = [1000, 100, 600, 800];\n        const [x, y, w, h] = selectedComputerMoveEndRect;\n\n        const imageEndRect = [1000, 200, 600, 600]; //< TODO\n        const [ix, iy, iw, ih] = imageEndRect;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfBooster\"])(opponentBooster));\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfBooster\"])(opponentBooster)], ix, iy, iw, ih);\n      }\n\n      break;\n    }\n\n    case 2: {\n      // Own booster exits left\n      {\n        const x = 200 - 800 * (phaseTime / phaseLength);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableBoosterLogoMoves[ownBoosterIndex]);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, 100, 600, 800);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableBoosterLogoMoves[ownBoosterIndex]], x, 200, 600, 600);\n      }\n\n      // Opponent booster exits right\n      {\n        const x = 1000 + 800 * (phaseTime / phaseLength);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfBooster\"])(opponentBooster));\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, 100, 600, 800);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfBooster\"])(opponentBooster)], x, 200, 600, 600);\n      }\n\n      break;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (boosterToMove);\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/boosterToMove.js?");

/***/ }),

/***/ "./web-src/frameRenderers/characterToBooster.js":
/*!******************************************************!*\
  !*** ./web-src/frameRenderers/characterToBooster.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _private_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/colors */ \"./web-src/frameRenderers/private/colors.js\");\n/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logos */ \"./web-src/logos.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images */ \"./web-src/images.js\");\n/* harmony import */ var _getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getBackgroundColorOf */ \"./web-src/getBackgroundColorOf.js\");\n/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rect */ \"./web-src/rect.js\");\n/* harmony import */ var _private_phases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private/phases */ \"./web-src/frameRenderers/private/phases.js\");\n/* harmony import */ var _private_lerp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private/lerp */ \"./web-src/frameRenderers/private/lerp.js\");\n\n\n\n\n\n\n\n\n\nconst characterToBooster = ({\n  previouslyAvailableCharacters,\n  availableBoosters,\n  ownCharacter,\n  opponentCharacter,\n  whoGetsTheHeadstart,\n  completionFactor,\n}) => {\n  const PHASE_LENGTHS = [0.176, 0.648, 0.176];\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND\"];\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n\n  const previouslyAvailableCharacterLogoMoves = previouslyAvailableCharacters.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"]);\n  const availableBoosterLogoMoves = availableBoosters.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfBooster\"]);\n\n  const ownCharacterIndex = previouslyAvailableCharacters.findIndex(character => character === ownCharacter);\n\n  if (completionFactor !== 1) {\n    for (let i = 0; i < previouslyAvailableCharacterLogoMoves.length; i++) {\n      // Don't draw selected human character.\n      if (i === ownCharacterIndex) {\n        continue;\n      }\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableCharacterLogoMoves[i]);\n\n      const rect = Object(_rect__WEBPACK_IMPORTED_MODULE_5__[\"nthRect\"])(i);\n      const [x, y, w, h] = rect;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableCharacterLogoMoves[i]], x, 300, 400, 400);\n    }\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"OVERLAY\"];\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n  } else {\n    for (let i = 0; i < availableBoosterLogoMoves.length; i++) {\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(availableBoosterLogoMoves[i]);\n\n      const [x, y, w, h] = Object(_rect__WEBPACK_IMPORTED_MODULE_5__[\"nthRect\"])(i);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][availableBoosterLogoMoves[i]], x, 300, 400, 400);\n    }\n\n    /* TODO: find a way to draw scores without blocking boosters\n    ctx.fillStyle = SCORE_COLOR;\n\n    if (whoGetsTheHeadstart === 'HUMAN') {\n      ctx.fillRect(100, 850, 20, 100);\n    }\n    if (whoGetsTheHeadstart === 'COMPUTER') {\n      ctx.fillRect(1700, 850, 20, 100);\n    }\n    */\n  }\n\n  const phase = Object(_private_phases__WEBPACK_IMPORTED_MODULE_6__[\"getPhase\"])(completionFactor, PHASE_LENGTHS);\n  const phaseLength = PHASE_LENGTHS[phase];\n  const phaseTime = Object(_private_phases__WEBPACK_IMPORTED_MODULE_6__[\"getPhaseTime\"])(completionFactor, PHASE_LENGTHS);\n\n  switch (phase) {\n    case 0: {\n      // Draw human character\n      {\n        const selectedHumanMoveEndRect = [200, 100, 600, 800];\n        const [x, y, w, h] = selectedHumanMoveEndRect;\n\n        const imageEndRect = [200, 200, 600, 600]; //< TODO\n        const [ix, iy, iw, ih] = imageEndRect;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableCharacterLogoMoves[ownCharacterIndex]);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableCharacterLogoMoves[ownCharacterIndex]], ix, iy, iw, ih);\n      }\n\n      // Draw computer character\n      const selectedComputerMoveStartRect = [1800, 100, 600, 800];\n      const selectedComputerMoveEndRect = [1000, 100, 600, 800];\n      const selectedComputerMoveCurrentRect = selectedComputerMoveStartRect.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(n, selectedComputerMoveEndRect[i], phaseTime / phaseLength));\n      const [x, y, w, h] = selectedComputerMoveCurrentRect;\n\n      const imageStartRect = [1800, 200, 600, 600]; //< TODO\n      const imageEndRect = [1000, 200, 600, 600]; //< TODO\n      const imageCurrentRect = imageStartRect.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(n, imageEndRect[i], phaseTime / phaseLength));\n      const [ix, iy, iw, ih] = imageCurrentRect;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"])(opponentCharacter));\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"])(opponentCharacter)], ix, iy, iw, ih);\n\n      break;\n    }\n\n    case 1: {\n      const FADE_RATE = 5;\n\n      // Draw own character\n      {\n        if (whoGetsTheHeadstart === 'OPPONENT') {\n          _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].globalAlpha = Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(1, 0, Math.min(phaseTime * FADE_RATE, 1));\n        }\n\n        const selectedHumanMoveEndRect = [200, 100, 600, 800];\n        const [x, y, w, h] = selectedHumanMoveEndRect;\n\n        const imageEndRect = [200, 200, 600, 600]; //< TODO\n        const [ix, iy, iw, ih] = imageEndRect;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableCharacterLogoMoves[ownCharacterIndex]);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableCharacterLogoMoves[ownCharacterIndex]], ix, iy, iw, ih);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].globalAlpha = 1;\n      }\n\n      // Draw opponent move\n      {\n        if (whoGetsTheHeadstart === 'SELF') {\n          _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].globalAlpha = Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(1, 0, Math.min(phaseTime * FADE_RATE, 1));\n        }\n\n        const selectedComputerMoveEndRect = [1000, 100, 600, 800];\n        const [x, y, w, h] = selectedComputerMoveEndRect;\n\n        const imageEndRect = [1000, 200, 600, 600]; //< TODO\n        const [ix, iy, iw, ih] = imageEndRect;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"])(opponentCharacter));\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"])(opponentCharacter)], ix, iy, iw, ih);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].globalAlpha = 1;\n      }\n\n      break;\n    }\n\n    case 2: {\n      // Own move exits left\n      if (whoGetsTheHeadstart !== 'OPPONENT') {\n        const x = 200 - 800 * (phaseTime / phaseLength);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableCharacterLogoMoves[ownCharacterIndex]);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, 100, 600, 800);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableCharacterLogoMoves[ownCharacterIndex]], x, 200, 600, 600);\n      }\n\n      // Opponent move exits right\n      if (whoGetsTheHeadstart !== 'SELF') {\n        const x = 1000 + 800 * (phaseTime / phaseLength);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"])(opponentCharacter));\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, 100, 600, 800);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"])(opponentCharacter)], x, 200, 600, 600);\n      }\n\n      break;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (characterToBooster);\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/characterToBooster.js?");

/***/ }),

/***/ "./web-src/frameRenderers/characterToCharacter.js":
/*!********************************************************!*\
  !*** ./web-src/frameRenderers/characterToCharacter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _private_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/colors */ \"./web-src/frameRenderers/private/colors.js\");\n/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logos */ \"./web-src/logos.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images */ \"./web-src/images.js\");\n/* harmony import */ var _getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getBackgroundColorOf */ \"./web-src/getBackgroundColorOf.js\");\n/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rect */ \"./web-src/rect.js\");\n/* harmony import */ var _private_phases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private/phases */ \"./web-src/frameRenderers/private/phases.js\");\n/* harmony import */ var _private_lerp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private/lerp */ \"./web-src/frameRenderers/private/lerp.js\");\n\n\n\n\n\n\n\n\n\nconst characterToCharacter = ({\n  previouslyAvailableCharacters,\n  availableCharacters,\n  bothCharacter,\n  completionFactor,\n}) => {\n  const PHASE_LENGTHS = [0.176, 0.648, 0.176];\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND\"];\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n\n  const previouslyAvailableCharacterLogoMoves = previouslyAvailableCharacters.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"]);\n  const availableCharacterLogoMoves = availableCharacters.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"]);\n\n  const bothCharacterIndex = previouslyAvailableCharacters.findIndex(character => character === bothCharacter);\n\n  if (completionFactor !== 1) {\n    for (let i = 0; i < previouslyAvailableCharacterLogoMoves.length; i++) {\n      // Don't draw selected human character.\n      if (i === bothCharacterIndex) {\n        continue;\n      }\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableCharacterLogoMoves[i]);\n\n      const rect = Object(_rect__WEBPACK_IMPORTED_MODULE_5__[\"nthRect\"])(i);\n      const [x, y, w, h] = rect;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableCharacterLogoMoves[i]], x, 300, 400, 400);\n    }\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"OVERLAY\"];\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n  } else {\n    for (let i = 0; i < availableCharacterLogoMoves.length; i++) {\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(availableCharacterLogoMoves[i]);\n\n      const [x, y, w, h] = Object(_rect__WEBPACK_IMPORTED_MODULE_5__[\"nthRect\"])(i);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][availableCharacterLogoMoves[i]], x, 300, 400, 400);\n    }\n\n    /* TODO: find a way to draw scores without blocking boosters\n    ctx.fillStyle = SCORE_COLOR;\n\n    if (whoGetsTheHeadstart === 'HUMAN') {\n      ctx.fillRect(100, 850, 20, 100);\n    }\n    if (whoGetsTheHeadstart === 'COMPUTER') {\n      ctx.fillRect(1700, 850, 20, 100);\n    }\n    */\n  }\n\n  const phase = Object(_private_phases__WEBPACK_IMPORTED_MODULE_6__[\"getPhase\"])(completionFactor, PHASE_LENGTHS);\n  const phaseLength = PHASE_LENGTHS[phase];\n  const phaseTime = Object(_private_phases__WEBPACK_IMPORTED_MODULE_6__[\"getPhaseTime\"])(completionFactor, PHASE_LENGTHS);\n\n  switch (phase) {\n    case 0: {\n      // Draw human character\n      {\n        const selectedHumanMoveEndRect = [200, 100, 600, 800];\n        const [x, y, w, h] = selectedHumanMoveEndRect;\n\n        const imageEndRect = [200, 200, 600, 600]; //< TODO\n        const [ix, iy, iw, ih] = imageEndRect;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableCharacterLogoMoves[bothCharacterIndex]);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableCharacterLogoMoves[bothCharacterIndex]], ix, iy, iw, ih);\n      }\n\n      // Draw computer character\n      const selectedComputerMoveStartRect = [1800, 100, 600, 800];\n      const selectedComputerMoveEndRect = [1000, 100, 600, 800];\n      const selectedComputerMoveCurrentRect = selectedComputerMoveStartRect.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(n, selectedComputerMoveEndRect[i], phaseTime / phaseLength));\n      const [x, y, w, h] = selectedComputerMoveCurrentRect;\n\n      const imageStartRect = [1800, 200, 600, 600]; //< TODO\n      const imageEndRect = [1000, 200, 600, 600]; //< TODO\n      const imageCurrentRect = imageStartRect.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(n, imageEndRect[i], phaseTime / phaseLength));\n      const [ix, iy, iw, ih] = imageCurrentRect;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"])(bothCharacter));\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"])(bothCharacter)], ix, iy, iw, ih);\n\n      break;\n    }\n\n    case 1: {\n      // Draw own character\n      {\n        const selectedHumanMoveEndRect = [200, 100, 600, 800];\n        const [x, y, w, h] = selectedHumanMoveEndRect;\n\n        const imageEndRect = [200, 200, 600, 600]; //< TODO\n        const [ix, iy, iw, ih] = imageEndRect;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableCharacterLogoMoves[bothCharacterIndex]);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableCharacterLogoMoves[bothCharacterIndex]], ix, iy, iw, ih);\n      }\n\n      // Draw opponent move\n      {\n        const selectedComputerMoveEndRect = [1000, 100, 600, 800];\n        const [x, y, w, h] = selectedComputerMoveEndRect;\n\n        const imageEndRect = [1000, 200, 600, 600]; //< TODO\n        const [ix, iy, iw, ih] = imageEndRect;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"])(bothCharacter));\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"])(bothCharacter)], ix, iy, iw, ih);\n      }\n\n      break;\n    }\n\n    case 2: {\n      // Own move exits left\n      {\n        const x = 200 - 800 * (phaseTime / phaseLength);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableCharacterLogoMoves[bothCharacterIndex]);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, 100, 600, 800);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableCharacterLogoMoves[bothCharacterIndex]], x, 200, 600, 600);\n      }\n\n      // Opponent move exits right\n      {\n        const x = 1000 + 800 * (phaseTime / phaseLength);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"])(bothCharacter));\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, 100, 600, 800);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"])(bothCharacter)], x, 200, 600, 600);\n      }\n\n      break;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (characterToCharacter);\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/characterToCharacter.js?");

/***/ }),

/***/ "./web-src/frameRenderers/finalMoveClash.js":
/*!**************************************************!*\
  !*** ./web-src/frameRenderers/finalMoveClash.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _private_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/colors */ \"./web-src/frameRenderers/private/colors.js\");\n/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logos */ \"./web-src/logos.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images */ \"./web-src/images.js\");\n/* harmony import */ var _getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getBackgroundColorOf */ \"./web-src/getBackgroundColorOf.js\");\n/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../circle */ \"./web-src/circle.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buttons */ \"./web-src/buttons.js\");\n/* harmony import */ var _private_phases__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private/phases */ \"./web-src/frameRenderers/private/phases.js\");\n/* harmony import */ var _private_lerp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./private/lerp */ \"./web-src/frameRenderers/private/lerp.js\");\n\n\n\n\n\n\n\n\n\n\nconst finalMoveClash = ({\n  previouslyAvailableMoves: previouslyAvailableMovesWithSpaces,\n  ownMove,\n  opponentMove,\n  whoGetsThePoint,\n  ownPoints,\n  opponentPoints,\n  completionFactor,\n}) => {\n  const PHASE_LENGTHS = [0.176, 0.648, 0.176];\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND\"];\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n\n  const previouslyAvailableMoves = previouslyAvailableMovesWithSpaces.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"]);\n\n  const selectedOwnMoveIndex = previouslyAvailableMoves.findIndex(move => move === Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(ownMove));\n\n  if (completionFactor !== 1) {\n    for (let i = 0; i < previouslyAvailableMoves.length; i++) {\n      // Don't draw selected human move.\n      if (i === selectedOwnMoveIndex) {\n        continue;\n      }\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableMoves[i]);\n\n      const circle = Object(_circle__WEBPACK_IMPORTED_MODULE_5__[\"nthCircle\"])(i);\n      const x = circle[0];\n      const [, y, r] = circle;\n      const d = 2 * r;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableMoves[i]], x - r, y - r, d, d);\n    }\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"OVERLAY\"];\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n  } else {\n    // Draw own score\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = ownPoints > opponentPoints\n      ? _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"SCORE_COLOR\"]\n      : _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"LOSING_SCORE_COLOR\"];\n\n    for (let i = 0; i < ownPoints; i++) {\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(100 + i * 120, 300, 80, 400);\n    }\n\n    // Draw opponent score\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = opponentPoints > ownPoints\n      ? _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"SCORE_COLOR\"]\n      : _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"LOSING_SCORE_COLOR\"];\n\n    for (let i = 0; i < opponentPoints; i++) {\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(1620 - i * 120, 300, 80, 400);\n    }\n\n    // Draw play again button\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _buttons__WEBPACK_IMPORTED_MODULE_6__[\"playButtonCircle\"].color;\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(900, 500, _buttons__WEBPACK_IMPORTED_MODULE_6__[\"playButtonCircle\"].radius, 0, 2 * Math.PI);\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _buttons__WEBPACK_IMPORTED_MODULE_6__[\"playButtonTriangle\"].color;\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].moveTo(_buttons__WEBPACK_IMPORTED_MODULE_6__[\"playButtonTriangle\"].vertices[0][0], _buttons__WEBPACK_IMPORTED_MODULE_6__[\"playButtonTriangle\"].vertices[0][1]);\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].lineTo(_buttons__WEBPACK_IMPORTED_MODULE_6__[\"playButtonTriangle\"].vertices[1][0], _buttons__WEBPACK_IMPORTED_MODULE_6__[\"playButtonTriangle\"].vertices[1][1]);\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].lineTo(_buttons__WEBPACK_IMPORTED_MODULE_6__[\"playButtonTriangle\"].vertices[2][0], _buttons__WEBPACK_IMPORTED_MODULE_6__[\"playButtonTriangle\"].vertices[2][1]);\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n  }\n\n  const phase = Object(_private_phases__WEBPACK_IMPORTED_MODULE_7__[\"getPhase\"])(completionFactor, PHASE_LENGTHS);\n  const phaseLength = PHASE_LENGTHS[phase];\n  const phaseTime = Object(_private_phases__WEBPACK_IMPORTED_MODULE_7__[\"getPhaseTime\"])(completionFactor, PHASE_LENGTHS);\n\n  switch (phase) {\n    case 0: {\n      // Draw human move\n      {\n        const selectedOwnMoveEndCircle = [490, 500, 360];\n\n        const x = selectedOwnMoveEndCircle[0];\n        const [, y, r] = selectedOwnMoveEndCircle;\n        const d = 2 * r;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ownMove);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(ownMove)], x - r, y - r, d, d);\n      }\n\n      // Draw computer move\n      const selectedOpponentMoveStartCircle = [1800, 500, 360];\n      const selectedOpponentMoveEndCircle = [1310, 500, 360];\n\n      const selectedOpponentMoveCurrentCircle = selectedOpponentMoveStartCircle.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(n, selectedOpponentMoveEndCircle[i], phaseTime / phaseLength));\n      const x = selectedOpponentMoveCurrentCircle[0];\n      const [, y, r] = selectedOpponentMoveCurrentCircle;\n      const d = 2 * r;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(opponentMove);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(opponentMove)], x - r, y - r, d, d);\n\n      break;\n    }\n\n    case 1: {\n      // Draw human move\n      const FADE_RATE = 5;\n\n      {\n        if (whoGetsThePoint === 'OPPONENT' || whoGetsThePoint === 'BOTH') {\n          _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].globalAlpha = Object(_private_lerp__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(1, 0, Math.min(phaseTime * FADE_RATE, 1));\n        }\n\n        const selectedOwnMoveEndCircle = [490, 500, 360];\n\n        const x = selectedOwnMoveEndCircle[0];\n        const [, y, r] = selectedOwnMoveEndCircle;\n        const d = 2 * r;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ownMove);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(ownMove)], x - r, y - r, d, d);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].globalAlpha = 1;\n      }\n\n      // Draw computer move\n      {\n        if (whoGetsThePoint === 'SELF' || whoGetsThePoint === 'BOTH') {\n          _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].globalAlpha = Object(_private_lerp__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(1, 0, Math.min(phaseTime * FADE_RATE, 1));\n        }\n\n        const selectedOpponentMoveEndCircle = [1310, 500, 360];\n\n        const x = selectedOpponentMoveEndCircle[0];\n        const [, y, r] = selectedOpponentMoveEndCircle;\n        const d = 2 * r;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(opponentMove);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(opponentMove)], x - r, y - r, d, d);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].globalAlpha = 1;\n      }\n\n      break;\n    }\n\n    case 2: {\n      if (!(whoGetsThePoint === 'OPPONENT' || whoGetsThePoint === 'BOTH')) {\n        const selectedOwnMoveEndCircle = [490, 500, 360];\n\n        const x = selectedOwnMoveEndCircle[0] - 850 * (phaseTime / phaseLength);\n        const [, y, r] = selectedOwnMoveEndCircle;\n        const d = 2 * r;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ownMove);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(ownMove)], x - r, y - r, d, d);\n      }\n\n      // Draw computer move\n      if (!(whoGetsThePoint === 'SELF' || whoGetsThePoint === 'BOTH')) {\n        const selectedOpponentMoveEndCircle = [1310, 500, 360];\n\n        const x = selectedOpponentMoveEndCircle[0] + 850 * (phaseTime / phaseLength);\n        const [, y, r] = selectedOpponentMoveEndCircle;\n        const d = 2 * r;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(opponentMove);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(opponentMove)], x - r, y - r, d, d);\n      }\n\n      break;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (finalMoveClash);\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/finalMoveClash.js?");

/***/ }),

/***/ "./web-src/frameRenderers/index.js":
/*!*****************************************!*\
  !*** ./web-src/frameRenderers/index.js ***!
  \*****************************************/
/*! exports provided: loading, waitingForNetwork, nothingToCharacter, ownCharacterSelection, characterToCharacter, characterToBooster, ownBoosterSelection, boosterToMove, ownMoveSelection, moveClash, finalMoveClash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading */ \"./web-src/frameRenderers/loading.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"loading\", function() { return _loading__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _waitingForNetwork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waitingForNetwork */ \"./web-src/frameRenderers/waitingForNetwork.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"waitingForNetwork\", function() { return _waitingForNetwork__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _nothingToCharacter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nothingToCharacter */ \"./web-src/frameRenderers/nothingToCharacter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nothingToCharacter\", function() { return _nothingToCharacter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _ownCharacterSelection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ownCharacterSelection */ \"./web-src/frameRenderers/ownCharacterSelection.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ownCharacterSelection\", function() { return _ownCharacterSelection__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _characterToCharacter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characterToCharacter */ \"./web-src/frameRenderers/characterToCharacter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"characterToCharacter\", function() { return _characterToCharacter__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _characterToBooster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characterToBooster */ \"./web-src/frameRenderers/characterToBooster.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"characterToBooster\", function() { return _characterToBooster__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _ownBoosterSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ownBoosterSelection */ \"./web-src/frameRenderers/ownBoosterSelection.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ownBoosterSelection\", function() { return _ownBoosterSelection__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _boosterToMove__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./boosterToMove */ \"./web-src/frameRenderers/boosterToMove.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"boosterToMove\", function() { return _boosterToMove__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _ownMoveSelection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ownMoveSelection */ \"./web-src/frameRenderers/ownMoveSelection.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ownMoveSelection\", function() { return _ownMoveSelection__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _moveClash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./moveClash */ \"./web-src/frameRenderers/moveClash.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"moveClash\", function() { return _moveClash__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _finalMoveClash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./finalMoveClash */ \"./web-src/frameRenderers/finalMoveClash.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"finalMoveClash\", function() { return _finalMoveClash__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/index.js?");

/***/ }),

/***/ "./web-src/frameRenderers/loading.js":
/*!*******************************************!*\
  !*** ./web-src/frameRenderers/loading.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images */ \"./web-src/images.js\");\n\n\n\nconst TAU = 2 * Math.PI;\nconst ARC_SIZE = 0.25 * TAU;\n\nconst loading = ({\n  completionFactor,\n}) => {\n  const theta = completionFactor * TAU;\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = '#000';\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 900, 500);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(900, 500, 900, 500);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = '#222';\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(900, 0, 900, 500);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 500, 900, 500);\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Kick, 200, 0, 500, 500);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Rampage, 1100, 0, 500, 500);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Helmet, 200, 500, 500, 500);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Nose, 1100, 500, 500, 500);\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].strokeStyle = '#ffa500';\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].lineWidth = 10;\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(900, 500, 100, theta, theta + ARC_SIZE);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].stroke();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loading);\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/loading.js?");

/***/ }),

/***/ "./web-src/frameRenderers/moveClash.js":
/*!*********************************************!*\
  !*** ./web-src/frameRenderers/moveClash.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _private_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/colors */ \"./web-src/frameRenderers/private/colors.js\");\n/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logos */ \"./web-src/logos.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images */ \"./web-src/images.js\");\n/* harmony import */ var _getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getBackgroundColorOf */ \"./web-src/getBackgroundColorOf.js\");\n/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../circle */ \"./web-src/circle.js\");\n/* harmony import */ var _private_phases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private/phases */ \"./web-src/frameRenderers/private/phases.js\");\n/* harmony import */ var _private_lerp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private/lerp */ \"./web-src/frameRenderers/private/lerp.js\");\n\n\n\n\n\n\n\n\n\nconst moveClash = ({\n  previouslyAvailableMoves: previouslyAvailableMovesWithSpaces,\n  availableMoves: availableMovesWithSpaces,\n  ownMove,\n  opponentMove,\n  whoGetsThePoint,\n  ownPoints,\n  opponentPoints,\n  completionFactor,\n}) => {\n  const PHASE_LENGTHS = [0.176, 0.648, 0.176];\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND\"];\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n\n  const previouslyAvailableMoves = previouslyAvailableMovesWithSpaces.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"]);\n  const availableMoves = availableMovesWithSpaces.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"]);\n\n  const selectedOwnMoveIndex = previouslyAvailableMoves.findIndex(move => move === Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(ownMove));\n\n  if (completionFactor !== 1) {\n    for (let i = 0; i < previouslyAvailableMoves.length; i++) {\n      // Don't draw selected human move.\n      if (i === selectedOwnMoveIndex) {\n        continue;\n      }\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableMoves[i]);\n\n      const circle = Object(_circle__WEBPACK_IMPORTED_MODULE_5__[\"nthCircle\"])(i);\n      const x = circle[0];\n      const [, y, r] = circle;\n      const d = 2 * r;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableMoves[i]], x - r, y - r, d, d);\n    }\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"OVERLAY\"];\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n  } else {\n    for (let i = 0; i < availableMoves.length; i++) {\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(availableMoves[i]);\n\n      const circle = Object(_circle__WEBPACK_IMPORTED_MODULE_5__[\"nthCircle\"])(i);\n      const x = circle[0];\n      const [, y, r] = circle;\n      const d = 2 * r;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][availableMoves[i]], x - r, y - r, d, d);\n    }\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"SCORE_COLOR\"];\n\n    for (let i = 0; i < ownPoints; i++) {\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(100 + i * 30, 850, 20, 100);\n    }\n\n    for (let i = 0; i < opponentPoints; i++) {\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(1700 - i * 30, 850, 20, 100);\n    }\n  }\n\n  const phase = Object(_private_phases__WEBPACK_IMPORTED_MODULE_6__[\"getPhase\"])(completionFactor, PHASE_LENGTHS);\n  const phaseLength = PHASE_LENGTHS[phase];\n  const phaseTime = Object(_private_phases__WEBPACK_IMPORTED_MODULE_6__[\"getPhaseTime\"])(completionFactor, PHASE_LENGTHS);\n\n  switch (phase) {\n    case 0: {\n      // Draw human move\n      {\n        const selectedOwnMoveEndCircle = [490, 500, 360];\n\n        const x = selectedOwnMoveEndCircle[0];\n        const [, y, r] = selectedOwnMoveEndCircle;\n        const d = 2 * r;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ownMove);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(ownMove)], x - r, y - r, d, d);\n      }\n\n      // Draw computer move\n      const selectedOpponentMoveStartCircle = [1800, 500, 360];\n      const selectedOpponentMoveEndCircle = [1310, 500, 360];\n\n      const selectedOpponentMoveCurrentCircle = selectedOpponentMoveStartCircle.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(n, selectedOpponentMoveEndCircle[i], phaseTime / phaseLength));\n      const x = selectedOpponentMoveCurrentCircle[0];\n      const [, y, r] = selectedOpponentMoveCurrentCircle;\n      const d = 2 * r;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(opponentMove);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(opponentMove)], x - r, y - r, d, d);\n\n      break;\n    }\n\n    case 1: {\n      // Draw human move\n      const FADE_RATE = 5;\n\n      {\n        if (whoGetsThePoint === 'OPPONENT' || whoGetsThePoint === 'BOTH') {\n          _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].globalAlpha = Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(1, 0, Math.min(phaseTime * FADE_RATE, 1));\n        }\n\n        const selectedOwnMoveEndCircle = [490, 500, 360];\n\n        const x = selectedOwnMoveEndCircle[0];\n        const [, y, r] = selectedOwnMoveEndCircle;\n        const d = 2 * r;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ownMove);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(ownMove)], x - r, y - r, d, d);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].globalAlpha = 1;\n      }\n\n      // Draw computer move\n      {\n        if (whoGetsThePoint === 'SELF' || whoGetsThePoint === 'BOTH') {\n          _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].globalAlpha = Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(1, 0, Math.min(phaseTime * FADE_RATE, 1));\n        }\n\n        const selectedOpponentMoveEndCircle = [1310, 500, 360];\n\n        const x = selectedOpponentMoveEndCircle[0];\n        const [, y, r] = selectedOpponentMoveEndCircle;\n        const d = 2 * r;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(opponentMove);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(opponentMove)], x - r, y - r, d, d);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].globalAlpha = 1;\n      }\n\n      break;\n    }\n\n    case 2: {\n      if (!(whoGetsThePoint === 'OPPONENT' || whoGetsThePoint === 'BOTH')) {\n        const selectedOwnMoveEndCircle = [490, 500, 360];\n\n        const x = selectedOwnMoveEndCircle[0] - 850 * (phaseTime / phaseLength);\n        const [, y, r] = selectedOwnMoveEndCircle;\n        const d = 2 * r;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ownMove);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(ownMove)], x - r, y - r, d, d);\n      }\n\n      // Draw computer move\n      if (!(whoGetsThePoint === 'SELF' || whoGetsThePoint === 'BOTH')) {\n        const selectedOpponentMoveEndCircle = [1310, 500, 360];\n\n        const x = selectedOpponentMoveEndCircle[0] + 850 * (phaseTime / phaseLength);\n        const [, y, r] = selectedOpponentMoveEndCircle;\n        const d = 2 * r;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(opponentMove);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(opponentMove)], x - r, y - r, d, d);\n      }\n\n      break;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (moveClash);\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/moveClash.js?");

/***/ }),

/***/ "./web-src/frameRenderers/nothingToCharacter.js":
/*!******************************************************!*\
  !*** ./web-src/frameRenderers/nothingToCharacter.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _private_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/colors */ \"./web-src/frameRenderers/private/colors.js\");\n/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logos */ \"./web-src/logos.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images */ \"./web-src/images.js\");\n/* harmony import */ var _getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getBackgroundColorOf */ \"./web-src/getBackgroundColorOf.js\");\n/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rect */ \"./web-src/rect.js\");\n\n\n\n\n\n\n\nconst nothingToCharacter = ({\n  availableCharacters,\n  completionFactor,\n}) => {\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND\"];\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n\n  const characterLogoMoves = availableCharacters.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"]);\n\n  for (let i = 0; i < characterLogoMoves.length; i++) {\n    const rect = Object(_rect__WEBPACK_IMPORTED_MODULE_5__[\"nthRect\"])(i);\n    const x = rect[0] + 1800 * (1 - completionFactor);\n    const [, y, w, h] = rect;\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(characterLogoMoves[i]);\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][characterLogoMoves[i]], x, 300, 400, 400);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nothingToCharacter);\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/nothingToCharacter.js?");

/***/ }),

/***/ "./web-src/frameRenderers/ownBoosterSelection.js":
/*!*******************************************************!*\
  !*** ./web-src/frameRenderers/ownBoosterSelection.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _private_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/colors */ \"./web-src/frameRenderers/private/colors.js\");\n/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logos */ \"./web-src/logos.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images */ \"./web-src/images.js\");\n/* harmony import */ var _getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getBackgroundColorOf */ \"./web-src/getBackgroundColorOf.js\");\n/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rect */ \"./web-src/rect.js\");\n/* harmony import */ var _private_phases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private/phases */ \"./web-src/frameRenderers/private/phases.js\");\n/* harmony import */ var _private_lerp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private/lerp */ \"./web-src/frameRenderers/private/lerp.js\");\n\n\n\n\n\n\n\n\n\nconst ownBoosterSelection = ({\n  previouslyAvailableBoosters,\n  ownBooster,\n  completionFactor,\n}) => {\n  const PHASE_LENGTHS = [1, Infinity];\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND\"];\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n\n  const previouslyAvailableBoosterLogoMoves = previouslyAvailableBoosters.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfBooster\"]);\n\n  const ownBoosterIndex = previouslyAvailableBoosters.findIndex(character => character === ownBooster);\n\n  for (let i = 0; i < previouslyAvailableBoosterLogoMoves.length; i++) {\n    // Don't draw selected human character.\n    if (i === ownBoosterIndex) {\n      continue;\n    }\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableBoosterLogoMoves[i]);\n\n    const rect = Object(_rect__WEBPACK_IMPORTED_MODULE_5__[\"nthRect\"])(i);\n    const [x, y, w, h] = rect;\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableBoosterLogoMoves[i]], x, 300, 400, 400);\n  }\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"OVERLAY\"];\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n\n  const phase = Object(_private_phases__WEBPACK_IMPORTED_MODULE_6__[\"getPhase\"])(completionFactor, PHASE_LENGTHS);\n  const phaseLength = PHASE_LENGTHS[phase];\n  const phaseTime = Object(_private_phases__WEBPACK_IMPORTED_MODULE_6__[\"getPhaseTime\"])(completionFactor, PHASE_LENGTHS);\n\n  switch (phase) {\n    case 0: {\n      // Draw own booster\n      const selectedHumanMoveStartRect = Object(_rect__WEBPACK_IMPORTED_MODULE_5__[\"nthRect\"])(ownBoosterIndex);\n      const selectedHumanMoveEndRect = [200, 100, 600, 800];\n      const selectedHumanMoveCurrentRect = selectedHumanMoveStartRect.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(n, selectedHumanMoveEndRect[i], phaseTime / phaseLength));\n      const [x, y, w, h] = selectedHumanMoveCurrentRect;\n\n      const imageStartRect = [x, 300, 400, 400];\n      const imageEndRect = [200, 200, 600, 600]; //< TODO\n      const imageCurrentRect = imageStartRect.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(n, imageEndRect[i], phaseTime / phaseLength));\n      const [ix, iy, iw, ih] = imageCurrentRect;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableBoosterLogoMoves[ownBoosterIndex]);\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableBoosterLogoMoves[ownBoosterIndex]], ix, iy, iw, ih);\n\n      break;\n    }\n\n    case 1: {\n      // Draw own booster\n      {\n        const selectedHumanMoveEndRect = [200, 100, 600, 800];\n        const [x, y, w, h] = selectedHumanMoveEndRect;\n\n        const imageEndRect = [200, 200, 600, 600]; //< TODO\n        const [ix, iy, iw, ih] = imageEndRect;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableBoosterLogoMoves[ownBoosterIndex]);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableBoosterLogoMoves[ownBoosterIndex]], ix, iy, iw, ih);\n      }\n\n      break;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ownBoosterSelection);\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/ownBoosterSelection.js?");

/***/ }),

/***/ "./web-src/frameRenderers/ownCharacterSelection.js":
/*!*********************************************************!*\
  !*** ./web-src/frameRenderers/ownCharacterSelection.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _private_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/colors */ \"./web-src/frameRenderers/private/colors.js\");\n/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logos */ \"./web-src/logos.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images */ \"./web-src/images.js\");\n/* harmony import */ var _getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getBackgroundColorOf */ \"./web-src/getBackgroundColorOf.js\");\n/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rect */ \"./web-src/rect.js\");\n/* harmony import */ var _private_phases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private/phases */ \"./web-src/frameRenderers/private/phases.js\");\n/* harmony import */ var _private_lerp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private/lerp */ \"./web-src/frameRenderers/private/lerp.js\");\n\n\n\n\n\n\n\n\n\nconst ownCharacterSelection = ({\n  previouslyAvailableCharacters,\n  ownCharacter,\n  completionFactor,\n}) => {\n  const PHASE_LENGTHS = [1, Infinity];\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND\"];\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n\n  const previouslyAvailableCharacterLogoMoves = previouslyAvailableCharacters.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"logoOfCharacter\"]);\n\n  const ownCharacterIndex = previouslyAvailableCharacters.findIndex(character => character === ownCharacter);\n\n  for (let i = 0; i < previouslyAvailableCharacterLogoMoves.length; i++) {\n    // Don't draw selected human character.\n    if (i === ownCharacterIndex) {\n      continue;\n    }\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableCharacterLogoMoves[i]);\n\n    const rect = Object(_rect__WEBPACK_IMPORTED_MODULE_5__[\"nthRect\"])(i);\n    const [x, y, w, h] = rect;\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableCharacterLogoMoves[i]], x, 300, 400, 400);\n  }\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"OVERLAY\"];\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n\n  const phase = Object(_private_phases__WEBPACK_IMPORTED_MODULE_6__[\"getPhase\"])(completionFactor, PHASE_LENGTHS);\n  const phaseLength = PHASE_LENGTHS[phase];\n  const phaseTime = Object(_private_phases__WEBPACK_IMPORTED_MODULE_6__[\"getPhaseTime\"])(completionFactor, PHASE_LENGTHS);\n\n  switch (phase) {\n    case 0: {\n      // Draw human character\n      const selectedHumanMoveStartRect = Object(_rect__WEBPACK_IMPORTED_MODULE_5__[\"nthRect\"])(ownCharacterIndex);\n      const selectedHumanMoveEndRect = [200, 100, 600, 800];\n      const selectedHumanMoveCurrentRect = selectedHumanMoveStartRect.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(n, selectedHumanMoveEndRect[i], phaseTime / phaseLength));\n      const [x, y, w, h] = selectedHumanMoveCurrentRect;\n\n      const imageStartRect = [x, 300, 400, 400];\n      const imageEndRect = [200, 200, 600, 600]; //< TODO\n      const imageCurrentRect = imageStartRect.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(n, imageEndRect[i], phaseTime / phaseLength));\n      const [ix, iy, iw, ih] = imageCurrentRect;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableCharacterLogoMoves[ownCharacterIndex]);\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableCharacterLogoMoves[ownCharacterIndex]], ix, iy, iw, ih);\n\n      break;\n    }\n\n    case 1: {\n      // Draw own character\n      {\n        const selectedHumanMoveEndRect = [200, 100, 600, 800];\n        const [x, y, w, h] = selectedHumanMoveEndRect;\n\n        const imageEndRect = [200, 200, 600, 600]; //< TODO\n        const [ix, iy, iw, ih] = imageEndRect;\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableCharacterLogoMoves[ownCharacterIndex]);\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(x, y, w, h);\n\n        _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableCharacterLogoMoves[ownCharacterIndex]], ix, iy, iw, ih);\n      }\n\n      break;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ownCharacterSelection);\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/ownCharacterSelection.js?");

/***/ }),

/***/ "./web-src/frameRenderers/ownMoveSelection.js":
/*!****************************************************!*\
  !*** ./web-src/frameRenderers/ownMoveSelection.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _private_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private/colors */ \"./web-src/frameRenderers/private/colors.js\");\n/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logos */ \"./web-src/logos.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images */ \"./web-src/images.js\");\n/* harmony import */ var _getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getBackgroundColorOf */ \"./web-src/getBackgroundColorOf.js\");\n/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../circle */ \"./web-src/circle.js\");\n/* harmony import */ var _private_phases__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private/phases */ \"./web-src/frameRenderers/private/phases.js\");\n/* harmony import */ var _private_lerp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private/lerp */ \"./web-src/frameRenderers/private/lerp.js\");\n\n\n\n\n\n\n\n\n\nconst ownMoveSelection = ({\n  previouslyAvailableMoves: previouslyAvailableMovesWithSpaces,\n  ownMove,\n  ownPoints,\n  opponentPoints,\n  completionFactor,\n}) => {\n  const PHASE_LENGTHS = [1, Infinity];\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"BACKGROUND\"];\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n\n  const previouslyAvailableMoves = previouslyAvailableMovesWithSpaces.map(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"]);\n\n  const selectedOwnMoveIndex = previouslyAvailableMoves.findIndex(move => move === Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(ownMove));\n\n  for (let i = 0; i < previouslyAvailableMoves.length; i++) {\n    // Don't draw own selected move.\n    if (i === selectedOwnMoveIndex) {\n      continue;\n    }\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(previouslyAvailableMoves[i]);\n\n    const circle = Object(_circle__WEBPACK_IMPORTED_MODULE_5__[\"nthCircle\"])(i);\n    const x = circle[0];\n    const [, y, r] = circle;\n    const d = 2 * r;\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][previouslyAvailableMoves[i]], x - r, y - r, d, d);\n  }\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"OVERLAY\"];\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 1800, 1000);\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = _private_colors__WEBPACK_IMPORTED_MODULE_1__[\"SCORE_COLOR\"];\n\n  for (let i = 0; i < ownPoints; i++) {\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(100 + i * 30, 850, 20, 100);\n  }\n\n  for (let i = 0; i < opponentPoints; i++) {\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(1700 - i * 30, 850, 20, 100);\n  }\n\n  const phase = Object(_private_phases__WEBPACK_IMPORTED_MODULE_6__[\"getPhase\"])(completionFactor, PHASE_LENGTHS);\n  const phaseLength = PHASE_LENGTHS[phase];\n  const phaseTime = Object(_private_phases__WEBPACK_IMPORTED_MODULE_6__[\"getPhaseTime\"])(completionFactor, PHASE_LENGTHS);\n\n  switch (phase) {\n    case 0: {\n      // Draw own move\n      const selectedOwnMoveStartCircle = Object(_circle__WEBPACK_IMPORTED_MODULE_5__[\"nthCircle\"])(selectedOwnMoveIndex);\n      const selectedOwnMoveEndCircle = [490, 500, 360];\n      const selectedOwnMoveCurrentCircle = selectedOwnMoveStartCircle.map((n, i) => Object(_private_lerp__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(n, selectedOwnMoveEndCircle[i], phaseTime / phaseLength));\n\n      const x = selectedOwnMoveCurrentCircle[0];\n      const [, y, r] = selectedOwnMoveCurrentCircle;\n      const d = 2 * r;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ownMove);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(ownMove)], x - r, y - r, d, d);\n\n      break;\n    }\n\n    case 1: {\n      // Draw own move\n      const selectedOwnMoveEndCircle = [490, 500, 360];\n\n      const x = selectedOwnMoveEndCircle[0];\n      const [, y, r] = selectedOwnMoveEndCircle;\n      const d = 2 * r;\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = Object(_getBackgroundColorOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ownMove);\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(x, y, r, 0, 2 * Math.PI);\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n      _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_3__[\"default\"][Object(_logos__WEBPACK_IMPORTED_MODULE_2__[\"noSpace\"])(ownMove)], x - r, y - r, d, d);\n\n      break;\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ownMoveSelection);\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/ownMoveSelection.js?");

/***/ }),

/***/ "./web-src/frameRenderers/private/colors.js":
/*!**************************************************!*\
  !*** ./web-src/frameRenderers/private/colors.js ***!
  \**************************************************/
/*! exports provided: BACKGROUND, OVERLAY, SCORE_COLOR, LOSING_SCORE_COLOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BACKGROUND\", function() { return BACKGROUND; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OVERLAY\", function() { return OVERLAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCORE_COLOR\", function() { return SCORE_COLOR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOSING_SCORE_COLOR\", function() { return LOSING_SCORE_COLOR; });\nconst BACKGROUND = '#F1F1F1';\nconst OVERLAY = '#333A';\nconst SCORE_COLOR = '#111';\nconst LOSING_SCORE_COLOR = '#111A';\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/private/colors.js?");

/***/ }),

/***/ "./web-src/frameRenderers/private/lerp.js":
/*!************************************************!*\
  !*** ./web-src/frameRenderers/private/lerp.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst lerp = (a, b, factor) => a + factor * (b - a);\n/* harmony default export */ __webpack_exports__[\"default\"] = (lerp);\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/private/lerp.js?");

/***/ }),

/***/ "./web-src/frameRenderers/private/phases.js":
/*!**************************************************!*\
  !*** ./web-src/frameRenderers/private/phases.js ***!
  \**************************************************/
/*! exports provided: getPhase, getPhaseTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPhase\", function() { return getPhase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPhaseTime\", function() { return getPhaseTime; });\nconst getPhase = (t, phaseLengths) => {\n  let boundary = 0;\n\n  for (let phase = 0; phase < phaseLengths.length; phase++) {\n    const phaseLength = phaseLengths[phase];\n    boundary += phaseLength;\n    if (t <= boundary) {\n      return phase;\n    }\n  }\n\n  throw new RangeError(t + ' is not in a phase!');\n};\n\nconst getPhaseTime = (t, phaseLengths) => {\n  let boundary = 0;\n\n  for (let phase = 0; phase < phaseLengths.length; phase++) {\n    const phaseLength = phaseLengths[phase];\n    boundary += phaseLength;\n    if (t <= boundary) {\n      return t - (boundary - phaseLength);\n    }\n  }\n\n  throw new RangeError(t + ' is not in a phase!');\n};\n\n\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/private/phases.js?");

/***/ }),

/***/ "./web-src/frameRenderers/waitingForNetwork.js":
/*!*****************************************************!*\
  !*** ./web-src/frameRenderers/waitingForNetwork.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images */ \"./web-src/images.js\");\n\n\n\nconst TAU = 2 * Math.PI;\nconst WIFI_Y = 600;\nconst WIFI_SCALE = 1.5;\n\nconst waitingForNetwork = ({\n  completionFactor,\n}) => {\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = '#000';\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 0, 900, 500);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(900, 500, 900, 500);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = '#222';\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(900, 0, 900, 500);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillRect(0, 500, 900, 500);\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Kick, 200, 0, 500, 500);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Rampage, 1100, 0, 500, 500);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Helmet, 200, 500, 500, 500);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].drawImage(_images__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Nose, 1100, 500, 500, 500);\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fillStyle = '#ffa500';\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].strokeStyle = '#ffa500';\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].lineWidth = 10;\n\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(900, WIFI_Y, 25 * WIFI_SCALE, 0.625 * TAU, 0.875 * TAU);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].lineTo(900, WIFI_Y);\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].fill();\n  _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n\n  if (completionFactor > 0.25) {\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(900, WIFI_Y, 50 * WIFI_SCALE, 0.625 * TAU, 0.875 * TAU);\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].stroke();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n  }\n\n  if (completionFactor > 0.5) {\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(900, WIFI_Y, 100 * WIFI_SCALE, 0.625 * TAU, 0.875 * TAU);\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].stroke();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n  }\n\n  if (completionFactor > 0.75) {\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].beginPath();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].arc(900, WIFI_Y, 150 * WIFI_SCALE, 0.625 * TAU, 0.875 * TAU);\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].stroke();\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"ctx\"].closePath();\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (waitingForNetwork);\n\n\n//# sourceURL=webpack:///./web-src/frameRenderers/waitingForNetwork.js?");

/***/ }),

/***/ "./web-src/generateRoomName.js":
/*!*************************************!*\
  !*** ./web-src/generateRoomName.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 16**3 = 4096 possibilities\nconst generateRoomName = () => {\n  const adjectives = `\nflexible\nnerdy\ndemonic\nprolix\nprodigious\nhilarious\njovial\npious\nheroic\nhypocritical\nirrational\nmajestic\narticulate\nsatirical\nvengeful\ndrunk\n  `.trim().split('\\n');\n\n  const moreAdjectives = `\nlimping\nyodeling\nexploding\nbabbling\nsprinting\ndying\ndrinking\nfreezing\nflying\ndancing\nscreaming\nsleeping\nburning\nflexing\ngasping\ndrowning\n  `.trim().split('\\n');\n\n  const nouns = `\nminotaur\npegasus\nscorpion\ncentaur\nelf\ndragon\ngoblin\nphoenix\nhydra\ndwarf\nmermaid\ncobra\nhornet\nwolf\nghost\ngoat\n  `.trim().split('\\n');\n\n  const i = Math.floor(Math.random() * 16);\n  const j = Math.floor(Math.random() * 16);\n  const k = Math.floor(Math.random() * 16);\n\n  return adjectives[i] + '_' + moreAdjectives[j] + '_' + nouns[k];\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateRoomName);\n\n\n//# sourceURL=webpack:///./web-src/generateRoomName.js?");

/***/ }),

/***/ "./web-src/getBackgroundColorOf.js":
/*!*****************************************!*\
  !*** ./web-src/getBackgroundColorOf.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logos */ \"./web-src/logos.js\");\n\n\nconst colors = {\n  '#111': `\n    NoBooster\n    Kick\n    Nunchucks\n    ShadowFireball\n    RunInCircles\n    LightningFastKarateChop\n    Rampage\n    Muscle\n    Zap\n    Gravedigger\n    ZombieCorps\n    Apocalypse\n    Helmet\n    Smash\n    Lightning\n    Earthquake\n    Nose\n    NoseOfTheTaunted\n  `.trim().split('\\n').map(str => str.trim()),\n\n  '#ddd': `\n    NinjaSword\n    ShadowSlip\n    Regenerate\n    SamuraiSword\n    Twist\n    Bend\n    AcidSpray\n    MustacheMash\n    BigHairyDeal\n  `.trim().split('\\n').map(str => str.trim()),\n  '#888': `\n    BackwardsMoustachio\n    JugglingKnives\n  `.trim().split('\\n').map(str => str.trim()),\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((moveName) => {\n  for (const color in colors) {\n    if (colors[color].includes(Object(_logos__WEBPACK_IMPORTED_MODULE_0__[\"noSpace\"])(moveName))) {\n      return color;\n    }\n  }\n\n  throw new TypeError(moveName + ' has no defined background color!');\n});\n\n\n//# sourceURL=webpack:///./web-src/getBackgroundColorOf.js?");

/***/ }),

/***/ "./web-src/images.js":
/*!***************************!*\
  !*** ./web-src/images.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_Kick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Kick.png */ \"./web-src/images/Kick.png\");\n/* harmony import */ var _images_Kick_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_Kick_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _images_NinjaSword_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/NinjaSword.png */ \"./web-src/images/NinjaSword.png\");\n/* harmony import */ var _images_NinjaSword_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_NinjaSword_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_Nunchucks_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/Nunchucks.png */ \"./web-src/images/Nunchucks.png\");\n/* harmony import */ var _images_Nunchucks_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_Nunchucks_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_ShadowFireball_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/ShadowFireball.png */ \"./web-src/images/ShadowFireball.png\");\n/* harmony import */ var _images_ShadowFireball_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_ShadowFireball_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_ShadowSlip_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/ShadowSlip.png */ \"./web-src/images/ShadowSlip.png\");\n/* harmony import */ var _images_ShadowSlip_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_ShadowSlip_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _images_RunInCircles_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/RunInCircles.png */ \"./web-src/images/RunInCircles.png\");\n/* harmony import */ var _images_RunInCircles_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_RunInCircles_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _images_LightningFastKarateChop_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/LightningFastKarateChop.png */ \"./web-src/images/LightningFastKarateChop.png\");\n/* harmony import */ var _images_LightningFastKarateChop_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_LightningFastKarateChop_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _images_Rampage_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/Rampage.png */ \"./web-src/images/Rampage.png\");\n/* harmony import */ var _images_Rampage_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_Rampage_png__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _images_Muscle_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/Muscle.png */ \"./web-src/images/Muscle.png\");\n/* harmony import */ var _images_Muscle_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_Muscle_png__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _images_Zap_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/Zap.png */ \"./web-src/images/Zap.png\");\n/* harmony import */ var _images_Zap_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_Zap_png__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _images_Regenerate_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/Regenerate.png */ \"./web-src/images/Regenerate.png\");\n/* harmony import */ var _images_Regenerate_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_Regenerate_png__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _images_Gravedigger_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/Gravedigger.png */ \"./web-src/images/Gravedigger.png\");\n/* harmony import */ var _images_Gravedigger_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_Gravedigger_png__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _images_ZombieCorps_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/ZombieCorps.png */ \"./web-src/images/ZombieCorps.png\");\n/* harmony import */ var _images_ZombieCorps_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_ZombieCorps_png__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _images_Apocalypse_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/Apocalypse.png */ \"./web-src/images/Apocalypse.png\");\n/* harmony import */ var _images_Apocalypse_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_Apocalypse_png__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _images_SamuraiSword_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/SamuraiSword.png */ \"./web-src/images/SamuraiSword.png\");\n/* harmony import */ var _images_SamuraiSword_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_SamuraiSword_png__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _images_Helmet_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/Helmet.png */ \"./web-src/images/Helmet.png\");\n/* harmony import */ var _images_Helmet_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_Helmet_png__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _images_Smash_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/Smash.png */ \"./web-src/images/Smash.png\");\n/* harmony import */ var _images_Smash_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_Smash_png__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _images_Lightning_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/Lightning.png */ \"./web-src/images/Lightning.png\");\n/* harmony import */ var _images_Lightning_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_images_Lightning_png__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _images_Earthquake_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/Earthquake.png */ \"./web-src/images/Earthquake.png\");\n/* harmony import */ var _images_Earthquake_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_images_Earthquake_png__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _images_Twist_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/Twist.png */ \"./web-src/images/Twist.png\");\n/* harmony import */ var _images_Twist_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_images_Twist_png__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _images_Bend_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/Bend.png */ \"./web-src/images/Bend.png\");\n/* harmony import */ var _images_Bend_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_images_Bend_png__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _images_JugglingKnives_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/JugglingKnives.png */ \"./web-src/images/JugglingKnives.png\");\n/* harmony import */ var _images_JugglingKnives_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_images_JugglingKnives_png__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _images_AcidSpray_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/AcidSpray.png */ \"./web-src/images/AcidSpray.png\");\n/* harmony import */ var _images_AcidSpray_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_images_AcidSpray_png__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _images_Nose_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/Nose.png */ \"./web-src/images/Nose.png\");\n/* harmony import */ var _images_Nose_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_images_Nose_png__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _images_BackwardsMoustachio_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/BackwardsMoustachio.png */ \"./web-src/images/BackwardsMoustachio.png\");\n/* harmony import */ var _images_BackwardsMoustachio_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_images_BackwardsMoustachio_png__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _images_NoseOfTheTaunted_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/NoseOfTheTaunted.png */ \"./web-src/images/NoseOfTheTaunted.png\");\n/* harmony import */ var _images_NoseOfTheTaunted_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_images_NoseOfTheTaunted_png__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _images_MustacheMash_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./images/MustacheMash.png */ \"./web-src/images/MustacheMash.png\");\n/* harmony import */ var _images_MustacheMash_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_images_MustacheMash_png__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _images_BigHairyDeal_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./images/BigHairyDeal.png */ \"./web-src/images/BigHairyDeal.png\");\n/* harmony import */ var _images_BigHairyDeal_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_images_BigHairyDeal_png__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _images_NoBooster_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./images/NoBooster.png */ \"./web-src/images/NoBooster.png\");\n/* harmony import */ var _images_NoBooster_png__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_images_NoBooster_png__WEBPACK_IMPORTED_MODULE_28__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst srcs = {Kick: (_images_Kick_png__WEBPACK_IMPORTED_MODULE_0___default()), NinjaSword: (_images_NinjaSword_png__WEBPACK_IMPORTED_MODULE_1___default()), Nunchucks: (_images_Nunchucks_png__WEBPACK_IMPORTED_MODULE_2___default()), ShadowFireball: (_images_ShadowFireball_png__WEBPACK_IMPORTED_MODULE_3___default()), ShadowSlip: (_images_ShadowSlip_png__WEBPACK_IMPORTED_MODULE_4___default()), RunInCircles: (_images_RunInCircles_png__WEBPACK_IMPORTED_MODULE_5___default()), LightningFastKarateChop: (_images_LightningFastKarateChop_png__WEBPACK_IMPORTED_MODULE_6___default()), Rampage: (_images_Rampage_png__WEBPACK_IMPORTED_MODULE_7___default()), Muscle: (_images_Muscle_png__WEBPACK_IMPORTED_MODULE_8___default()), Zap: (_images_Zap_png__WEBPACK_IMPORTED_MODULE_9___default()), Regenerate: (_images_Regenerate_png__WEBPACK_IMPORTED_MODULE_10___default()), Gravedigger: (_images_Gravedigger_png__WEBPACK_IMPORTED_MODULE_11___default()), ZombieCorps: (_images_ZombieCorps_png__WEBPACK_IMPORTED_MODULE_12___default()), Apocalypse: (_images_Apocalypse_png__WEBPACK_IMPORTED_MODULE_13___default()), SamuraiSword: (_images_SamuraiSword_png__WEBPACK_IMPORTED_MODULE_14___default()), Helmet: (_images_Helmet_png__WEBPACK_IMPORTED_MODULE_15___default()), Smash: (_images_Smash_png__WEBPACK_IMPORTED_MODULE_16___default()), Lightning: (_images_Lightning_png__WEBPACK_IMPORTED_MODULE_17___default()), Earthquake: (_images_Earthquake_png__WEBPACK_IMPORTED_MODULE_18___default()), Twist: (_images_Twist_png__WEBPACK_IMPORTED_MODULE_19___default()), Bend: (_images_Bend_png__WEBPACK_IMPORTED_MODULE_20___default()), JugglingKnives: (_images_JugglingKnives_png__WEBPACK_IMPORTED_MODULE_21___default()), AcidSpray: (_images_AcidSpray_png__WEBPACK_IMPORTED_MODULE_22___default()), Nose: (_images_Nose_png__WEBPACK_IMPORTED_MODULE_23___default()), BackwardsMoustachio: (_images_BackwardsMoustachio_png__WEBPACK_IMPORTED_MODULE_24___default()), NoseOfTheTaunted: (_images_NoseOfTheTaunted_png__WEBPACK_IMPORTED_MODULE_25___default()), MustacheMash: (_images_MustacheMash_png__WEBPACK_IMPORTED_MODULE_26___default()), BigHairyDeal: (_images_BigHairyDeal_png__WEBPACK_IMPORTED_MODULE_27___default()), NoBooster: (_images_NoBooster_png__WEBPACK_IMPORTED_MODULE_28___default()), };\n\nconst imageLoadPromises = [];\n\nconst images = Object.keys(srcs).reduce((obj, srcKey) => {\n  const img = new Image();\n  img.src = srcs[srcKey];\n\n  imageLoadPromises.push(new Promise((resolve) => {\n    img.addEventListener('load', () => {\n      resolve();\n    });\n  }));\n\n  return {\n    ...obj,\n    [srcKey]: img,\n  };\n}, {});\n\nimages.waitForAllToLoad = Promise.all(imageLoadPromises);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (images);\n\n\n//# sourceURL=webpack:///./web-src/images.js?");

/***/ }),

/***/ "./web-src/images/AcidSpray.png":
/*!**************************************!*\
  !*** ./web-src/images/AcidSpray.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"33726fbcb7dd80e928f64c19f6b77381.png\";\n\n//# sourceURL=webpack:///./web-src/images/AcidSpray.png?");

/***/ }),

/***/ "./web-src/images/Apocalypse.png":
/*!***************************************!*\
  !*** ./web-src/images/Apocalypse.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"28c483710cff64d10e2f959490227081.png\";\n\n//# sourceURL=webpack:///./web-src/images/Apocalypse.png?");

/***/ }),

/***/ "./web-src/images/BackwardsMoustachio.png":
/*!************************************************!*\
  !*** ./web-src/images/BackwardsMoustachio.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6dce7f3372a412719d738f3f89b9e6eb.png\";\n\n//# sourceURL=webpack:///./web-src/images/BackwardsMoustachio.png?");

/***/ }),

/***/ "./web-src/images/Bend.png":
/*!*********************************!*\
  !*** ./web-src/images/Bend.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"29120fc1cb5592377dd92daf2825faf0.png\";\n\n//# sourceURL=webpack:///./web-src/images/Bend.png?");

/***/ }),

/***/ "./web-src/images/BigHairyDeal.png":
/*!*****************************************!*\
  !*** ./web-src/images/BigHairyDeal.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"812b2f5d5eb73b91442b055527b4b1cf.png\";\n\n//# sourceURL=webpack:///./web-src/images/BigHairyDeal.png?");

/***/ }),

/***/ "./web-src/images/Earthquake.png":
/*!***************************************!*\
  !*** ./web-src/images/Earthquake.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2fc028ad14099e84fffc65b5c1d1a56c.png\";\n\n//# sourceURL=webpack:///./web-src/images/Earthquake.png?");

/***/ }),

/***/ "./web-src/images/Gravedigger.png":
/*!****************************************!*\
  !*** ./web-src/images/Gravedigger.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"598356ddf665c325e46453ed3ac2449d.png\";\n\n//# sourceURL=webpack:///./web-src/images/Gravedigger.png?");

/***/ }),

/***/ "./web-src/images/Helmet.png":
/*!***********************************!*\
  !*** ./web-src/images/Helmet.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6756022bbef7a298400f8a244f778919.png\";\n\n//# sourceURL=webpack:///./web-src/images/Helmet.png?");

/***/ }),

/***/ "./web-src/images/JugglingKnives.png":
/*!*******************************************!*\
  !*** ./web-src/images/JugglingKnives.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"426f6d43f5528bc2c7f1e112609c90c5.png\";\n\n//# sourceURL=webpack:///./web-src/images/JugglingKnives.png?");

/***/ }),

/***/ "./web-src/images/Kick.png":
/*!*********************************!*\
  !*** ./web-src/images/Kick.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"d7fc054174122b3227838a30243d994b.png\";\n\n//# sourceURL=webpack:///./web-src/images/Kick.png?");

/***/ }),

/***/ "./web-src/images/Lightning.png":
/*!**************************************!*\
  !*** ./web-src/images/Lightning.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"545e9144c338a09d0964fe686cb1fdf0.png\";\n\n//# sourceURL=webpack:///./web-src/images/Lightning.png?");

/***/ }),

/***/ "./web-src/images/LightningFastKarateChop.png":
/*!****************************************************!*\
  !*** ./web-src/images/LightningFastKarateChop.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"46e20d86d16e1aa9b62e718d08147eef.png\";\n\n//# sourceURL=webpack:///./web-src/images/LightningFastKarateChop.png?");

/***/ }),

/***/ "./web-src/images/Muscle.png":
/*!***********************************!*\
  !*** ./web-src/images/Muscle.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2ed09b57e356edad8d9cdef4218babe7.png\";\n\n//# sourceURL=webpack:///./web-src/images/Muscle.png?");

/***/ }),

/***/ "./web-src/images/MustacheMash.png":
/*!*****************************************!*\
  !*** ./web-src/images/MustacheMash.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"b43550c7072049581379897a765026a8.png\";\n\n//# sourceURL=webpack:///./web-src/images/MustacheMash.png?");

/***/ }),

/***/ "./web-src/images/NinjaSword.png":
/*!***************************************!*\
  !*** ./web-src/images/NinjaSword.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8a030ae90ecc7b074af4eeba6de5fad9.png\";\n\n//# sourceURL=webpack:///./web-src/images/NinjaSword.png?");

/***/ }),

/***/ "./web-src/images/NoBooster.png":
/*!**************************************!*\
  !*** ./web-src/images/NoBooster.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"a6567a75cd44a18e8a431f57014b4948.png\";\n\n//# sourceURL=webpack:///./web-src/images/NoBooster.png?");

/***/ }),

/***/ "./web-src/images/Nose.png":
/*!*********************************!*\
  !*** ./web-src/images/Nose.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"8e28dae4b0729f881e7039cd45f66508.png\";\n\n//# sourceURL=webpack:///./web-src/images/Nose.png?");

/***/ }),

/***/ "./web-src/images/NoseOfTheTaunted.png":
/*!*********************************************!*\
  !*** ./web-src/images/NoseOfTheTaunted.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"23f8548f2a79bdfbf5c75d567167ae82.png\";\n\n//# sourceURL=webpack:///./web-src/images/NoseOfTheTaunted.png?");

/***/ }),

/***/ "./web-src/images/Nunchucks.png":
/*!**************************************!*\
  !*** ./web-src/images/Nunchucks.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c18eadb805abd3e802803c4423aec15c.png\";\n\n//# sourceURL=webpack:///./web-src/images/Nunchucks.png?");

/***/ }),

/***/ "./web-src/images/Rampage.png":
/*!************************************!*\
  !*** ./web-src/images/Rampage.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"5c41cffad63a5b67a3072fd52273218d.png\";\n\n//# sourceURL=webpack:///./web-src/images/Rampage.png?");

/***/ }),

/***/ "./web-src/images/Regenerate.png":
/*!***************************************!*\
  !*** ./web-src/images/Regenerate.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"95abe119d6b03eeee48562e7e028a6a4.png\";\n\n//# sourceURL=webpack:///./web-src/images/Regenerate.png?");

/***/ }),

/***/ "./web-src/images/RunInCircles.png":
/*!*****************************************!*\
  !*** ./web-src/images/RunInCircles.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"2f3b1be627a28b780321e09343274106.png\";\n\n//# sourceURL=webpack:///./web-src/images/RunInCircles.png?");

/***/ }),

/***/ "./web-src/images/SamuraiSword.png":
/*!*****************************************!*\
  !*** ./web-src/images/SamuraiSword.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9e27cf6edbe1d107a385d0f7046124ca.png\";\n\n//# sourceURL=webpack:///./web-src/images/SamuraiSword.png?");

/***/ }),

/***/ "./web-src/images/ShadowFireball.png":
/*!*******************************************!*\
  !*** ./web-src/images/ShadowFireball.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"140948bb3ebb27033f3ed626a87cc485.png\";\n\n//# sourceURL=webpack:///./web-src/images/ShadowFireball.png?");

/***/ }),

/***/ "./web-src/images/ShadowSlip.png":
/*!***************************************!*\
  !*** ./web-src/images/ShadowSlip.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"cd70c5d54494f3b652628c9edf7625c7.png\";\n\n//# sourceURL=webpack:///./web-src/images/ShadowSlip.png?");

/***/ }),

/***/ "./web-src/images/Smash.png":
/*!**********************************!*\
  !*** ./web-src/images/Smash.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"c18823d9bf72ff812ca449cb30547723.png\";\n\n//# sourceURL=webpack:///./web-src/images/Smash.png?");

/***/ }),

/***/ "./web-src/images/Twist.png":
/*!**********************************!*\
  !*** ./web-src/images/Twist.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"257ddeaa56614f57476f17fe845e4cfa.png\";\n\n//# sourceURL=webpack:///./web-src/images/Twist.png?");

/***/ }),

/***/ "./web-src/images/Zap.png":
/*!********************************!*\
  !*** ./web-src/images/Zap.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"7329f3b81c7bab3d555f1945e0585fcd.png\";\n\n//# sourceURL=webpack:///./web-src/images/Zap.png?");

/***/ }),

/***/ "./web-src/images/ZombieCorps.png":
/*!****************************************!*\
  !*** ./web-src/images/ZombieCorps.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"28d9191ddfef0382fd21cc712cc6dee9.png\";\n\n//# sourceURL=webpack:///./web-src/images/ZombieCorps.png?");

/***/ }),

/***/ "./web-src/index.js":
/*!**************************!*\
  !*** ./web-src/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./web-src/canvas.js\");\n/* harmony import */ var _animations_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/index */ \"./web-src/animations/index.js\");\n/* harmony import */ var _clownkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clownkit */ \"./web-src/clownkit.js\");\n/* harmony import */ var _clickListeners_createClickListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clickListeners/createClickListener */ \"./web-src/clickListeners/createClickListener.js\");\n/* harmony import */ var _newGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newGame */ \"./web-src/newGame.js\");\n\n\n\n\n\n\nwindow.addEventListener('resize', () => {\n  Object(_canvas__WEBPACK_IMPORTED_MODULE_0__[\"correctCanvasDimensions\"])();\n  /*if (store.repaint) {\n    store.repaint();\n  }*/\n});\n\nif (window.navigator.onLine) {\n  (async () => {\n    _animations_index__WEBPACK_IMPORTED_MODULE_1__[\"loading\"].start();\n\n    await _clownkit__WEBPACK_IMPORTED_MODULE_2__[\"default\"].login();\n\n    const store = {\n      game: null,\n      roomName: null,\n      aOrB: null,\n    };\n\n    _canvas__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"].addEventListener('click', Object(_clickListeners_createClickListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(store));\n\n    Object(_newGame__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(store);\n  })();\n} else {\n  _animations_index__WEBPACK_IMPORTED_MODULE_1__[\"waitingForNetwork\"].start();\n  window.addEventListener('online', () => {\n    window.location.reload();\n  });\n}\n\nif('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('./service-worker.js');\n}\n\n\n//# sourceURL=webpack:///./web-src/index.js?");

/***/ }),

/***/ "./web-src/logos.js":
/*!**************************!*\
  !*** ./web-src/logos.js ***!
  \**************************/
/*! exports provided: logoOfCharacter, logoOfBooster, noSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoOfCharacter\", function() { return logoOfCharacter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoOfBooster\", function() { return logoOfBooster; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"noSpace\", function() { return noSpace; });\nconst logoOfCharacter = (character) => {\n  switch (character) {\n    case 'Ninja': return 'Kick';\n    case 'Zombie': return 'Rampage';\n    case 'Samurai': return 'Helmet';\n    case 'Clown': return 'Nose';\n    default: throw new Error('Illegal character: ' + character);\n  }\n};\n\nconst logoOfBooster = (booster) => {\n  booster = noSpace(booster);\n\n  switch (booster) {\n    case 'Shadow': return 'ShadowSlip';\n    case 'Speedy': return 'RunInCircles';\n    case 'Regenerative': return 'Regenerate';\n    case 'ZombieCorps': return 'ZombieCorps';\n    case 'Atlas': return 'Lightning';\n    case 'Strong': return 'Bend';\n    case 'Backwards': return 'BackwardsMoustachio';\n    case 'Moustachio': return 'BigHairyDeal';\n    case 'NoBooster': return 'NoBooster';\n    default: throw new Error('Illegal booster: ' + booster);\n  }\n};\n\nconst noSpace = str => str.split('').filter(char => char !== ' ').join('');\n\n\n\n\n//# sourceURL=webpack:///./web-src/logos.js?");

/***/ }),

/***/ "./web-src/newGame.js":
/*!****************************!*\
  !*** ./web-src/newGame.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_nzsc2p_gooey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm/nzsc2p_gooey */ \"./web-src/wasm/nzsc2p_gooey.js\");\n/* harmony import */ var _clownkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clownkit */ \"./web-src/clownkit.js\");\n/* harmony import */ var _generateRoomName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateRoomName */ \"./web-src/generateRoomName.js\");\n/* harmony import */ var _transitions_nothingToCharacter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transitions/nothingToCharacter */ \"./web-src/transitions/nothingToCharacter.js\");\n/* harmony import */ var _createTurnEndListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTurnEndListener */ \"./web-src/createTurnEndListener.js\");\n\n\n\n\n\n\n\nconst newGame = async (store) => {\n  store.game = _wasm_nzsc2p_gooey__WEBPACK_IMPORTED_MODULE_0__[\"NZSCTwoPlayerGameWebInterface\"].new();\n\n  _clownkit__WEBPACK_IMPORTED_MODULE_1__[\"default\"].cleanUp();\n\n  const roomNames = await _clownkit__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listOpen();\n\n  if (roomNames.length > 0) {\n    const [roomName] = roomNames;\n\n    store.roomName = roomName;\n    store.aOrB = 'B';\n\n    await _clownkit__WEBPACK_IMPORTED_MODULE_1__[\"default\"].join(roomName);\n\n    Object(_transitions_nothingToCharacter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n    _clownkit__WEBPACK_IMPORTED_MODULE_1__[\"default\"].onTurnEnd(roomName, Object(_createTurnEndListener__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(store));\n  } else {\n    const roomName = Object(_generateRoomName__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n    store.roomName = roomName;\n    store.aOrB = 'A';\n\n    await _clownkit__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(roomName);\n    await _clownkit__WEBPACK_IMPORTED_MODULE_1__[\"default\"].waitForRoomToBeFull(roomName);\n\n    Object(_transitions_nothingToCharacter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n    _clownkit__WEBPACK_IMPORTED_MODULE_1__[\"default\"].onTurnEnd(roomName, Object(_createTurnEndListener__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(store));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newGame);\n\n\n//# sourceURL=webpack:///./web-src/newGame.js?");

/***/ }),

/***/ "./web-src/rect.js":
/*!*************************!*\
  !*** ./web-src/rect.js ***!
  \*************************/
/*! exports provided: nthRect, getRectIndexAt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nthRect\", function() { return nthRect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRectIndexAt\", function() { return getRectIndexAt; });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./web-src/canvas.js\");\n\n\nconst RECT = {\n  width: 400,\n  height: 800,\n  horizontalMargin: 40,\n  verticalMargin: 100,\n};\n\n// Returns an array representing a rectangle: [x, y, w, h]\nconst nthRect = (n) => {\n  if (n < 0 || n > 3) {\n    throw new RangeError('nthRect() requires 0 <= n <= 3');\n  }\n\n  const hm = RECT.horizontalMargin;\n  const vm = RECT.verticalMargin;\n  const bw = RECT.width;\n  const bh = RECT.height;\n\n  const x = hm + n * (400 + hm);\n  return [x, vm, bw, bh];\n};\n\n// Takes a coordinate and returns the index of a box clicked.\n// Or -1 if none is clicked.\nconst getRectIndexAt = (x, y) => {\n  const hm = RECT.horizontalMargin;\n  const vm = RECT.verticalMargin;\n  const bw = RECT.width;\n\n  if (y < vm || y > (Object(_canvas__WEBPACK_IMPORTED_MODULE_0__[\"getDimensions\"])().height - vm)) {\n    return -1;\n  }\n\n  if (((x - hm) % (bw + hm)) > bw) {\n    return -1;\n  }\n\n  return Math.floor((x - hm) / (bw + hm));\n};\n\n\n\n\n//# sourceURL=webpack:///./web-src/rect.js?");

/***/ }),

/***/ "./web-src/transitions/nothingToCharacter.js":
/*!***************************************************!*\
  !*** ./web-src/transitions/nothingToCharacter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations */ \"./web-src/animations/index.js\");\n\n\nconst nothingToCharacter = async () => {\n  _animations__WEBPACK_IMPORTED_MODULE_0__[\"loading\"].stop();\n  await _animations__WEBPACK_IMPORTED_MODULE_0__[\"nothingToCharacter\"].start();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (nothingToCharacter);\n\n\n//# sourceURL=webpack:///./web-src/transitions/nothingToCharacter.js?");

/***/ }),

/***/ "./web-src/wasm/nzsc2p_gooey.js":
/*!**************************************!*\
  !*** ./web-src/wasm/nzsc2p_gooey.js ***!
  \**************************************/
/*! exports provided: NZSCTwoPlayerGameWebInterface, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NZSCTwoPlayerGameWebInterface\", function() { return NZSCTwoPlayerGameWebInterface; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nzsc2p_gooey_bg */ \"./web-src/wasm/nzsc2p_gooey_bg.wasm\");\n/* tslint:disable */\n\n\nconst TextEncoder = typeof self === 'object' && self.TextEncoder\n    ? self.TextEncoder\n    : __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextEncoder;\n\nlet cachedEncoder = new TextEncoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null ||\n        cachegetUint8Memory.buffer !== _nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer)\n        cachegetUint8Memory = new Uint8Array(_nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    return cachegetUint8Memory;\n}\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedEncoder.encode(arg);\n    const ptr = _nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    return [ptr, buf.length];\n}\n\nconst TextDecoder = typeof self === 'object' && self.TextDecoder\n    ? self.TextDecoder\n    : __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder;\n\nlet cachedDecoder = new TextDecoder('utf-8');\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nlet cachedGlobalArgumentPtr = null;\nfunction globalArgumentPtr() {\n    if (cachedGlobalArgumentPtr === null)\n        cachedGlobalArgumentPtr = _nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_global_argument_ptr\"]();\n    return cachedGlobalArgumentPtr;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null ||\n        cachegetUint32Memory.buffer !== _nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer)\n        cachegetUint32Memory = new Uint32Array(_nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    return cachegetUint32Memory;\n}\n\nclass NZSCTwoPlayerGameWebInterface {\n\n                static __construct(ptr) {\n                    return new NZSCTwoPlayerGameWebInterface(ptr);\n                }\n\n                constructor(ptr) {\n                    this.ptr = ptr;\n                }\n\n            free() {\n                const ptr = this.ptr;\n                this.ptr = 0;\n                _nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_nzsctwoplayergamewebinterface_free\"](ptr);\n            }\n        static new() {\n    return NZSCTwoPlayerGameWebInterface.__construct(_nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"nzsctwoplayergamewebinterface_new\"]());\n}\nprocess_choice(arg0, arg1) {\n    const [ptr0, len0] = passStringToWasm(arg0);\n    const [ptr1, len1] = passStringToWasm(arg1);\n    return _nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"nzsctwoplayergamewebinterface_process_choice\"](this.ptr, ptr0, len0, ptr1, len1);\n}\nget_phase() {\n    const retptr = globalArgumentPtr();\n    _nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"nzsctwoplayergamewebinterface_get_phase\"](retptr, this.ptr);\n    const mem = getUint32Memory();\n    const ptr = mem[retptr / 4];\n    const len = mem[retptr / 4 + 1];\n    const realRet = getStringFromWasm(ptr, len).slice();\n    _nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr, len * 1);\n    return realRet;\n}\nget_question() {\n    const retptr = globalArgumentPtr();\n    _nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"nzsctwoplayergamewebinterface_get_question\"](retptr, this.ptr);\n    const mem = getUint32Memory();\n    const ptr = mem[retptr / 4];\n    const len = mem[retptr / 4 + 1];\n    const realRet = getStringFromWasm(ptr, len).slice();\n    _nzsc2p_gooey_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](ptr, len * 1);\n    return realRet;\n}\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n\n//# sourceURL=webpack:///./web-src/wasm/nzsc2p_gooey.js?");

/***/ }),

/***/ "./web-src/wasm/nzsc2p_gooey_bg.wasm":
/*!*******************************************!*\
  !*** ./web-src/wasm/nzsc2p_gooey_bg.wasm ***!
  \*******************************************/
/*! exports provided: memory, __wbg_nzsctwoplayergamewebinterface_free, nzsctwoplayergamewebinterface_new, nzsctwoplayergamewebinterface_process_choice, nzsctwoplayergamewebinterface_get_phase, nzsctwoplayergamewebinterface_get_question, __wbindgen_malloc, __wbindgen_free, __wbindgen_global_argument_ptr */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./nzsc2p_gooey */ \"./web-src/wasm/nzsc2p_gooey.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./web-src/wasm/nzsc2p_gooey_bg.wasm?");

/***/ })

}]);