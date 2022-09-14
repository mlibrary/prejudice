class VariableStorageDriver {
  constructor () {
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
    this.getInstance = this.getInstance.bind(this);
  }

  getInstance () {
    return new this.constructor();
  }

  notifyObservers () {
    this.observers.forEach(
      function (observer) {
        if (typeof observer === 'function') {
          observer(this.records);
        }
      },
      this
    );
    return this;
  }

  addObserver (observer) {
    this.observers.push(observer);
    return this;
  }

  add (record) {
    const idx = this.findIndex(record);

    if (idx === -1) {
      this.records[record.datastore] = this.records[record.datastore] || [];
      this.records[record.datastore].push(record);
      this.notifyObservers();
      return true;
    }
    return false;
  }

  findIndex (record) {
    if (!this.records[record.datastore]) {
      return -1;
    }
    return this.records[record.datastore].findIndex(function (item) {
      return item.datastore === record.datastore && item.uid === record.uid;
    });
  }

  remove (record) {
    const idx = this.findIndex(record);

    if (idx >= 0) {
      this.records[record.datastore].splice(idx, 1);
      this.notifyObservers();
      return true;
    }
    return false;
  }

  clear (datastore) {
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

  list (datastore) {
    if (datastore) {
      return this.records[datastore] || [];
    }
    let ret = [];

    Object.keys(this.records).forEach(function (key) {
      ret = ret.concat(this.list(key));
    }, this);
    return ret;
  }

  count (datastore) {
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
export { VariableStorageDriver };
