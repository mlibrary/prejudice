import { VariableStorageDriver } from './VariableStorageDriver';

class PersistantStorageDriver extends VariableStorageDriver {
  constructor(storage, key) {
    super();
    this.key = key;
    this.storage = storage;
    // Read has side effects that modify this.records.
    this.read();
    global.window.addEventListener('storage', (function (driver) {
      return function (e) {
        if (e.storageArea === driver.storage) {
          driver.read();
          driver.notifyObservers();
        }
      };
    })(this));

    this.read = this.read.bind(this);
    this.write = this.write.bind(this);
  }

  getInstance() {
    return this;
  }

  read() {
    try {
      this.records = JSON.parse(this.storage.getItem(this.key)) || {};
    } catch (e) {
      this.records = {};
    }
    return this;
  }

  write() {
    this.storage.setItem(this.key, JSON.stringify(this.records));
    return this;
  }

  add(record) {
    if (super.add(record)) {
      this.write();
      return true;
    }
    return false;
  }

  remove(record) {
    if (super.remove(record)) {
      this.write();
      return true;
    }
    return false;
  }

  clear(datastore) {
    if (super.clear(datastore)) {
      this.write();
      return true;
    }
    return false;
  }
}

export default PersistantStorageDriver;
