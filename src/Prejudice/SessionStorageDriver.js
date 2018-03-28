import VariableStorageDriver from './VariableStorageDriver';

let exp = VariableStorageDriver;

if (typeof global.window !== 'undefined') {
  class SessionStorageDriver {
    constructor() {
      this.key = 'Prejudice.SessionStorageDriver';
      this.observers = [];
      // Read has side effects that modify this.records.
      this.read();
      global.window.addEventListener('storage', (function (driver) {
        return function (e) {
          if (e.storageArea === global.window.sessionStorage) {
            driver.read();
          }
        };
      })(this));

      this.addObserver = this.addObserver.bind(this);
      this.notifyObservers = this.notifyObservers.bind(this);
      this.read = this.read.bind(this);
      this.write = this.write.bind(this);
      this.add = this.add.bind(this);
      this.remove = this.remove.bind(this);
      this.clear = this.clear.bind(this);
      this.list = this.list.bind(this);
      this.count = this.count.bind(this);
    }

    notifyObservers() {
      this.observers.forEach(function (observer) { observer(this.records); }, this);
      return this;
    }

    addObserver(observer) {
      this.observers.push(observer);
      return this;
    }

    read() {
      try {
        this.records = JSON.parse(global.window.sessionStorage.getItem(this.key)) || {};
      } catch (e) {
        this.records = {};
      }
      this.notifyObservers();
      return this;
    }

    write() {
      this.notifyObservers();
      global.window.sessionStorage.setItem(this.key, JSON.stringify(this.records));
      return this;
    }

    add(record) {
      this.records[record.datastore] = this.records[record.datastore] || {};
      if (!this.records[record.datastore][record.uid]) {
        this.records[record.datastore][record.uid] = record;
        this.write();
      }
      return this;
    }

    remove(record) {
      if (this.records[record.datastore][record.uid]) {
        delete this.records[record.datastore][record.uid];
        this.write();
      }
      return this;
    }

    clear(datastore) {
      if (datastore) {
        this.records[datastore] = {};
      } else {
        this.records = {};
      }
      this.write();
      return this;
    }

    list(datastore) {
      if (datastore) {
        return Object.values(this.records[datastore] || {});
      }
      let ret = [];

      Object.keys(this.records).forEach(function (key) {
        ret = ret.concat(this.list(key));
      }, this);
      return ret;
    }

    count(datastore) {
      if (datastore) {
        return this.list(datastore).length;
      }
      let ret = 0;

      Object.keys(this.records).forEach(function (key) {
        ret += this.count(key);
      }, this);
      return ret;
    }
  }
  exp = new SessionStorageDriver();
}

export default exp;
