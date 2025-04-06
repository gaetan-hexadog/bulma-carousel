/*! @creativebulma/bulma-carousel v1.0.0 | (c) 2020 Gaetan | MIT License | https://github.com/CreativeBulma/bulma-tagsinput */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("BulmaCarousel", [], factory);
	else if(typeof exports === 'object')
		exports["BulmaCarousel"] = factory();
	else
		root["BulmaCarousel"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(14);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(7);

var assertThisInitialized = __webpack_require__(3);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.isSelectorValid=exports.BooleanParse=exports.isNode=exports.isPromise=exports.isObject=exports.isString=exports.isFunction=void 0;var _typeof2=_interopRequireDefault(__webpack_require__(7)),isFunction=function isFunction(a){return"function"==typeof a};exports.isFunction=isFunction;var isString=function isString(a){return"string"==typeof a||!!a&&"object"===(0,_typeof2["default"])(a)&&"[object String]"===Object.prototype.toString.call(a)};exports.isString=isString;var isObject=function isObject(a){return("function"==typeof a||"object"===(0,_typeof2["default"])(a)&&!!a)&&!Array.isArray(a)};// Returns true if the value has a "then" function. Adapted from
// https://github.com/graphql/graphql-js/blob/499a75939f70c4863d44149371d6a99d57ff7c35/src/jsutils/isPromise.js
exports.isObject=isObject;var isPromise=function isPromise(a){return!!(a&&"function"==typeof a.then)};exports.isPromise=isPromise;var isNode=function isNode(a){try{return Node.prototype.cloneNode.call(a,!1),!0}catch(a){return!1}};/**
 * Convert String (false,False,True,true,no,yes,0,1) to real Boolean
 * @param {String} val 
 */exports.isNode=isNode;var BooleanParse=function BooleanParse(a){return!/^(?:f(?:alse)?|no?|0+)$/i.test(a)&&!!a};/**
 * Check if given query selector is valid
 * @param {String} selector 
 */exports.BooleanParse=BooleanParse;var isSelectorValid=function isSelectorValid(a){var b=function queryCheck(a){return document.createDocumentFragment().querySelector(a)};try{b(a)}catch(a){return!1}return!0};exports.isSelectorValid=isSelectorValid;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(1)),_createClass2=_interopRequireDefault(__webpack_require__(2)),_assertThisInitialized2=_interopRequireDefault(__webpack_require__(3)),_get2=_interopRequireDefault(__webpack_require__(12)),_inherits2=_interopRequireDefault(__webpack_require__(5)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(6)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(4)),_component=_interopRequireDefault(__webpack_require__(15)),_type=__webpack_require__(10),_defaultOptions=_interopRequireDefault(__webpack_require__(24));function _createSuper(a){return function(){var b,c=(0,_getPrototypeOf2["default"])(a);if(_isNativeReflectConstruct()){var d=(0,_getPrototypeOf2["default"])(this).constructor;b=Reflect.construct(c,arguments,d)}else b=c.apply(this,arguments);return(0,_possibleConstructorReturn2["default"])(this,b)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}var BulmaCarousel=/*#__PURE__*/function(a){function BulmaCarousel(a){var c,d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return(0,_classCallCheck2["default"])(this,BulmaCarousel),c=b.call(this,a,d,_defaultOptions["default"]),c._onNextClick=c._onNextClick.bind((0,_assertThisInitialized2["default"])(c)),c._onPreviousClick=c._onPreviousClick.bind((0,_assertThisInitialized2["default"])(c)),c._onIndicatorClick=c._onIndicatorClick.bind((0,_assertThisInitialized2["default"])(c)),c._currentIndex=0,c._init(),c}/**
	 * Initiate all DOM element corresponding to selector
	 * @method
	 * @return {Array} Array of all Plugin instances
	 */(0,_inherits2["default"])(BulmaCarousel,a);var b=_createSuper(BulmaCarousel);return(0,_createClass2["default"])(BulmaCarousel,[{key:"_init",/**
	 * Initiate plugin
	 * @method init
	 * @return {void}
	 */value:function _init(){this.slides=this.element.querySelectorAll(".carousel-item")||[],this.slidesContainer=this.element.querySelector(".carousel-container"),this.slidesIndicators=this.element.querySelectorAll(".carousel-indicator")||[],this._build()}/**
     * Build TagsInput DOM elements
     */},{key:"_build",value:function _build(){this._updateIndicators(),this.slidesContainer.style.left="-100%",this.slidesContainer.style.transform="translateX(100%)",this._bindEvents()}/**
     * Bind all events listener
     */},{key:"_bindEvents",value:function _bindEvents(){var a=this;this.nextTriggers=this.element.querySelectorAll("[data-slide=\"next\"]")||[],this.nextTriggers.forEach(function(b){b.addEventListener("click",a._onNextClick)}),this.prevTriggers=this.element.querySelectorAll("[data-slide=\"previous\"]")||[],this.prevTriggers.forEach(function(b){b.addEventListener("click",a._onPreviousClick)})}/**
     * Get next available slide index based on direction
     * 
     * @param {Integer} direction (-1: previous / 1: next)
     */},{key:"_getNewSlideIndex",value:function _getNewSlideIndex(a){var b=(this._currentIndex+a)%this.slides.length,c=this.slides.length-1,d=0>a&&0===this._currentIndex||0<a&&this._currentIndex===c;return d&&!this.options.loop?this._currentIndex:-1===b?c:b}},{key:"_updateIndicators",value:function _updateIndicators(){var a=this;this.slidesIndicators.forEach(function(b,c){b.classList[c===a._currentIndex?"add":"remove"]("is-active")})}},{key:"_slide",value:function _slide(a){var b=this._getNewSlideIndex(a),c=this.slides[b];if(c&&c.classList.contains("is-active"))return void(this._isSliding=!1)}/**
     * Goto next slide
     * 
     * @param {Event} e 
     */},{key:"_onIndicatorClick",value:function _onIndicatorClick(a){a.preventDefault()}/**
     * Goto next slide
     * 
     * @param {Event} e 
     */},{key:"_onNextClick",value:function _onNextClick(a){a.preventDefault(),this._changeSlide(1)}/**
     * Goto previous slide
     * 
     * @param {Event} e 
     */},{key:"_onPreviousClick",value:function _onPreviousClick(a){a.preventDefault(),this._changeSlide(-1)}/**
     * Update slides order
     */},{key:"_changeSlide",value:function _changeSlide(a){var b=this;Array.from(this.slides).forEach(function(a){a.classList.remove("is-active")}),this._currentIndex=this._getNewSlideIndex(a);var c=this.slides[this._currentIndex];// change current position
this.slidesContainer.style.transform=0<a?"translateX(100%)":"translateX(-100%)",this.slidesContainer.style.transition=void 0,c.classList.add("is-active"),c.style.order=1;for(var e=2;e<=this.slides.length;e++){var d;c=null!==(d=c.nextElementSibling)&&void 0!==d?d:this.slidesContainer.firstElementChild,c.style.order=e}this._updateIndicators(),this.slidesContainer.classList.remove("is-set"),setTimeout(function(){b.slidesContainer.style.transform="none",b.slidesContainer.style.transition="transform 0.5s ease-in-out"},50)}}],[{key:"attach",value:function attach(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".carousel",b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;return(0,_get2["default"])((0,_getPrototypeOf2["default"])(BulmaCarousel),"attach",this).call(this,a,b,c)}}]),BulmaCarousel}(_component["default"]);exports["default"]=BulmaCarousel;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(13);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(4);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(8)),_classCallCheck2=_interopRequireDefault(__webpack_require__(1)),_createClass2=_interopRequireDefault(__webpack_require__(2)),_assertThisInitialized2=_interopRequireDefault(__webpack_require__(3)),_inherits2=_interopRequireDefault(__webpack_require__(5)),_possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(6)),_getPrototypeOf2=_interopRequireDefault(__webpack_require__(4)),_events=_interopRequireDefault(__webpack_require__(16)),_dom=__webpack_require__(17),_uuid=_interopRequireDefault(__webpack_require__(23));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _createSuper(a){return function(){var b,c=(0,_getPrototypeOf2["default"])(a);if(_isNativeReflectConstruct()){var d=(0,_getPrototypeOf2["default"])(this).constructor;b=Reflect.construct(c,arguments,d)}else b=c.apply(this,arguments);return(0,_possibleConstructorReturn2["default"])(this,b)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}var Component=/*#__PURE__*/function(a){function Component(a){var c,d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};// An invalid selector or non-DOM node has been provided.
if((0,_classCallCheck2["default"])(this,Component),c=b.call(this),c.element=(0,_dom.querySelector)(a,document),!c.element)throw new Error("An invalid selector or non-DOM node has been provided for ".concat(c.constructor.name,"."));return c.element[c.constructor.name]=c.constructor._interface.bind((0,_assertThisInitialized2["default"])(c)),c.element[c.constructor.name].Constructor=c.constructor.name,c.id=(0,_uuid["default"])(c.constructor.name+"-"),c.options=_objectSpread({},e,{},d,{},(0,_dom.optionsFromDataset)(c.element,e)),c}/**
	 * Initiate all DOM element corresponding to selector
	 * @method
	 * @return {Array} Array of all Plugin instances
	 */(0,_inherits2["default"])(Component,a);var b=_createSuper(Component);return(0,_createClass2["default"])(Component,null,[{key:"attach",value:function attach(){var a=this,b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,e=[];return null!==b&&((0,_dom.querySelectorAll)(b,d).forEach(function(d){"undefined"==typeof d[a.name]?e.push(new a(d,_objectSpread({selector:b},c))):e.push(d[a.name])}),"undefined"==typeof window[this.name]&&(window[this.name]={observers:[]}),window[this.name].observers&&!window[this.name].observers.includes(b)&&(this.observeDom(b,c),window[this.name].observers.push(b))),e}/**
	 * Observe DOM mutations to automatically initialize plugin on new elements when added to the DOM
	 * 
	 * @param {string} selector 
	 * @param {Object} options 
	 */},{key:"observeDom",value:function observeDom(a,b){var c=this,d=new MutationObserver(function(d){d.forEach(function(d){for(var e=0;e<d.addedNodes.length;e++)"undefined"!=typeof window[c.name]&&c.attach(a,b,d.addedNodes[e])})});"undefined"!=typeof document&&d.observe(document,{childList:!0,subtree:!0})}},{key:"_interface",value:function _interface(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof a){if("undefined"==typeof this[a])throw new TypeError("No method named \"".concat(a,"\""));return this[a](b)}return this}}]),Component}(_events["default"]);exports["default"]=Component;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(1)),_createClass2=_interopRequireDefault(__webpack_require__(2)),EventEmitter=/*#__PURE__*/function(){/**
	 * Construct EventEmitter
	 * 
	 * @param {Array} listeners 
	 */function EventEmitter(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];(0,_classCallCheck2["default"])(this,EventEmitter),this._listeners=new Map(a),this._events=new Map}/**
     * Destroys EventEmitter
     */return(0,_createClass2["default"])(EventEmitter,[{key:"destroy",value:function destroy(){this._listeners={},this.events=[]}/**
	 * Count listeners registered for the provided eventName
	 * 
	 * @param {string} eventName 
	 */},{key:"listenerCount",value:function listenerCount(a){return this._listeners.has(a)?this._listeners.get(a).length:0}/**
     * Subscribes on event eventName specified function
	 * 
     * @param {string} eventName
     * @param {function} listener
     */},{key:"on",value:function on(a,b){this._addListener(a,b,!1)}/**
     * Subscribes on event name specified function to fire only once
	 * 
     * @param {string} eventName
     * @param {function} listener
     */},{key:"once",value:function once(a,b){this._addListener(a,b,!0)}/**
     * Removes event with specified eventName.
	 * 
     * @param {string} eventName
     */},{key:"off",value:function off(a){this._removeListeners(a)}/**
     * Emits event with specified name and params.
	 * 
     * @param {string} eventName
     * @param eventArgs
     */},{key:"emit",value:function emit(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return this._applyEvents(a,c)}/**
	 * Register a new listener
	 * 
	 * @param {string} eventName 
	 * @param {function} listener 
	 * @param {bool} once 
	 */},{key:"_addListener",value:function _addListener(a,b){var c=this,d=!!(2<arguments.length&&void 0!==arguments[2])&&arguments[2];if(Array.isArray(a))a.forEach(function(a){return c._addListener(a,b,d)});else{a=a.toString();var e=a.split(/,|, | /);1<e.length?e.forEach(function(a){return c._addListener(a,b,d)}):(!Array.isArray(this._listeners.get(a))&&this._listeners.set(a,[]),this._listeners.get(a).push({once:d,fn:b}))}}/**
	 * 
	 * @param {string|null} eventName 
	 */},{key:"_removeListeners",value:function _removeListeners(){var a=this,b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if(null===b)this._listeners=new Map;else if(Array.isArray(b))name.forEach(function(b){return a.removeListeners(b)});else{b=b.toString();var c=b.split(/,|, | /);1<c.length?c.forEach(function(b){return a.removeListeners(b)}):this._listeners["delete"](b)}}/**
     * Applies arguments to specified event
	 * 
     * @param {string} eventName
     * @param {*[]} eventArguments
     * @protected
     */},{key:"_applyEvents",value:function _applyEvents(a,b){var c=b;if(this._listeners.has(a)){var d=this._listeners.get(a),e=[];return d.forEach(function(a,d){(c=a.fn.apply(null,b))&&a.once&&e.unshift(d)}),e.forEach(function(a){d.splice(a,1)}),c}return c[0]}}]),EventEmitter}();exports["default"]=EventEmitter;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:!0}),exports.cloneAttributes=exports.optionsFromDataset=exports.querySelectorAll=exports.querySelector=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(18)),_defineProperty2=_interopRequireDefault(__webpack_require__(8)),_type=__webpack_require__(10);function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}/**
 * querySelector under steroid
 * Can use as selector:
 *  - function
 *  - DOM Node
 *  - String
 * @param {String|Node|Function} selector 
 * @param {Node|undefined} node 
 */var querySelector=function querySelector(a,b){return(0,_type.isFunction)(a)?a(b):(0,_type.isNode)(a)?a:(0,_type.isString)(a)?(b&&(0,_type.isNode)(b)&&1===b.nodeType||(b=document),b.querySelector(a)):Array.isArray(a)||"undefined"!=typeof NodeList&&NodeList.prototype.isPrototypeOf(a)?a[0]:void 0};/** 
 * querySelectorAll under steroid
 * Can use as selector:
 *  - function
 *  - DOM Node
 *  - String
 * @param {String|Node|Function} selector 
 * @param {Node|undefined} node 
 */exports.querySelector=querySelector;var querySelectorAll=function querySelectorAll(a,b){return(0,_type.isFunction)(a)?a(b):(0,_type.isNode)(a)?[a]:(0,_type.isString)(a)?(b&&(0,_type.isNode)(b)&&1===b.nodeType||(b=document),b.querySelectorAll(a)):"undefined"!=typeof NodeList&&NodeList.prototype.isPrototypeOf(a)?a:[]};// Convert dataset into Object
