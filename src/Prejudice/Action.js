import reqwest from 'reqwest';

const Action = class Action {
  constructor(init) {
    this.baseUrl = (init && init.baseUrl) || '';
    this.observers = [];

    this.apply = this.apply.bind(this);
    this.registerBaseUrl = this.registerBaseUrl.bind(this);
    this.getUrl = this.getUrl.bind(this);
    this.addObserver = this.addObserver.bind(this);
  }

  getUrl() {
    return [this.baseUrl, this.path].join('/');
  }

  apply(data, callback) {
    this.observers.forEach(function (observer) { observer(data); }, this);
    reqwest({
      url: this.getUrl(),
      data: JSON.stringify(data),
      type: 'json',
      method: 'post',
      contentType: 'application/json',
      withCredentials: true,
      error: callback,
      success: callback
    });
    return this;
  }

  registerBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
    return this;
  }

  addObserver(observer) {
    this.observers.push(observer);
  }
};

export default Action;
