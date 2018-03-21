class VariableStorageDriver {
  constructor() {
    this.records = [];
    this.observers = [];
  }

  notifyObservers = () => {
    this.observers.forEach(function (observer) { observer(this.records); }, this);
  }

  add = (record) => {
    this.records.push(record);
  }

  remove = (record) => {
    this.records = this.records.filter(function (e) { return e !== record;});
  }

  clear = (record) => {
    this.records = [];
  }

  list = (record) => {
    return this.records;
  }
}
export default new VariableStorageDriver();
