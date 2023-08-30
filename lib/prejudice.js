(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("prejudice", [], factory);
	else if(typeof exports === 'object')
		exports["prejudice"] = factory();
	else
		root["prejudice"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Prejudice/Action.js":
/*!*********************************!*\
  !*** ./src/Prejudice/Action.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js");
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Action = /*#__PURE__*/function () {
  function Action(init) {
    _classCallCheck(this, Action);
    this.baseUrl = init && init.baseUrl || '';
    this.observers = [];
    this.apply = this.apply.bind(this);
    this.registerBaseUrl = this.registerBaseUrl.bind(this);
    this.getUrl = this.getUrl.bind(this);
    this.addObserver = this.addObserver.bind(this);
  }
  _createClass(Action, [{
    key: "getUrl",
    value: function getUrl() {
      return [this.baseUrl, this.path].join('/');
    }
  }, {
    key: "apply",
    value: function apply(data, callback) {
      this.observers.forEach(function (observer) {
        if (typeof observer === 'function') {
          observer(data);
        }
      }, this);
      reqwest__WEBPACK_IMPORTED_MODULE_0___default()({
        url: this.getUrl(),
        data: JSON.stringify(data),
        type: 'json',
        method: 'post',
        contentType: 'application/json',
        withCredentials: true,
        error: callback,
        success: callback
      });
      return this;
    }
  }, {
    key: "registerBaseUrl",
    value: function registerBaseUrl(baseUrl) {
      this.baseUrl = baseUrl;
      return this;
    }
  }, {
    key: "addObserver",
    value: function addObserver(observer) {
      this.observers.push(observer);
    }
  }]);
  return Action;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Action);

/***/ }),

/***/ "./src/Prejudice/Action/Email.js":
/*!***************************************!*\
  !*** ./src/Prejudice/Action/Email.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Action */ "./src/Prejudice/Action.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Email = /*#__PURE__*/function (_Action) {
  _inherits(Email, _Action);
  var _super = _createSuper(Email);
  function Email() {
    var _this;
    _classCallCheck(this, Email);
    _this = _super.call(this);
    _this.path = 'email';
    return _this;
  }
  return _createClass(Email);
}(_Action__WEBPACK_IMPORTED_MODULE_0__["default"]);
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Email());

/***/ }),

/***/ "./src/Prejudice/Action/File.js":
/*!**************************************!*\
  !*** ./src/Prejudice/Action/File.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Action */ "./src/Prejudice/Action.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var File = /*#__PURE__*/function (_Action) {
  _inherits(File, _Action);
  var _super = _createSuper(File);
  function File() {
    var _this;
    _classCallCheck(this, File);
    _this = _super.call(this);
    _this.path = 'file';
    _this.formId = 'action-file-download';
    _this.targetName = 'action-file-download-target';
    _this.ensureForm = _this.ensureForm.bind(_assertThisInitialized(_this));
    _this.submitForm = _this.submitForm.bind(_assertThisInitialized(_this));
    _this.setFormInput = _this.setFormInput.bind(_assertThisInitialized(_this));
    _this.ensureTarget = _this.ensureTarget.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(File, [{
    key: "ensureTarget",
    value: function ensureTarget() {
      if (__webpack_require__.g.document.getElementsByName(this.targetName).length > 0) {
        return this;
      }
      var iframe = __webpack_require__.g.document.createElement('iframe');
      iframe.src = 'about:blank';
      iframe.name = this.targetName;
      iframe.style = 'visibility: hidden; display: none;';
      __webpack_require__.g.document.body.appendChild(iframe);
      return this;
    }
  }, {
    key: "ensureForm",
    value: function ensureForm() {
      if (__webpack_require__.g.document.getElementById(this.formId)) {
        return this;
      }
      var form = __webpack_require__.g.document.createElement('form');
      var input = __webpack_require__.g.document.createElement('input');
      form.id = this.formId;
      form.action = this.getUrl();
      form.method = 'post';
      form.target = this.targetName;
      form.enctype = 'text/plain';
      input.type = 'hidden';
      form.appendChild(input);
      __webpack_require__.g.document.body.appendChild(form);
      return this;
    }
  }, {
    key: "setFormInput",
    value: function setFormInput(data) {
      var input = __webpack_require__.g.document.getElementById(this.formId).children[0];
      input.name = JSON.stringify(data).slice(0, -1) + ',"_":"';
      input.value = '"}';
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      __webpack_require__.g.document.getElementById(this.formId).submit();
    }
  }, {
    key: "apply",
    value: function apply(data, callback) {
      this.ensureTarget();
      this.ensureForm();
      this.setFormInput(data);
      this.submitForm();
      callback(null, {
        status: 'Success'
      });
    }
  }]);
  return File;
}(_Action__WEBPACK_IMPORTED_MODULE_0__["default"]);
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new File());

/***/ }),

/***/ "./src/Prejudice/Action/Text.js":
/*!**************************************!*\
  !*** ./src/Prejudice/Action/Text.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Action */ "./src/Prejudice/Action.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Text = /*#__PURE__*/function (_Action) {
  _inherits(Text, _Action);
  var _super = _createSuper(Text);
  function Text() {
    var _this;
    _classCallCheck(this, Text);
    _this = _super.call(this);
    _this.path = 'text';
    return _this;
  }
  return _createClass(Text);
}(_Action__WEBPACK_IMPORTED_MODULE_0__["default"]);
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Text());

/***/ }),

/***/ "./src/Prejudice/Driver.js":
/*!*********************************!*\
  !*** ./src/Prejudice/Driver.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Driver = /*#__PURE__*/_createClass(function Driver() {
  _classCallCheck(this, Driver);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Driver);

/***/ }),

/***/ "./src/Prejudice/Driver/Record.js":
/*!****************************************!*\
  !*** ./src/Prejudice/Driver/Record.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Record = /*#__PURE__*/function () {
  function Record() {
    _classCallCheck(this, Record);
    this.engine = null;
    this.registerEngine = this.registerEngine.bind(this);
  }
  _createClass(Record, [{
    key: "registerEngine",
    value: function registerEngine(engine) {
      this.engine = engine;
    }
  }]);
  return Record;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Record);

/***/ }),

/***/ "./src/Prejudice/Driver/Record/Null.js":
/*!*********************************************!*\
  !*** ./src/Prejudice/Driver/Record/Null.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Null = /*#__PURE__*/function () {
  function Null() {
    _classCallCheck(this, Null);
  }
  _createClass(Null, [{
    key: "match",
    value: function match(data) {
      return false;
    }
  }, {
    key: "dataToRecord",
    value: function dataToRecord() {
      return this;
    }
  }]);
  return Null;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Null());

/***/ }),

