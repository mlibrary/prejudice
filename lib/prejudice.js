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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function Action() {
  _classCallCheck(this, Action);

  this.apply = function (records, argument, callback) {
    callback({ status: 'Success' });
  };
};

exports.default = Action;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VariableStorageDriver = function VariableStorageDriver() {
  var _this = this;

  _classCallCheck(this, VariableStorageDriver);

  this.notifyObservers = function () {
    _this.observers.forEach(function (observer) {
      observer(this.records);
    }, _this);
  };

  this.add = function (record) {
    _this.records.push(record);
  };

  this.remove = function (record) {
    _this.records = _this.records.filter(function (e) {
      return e !== record;
    });
  };

  this.clear = function (record) {
    _this.records = [];
  };

  this.list = function (record) {
    return _this.records;
  };

  this.records = [];
  this.observers = [];
};

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

var Prejudice = function Prejudice() {
  var _this = this;

  _classCallCheck(this, Prejudice);

  this.addObserver = function (observer) {
    _this.recordStorage.addObserver(observer);
  };

  this.setRecordStorage = function (storage) {
    _this.recordStorage = storage;
    return _this;
  };

  this.addRecord = function (record) {
    _this.recordStorage.add(record);
    return _this;
  };

  this.listRecords = function () {
    return _this.recordStorage.list();
  };

  this.removeRecord = function (record) {
    _this.recordStorage.remove(record);
    return _this;
  };

  this.act = function (action, argument, callback) {
    _this.actions[action].apply(_this.listRecords(), argument, callback);
  };

  this.clearRecords = function () {
    _this.recordStorage.clear();
  };

  this.recordStorage = _SessionStorageDriver2.default;
  this.actions = {
    text: _Text2.default,
    email: _Email2.default,
    favorites: _Favorites2.default,
    file: _File2.default
  };
};

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

var _VariableStorageDriver = __webpack_require__(1);

var _VariableStorageDriver2 = _interopRequireDefault(_VariableStorageDriver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var exp = _VariableStorageDriver2.default;

if (typeof global.window !== 'undefined') {
  var SessionStorageDriver = function SessionStorageDriver() {
    var _this = this;

    _classCallCheck(this, SessionStorageDriver);

    this.notifyObservers = function () {
      _this.observers.forEach(function (observer) {
        observer(this.records);
      }, _this);
    };

    this.read = function () {
      _this.records = global.window.sessionStorage.getItem(_this.key) || [];
      _this.notifyObservers();
    };

    this.write = function () {
      _this.notifyObservers();
      return global.window.sessionStorage.setItem(_this.key, _this.records);
    };

    this.add = function (record) {
      _this.records.push(record);
      _this.write();
    };

    this.remove = function (record) {
      _this.records = _this.records.filter(function (e) {
        return e !== record;
      });
      _this.write();
    };

    this.clear = function (record) {
      _this.records = [];
      _this.write();
    };

    this.list = function (record) {
      return _this.records;
    };

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
  };

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

var _VariableStorageDriver = __webpack_require__(1);

var _VariableStorageDriver2 = _interopRequireDefault(_VariableStorageDriver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var exp = _VariableStorageDriver2.default;

if (typeof global.window !== 'undefined') {
  var LocalStorageDriver = function LocalStorageDriver() {
    var _this = this;

    _classCallCheck(this, LocalStorageDriver);

    this.notifyObservers = function () {
      _this.observers.forEach(function (observer) {
        observer(this.records);
      }, _this);
    };

    this.read = function () {
      _this.records = global.window.localStorage.getItem(_this.key) || [];
      _this.notifyObservers();
    };

    this.write = function () {
      _this.notifyObservers();
      return global.window.localStorage.setItem(_this.key, _this.records);
    };

    this.add = function (record) {
      _this.records.push(record);
      _this.write();
    };

    this.remove = function (record) {
      _this.records = _this.records.filter(function (e) {
        return e !== record;
      });
      _this.write();
    };

    this.clear = function (record) {
      _this.records = [];
      _this.write();
    };

    this.list = function (record) {
      return _this.records;
    };

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
  };

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