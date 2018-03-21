(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("prejudice", [], factory);
	else if(typeof exports === 'object')
		exports["prejudice"] = factory();
	else
		root["prejudice"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function () {
  function Action() {
    _classCallCheck(this, Action);
  }

  _createClass(Action, [{
    key: 'apply',
    value: function apply(records, argument, callback) {
      callback({ status: 'Success' });
    }
  }]);

  return Action;
}();

exports.default = Action;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VariableStorageDriver = function () {
  function VariableStorageDriver() {
    _classCallCheck(this, VariableStorageDriver);

    this.records = [];
    this.observers = [];
  }

  _createClass(VariableStorageDriver, [{
    key: "notifyObservers",
    value: function notifyObservers() {
      this.observers.forEach(function (observer) {
        observer(this.records);
      }, this);
    }
  }, {
    key: "add",
    value: function add(record) {
      this.records.push(record);
    }
  }, {
    key: "remove",
    value: function remove(record) {
      this.records = this.records.filter(function (e) {
        return e !== record;
      });
    }
  }, {
    key: "clear",
    value: function clear(record) {
      this.records = [];
    }
  }, {
    key: "list",
    value: function list(record) {
      return this.records;
    }
  }]);

  return VariableStorageDriver;
}();

exports.default = new VariableStorageDriver();
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SessionStorageDriver = __webpack_require__(4);

var _SessionStorageDriver2 = _interopRequireDefault(_SessionStorageDriver);

var _LocalStorageDriver = __webpack_require__(5);

var _LocalStorageDriver2 = _interopRequireDefault(_LocalStorageDriver);

var _VariableStorageDriver = __webpack_require__(1);

var _VariableStorageDriver2 = _interopRequireDefault(_VariableStorageDriver);

var _Action = __webpack_require__(0);

var _Action2 = _interopRequireDefault(_Action);

var _Text = __webpack_require__(6);

var _Text2 = _interopRequireDefault(_Text);

var _Email = __webpack_require__(7);

var _Email2 = _interopRequireDefault(_Email);

var _Favorites = __webpack_require__(8);

var _Favorites2 = _interopRequireDefault(_Favorites);

var _File = __webpack_require__(9);

var _File2 = _interopRequireDefault(_File);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Prejudice = function () {
  function Prejudice() {
    _classCallCheck(this, Prejudice);

    this.recordStorage = _SessionStorageDriver2.default;
    this.actions = {
      text: _Text2.default,
      email: _Email2.default,
      favorites: _Favorites2.default,
      file: _File2.default
    };
  }

  _createClass(Prejudice, [{
    key: 'addObserver',
    value: function addObserver(observer) {
      this.recordStorage.addObserver(observer);
    }
  }, {
    key: 'setRecordStorage',
    value: function setRecordStorage(storage) {
      this.recordStorage = storage;
      return this;
    }
  }, {
    key: 'addRecord',
    value: function addRecord(record) {
      this.recordStorage.add(record);
      return this;
    }
  }, {
    key: 'listRecords',
    value: function listRecords() {
      return this.recordStorage.list();
    }
  }, {
    key: 'removeRecord',
    value: function removeRecord(record) {
      this.recordStorage.remove(record);
      return this;
    }
  }, {
    key: 'act',
    value: function act(action, argument, callback) {
      this.actions[action].apply(this.listRecords(), argument, callback);
    }
  }, {
    key: 'clearRecords',
    value: function clearRecords() {
      this.recordStorage.clear();
    }
  }]);

  return Prejudice;
}();

Object.defineProperty(Prejudice, 'SessionStorageDriver', { value: _SessionStorageDriver2.default });
Object.defineProperty(Prejudice, 'LocalStorageDriver', { value: _LocalStorageDriver2.default });
Object.defineProperty(Prejudice, 'VariableStorageDriver', { value: _VariableStorageDriver2.default });

Object.defineProperty(Prejudice, 'Action', { value: _Action2.default });
Object.defineProperty(Prejudice.Action, 'Text', { value: _Text2.default });
Object.defineProperty(Prejudice.Action, 'Email', { value: _Email2.default });
Object.defineProperty(Prejudice.Action, 'File', { value: _File2.default });
Object.defineProperty(Prejudice.Action, 'Favorites', { value: _Favorites2.default });

exports.default = Prejudice;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VariableStorageDriver = __webpack_require__(1);

var _VariableStorageDriver2 = _interopRequireDefault(_VariableStorageDriver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var exp = _VariableStorageDriver2.default;

if (typeof global.window !== 'undefined') {
  var SessionStorageDriver = function () {
    function SessionStorageDriver() {
      _classCallCheck(this, SessionStorageDriver);

      this.key = 'Prejudice.SessionStorageDriver';
      this.observers = [];
      this.read();
      global.window.addEventListener('storage', function (driver) {
        return function (e) {
          if (e.storageArea === global.window.sessionStorage) {
            driver.read();
          }
        };
      }(this));
    }

    _createClass(SessionStorageDriver, [{
      key: 'notifyObservers',
      value: function notifyObservers() {
        this.observers.forEach(function (observer) {
          observer(this.records);
        }, this);
      }
    }, {
      key: 'read',
      value: function read() {
        this.records = global.window.sessionStorage.getItem(this.key) || [];
        this.notifyObservers();
      }
    }, {
      key: 'write',
      value: function write() {
        this.notifyObservers();
        return global.window.sessionStorage.setItem(this.key, this.records);
      }
    }, {
      key: 'add',
      value: function add(record) {
        this.records.push(record);
        this.write();
      }
    }, {
      key: 'remove',
      value: function remove(record) {
        this.records = this.records.filter(function (e) {
          return e !== record;
        });
        this.write();
      }
    }, {
      key: 'clear',
      value: function clear(record) {
        this.records = [];
        this.write();
      }
    }, {
      key: 'list',
      value: function list(record) {
        return this.records;
      }
    }]);

    return SessionStorageDriver;
  }();

  exp = new SessionStorageDriver();
}

exports.default = exp;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _VariableStorageDriver = __webpack_require__(1);

var _VariableStorageDriver2 = _interopRequireDefault(_VariableStorageDriver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var exp = _VariableStorageDriver2.default;

if (typeof global.window !== 'undefined') {
  var LocalStorageDriver = function () {
    function LocalStorageDriver() {
      _classCallCheck(this, LocalStorageDriver);

      this.key = 'Prejudice.LocalStorageDriver';
      this.observers = [];
      this.read();
      global.window.addEventListener('storage', function (driver) {
        return function (e) {
          if (e.storageArea === window.localStorage) {
            driver.read();
          }
        };
      }(this));
    }

    _createClass(LocalStorageDriver, [{
      key: 'notifyObservers',
      value: function notifyObservers() {
        this.observers.forEach(function (observer) {
          observer(this.records);
        }, this);
      }
    }, {
      key: 'read',
      value: function read() {
        this.records = global.window.localStorage.getItem(this.key) || [];
        this.notifyObservers();
      }
    }, {
      key: 'write',
      value: function write() {
        this.notifyObservers();
        return global.window.localStorage.setItem(this.key, this.records);
      }
    }, {
      key: 'add',
      value: function add(record) {
        this.records.push(record);
        this.write();
      }
    }, {
      key: 'remove',
      value: function remove(record) {
        this.records = this.records.filter(function (e) {
          return e !== record;
        });
        this.write();
      }
    }, {
      key: 'clear',
      value: function clear(record) {
        this.records = [];
        this.write();
      }
    }, {
      key: 'list',
      value: function list(record) {
        return this.records;
      }
    }]);

    return LocalStorageDriver;
  }();

  ;
  exp = new LocalStorageDriver();
}

exports.default = exp;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Action2 = __webpack_require__(0);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_Action) {
  _inherits(Text, _Action);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  return Text;
}(_Action3.default);

;

exports.default = new Text();
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Action2 = __webpack_require__(0);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Email = function (_Action) {
  _inherits(Email, _Action);

  function Email() {
    _classCallCheck(this, Email);

    return _possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).apply(this, arguments));
  }

  return Email;
}(_Action3.default);

;

exports.default = new Email();
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Action2 = __webpack_require__(0);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Favorites = function (_Action) {
  _inherits(Favorites, _Action);

  function Favorites() {
    _classCallCheck(this, Favorites);

    return _possibleConstructorReturn(this, (Favorites.__proto__ || Object.getPrototypeOf(Favorites)).apply(this, arguments));
  }

  return Favorites;
}(_Action3.default);

;

exports.default = new Favorites();
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Action2 = __webpack_require__(0);

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var File = function (_Action) {
  _inherits(File, _Action);

  function File() {
    _classCallCheck(this, File);

    return _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).apply(this, arguments));
  }

  return File;
}(_Action3.default);

;

exports.default = new File();
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=prejudice.js.map