/***/ "./src/Prejudice/Driver/Record/Pride.js":
/*!**********************************************!*\
  !*** ./src/Prejudice/Driver/Record/Pride.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Record */ "./src/Prejudice/Driver/Record.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Pride = /*#__PURE__*/function (_Record) {
  _inherits(Pride, _Record);
  var _super = _createSuper(Pride);
  function Pride() {
    var _this;
    _classCallCheck(this, Pride);
    _this = _super.call(this);
    _this.dataToRecord = _this.dataToRecord.bind(_assertThisInitialized(_this));
    _this.match = _this.match.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Pride, [{
    key: "match",
    value: function match(data) {
      return data instanceof this.engine.Core.Record;
    }
  }, {
    key: "dataToRecord",
    value: function dataToRecord(data) {
      return data;
    }
  }]);
  return Pride;
}(_Record__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Pride());

/***/ }),

/***/ "./src/Prejudice/Driver/Record/ReactHash.js":
/*!**************************************************!*\
  !*** ./src/Prejudice/Driver/Record/ReactHash.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Record */ "./src/Prejudice/Driver/Record.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReactHash = /*#__PURE__*/function (_Record) {
  _inherits(ReactHash, _Record);
  var _super = _createSuper(ReactHash);
  function ReactHash() {
    var _this;
    _classCallCheck(this, ReactHash);
    _this = _super.call(this);
    _this.dataToRecord = _this.dataToRecord.bind(_assertThisInitialized(_this));
    _this.match = _this.match.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(ReactHash, [{
    key: "match",
    value: function match(data) {
      return data.datastore && data.uid;
    }
  }, {
    key: "dataToRecord",
    value: function dataToRecord(data) {
      return this.engine.requestRecord(data.datastore, data.uid);
    }
  }]);
  return ReactHash;
}(_Record__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ReactHash());

/***/ }),

/***/ "./src/Prejudice/Driver/Record/UidHash.js":
/*!************************************************!*\
  !*** ./src/Prejudice/Driver/Record/UidHash.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Record */ "./src/Prejudice/Driver/Record.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var UidHash = /*#__PURE__*/function (_Record) {
  _inherits(UidHash, _Record);
  var _super = _createSuper(UidHash);
  function UidHash() {
    var _this;
    _classCallCheck(this, UidHash);
    _this = _super.call(this);
    _this.dataToRecord = _this.dataToRecord.bind(_assertThisInitialized(_this));
    _this.match = _this.match.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(UidHash, [{
    key: "match",
    value: function match(data) {
      return data.datastoreUid && data.recordUid;
    }
  }, {
    key: "dataToRecord",
    value: function dataToRecord(data) {
      return this.engine.requestRecord(data.datastoreUid, data.recordUid);
    }
  }]);
  return UidHash;
}(_Record__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new UidHash());

/***/ }),

/***/ "./src/Prejudice/IdleTimeout.js":
/*!**************************************!*\
  !*** ./src/Prejudice/IdleTimeout.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var idle_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idle-timeout */ "./node_modules/idle-timeout/dist/idle-timeout.js");
/* harmony import */ var idle_timeout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(idle_timeout__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var IdleTimeout = /*#__PURE__*/function () {
  function IdleTimeout() {
    _classCallCheck(this, IdleTimeout);
    this.idleTimer = null;
    this.setIdleTimer = this.setIdleTimer.bind(this);
  }
  _createClass(IdleTimeout, [{
    key: "setIdleTimer",
    value: function setIdleTimer() {
      this.idleTimer = idle_timeout__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        //
      }, {
        element: document,
        timeout: 3600000
      });
      return this;
    }
  }]);
  return IdleTimeout;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new IdleTimeout());

/***/ }),

/***/ "./src/Prejudice/LocalStorageDriver.js":
/*!*********************************************!*\
  !*** ./src/Prejudice/LocalStorageDriver.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VariableStorageDriver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VariableStorageDriver */ "./src/Prejudice/VariableStorageDriver.js");
/* harmony import */ var _PersistantStorageDriver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersistantStorageDriver */ "./src/Prejudice/PersistantStorageDriver.js");


var exp = _VariableStorageDriver__WEBPACK_IMPORTED_MODULE_0__["default"];
if (typeof __webpack_require__.g.window !== 'undefined') {
  exp = new _PersistantStorageDriver__WEBPACK_IMPORTED_MODULE_1__["default"](__webpack_require__.g.window.localStorage, 'Prejudice.localStorage');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exp);

/***/ }),

/***/ "./src/Prejudice/PersistantStorageDriver.js":
/*!**************************************************!*\
  !*** ./src/Prejudice/PersistantStorageDriver.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VariableStorageDriver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VariableStorageDriver */ "./src/Prejudice/VariableStorageDriver.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PersistantStorageDriver = /*#__PURE__*/function (_VariableStorageDrive) {
  _inherits(PersistantStorageDriver, _VariableStorageDrive);
  var _super = _createSuper(PersistantStorageDriver);
  function PersistantStorageDriver(storage, key) {
    var _this;
    _classCallCheck(this, PersistantStorageDriver);
    _this = _super.call(this);
    _this.key = key;
    _this.storage = storage;
    // Read has side effects that modify this.records.
    _this.read();
    __webpack_require__.g.window.addEventListener('storage', function (driver) {
      return function (e) {
        if (e.storageArea === driver.storage) {
          driver.read();
          driver.notifyObservers();
        }
      };
    }(_assertThisInitialized(_this)));
    _this.read = _this.read.bind(_assertThisInitialized(_this));
    _this.write = _this.write.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(PersistantStorageDriver, [{
    key: "getInstance",
    value: function getInstance() {
      return this;
    }
  }, {
    key: "read",
    value: function read() {
      try {
        this.records = JSON.parse(this.storage.getItem(this.key)) || {};
      } catch (e) {
        this.records = {};
      }
      return this;
    }
  }, {
    key: "write",
    value: function write() {
      this.storage.setItem(this.key, JSON.stringify(this.records));
      return this;
    }
  }, {
    key: "add",
    value: function add(record) {
      if (_get(_getPrototypeOf(PersistantStorageDriver.prototype), "add", this).call(this, record)) {
        this.write();
        return true;
      }
      return false;
    }
  }, {
    key: "remove",
    value: function remove(record) {
      if (_get(_getPrototypeOf(PersistantStorageDriver.prototype), "remove", this).call(this, record)) {
        this.write();
        return true;
      }
      return false;
    }
  }, {
    key: "clear",
    value: function clear(datastore) {
      if (_get(_getPrototypeOf(PersistantStorageDriver.prototype), "clear", this).call(this, datastore)) {
        this.write();
        return true;
      }
      return false;
    }
  }]);
  return PersistantStorageDriver;
}(_VariableStorageDriver__WEBPACK_IMPORTED_MODULE_0__.VariableStorageDriver);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersistantStorageDriver);

/***/ }),