exports.querySelectorAll=querySelectorAll;var optionsFromDataset=function optionsFromDataset(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return(0,_type.isNode)(a)?a.dataset?Object.keys(a.dataset).filter(function(a){return Object.keys(b).includes(a)}).reduce(function(b,c){return _objectSpread({},b,(0,_defineProperty2["default"])({},c,a.dataset[c]))},{}):{}:{}};/**
 * Copy HTML attributes from a source element to a target element
 * @param {Node} target 
 * @param {Node} source 
 * @param {String} except list of attributes to skip (separated by space)
 */exports.optionsFromDataset=optionsFromDataset;var cloneAttributes=function cloneAttributes(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;null!==c&&(c=c.split(" ")),(0,_toConsumableArray2["default"])(b.attributes).forEach(function(b){c.includes(b.nodeName)||a.setAttribute("id"===b.nodeName?"data-id":b.nodeName,b.nodeValue)})};exports.cloneAttributes=cloneAttributes;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(19);

var iterableToArray = __webpack_require__(20);

var unsupportedIterableToArray = __webpack_require__(21);

var nonIterableSpread = __webpack_require__(22);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _default=function _default(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"";return a+"10000000-1000-4000-8000-100000000000".replace(/[018]/g,function(a){return(a^crypto.getRandomValues(new Uint8Array(1))[0]&15>>a/4).toString(16)})};exports["default"]=_default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var defaultOptions={},_default=defaultOptions;exports["default"]=_default;

/***/ })
/******/ ])["default"];
});