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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

    this.apply = this.apply.bind(this);
    this.actionBaseUrl = '';

    this.apply = this.apply.bind(this);
    this.registerBaseUrl = this.registerBaseUrl.bind(this);
  }

  _createClass(Action, [{
    key: 'apply',
    value: function apply(records, argument, callback) {
      callback({ status: 'Success' });
      return this;
    }
  }, {
    key: 'registerBaseUrl',
    value: function registerBaseUrl(baseUrl) {
      this.baseUrl = baseUrl;
      return this;
    }
  }]);

  return Action;
}();

exports.default = Action;
module.exports = exports['default'];

/***/ }),
/* 1 */
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
/* 2 */
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
  }

  _createClass(VariableStorageDriver, [{
    key: "notifyObservers",
    value: function notifyObservers() {
      this.observers.forEach(function (observer) {
        observer(this.records);
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
        this.records[datastore] = {};
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

exports.default = new VariableStorageDriver();
exports.VariableStorageDriver = VariableStorageDriver;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Record = function () {
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

exports.default = Record;
module.exports = exports["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _VariableStorageDriver = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PersistantStorageDriver = function (_VariableStorageDrive) {
  _inherits(PersistantStorageDriver, _VariableStorageDrive);

  function PersistantStorageDriver(storage, key) {
    _classCallCheck(this, PersistantStorageDriver);

    var _this = _possibleConstructorReturn(this, (PersistantStorageDriver.__proto__ || Object.getPrototypeOf(PersistantStorageDriver)).call(this));

    _this.key = key;
    _this.storage = storage;
    // Read has side effects that modify this.records.
    _this.read();
    global.window.addEventListener('storage', function (driver) {
      return function (e) {
        if (e.storageArea === driver.storage) {
          driver.read();
          driver.notifyObservers();
        }
      };
    }(_this));

    _this.read = _this.read.bind(_this);
    _this.write = _this.write.bind(_this);
    return _this;
  }

  _createClass(PersistantStorageDriver, [{
    key: 'read',
    value: function read() {
      try {
        this.records = JSON.parse(this.storage.getItem(this.key)) || {};
      } catch (e) {
        this.records = {};
      }
      return this;
    }
  }, {
    key: 'write',
    value: function write() {
      this.storage.setItem(this.key, JSON.stringify(this.records));
      return this;
    }
  }, {
    key: 'add',
    value: function add(record) {
      if (_get(PersistantStorageDriver.prototype.__proto__ || Object.getPrototypeOf(PersistantStorageDriver.prototype), 'add', this).call(this, record)) {
        this.write();
        return true;
      }
      return false;
    }
  }, {
    key: 'remove',
    value: function remove(record) {
      if (_get(PersistantStorageDriver.prototype.__proto__ || Object.getPrototypeOf(PersistantStorageDriver.prototype), 'remove', this).call(this, record)) {
        this.write();
        return true;
      }
      return false;
    }
  }, {
    key: 'clear',
    value: function clear(datastore) {
      if (_get(PersistantStorageDriver.prototype.__proto__ || Object.getPrototypeOf(PersistantStorageDriver.prototype), 'clear', this).call(this, datastore)) {
        this.write();
        return true;
      }
      return false;
    }
  }]);

  return PersistantStorageDriver;
}(_VariableStorageDriver.VariableStorageDriver);

exports.default = PersistantStorageDriver;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SessionStorageDriver = __webpack_require__(6);

var _SessionStorageDriver2 = _interopRequireDefault(_SessionStorageDriver);

var _LocalStorageDriver = __webpack_require__(7);

var _LocalStorageDriver2 = _interopRequireDefault(_LocalStorageDriver);

var _VariableStorageDriver = __webpack_require__(2);

var _VariableStorageDriver2 = _interopRequireDefault(_VariableStorageDriver);

var _Action = __webpack_require__(0);

var _Action2 = _interopRequireDefault(_Action);

var _Text = __webpack_require__(8);

var _Text2 = _interopRequireDefault(_Text);

var _Email = __webpack_require__(9);

var _Email2 = _interopRequireDefault(_Email);

var _Favorites = __webpack_require__(10);

var _Favorites2 = _interopRequireDefault(_Favorites);

var _File = __webpack_require__(11);

var _File2 = _interopRequireDefault(_File);

var _Driver = __webpack_require__(12);

var _Driver2 = _interopRequireDefault(_Driver);

var _Record = __webpack_require__(3);

var _Record2 = _interopRequireDefault(_Record);

var _UidHash = __webpack_require__(13);

var _UidHash2 = _interopRequireDefault(_UidHash);

var _ReactHash = __webpack_require__(14);

var _ReactHash2 = _interopRequireDefault(_ReactHash);

var _Pride = __webpack_require__(15);

var _Pride2 = _interopRequireDefault(_Pride);

var _Null = __webpack_require__(16);

var _Null2 = _interopRequireDefault(_Null);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Prejudice = function () {
  function Prejudice(init) {
    _classCallCheck(this, Prejudice);

    this.recordStorage = _SessionStorageDriver2.default;
    this.actions = {
      text: _Text2.default,
      email: _Email2.default,
      favorites: _Favorites2.default,
      file: _File2.default
    };
    this.datastores = {};

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

    if (init.recordEngine) {
      this.registerRecordEngine(init.recordEngine);
    }

    if (init.datastores) {
      init.datastores.forEach(function (datastore) {
        if (datastore.slug && datastore.uid) {
          this.datastores[datastore.uid] = [init.baseUrl || global.window.location.origin, datastore.slug, 'record'].join('/');
        }
      }, this);
    }

    if (init.actionBaseUrl) {
      this.registerActionBaseUrl(init.actionBaseUrl);
    }
  }

  _createClass(Prejudice, [{
    key: 'registerActionBaseUrl',
    value: function registerActionBaseUrl(baseUrl) {
      Object.values(this.actions).forEach(function (action) {
        action.registerBaseUrl(baseUrl);
      }, this);
      return this;
    }
  }, {
    key: 'registerDatastore',
    value: function registerDatastore(datastoreUid, datastoreBaseUrl) {
      this.datastores[datastoreUid] = datastoreBaseUrl;
      return this;
    }
  }, {
    key: 'registerRecordEngine',
    value: function registerRecordEngine(engine) {
      Prejudice.Driver.Record.UidHash.registerEngine(engine);
      Prejudice.Driver.Record.ReactHash.registerEngine(engine);
      Prejudice.Driver.Record.Pride.registerEngine(engine);
      return this;
    }
  }, {
    key: 'addObserver',
    value: function addObserver(observer) {
      this.recordStorage.addObserver(observer);
      return this;
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
      record = this.resolveRecord(record);
      record.renderFull(function (record, recordStorage) {
        return function (data) {
          if (data.has_holdings) {
            record.getHoldings(function (recordStorage, data) {
              return function (holdings) {
                data['rawHoldings'] = holdings;
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
    key: 'resolveRecord',
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
    key: 'listRecords',
    value: function listRecords(datastore) {
      return this.recordStorage.list(datastore);
    }
  }, {
    key: 'countRecords',
    value: function countRecords(datastore) {
      return this.recordStorage.count(datastore);
    }
  }, {
    key: 'removeRecord',
    value: function removeRecord(record) {
      record = this.resolveRecord(record);
      record.renderFull(function (recordStorage) {
        return function (data) {
          recordStorage.remove(data);
        };
      }(this.recordStorage));
      return this;
    }
  }, {
    key: 'act',
    value: function act(action, datastore, argument, callback) {
      this.actions[action].apply(this.listRecords(datastore), argument, callback);
      return this;
    }
  }, {
    key: 'clearRecords',
    value: function clearRecords(datastore) {
      this.recordStorage.clear(datastore);
      return this;
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

Object.defineProperty(Prejudice, 'Driver', { value: _Driver2.default });
Object.defineProperty(Prejudice.Driver, 'Record', { value: _Record2.default });
Object.defineProperty(Prejudice.Driver.Record, 'UidHash', { value: _UidHash2.default });
Object.defineProperty(Prejudice.Driver.Record, 'ReactHash', { value: _ReactHash2.default });
Object.defineProperty(Prejudice.Driver.Record, 'Pride', { value: _Pride2.default });
Object.defineProperty(Prejudice.Driver.Record, 'Null', { value: _Null2.default });

exports.default = Prejudice;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VariableStorageDriver = __webpack_require__(2);

var _VariableStorageDriver2 = _interopRequireDefault(_VariableStorageDriver);

var _PersistantStorageDriver = __webpack_require__(4);

var _PersistantStorageDriver2 = _interopRequireDefault(_PersistantStorageDriver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exp = _VariableStorageDriver2.default;

if (typeof global.window !== 'undefined') {
  exp = new _PersistantStorageDriver2.default(global.window.sessionStorage, 'Prejudice.sessionStorage');
}

exports.default = exp;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VariableStorageDriver = __webpack_require__(2);

var _VariableStorageDriver2 = _interopRequireDefault(_VariableStorageDriver);

var _PersistantStorageDriver = __webpack_require__(4);

var _PersistantStorageDriver2 = _interopRequireDefault(_PersistantStorageDriver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exp = _VariableStorageDriver2.default;

if (typeof global.window !== 'undefined') {
  exp = new _PersistantStorageDriver2.default(global.window.localStorage, 'Prejudice.localStorage');
}

exports.default = exp;
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

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

var Text = function (_Action) {
  _inherits(Text, _Action);

  function Text() {
    _classCallCheck(this, Text);

    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

    _this.path = 'text';
    return _this;
  }

  return Text;
}(_Action3.default);

;

exports.default = new Text();
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

var Email = function (_Action) {
  _inherits(Email, _Action);

  function Email() {
    _classCallCheck(this, Email);

    var _this = _possibleConstructorReturn(this, (Email.__proto__ || Object.getPrototypeOf(Email)).call(this));

    _this.path = 'email';
    return _this;
  }

  return Email;
}(_Action3.default);

;

exports.default = new Email();
module.exports = exports['default'];

/***/ }),
/* 10 */
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

    var _this = _possibleConstructorReturn(this, (Favorites.__proto__ || Object.getPrototypeOf(Favorites)).call(this));

    _this.path = 'favorites';
    return _this;
  }

  return Favorites;
}(_Action3.default);

;

exports.default = new Favorites();
module.exports = exports['default'];

/***/ }),
/* 11 */
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

    var _this = _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).call(this));

    _this.path = 'file';
    return _this;
  }

  return File;
}(_Action3.default);

;

exports.default = new File();
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Driver = function Driver() {
  _classCallCheck(this, Driver);
};

exports.default = Driver;
module.exports = exports["default"];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Record2 = __webpack_require__(3);

var _Record3 = _interopRequireDefault(_Record2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UidHash = function (_Record) {
  _inherits(UidHash, _Record);

  function UidHash() {
    _classCallCheck(this, UidHash);

    var _this = _possibleConstructorReturn(this, (UidHash.__proto__ || Object.getPrototypeOf(UidHash)).call(this));

    _this.dataToRecord = _this.dataToRecord.bind(_this);
    _this.match = _this.match.bind(_this);
    return _this;
  }

  _createClass(UidHash, [{
    key: 'match',
    value: function match(data) {
      return data.datastoreUid && data.recordUid;
    }
  }, {
    key: 'dataToRecord',
    value: function dataToRecord(data) {
      return this.engine.requestRecord(data.datastoreUid, data.recordUid);
    }
  }]);

  return UidHash;
}(_Record3.default);

exports.default = new UidHash();
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Record2 = __webpack_require__(3);

var _Record3 = _interopRequireDefault(_Record2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactHash = function (_Record) {
  _inherits(ReactHash, _Record);

  function ReactHash() {
    _classCallCheck(this, ReactHash);

    var _this = _possibleConstructorReturn(this, (ReactHash.__proto__ || Object.getPrototypeOf(ReactHash)).call(this));

    _this.dataToRecord = _this.dataToRecord.bind(_this);
    _this.match = _this.match.bind(_this);
    return _this;
  }

  _createClass(ReactHash, [{
    key: 'match',
    value: function match(data) {
      return data.datastore && data.uid;
    }
  }, {
    key: 'dataToRecord',
    value: function dataToRecord(data) {
      return this.engine.requestRecord(data.datastore, data.uid);
    }
  }]);

  return ReactHash;
}(_Record3.default);

exports.default = new ReactHash();
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Record2 = __webpack_require__(3);

var _Record3 = _interopRequireDefault(_Record2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pride = function (_Record) {
  _inherits(Pride, _Record);

  function Pride() {
    _classCallCheck(this, Pride);

    var _this = _possibleConstructorReturn(this, (Pride.__proto__ || Object.getPrototypeOf(Pride)).call(this));

    _this.dataToRecord = _this.dataToRecord.bind(_this);
    _this.match = _this.match.bind(_this);
    return _this;
  }

  _createClass(Pride, [{
    key: 'match',
    value: function match(data) {
      return data instanceof this.engine.Core.Record;
    }
  }, {
    key: 'dataToRecord',
    value: function dataToRecord(data) {
      return data;
    }
  }]);

  return Pride;
}(_Record3.default);

exports.default = new Pride();
module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Null = function () {
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

exports.default = new Null();
module.exports = exports["default"];

/***/ })
/******/ ]);
});
//# sourceMappingURL=prejudice.js.map