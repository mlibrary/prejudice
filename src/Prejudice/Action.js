const Action = class Action {
  constructor() {
    this.apply = this.apply.bind(this);
  }
  apply(records, argument, callback) {
    callback({status: 'Success'});
  }
};

export default Action;
