import VariableStorageDriver from './VariableStorageDriver';

let exp = VariableStorageDriver;

if (typeof global.window !== 'undefined') {
  class SessionStorageDriver {
    constructor() {
      this.key = 'Prejudice.SessionStorageDriver';
      this.observers = [];
      this.read();
      global.window.addEventListener('storage', (function (driver) {
        return function (e) {
          if (e.storageArea === global.window.sessionStorage) {
            driver.read();
          }
        };
      })(this));
    }

    notifyObservers = () => {
      this.observers.forEach(function (observer) { observer(this.records); }, this);
    }

    read = () => {
      this.records = global.window.sessionStorage.getItem(this.key) || [];
      this.notifyObservers();
    }

    write = () => {
      this.notifyObservers();
      return global.window.sessionStorage.setItem(this.key, this.records);
    }

    add = (record) => {
      this.records.push(record);
      this.write();
    }

    remove = (record) => {
      this.records = this.records.filter(function (e) { return e !== record;});
      this.write();
    }

    clear = (record) => {
      this.records = [];
      this.write();
    }

    list = (record) => {
      return this.records;
    }
  }
  exp = new SessionStorageDriver();
}

export default exp;