/***/ "./src/Prejudice/Profile.js":
/*!**********************************!*\
  !*** ./src/Prejudice/Profile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js");
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IdleTimeout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IdleTimeout */ "./src/Prejudice/IdleTimeout.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Profile = /*#__PURE__*/function () {
  function Profile() {
    _classCallCheck(this, Profile);
    this.last = {};
    this.baseUrl = null;
    this.observers = [];
    this.interval = null;
    this.intervalDuration = 300000;
    this.idleDetection = _IdleTimeout__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.registerBaseUrl = this.registerBaseUrl.bind(this);
    this.addObserver = this.addObserver.bind(this);
    this.notifyObservers = this.notifyObservers.bind(this);
    this.update = this.update.bind(this);
    this.handleData = this.handleData.bind(this);
    this.getUrl = this.getUrl.bind(this);
    this.setInterval = this.setInterval.bind(this);
    this.getInstance = this.getInstance.bind(this);
  }
  _createClass(Profile, [{
    key: "getInstance",
    value: function getInstance() {
      return this;
    }
  }, {
    key: "setInterval",
    value: function (_setInterval) {
      function setInterval() {
        return _setInterval.apply(this, arguments);
      }
      setInterval.toString = function () {
        return _setInterval.toString();
      };
      return setInterval;
    }(function () {
      if (this.interval) {
        return this;
      }
      this.interval = setInterval(function (profile) {
        return function () {
          profile.update();
        };
      }(this), this.intervalDuration);
      return this;
    })
  }, {
    key: "notifyObservers",
    value: function notifyObservers() {
      this.observers.forEach(function (observer) {
        if (typeof observer === 'function') {
          observer(this.last);
        }
      }, this);
    }
  }, {
    key: "update",
    value: function update() {
      if (this.idleDetection.idleTimer && this.idleDetection.idleTimer.isIdle) {
        this.idleDetection.setIdleTimer();
        return this;
      }
      if (this.baseUrl && this.observers.length > 0) {
        var callback = function (profile) {
          return function (data) {
            profile.handleData(data);
          };
        }(this);
        reqwest__WEBPACK_IMPORTED_MODULE_0___default()({
          url: this.getUrl(),
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          withCredentials: true,
          error: callback,
          success: callback
        });
      }
      return this;
    }
  }, {
    key: "handleData",
    value: function handleData(data) {
      if (JSON.stringify(this.last) !== JSON.stringify(data)) {
        this.last = data;
        this.notifyObservers();
      }
      return this;
    }
  }, {
    key: "getUrl",
    value: function getUrl() {
      if (this.baseUrl) {
        return [this.baseUrl, 'profile'].join('/');
      }
      return null;
    }
  }, {
    key: "addObserver",
    value: function addObserver(observer) {
      observer(this.last);
      this.observers.push(observer);
      this.startup();
      return this;
    }
  }, {
    key: "startup",
    value: function startup() {
      if (!this.interval && this.baseUrl && this.observers.length > 0) {
        this.last = {};
        this.idleDetection.setIdleTimer();
        this.update();
        this.setInterval();
      }
      return this;
    }
  }, {
    key: "registerBaseUrl",
    value: function registerBaseUrl(baseUrl) {
      this.baseUrl = baseUrl;
      this.startup();
      return this;
    }
  }]);
  return Profile;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Profile());

/***/ }),

/***/ "./src/Prejudice/SessionStorageDriver.js":
/*!***********************************************!*\
  !*** ./src/Prejudice/SessionStorageDriver.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VariableStorageDriver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VariableStorageDriver */ "./src/Prejudice/VariableStorageDriver.js");
/* harmony import */ var _PersistantStorageDriver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersistantStorageDriver */ "./src/Prejudice/PersistantStorageDriver.js");


var exp = _VariableStorageDriver__WEBPACK_IMPORTED_MODULE_0__["default"];
if (typeof __webpack_require__.g.window !== 'undefined') {
  exp = new _PersistantStorageDriver__WEBPACK_IMPORTED_MODULE_1__["default"](__webpack_require__.g.window.sessionStorage, 'Prejudice.sessionStorage');
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exp);

/***/ }),

/***/ "./src/Prejudice/VariableStorageDriver.js":
/*!************************************************!*\
  !*** ./src/Prejudice/VariableStorageDriver.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VariableStorageDriver: () => (/* binding */ VariableStorageDriver),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var VariableStorageDriver = /*#__PURE__*/function () {
  function VariableStorageDriver() {
    _classCallCheck(this, VariableStorageDriver);
    this.records = {};
    this.observers = [];
    this.addObserver = this.addObserver.bind(this);
    this.notifyObservers = this.notifyObservers.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.clear = this.clear.bind(this);
    this.list = this.list.bind(this);
    this.count = this.count.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.getInstance = this.getInstance.bind(this);
  }
  _createClass(VariableStorageDriver, [{
    key: "getInstance",
    value: function getInstance() {
      return new this.constructor();
    }
  }, {
    key: "notifyObservers",
    value: function notifyObservers() {
      this.observers.forEach(function (observer) {
        if (typeof observer === 'function') {
          observer(this.records);
        }
      }, this);
      return this;
    }
  }, {
    key: "addObserver",
    value: function addObserver(observer) {
      this.observers.push(observer);
      return this;
    }
  }, {
    key: "add",
    value: function add(record) {
      var idx = this.findIndex(record);
      if (idx === -1) {
        this.records[record.datastore] = this.records[record.datastore] || [];
        this.records[record.datastore].push(record);
        this.notifyObservers();
        return true;
      }
      return false;
    }
  }, {
    key: "findIndex",
    value: function findIndex(record) {
      if (!this.records[record.datastore]) {
        return -1;
      }
      return this.records[record.datastore].findIndex(function (item) {
        return item.datastore === record.datastore && item.uid === record.uid;
      });
    }
  }, {
    key: "remove",
    value: function remove(record) {
      var idx = this.findIndex(record);
      if (idx >= 0) {
        this.records[record.datastore].splice(idx, 1);
        this.notifyObservers();
        return true;
      }
      return false;
    }
  }, {
    key: "clear",
    value: function clear(datastore) {
      if (datastore && this.count(datastore) > 0) {
        this.records[datastore] = [];
        this.notifyObservers();
        return true;
      } else if (this.count() > 0) {
        this.records = {};
        this.notifyObservers();
        return true;
      }
      return false;
    }
  }, {
    key: "list",
    value: function list(datastore) {
      if (datastore) {
        return this.records[datastore] || [];
      }
      var ret = [];
      Object.keys(this.records).forEach(function (key) {
        ret = ret.concat(this.list(key));
      }, this);
      return ret;
    }
  }, {
    key: "count",
    value: function count(datastore) {
      if (datastore) {
        return this.list(datastore).length;
      }
      var ret = 0;
      Object.keys(this.records).forEach(function (key) {
        ret += this.count(key);
      }, this);
      return ret;
    }
  }]);
  return VariableStorageDriver;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new VariableStorageDriver());


