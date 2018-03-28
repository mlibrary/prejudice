const Action = class Action {
  constructor() {
    this.apply = this.apply.bind(this);
    this.actionBaseUrl = '';

    this.apply = this.apply.bind(this);
    this.registerBaseUrl = this.registerBaseUrl.bind(this);
  }

  apply(records, argument, callback) {
    callback({status: 'Success'});
    return this;
  }

  registerBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
    return this;
  }
};

export default Action;
