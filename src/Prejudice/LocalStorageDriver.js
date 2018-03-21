'use strict';

import VariableStorageDriver from './VariableStorageDriver';

let exp = VariableStorageDriver;

if (typeof global.window !== 'undefined') {
  class LocalStorageDriver {
    constructor() {
      this.key = 'Prejudice.LocalStorageDriver';
      this.observers = [];
      this.read();
      global.window.addEventListener('storage', (function (driver) {
        return function (e) {
          if (e.storageArea === window.localStorage) {
            driver.read();
          }
        };
      })(this));

      this.notifyObservers = this.notifyObservers.bind(this);
      this.read = this.read.bind(this);
      this.write = this.write.bind(this);
      this.add = this.add.bind(this);
      this.remove = this.remove.bind(this);
      this.clear = this.clear.bind(this);
      this.list = this.list.bind(this);
    }

    notifyObservers() {
      this.observers.forEach(function (observer) { observer(this.records); }, this);
    }

    read() {
      try {
        this.records = JSON.parse(global.window.localStorage.getItem(this.key)) || [];
      } catch (e) {
        this.records = [];
      }
      this.notifyObservers();
    }

    write() {
      this.notifyObservers();
      return global.window.localStorage.setItem(this.key, JSON.stringify(this.records));
    }

    add(record) {
      this.records.push(record);
      this.write();
    }

    remove(record) {
      this.records = this.records.filter(function (e) { return e !== record;});
      this.write();
    }

    clear(record) {
      this.records = [];
      this.write();
    }

    list(record) {
      return this.records;
    }
  };
  exp = new LocalStorageDriver();
}

export default exp;