/***/ }),

/***/ "./node_modules/idle-timeout/dist/idle-timeout.js":
/*!********************************************************!*\
  !*** ./node_modules/idle-timeout/dist/idle-timeout.js ***!
  \********************************************************/
/***/ (function(module) {

/*! idleTimeout v2.0.0 | Copyright (c) 2016-2019 Jacob Müller */
(function (global, factory) {
     true ? module.exports = factory() :
    0;
}(this, function () { 'use strict';

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /** Creates an idle timeout instance. */

    var IdleTimeout =
    /** @class */
    function () {
      /**
       * The idle timeout constructor.
       * @param {Function} callback The callback function to invoke when the timeout is complete.
       * @param {object} [options] The configuration options for the timeout.
       * @returns {void}
       */
      function IdleTimeout(callback, options) {
        var _this = this;
        /** The timeout handle to reset the timeout. */


        this.timeoutHandle = null;
        /** Whether the timeout is idle. */

        this.isIdle = false;
        /** The start time of the timeout in milliseconds. */

        this.startTime = 0;
        /** The remaining time of the timeout in milliseconds. */

        this.remainingTime = 0;
        /** The last X-axis position on the page. */

        this.lastPageX = -1;
        /** The last Y-axis position on the page. */

        this.lastPageY = -1;
        /** The input event names. */

        this.eventNames = ['DOMMouseScroll', 'mousedown', 'mousemove', 'mousewheel', 'MSPointerDown', 'MSPointerMove', 'keydown', 'touchmove', 'touchstart', 'wheel'];
        /**
         * Handle the input events.
         * @param {Event} event The input event.
         * @returns {void}
         */

        this.handleEvent = function (event) {
          if (_this.remainingTime > 0) {
            return;
          }

          if (event.type === 'mousemove') {
            var _a = event,
                pageX = _a.pageX,
                pageY = _a.pageY;

            if (pageX === undefined && pageY === undefined || pageX === _this.lastPageX && pageY === _this.lastPageY) {
              return;
            }

            _this.lastPageX = pageX;
            _this.lastPageY = pageY;
          }

          _this.resetTimeout();
        };

        this.callback = callback;
        this.options = __assign({
          element: document.body,
          loop: false,
          timeout: 60 * 1000 * 5
        }, options);
        var element = this.options.element;
        this.eventNames.forEach(function (eventName) {
          element.addEventListener(eventName, _this.handleEvent);
        });
        this.resetTimeout();
      }
      /**
       * Pause the timeout.
       * @returns {void}
       */


      IdleTimeout.prototype.pause = function () {
        var remainingTime = this.startTime + this.options.timeout - new Date().getTime();

        if (remainingTime <= 0) {
          return;
        }

        this.remainingTime = remainingTime;

        if (this.timeoutHandle) {
          window.clearTimeout(this.timeoutHandle);
          this.timeoutHandle = null;
        }
      };
      /**
       * Resume the paused timeout.
       * @returns {void}
       */


      IdleTimeout.prototype.resume = function () {
        if (this.remainingTime <= 0) {
          return;
        }

        this.resetTimeout();
        this.remainingTime = 0;
      };
      /**
       * Reset the timeout.
       * @returns {void}
       */


      IdleTimeout.prototype.reset = function () {
        this.isIdle = false;
        this.remainingTime = 0;
        this.resetTimeout();
      };
      /**
       * Destroy the instance.
       * @returns {void}
       */


      IdleTimeout.prototype.destroy = function () {
        var _this = this;

        var element = this.options.element;
        this.eventNames.forEach(function (eventName) {
          element.removeEventListener(eventName, _this.handleEvent);
        });

        if (this.timeoutHandle) {
          window.clearTimeout(this.timeoutHandle);
        }
      };
      /**
       * Reset the timeout function.
       * @returns {void}
       */


      IdleTimeout.prototype.resetTimeout = function () {
        var _this = this;

        if (this.timeoutHandle) {
          window.clearTimeout(this.timeoutHandle);
          this.timeoutHandle = null;
        }

        if (this.isIdle && !this.options.loop) {
          return;
        }

        this.timeoutHandle = window.setTimeout(function () {
          _this.handleTimeout();
        }, this.remainingTime || this.options.timeout);
        this.startTime = new Date().getTime();
      };
      /**
       * Handle the completed timeout.
       * @returns {void}
       */


      IdleTimeout.prototype.handleTimeout = function () {
        this.isIdle = true;
        this.resetTimeout();
        this.callback();
      };

      Object.defineProperty(IdleTimeout.prototype, "idle", {
        /** Gets whether the timeout is idle. */
        get: function get() {
          return this.isIdle;
        },

        /**
         * Sets whether the timeout is idle.
         * @param {boolean} value Whether the timeout is idle.
         */
        set: function set(value) {
          if (value) {
            this.handleTimeout();
          } else {
            this.reset();
          }
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(IdleTimeout.prototype, "loop", {
        /**
         * Sets wether the timeout should restart on completion.
         * @param {boolean} value Wether the timeout should restart on completion.
         */
        set: function set(value) {
          this.options.loop = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(IdleTimeout.prototype, "timeout", {
        /**
         * Sets the idle timeout in milliseconds.
         * @param {number} value The idle timeout in milliseconds.
         */
        set: function set(value) {
          this.options.timeout = value;
        },
        enumerable: true,
        configurable: true
      });
      return IdleTimeout;
    }();

    var idleTimeout = function idleTimeout(callback, options) {
      return new IdleTimeout(callback, options);
    };

    return idleTimeout;

}));
//# sourceMappingURL=idle-timeout.js.map


/***/ }),

/***/ "./node_modules/reqwest/reqwest.js":
/*!*****************************************!*\
  !*** ./node_modules/reqwest/reqwest.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2015
  * https://github.com/ded/reqwest
  */

!function (name, context, definition) {
  if ( true && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else {}
}('reqwest', this, function () {

  var context = this

  if ('window' in context) {
    var doc = document
      , byTag = 'getElementsByTagName'
      , head = doc[byTag]('head')[0]
  } else {
    var XHR2
    try {
      XHR2 = __webpack_require__(/*! xhr2 */ "?2414")
    } catch (ex) {
      throw new Error('Peer dependency `xhr2` required! Please npm install xhr2')
    }
  }


  var httpsRe = /^http/
    , protocolRe = /(^\w+):\/\//
    , twoHundo = /^(20\d|1223)$/ //http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
    , readyState = 'readyState'
    , contentType = 'Content-Type'
    , requestedWith = 'X-Requested-With'
    , uniqid = 0
    , callbackPrefix = 'reqwest_' + (+new Date())
    , lastValue // data stored by the most recent JSONP callback
    , xmlHttpRequest = 'XMLHttpRequest'
    , xDomainRequest = 'XDomainRequest'
    , noop = function () {}

    , isArray = typeof Array.isArray == 'function'
        ? Array.isArray
        : function (a) {
            return a instanceof Array
          }

    , defaultHeaders = {
          'contentType': 'application/x-www-form-urlencoded'
        , 'requestedWith': xmlHttpRequest
        , 'accept': {
              '*':  'text/javascript, text/html, application/xml, text/xml, */*'
            , 'xml':  'application/xml, text/xml'
            , 'html': 'text/html'
            , 'text': 'text/plain'
            , 'json': 'application/json, text/javascript'
            , 'js':   'application/javascript, text/javascript'
          }
      }

    , xhr = function(o) {
        // is it x-domain
        if (o['crossOrigin'] === true) {
          var xhr = context[xmlHttpRequest] ? new XMLHttpRequest() : null
          if (xhr && 'withCredentials' in xhr) {
            return xhr
          } else if (context[xDomainRequest]) {
            return new XDomainRequest()
          } else {
            throw new Error('Browser does not support cross-origin requests')
          }
        } else if (context[xmlHttpRequest]) {
          return new XMLHttpRequest()
        } else if (XHR2) {
          return new XHR2()
        } else {
          return new ActiveXObject('Microsoft.XMLHTTP')
        }
      }
    , globalSetupOptions = {
        dataFilter: function (data) {
          return data
        }
      }

  function succeed(r) {
    var protocol = protocolRe.exec(r.url)
    protocol = (protocol && protocol[1]) || context.location.protocol
    return httpsRe.test(protocol) ? twoHundo.test(r.request.status) : !!r.request.response
  }

  function handleReadyState(r, success, error) {
    return function () {
      // use _aborted to mitigate against IE err c00c023f
      // (can't read props on aborted request objects)
      if (r._aborted) return error(r.request)
      if (r._timedOut) return error(r.request, 'Request is aborted: timeout')
      if (r.request && r.request[readyState] == 4) {
        r.request.onreadystatechange = noop
        if (succeed(r)) success(r.request)
        else
          error(r.request)
      }
    }
  }

  function setHeaders(http, o) {
    var headers = o['headers'] || {}
      , h

    headers['Accept'] = headers['Accept']
      || defaultHeaders['accept'][o['type']]
      || defaultHeaders['accept']['*']

    var isAFormData = typeof FormData !== 'undefined' && (o['data'] instanceof FormData);
    // breaks cross-origin requests with legacy browsers
    if (!o['crossOrigin'] && !headers[requestedWith]) headers[requestedWith] = defaultHeaders['requestedWith']
    if (!headers[contentType] && !isAFormData) headers[contentType] = o['contentType'] || defaultHeaders['contentType']
    for (h in headers)
      headers.hasOwnProperty(h) && 'setRequestHeader' in http && http.setRequestHeader(h, headers[h])
  }

  function setCredentials(http, o) {
    if (typeof o['withCredentials'] !== 'undefined' && typeof http.withCredentials !== 'undefined') {
      http.withCredentials = !!o['withCredentials']
    }
  }

  function generalCallback(data) {
    lastValue = data
  }

  function urlappend (url, s) {
    return url + (/\?/.test(url) ? '&' : '?') + s
  }

  function handleJsonp(o, fn, err, url) {
    var reqId = uniqid++
      , cbkey = o['jsonpCallback'] || 'callback' // the 'callback' key
      , cbval = o['jsonpCallbackName'] || reqwest.getcallbackPrefix(reqId)
      , cbreg = new RegExp('((^|\\?|&)' + cbkey + ')=([^&]+)')
      , match = url.match(cbreg)
      , script = doc.createElement('script')
      , loaded = 0
      , isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1

    if (match) {
      if (match[3] === '?') {
        url = url.replace(cbreg, '$1=' + cbval) // wildcard callback func name
      } else {
        cbval = match[3] // provided callback func name
      }
    } else {
      url = urlappend(url, cbkey + '=' + cbval) // no callback details, add 'em
    }

    context[cbval] = generalCallback

    script.type = 'text/javascript'
    script.src = url
    script.async = true
    if (typeof script.onreadystatechange !== 'undefined' && !isIE10) {
      // need this for IE due to out-of-order onreadystatechange(), binding script
      // execution to an event listener gives us control over when the script
      // is executed. See http://jaubourg.net/2010/07/loading-script-as-onclick-handler-of.html
      script.htmlFor = script.id = '_reqwest_' + reqId
    }

    script.onload = script.onreadystatechange = function () {
      if ((script[readyState] && script[readyState] !== 'complete' && script[readyState] !== 'loaded') || loaded) {
        return false
      }
      script.onload = script.onreadystatechange = null
      script.onclick && script.onclick()
      // Call the user callback with the last value stored and clean up values and scripts.
      fn(lastValue)
      lastValue = undefined
      head.removeChild(script)
      loaded = 1
    }

    // Add the script to the DOM head
    head.appendChild(script)

    // Enable JSONP timeout
    return {
      abort: function () {
        script.onload = script.onreadystatechange = null
        err({}, 'Request is aborted: timeout', {})
        lastValue = undefined
        head.removeChild(script)
        loaded = 1
      }
    }
  }

  function getRequest(fn, err) {
    var o = this.o
      , method = (o['method'] || 'GET').toUpperCase()
      , url = typeof o === 'string' ? o : o['url']
      // convert non-string objects to query-string form unless o['processData'] is false
      , data = (o['processData'] !== false && o['data'] && typeof o['data'] !== 'string')
        ? reqwest.toQueryString(o['data'])
        : (o['data'] || null)
      , http
      , sendWait = false

    // if we're working on a GET request and we have data then we should append
    // query string to end of URL and not post data
    if ((o['type'] == 'jsonp' || method == 'GET') && data) {
      url = urlappend(url, data)
      data = null
    }

    if (o['type'] == 'jsonp') return handleJsonp(o, fn, err, url)

    // get the xhr from the factory if passed
    // if the factory returns null, fall-back to ours
    http = (o.xhr && o.xhr(o)) || xhr(o)

    http.open(method, url, o['async'] === false ? false : true)
    setHeaders(http, o)
    setCredentials(http, o)
    if (context[xDomainRequest] && http instanceof context[xDomainRequest]) {
        http.onload = fn
        http.onerror = err
        // NOTE: see
        // http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/30ef3add-767c-4436-b8a9-f1ca19b4812e
        http.onprogress = function() {}
        sendWait = true
    } else {
      http.onreadystatechange = handleReadyState(this, fn, err)
    }
    o['before'] && o['before'](http)
    if (sendWait) {
      setTimeout(function () {
        http.send(data)
      }, 200)
    } else {
      http.send(data)
    }
    return http
  }

  function Reqwest(o, fn) {
    this.o = o
    this.fn = fn

    init.apply(this, arguments)
  }

  function setType(header) {
    // json, javascript, text/plain, text/html, xml
    if (header === null) return undefined; //In case of no content-type.
    if (header.match('json')) return 'json'
    if (header.match('javascript')) return 'js'
    if (header.match('text')) return 'html'
    if (header.match('xml')) return 'xml'
  }

  function init(o, fn) {

    this.url = typeof o == 'string' ? o : o['url']
    this.timeout = null

    // whether request has been fulfilled for purpose
    // of tracking the Promises
    this._fulfilled = false
    // success handlers
    this._successHandler = function(){}
    this._fulfillmentHandlers = []
    // error handlers
    this._errorHandlers = []
    // complete (both success and fail) handlers
    this._completeHandlers = []
    this._erred = false
    this._responseArgs = {}

    var self = this

    fn = fn || function () {}

    if (o['timeout']) {
      this.timeout = setTimeout(function () {
        timedOut()
      }, o['timeout'])
    }

    if (o['success']) {
      this._successHandler = function () {
        o['success'].apply(o, arguments)
      }
    }

    if (o['error']) {
      this._errorHandlers.push(function () {
        o['error'].apply(o, arguments)
      })
    }

    if (o['complete']) {
      this._completeHandlers.push(function () {
        o['complete'].apply(o, arguments)
      })
    }

    function complete (resp) {
      o['timeout'] && clearTimeout(self.timeout)
      self.timeout = null
      while (self._completeHandlers.length > 0) {
        self._completeHandlers.shift()(resp)
      }
    }

    function success (resp) {
      var type = o['type'] || resp && setType(resp.getResponseHeader('Content-Type')) // resp can be undefined in IE
      resp = (type !== 'jsonp') ? self.request : resp
      // use global data filter on response text
      var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type)
        , r = filteredResponse
      try {
        resp.responseText = r
      } catch (e) {
        // can't assign this in IE<=8, just ignore
      }
      if (r) {
        switch (type) {
        case 'json':
          try {
            resp = context.JSON ? context.JSON.parse(r) : eval('(' + r + ')')
          } catch (err) {
            return error(resp, 'Could not parse JSON in response', err)
          }
          break
        case 'js':
          resp = eval(r)
          break
        case 'html':
          resp = r
          break
        case 'xml':
          resp = resp.responseXML
              && resp.responseXML.parseError // IE trololo
              && resp.responseXML.parseError.errorCode
              && resp.responseXML.parseError.reason
            ? null
            : resp.responseXML
          break
        }
      }

      self._responseArgs.resp = resp
      self._fulfilled = true
      fn(resp)
      self._successHandler(resp)
      while (self._fulfillmentHandlers.length > 0) {
        resp = self._fulfillmentHandlers.shift()(resp)
      }

      complete(resp)
    }

    function timedOut() {
      self._timedOut = true
      self.request.abort()
    }

    function error(resp, msg, t) {
      resp = self.request
      self._responseArgs.resp = resp
      self._responseArgs.msg = msg
      self._responseArgs.t = t
      self._erred = true
      while (self._errorHandlers.length > 0) {
        self._errorHandlers.shift()(resp, msg, t)
      }
      complete(resp)
    }

    this.request = getRequest.call(this, success, error)
  }

  Reqwest.prototype = {
    abort: function () {
      this._aborted = true
      this.request.abort()
    }

  , retry: function () {
      init.call(this, this.o, this.fn)
    }

    /**
     * Small deviation from the Promises A CommonJs specification
     * http://wiki.commonjs.org/wiki/Promises/A
     */

    /**
     * `then` will execute upon successful requests
     */
  , then: function (success, fail) {
      success = success || function () {}
      fail = fail || function () {}
      if (this._fulfilled) {
        this._responseArgs.resp = success(this._responseArgs.resp)
      } else if (this._erred) {
        fail(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._fulfillmentHandlers.push(success)
        this._errorHandlers.push(fail)
      }
      return this
    }

    /**
     * `always` will execute whether the request succeeds or fails
     */
  , always: function (fn) {
      if (this._fulfilled || this._erred) {
        fn(this._responseArgs.resp)
      } else {
        this._completeHandlers.push(fn)
      }
      return this
    }

    /**
     * `fail` will execute when the request fails
     */
  , fail: function (fn) {
      if (this._erred) {
        fn(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t)
      } else {
        this._errorHandlers.push(fn)
      }
      return this
    }
  , 'catch': function (fn) {
      return this.fail(fn)
    }
  }

  function reqwest(o, fn) {
    return new Reqwest(o, fn)
  }

  // normalize newline variants according to spec -> CRLF
  function normalize(s) {
    return s ? s.replace(/\r?\n/g, '\r\n') : ''
  }

  function serial(el, cb) {
    var n = el.name
      , t = el.tagName.toLowerCase()
      , optCb = function (o) {
          // IE gives value="" even where there is no value attribute
          // 'specified' ref: http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-862529273
          if (o && !o['disabled'])
            cb(n, normalize(o['attributes']['value'] && o['attributes']['value']['specified'] ? o['value'] : o['text']))
        }
      , ch, ra, val, i

    // don't serialize elements that are disabled or without a name
    if (el.disabled || !n) return

    switch (t) {
    case 'input':
      if (!/reset|button|image|file/i.test(el.type)) {
        ch = /checkbox/i.test(el.type)
        ra = /radio/i.test(el.type)
        val = el.value
        // WebKit gives us "" instead of "on" if a checkbox has no value, so correct it here
        ;(!(ch || ra) || el.checked) && cb(n, normalize(ch && val === '' ? 'on' : val))
      }
      break
    case 'textarea':
      cb(n, normalize(el.value))
      break
    case 'select':
      if (el.type.toLowerCase() === 'select-one') {
        optCb(el.selectedIndex >= 0 ? el.options[el.selectedIndex] : null)
      } else {
        for (i = 0; el.length && i < el.length; i++) {
          el.options[i].selected && optCb(el.options[i])
        }
      }
      break
    }
  }

  // collect up all form elements found from the passed argument elements all
  // the way down to child elements; pass a '<form>' or form fields.
  // called with 'this'=callback to use for serial() on each element
  function eachFormElement() {
    var cb = this
      , e, i
      , serializeSubtags = function (e, tags) {
          var i, j, fa
          for (i = 0; i < tags.length; i++) {
            fa = e[byTag](tags[i])
            for (j = 0; j < fa.length; j++) serial(fa[j], cb)
          }
        }

    for (i = 0; i < arguments.length; i++) {
      e = arguments[i]
      if (/input|select|textarea/i.test(e.tagName)) serial(e, cb)
      serializeSubtags(e, [ 'input', 'select', 'textarea' ])
    }
  }

  // standard query string style serialization
  function serializeQueryString() {
    return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
  }

  // { 'name': 'value', ... } style serialization
  function serializeHash() {
    var hash = {}
    eachFormElement.apply(function (name, value) {
      if (name in hash) {
        hash[name] && !isArray(hash[name]) && (hash[name] = [hash[name]])
        hash[name].push(value)
      } else hash[name] = value
    }, arguments)
    return hash
  }

  // [ { name: 'name', value: 'value' }, ... ] style serialization
  reqwest.serializeArray = function () {
    var arr = []
    eachFormElement.apply(function (name, value) {
      arr.push({name: name, value: value})
    }, arguments)
    return arr
  }

  reqwest.serialize = function () {
    if (arguments.length === 0) return ''
    var opt, fn
      , args = Array.prototype.slice.call(arguments, 0)

    opt = args.pop()
    opt && opt.nodeType && args.push(opt) && (opt = null)
    opt && (opt = opt.type)

    if (opt == 'map') fn = serializeHash
    else if (opt == 'array') fn = reqwest.serializeArray
    else fn = serializeQueryString

    return fn.apply(null, args)
  }

  reqwest.toQueryString = function (o, trad) {
    var prefix, i
      , traditional = trad || false
      , s = []
      , enc = encodeURIComponent
      , add = function (key, value) {
          // If value is a function, invoke it and return its value
          value = ('function' === typeof value) ? value() : (value == null ? '' : value)
          s[s.length] = enc(key) + '=' + enc(value)
        }
    // If an array was passed in, assume that it is an array of form elements.
    if (isArray(o)) {
      for (i = 0; o && i < o.length; i++) add(o[i]['name'], o[i]['value'])
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in o) {
        if (o.hasOwnProperty(prefix)) buildParams(prefix, o[prefix], traditional, add)
      }
    }

    // spaces should be + according to spec
    return s.join('&').replace(/%20/g, '+')
  }

  function buildParams(prefix, obj, traditional, add) {
    var name, i, v
      , rbracket = /\[\]$/

    if (isArray(obj)) {
      // Serialize array item.
      for (i = 0; obj && i < obj.length; i++) {
        v = obj[i]
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v)
        } else {
          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add)
        }
      }
    } else if (obj && obj.toString() === '[object Object]') {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add)
      }

    } else {
      // Serialize scalar item.
      add(prefix, obj)
    }
  }

  reqwest.getcallbackPrefix = function () {
    return callbackPrefix
  }

  // jQuery and Zepto compatibility, differences can be remapped here so you can call
  // .ajax.compat(options, callback)
  reqwest.compat = function (o, fn) {
    if (o) {
      o['type'] && (o['method'] = o['type']) && delete o['type']
      o['dataType'] && (o['type'] = o['dataType'])
      o['jsonpCallback'] && (o['jsonpCallbackName'] = o['jsonpCallback']) && delete o['jsonpCallback']
      o['jsonp'] && (o['jsonpCallback'] = o['jsonp'])
    }
    return new Reqwest(o, fn)
  }

  reqwest.ajaxSetup = function (options) {
    options = options || {}
    for (var k in options) {
      globalSetupOptions[k] = options[k]
    }
  }

  return reqwest
});


/***/ }),

