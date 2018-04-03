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

var _reqwest = __webpack_require__(17);

var _reqwest2 = _interopRequireDefault(_reqwest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Action = function () {
  function Action(init) {
    _classCallCheck(this, Action);

    this.apply = this.apply.bind(this);
    this.baseUrl = init && init.baseUrl || '';

    this.apply = this.apply.bind(this);
    this.registerBaseUrl = this.registerBaseUrl.bind(this);
    this.getUrl = this.getUrl.bind(this);
  }

  _createClass(Action, [{
    key: 'getUrl',
    value: function getUrl() {
      return [this.baseUrl, this.path].join('/');
    }
  }, {
    key: 'apply',
    value: function apply(data, callback) {
      (0, _reqwest2.default)({
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      this.actions['text'].registerBaseUrl(baseUrl);
      this.actions['email'].registerBaseUrl(baseUrl);
      this.actions['file'].registerBaseUrl(baseUrl);
      this.actions['favorites'].registerBaseUrl(baseUrl);
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
      this.actions[action].apply(_defineProperty({
        to: argument
      }, datastore, _defineProperty({
        records: this.listRecords(datastore).map(function (item) {
          return item.uid;
        })
      }, 'base_url', this.datastores[datastore])), callback);
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
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
    _this.name = 'action-file-download';

    return _this;
  }

  _createClass(File, [{
    key: 'ensureTarget',
    value: function ensureTarget() {
      if (document.getElementsByName(this.name).length >= 0) {
        return this;
      }
      var iframe = global.document.createElement('iframe');

      iframe.src = 'about:blank';
      iframe.name = this.name;
      iframe.style = 'visibility: hidden; display: none;';
      global.document.body.appendChild(iframe);
      return this;
    }
  }, {
    key: 'ensureForm',
    value: function ensureForm() {
      if (global.document.getElementById(this.name)) {
        return this;
      }
      var form = global.document.createElement('form');
      var input = global.document.createElement('input');

      form.id = this.name;
      form.action = this.getUrl();
      form.method = 'post';
      form.target = this.name;
      form.enctype = 'text/plain';

      input.type = 'hidden';
      form.appendChild(input);
      global.document.body.appendChild(form);
      return this;
    }
  }, {
    key: 'setFormInput',
    value: function setFormInput(data) {
      var input = global.document.getElementById(this.name).children[0];

      input.name = JSON.stringify(data).slice(0, -1) + ',"_":"';
      input.value = '"}';
    }
  }, {
    key: 'submitForm',
    value: function submitForm() {
      global.document.getElementById(this.name).submit();
    }
  }, {
    key: 'apply',
    value: function apply(data, callback) {
      this.ensureTarget();
      this.ensureForm();
      this.setFormInput(data);
      this.submitForm();
      callback({ status: 'Success' });
    }
  }]);

  return File;
}(_Action3.default);

;

exports.default = new File();
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * Reqwest! A general purpose XHR connection manager
  * license MIT (c) Dustin Diaz 2015
  * https://github.com/ded/reqwest
  */

!function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else context[name] = definition()
}('reqwest', this, function () {

  var context = this

  if ('window' in context) {
    var doc = document
      , byTag = 'getElementsByTagName'
      , head = doc[byTag]('head')[0]
  } else {
    var XHR2
    try {
      XHR2 = __webpack_require__(18)
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
/* 18 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
});
//# sourceMappingURL=prejudice.js.map