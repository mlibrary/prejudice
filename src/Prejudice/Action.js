import reqwest from 'reqwest';

const Action = class Action {
  constructor(init) {
    this.apply = this.apply.bind(this);
    this.baseUrl = (init && init.baseUrl) || '';

    this.apply = this.apply.bind(this);
    this.registerBaseUrl = this.registerBaseUrl.bind(this);
    this.getUrl = this.getUrl.bind(this);
  }

  getUrl() {
    return [this.baseUrl, this.path].join('/');
  }

  apply(data, callback) {
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
};

export default Action;
