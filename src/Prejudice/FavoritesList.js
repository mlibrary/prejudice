import reqwest from 'reqwest';

class FavoritesList {

  constructor() {
    this.last = {};
    this.baseUrl = null;
    this.observers = [];
    this.interval = null;
    this.intervalDuration = 300000;

    this.registerBaseUrl = this.registerBaseUrl.bind(this);
    this.addObserver = this.addObserver.bind(this);
    this.notifyObservers = this.notifyObservers.bind(this);
    this.update = this.update.bind(this);
    this.handleData = this.handleData.bind(this);
    this.getUrl = this.getUrl.bind(this);
    this.setInterval = this.setInterval.bind(this);
    this.getInstance = this.getInstance.bind(this);
  }

  getInstance() {
    return this;
  }

  setInterval() {
    if (this.interval) {
      return this;
    }
    this.interval = setInterval((function (profile) {
      return function () {
        profile.update();
      };
    })(this), this.intervalDuration);
    return this;
  }

  notifyObservers() {
    this.observers.forEach(function (observer) {
      observer(this.last);
    }, this);
  }

  update() {
    if (this.baseUrl) {
      const callback = (function (profile) {
        return function (data) {
          profile.handleData(data);
        };
      })(this);

      reqwest({
        url: this.getUrl(),
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        withCredentials: true,
        error: callback,
        success: callback
      });
    }
    return this;
  }

  handleData(data) {
    if (JSON.stringify(this.last) !== JSON.stringify(data)) {
      this.last = data;
      this.notifyObservers();
    }
    return this;
  }

  getUrl() {
    if (this.baseUrl) {
      return [this.baseUrl, 'profile', 'favorites', 'list'].join('/');
    }
    return null;
  }

  addObserver(observer) {
    observer(this.last);
    this.observers.push(observer);
    this.startup();
    return this;
  }

  startup() {
    if (!this.interval && this.baseUrl) {
      this.last = {};
      this.update();
      this.setInterval();
    }
    return this;
  }

  registerBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
    this.startup();
    return this;
  }
}

export default new FavoritesList();
