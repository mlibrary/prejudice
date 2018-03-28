class VariableStorageDriver {
  constructor() {
    this.records = {};
    this.observers = [];

    this.addObserver = this.addObserver.bind(this);
    this.notifyObservers = this.notifyObservers.bind(this);
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

  add(record) {
    this.records[record.datastore] = this.records[record.datastore] || {};
    if (!this.records[record.datastore][record.uid]) {
      this.records[record.datastore][record.uid] = record;
      this.notifyObservers();
    }
    return this;
  }

  remove(record) {
    if (this.records[record.datastore][record.uid]) {
      delete this.records[record.datastore][record.uid];
      this.notifyObservers();
    }
    return this;
  }

  clear(datastore) {
    if (datastore) {
      this.records[datastore] = {};
    } else {
      this.records = {};
    }
    this.notifyObservers();
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
export default new VariableStorageDriver();
