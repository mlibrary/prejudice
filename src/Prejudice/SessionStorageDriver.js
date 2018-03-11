'use strict';

class SessionStorageDriver {
  constuctor() {
    this.key       = 'Prejudice.SessionStorageDriver';
    this.observers = [];
    this.records   = this.read();
    window.addEventListener('storage', (function (driver) { return function(e) {
      if (e.storageArea == window.sessionStorage) {
        driver.read();
      }
    };})(this));
  }

  notifyObservers() {
    this.observers.forEach(function(observer) { observer(this.records); }, this);
  }

  read() {
    this.records = window.sessionStorage.getItem(this.key) || [];
    this.notifyObservers();
  }

  write() {
    notifyObservers();
    return window.sessionStorage.setItem(this.key, this.records);
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
export default new SessionStorageDriver();
