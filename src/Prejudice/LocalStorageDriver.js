'use strict';

class LocalStorageDriver {
  constuctor() {
    this.key     = 'Prejudice.LocalStorageDriver';
    this.records = this.read();
    window.addEventListener('storage', (function (driver) { return function(e) {
      if (e.storageArea == window.localStorage) {
        driver.read();
      }
    };})(this));
    this.observers = [];
  }

  notifyObservers() {
    this.observers.forEach(function (observer) { observer(this.records); }, this);
  }

  read() {
    this.records = window.localStorage.getItem(this.key) || [];
    this.notifyObservers();
  }

  write() {
    this.notifyObservers();
    return window.localStorage.setItem(this.key, this.records);
  }

  add(record) {
    this.records.push(record);
    this.write();
  }

  remove(record) {
    this.records = this.records.filter(function(e) { return e !== record;});
    this.write();
  }

  clear(record) {
    this.records = [];
    this.write();
  }

  list(record) {
    return this.records;
  }
}
export default new LocalStorageDriver();