/***/ "?2414":
/*!**********************!*\
  !*** xhr2 (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/Prejudice.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Prejudice_SessionStorageDriver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prejudice/SessionStorageDriver */ "./src/Prejudice/SessionStorageDriver.js");
/* harmony import */ var _Prejudice_LocalStorageDriver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prejudice/LocalStorageDriver */ "./src/Prejudice/LocalStorageDriver.js");
/* harmony import */ var _Prejudice_VariableStorageDriver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prejudice/VariableStorageDriver */ "./src/Prejudice/VariableStorageDriver.js");
/* harmony import */ var _Prejudice_Action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Prejudice/Action */ "./src/Prejudice/Action.js");
/* harmony import */ var _Prejudice_Action_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Prejudice/Action/Text */ "./src/Prejudice/Action/Text.js");
/* harmony import */ var _Prejudice_Action_Email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Prejudice/Action/Email */ "./src/Prejudice/Action/Email.js");
/* harmony import */ var _Prejudice_Action_File__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Prejudice/Action/File */ "./src/Prejudice/Action/File.js");
/* harmony import */ var _Prejudice_Driver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Prejudice/Driver */ "./src/Prejudice/Driver.js");
/* harmony import */ var _Prejudice_Driver_Record__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Prejudice/Driver/Record */ "./src/Prejudice/Driver/Record.js");
/* harmony import */ var _Prejudice_Driver_Record_UidHash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Prejudice/Driver/Record/UidHash */ "./src/Prejudice/Driver/Record/UidHash.js");
/* harmony import */ var _Prejudice_Driver_Record_ReactHash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Prejudice/Driver/Record/ReactHash */ "./src/Prejudice/Driver/Record/ReactHash.js");
/* harmony import */ var _Prejudice_Driver_Record_Pride__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Prejudice/Driver/Record/Pride */ "./src/Prejudice/Driver/Record/Pride.js");
/* harmony import */ var _Prejudice_Driver_Record_Null__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Prejudice/Driver/Record/Null */ "./src/Prejudice/Driver/Record/Null.js");
/* harmony import */ var _Prejudice_Profile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Prejudice/Profile */ "./src/Prejudice/Profile.js");
/* harmony import */ var _Prejudice_IdleTimeout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Prejudice/IdleTimeout */ "./src/Prejudice/IdleTimeout.js");


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }















