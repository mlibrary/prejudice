import reqwest from 'reqwest';

class FavoritesList {

  constructor() {
    this.last = [];
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
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
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
      if (typeof observer === 'function') {
        observer(this.last);
      }
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
      this.last = [];
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

  favoritedItem(datastore, id, tag) {
    const ret = {};

    if (datastore === 'mirlyn') {
      ret.id = ['http://mirlyn.lib.umich.edu/Record/' + id];
      ret.tags = ['mirlyn-favorite'];
      ret.type = 'mirlyn';
    } else if (datastore === 'articlesplus') {
      ret.id = ['http://www.lib.umich.edu/articles/details/' + id];
      ret.tags = ['articles-favorite'];
      ret.type = 'article';
    } else if (datastore === 'databases') {
      ret.id = ['http://www.lib.umich.edu/node/' + id];
      ret.tags = ['databases-favorite'];
      ret.type = 'database';
    } else if (datastore === 'journals') {
      ret.id = ['http://mirlyn.lib.umich.edu/Record/' + id];
      ret.tags = ['journals-favorite'];
      ret.type = 'journal';
    } else if (datastore === 'website') {
      ret.id = [id];
      ret.tags = ['website-favorite'];
      ret.type = 'website';
    } else {
      ret.id = [id];
      ret.tags = [ datastore + '-favorite' ];
      ret.type = datastore;
    }
    return ret;
  }

  addFavorite(data) {
    var dirty = false;

    Object.keys(data).forEach(function (datastore) {
      if (!data[datastore] || !Array.isArray(data[datastore].records)) {
        return;
      }
      (data[datastore].records || []).forEach(function (id) {
        const record = this.favoritedItem(datastore, id);
        const existing = this.last.find(function (element) {
          return element.id[0] === record.id[0];
        });

        if (!existing) {
          dirty = true;
          this.last.push(record);
        }
      }, this);
    }, this);

    if (dirty) {
      this.notifyObservers();
    }

    return this;
  }

  removeFavorite(data) {
    var dirty = false;

    Object.keys(data).forEach(function (datastore) {
      if (!data[datastore] || !Array.isArray(data[datastore].records)) {
        return;
      }
      (data[datastore].records || []).forEach(function (id) {
        const record = this.favoritedItem(datastore, id);
        const index = this.last.findIndex(function (element) {
          return element.id[0] === record.id[0];
        });

        if (index >= 0) {
          dirty = true;
          this.last = this.last.slice(0, index).concat(
            this.last.slice(index + 1, this.last.length)
          );
        }
      }, this);
    }, this);

    if (dirty) {
      this.notifyObservers();
    }

    return this;
  }

  addTag(data) {
    const tags = Array.isArray(data.to) ? data.to : [data.to];
    var dirty = false;

    Object.keys(data).forEach(function (datastore) {
      if (!data[datastore] || !Array.isArray(data[datastore].records)) {
        return;
      }
      (data[datastore].records || []).forEach(function (id) {
        const record = this.favoritedItem(datastore, id);
        const existing = this.last.find(function (element) {
          return element.id[0] === record.id[0];
        });

        if (!existing) {
          dirty = true;
          record.tags = tags;
          this.last.push(record);
        } else {
          dirty = true;
          existing.tags = (existing.tags || []).concat(tags);
        }
      }, this);
    }, this);

    if (dirty) {
      this.notifyObservers();
    }

    return this;
  }

  removeTag(data) {
    const tags = Array.isArray(data.to) ? data.to : [data.to];
    var dirty = false;

    Object.keys(data).forEach(function (datastore) {
      if (!data[datastore] || !Array.isArray(data[datastore].records)) {
        return;
      }
      (data[datastore].records || []).forEach(function (id) {
        const record = this.favoritedItem(datastore, id);
        const existing = this.last.find(function (element) {
          return element.id[0] === record.id[0];
        });

        if (existing) {
          tags.forEach(function (tag) {
            const index = existing.tags.findIndex(function (element) {
              return element === tag;
            });

            if (index >= 0) {
              dirty = true;
              existing.tags = existing.tags.slice(0, index).concat(
                existing.tags.slice(index + 1, existing.tags.length)
              );
            }
          });
        }
      }, this);
    }, this);

    if (dirty) {
      this.notifyObservers();
    }

    return this;
  }
}

export default new FavoritesList();