var Prejudice = /*#__PURE__*/function () {
  function Prejudice(init) {
    _classCallCheck(this, Prejudice);
    this.recordStorage = (init.recordStorage || _Prejudice_SessionStorageDriver__WEBPACK_IMPORTED_MODULE_0__["default"]).getInstance();
    this.actions = {
      text: _Prejudice_Action_Text__WEBPACK_IMPORTED_MODULE_4__["default"],
      email: _Prejudice_Action_Email__WEBPACK_IMPORTED_MODULE_5__["default"],
      file: _Prejudice_Action_File__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    this.datastores = {};
    this.profile = _Prejudice_Profile__WEBPACK_IMPORTED_MODULE_13__["default"].getInstance();
    this.addObserver = this.addObserver.bind(this);
    this.setRecordStorage = this.setRecordStorage.bind(this);
    this.addRecord = this.addRecord.bind(this);
    this.listRecords = this.listRecords.bind(this);
    this.removeRecord = this.removeRecord.bind(this);
    this.act = this.act.bind(this);
    this.clearRecords = this.clearRecords.bind(this);
    this.registerRecordEngine = this.registerRecordEngine.bind(this);
    this.resolveRecord = this.resolveRecord.bind(this);
    this.registerDatastore = this.registerDatastore.bind(this);
    this.registerActionBaseUrl = this.registerActionBaseUrl.bind(this);
    this.addProfileObserver = this.addProfileObserver.bind(this);
    if (init.recordEngine) {
      this.registerRecordEngine(init.recordEngine);
    }
    if (init.datastores) {
      init.datastores.forEach(function (datastore) {
        if (datastore.slug && datastore.uid) {
          this.datastores[datastore.uid] = [init.baseUrl || __webpack_require__.g.window.location.origin, datastore.slug, 'record'].join('/');
        }
      }, this);
    }
    if (init.actionBaseUrl) {
      this.registerActionBaseUrl(init.actionBaseUrl);
    }
  }
  _createClass(Prejudice, [{
    key: "registerActionBaseUrl",
    value: function registerActionBaseUrl(baseUrl) {
      this.profile.registerBaseUrl(baseUrl);
      this.actions.text.registerBaseUrl(baseUrl);
      this.actions.email.registerBaseUrl(baseUrl);
      this.actions.file.registerBaseUrl(baseUrl);
      return this;
    }
  }, {
    key: "registerDatastore",
    value: function registerDatastore(datastoreUid, datastoreBaseUrl) {
      this.datastores[datastoreUid] = datastoreBaseUrl;
      return this;
    }
  }, {
    key: "registerRecordEngine",
    value: function registerRecordEngine(engine) {
      Prejudice.Driver.Record.UidHash.registerEngine(engine);
      Prejudice.Driver.Record.ReactHash.registerEngine(engine);
      Prejudice.Driver.Record.Pride.registerEngine(engine);
      return this;
    }
  }, {
    key: "addProfileObserver",
    value: function addProfileObserver(observer) {
      this.profile.addObserver(observer);
      return this;
    }
  }, {
    key: "addObserver",
    value: function addObserver(observer) {
      this.recordStorage.addObserver(observer);
      return this;
    }
  }, {
    key: "setRecordStorage",
    value: function setRecordStorage(storage) {
      this.recordStorage = storage;
      return this;
    }
  }, {
    key: "addRecord",
    value: function addRecord(record) {
      if (record.uid && record.datastore) {
        this.recordStorage.add(record);
        return this;
      }
      record = this.resolveRecord(record);
      record.renderFull(function (record, recordStorage) {
        return function (data) {
          if (data.has_holdings) {
            record.getHoldings(function (recordStorage, data) {
              return function (holdings) {
                data.rawHoldings = holdings;
                recordStorage.add(data);
              };
            }(recordStorage, data));
          } else {
            recordStorage.add(data);
          }
        };
      }(record, this.recordStorage));
      return this;
    }
  }, {
    key: "resolveRecord",
    value: function resolveRecord(data) {
      if (Prejudice.Driver.Record.ReactHash.match(data)) {
        return Prejudice.Driver.Record.ReactHash.dataToRecord(data);
      } else if (Prejudice.Driver.Record.UidHash.match(data)) {
        return Prejudice.Driver.Record.UidHash.dataToRecord(data);
      } else if (Prejudice.Driver.Record.Pride.match(data)) {
        return Prejudice.Driver.Record.Pride.dataToRecord(data);
      }
      return Prejudice.Driver.Record.Null.dataToRecord(data);
    }
  }, {
    key: "listRecords",
    value: function listRecords(datastore) {
      return this.recordStorage.list(datastore);
    }
  }, {
    key: "countRecords",
    value: function countRecords(datastore) {
      return this.recordStorage.count(datastore);
    }
  }, {
    key: "removeRecord",
    value: function removeRecord(record) {
      if (record.uid && record.datastore) {
        this.recordStorage.remove(record);
        return this;
      }
      record = this.resolveRecord(record);
      record.renderFull(function (recordStorage) {
        return function (data) {
          recordStorage.remove(data);
        };
      }(this.recordStorage));
      return this;
    }
  }, {
    key: "act",
    value: function act(action, datastore, argument, callback) {
      this.actions[action].apply(_defineProperty({
        to: argument
      }, datastore, {
        records: this.listRecords(datastore).map(function (item) {
          return item.uid;
        }),
        base_url: this.datastores[datastore]
      }), callback);
      return this;
    }
  }, {
    key: "clearRecords",
    value: function clearRecords(datastore) {
      this.recordStorage.clear(datastore);
      return this;
    }
  }]);
  return Prejudice;
}();
Object.defineProperty(Prejudice, 'SessionStorageDriver', {
  value: _Prejudice_SessionStorageDriver__WEBPACK_IMPORTED_MODULE_0__["default"]
});
Object.defineProperty(Prejudice, 'LocalStorageDriver', {
  value: _Prejudice_LocalStorageDriver__WEBPACK_IMPORTED_MODULE_1__["default"]
});
Object.defineProperty(Prejudice, 'VariableStorageDriver', {
  value: _Prejudice_VariableStorageDriver__WEBPACK_IMPORTED_MODULE_2__["default"]
});
Object.defineProperty(Prejudice, 'Profile', {
  value: _Prejudice_Profile__WEBPACK_IMPORTED_MODULE_13__["default"]
});
Object.defineProperty(Prejudice, 'IdleTimeout', {
  value: _Prejudice_IdleTimeout__WEBPACK_IMPORTED_MODULE_14__["default"]
});
Object.defineProperty(Prejudice, 'Action', {
  value: _Prejudice_Action__WEBPACK_IMPORTED_MODULE_3__["default"]
});
Object.defineProperty(Prejudice.Action, 'Text', {
  value: _Prejudice_Action_Text__WEBPACK_IMPORTED_MODULE_4__["default"]
});
Object.defineProperty(Prejudice.Action, 'Email', {
  value: _Prejudice_Action_Email__WEBPACK_IMPORTED_MODULE_5__["default"]
});
Object.defineProperty(Prejudice.Action, 'File', {
  value: _Prejudice_Action_File__WEBPACK_IMPORTED_MODULE_6__["default"]
});
Object.defineProperty(Prejudice, 'Driver', {
  value: _Prejudice_Driver__WEBPACK_IMPORTED_MODULE_7__["default"]
});
Object.defineProperty(Prejudice.Driver, 'Record', {
  value: _Prejudice_Driver_Record__WEBPACK_IMPORTED_MODULE_8__["default"]
});
Object.defineProperty(Prejudice.Driver.Record, 'UidHash', {
  value: _Prejudice_Driver_Record_UidHash__WEBPACK_IMPORTED_MODULE_9__["default"]
});
Object.defineProperty(Prejudice.Driver.Record, 'ReactHash', {
  value: _Prejudice_Driver_Record_ReactHash__WEBPACK_IMPORTED_MODULE_10__["default"]
});
Object.defineProperty(Prejudice.Driver.Record, 'Pride', {
  value: _Prejudice_Driver_Record_Pride__WEBPACK_IMPORTED_MODULE_11__["default"]
});
Object.defineProperty(Prejudice.Driver.Record, 'Null', {
  value: _Prejudice_Driver_Record_Null__WEBPACK_IMPORTED_MODULE_12__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prejudice);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=prejudice.js.map