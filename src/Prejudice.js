'use strict';

import SessionStorageDriver from './Prejudice/SessionStorageDriver';
import LocalStorageDriver from './Prejudice/LocalStorageDriver';
import VariableStorageDriver from './Prejudice/VariableStorageDriver';

import Action from './Prejudice/Action';
import Text from './Prejudice/Action/Text';
import Email from './Prejudice/Action/Email';
import File from './Prejudice/Action/File';

import Driver from './Prejudice/Driver';
import Record from './Prejudice/Driver/Record';
import UidHash from './Prejudice/Driver/Record/UidHash';
import ReactHash from './Prejudice/Driver/Record/ReactHash';
import Pride from './Prejudice/Driver/Record/Pride';
import Null from './Prejudice/Driver/Record/Null';

import Profile from './Prejudice/Profile';

import IdleTimeout from './Prejudice/IdleTimeout';

const Prejudice = class Prejudice {
  constructor (init) {
    this.recordStorage = (init.recordStorage || SessionStorageDriver).getInstance();
    this.actions = {
      text: Text,
      email: Email,
      file: File
    };
    this.datastores = {};

    this.profile = Profile.getInstance();

    this.addObserver = this.addObserver.bind(this);
    this.setRecordStorage = this.setRecordStorage.bind(this);
    this.addRecord = this.addRecord.bind(this);
    this.listRecords = this.listRecords.bind(this);
    this.removeRecord = this.removeRecord.bind(this);
    this.act = this.act.bind(this);
    this.clearRecords = this.clearRecords.bind(this);
    this.registerRecordEngine = this.registerRecordEngine.bind(this);
    this.resolveRecord = this.resolveRecord.bind(this);
    this.registerDatastore = this.registerDatastore.bind(this);
    this.registerActionBaseUrl = this.registerActionBaseUrl.bind(this);
    this.addProfileObserver = this.addProfileObserver.bind(this);
    if (init.recordEngine) {
      this.registerRecordEngine(init.recordEngine);
    }

    if (init.datastores) {
      init.datastores.forEach(function (datastore) {
        if (datastore.slug && datastore.uid) {
          this.datastores[datastore.uid] = [
            init.baseUrl || window.location.origin,
            datastore.slug,
            'record'
          ].join('/');
        }
      }, this);
    }

    if (init.actionBaseUrl) {
      this.registerActionBaseUrl(init.actionBaseUrl);
    }
  }

  registerActionBaseUrl (baseUrl) {
    this.profile.registerBaseUrl(baseUrl);
    this.actions.text.registerBaseUrl(baseUrl);
    this.actions.email.registerBaseUrl(baseUrl);
    this.actions.file.registerBaseUrl(baseUrl);
    return this;
  }

  registerDatastore (datastoreUid, datastoreBaseUrl) {
    this.datastores[datastoreUid] = datastoreBaseUrl;
    return this;
  }

  registerRecordEngine (engine) {
    Prejudice.Driver.Record.UidHash.registerEngine(engine);
    Prejudice.Driver.Record.ReactHash.registerEngine(engine);
    Prejudice.Driver.Record.Pride.registerEngine(engine);
    return this;
  }

  addProfileObserver (observer) {
    this.profile.addObserver(observer);
    return this;
  }

  addObserver (observer) {
    this.recordStorage.addObserver(observer);
    return this;
  }

  setRecordStorage (storage) {
    this.recordStorage = storage;
    return this;
  }

  addRecord (record) {
    if (record.uid && record.datastore) {
      this.recordStorage.add(record);
      return this;
    }
    record = this.resolveRecord(record);
    record.renderFull((function (record, recordStorage) {
      return function (data) {
        if (data.has_holdings) {
          record.getHoldings((function (recordStorage, data) {
            return function (holdings) {
              data.rawHoldings = holdings;
              recordStorage.add(data);
            };
          })(recordStorage, data));
        } else {
          recordStorage.add(data);
        }
      };
    })(record, this.recordStorage));
    return this;
  }

  resolveRecord (data) {
    if (Prejudice.Driver.Record.ReactHash.match(data)) {
      return Prejudice.Driver.Record.ReactHash.dataToRecord(data);
    } else if (Prejudice.Driver.Record.UidHash.match(data)) {
      return Prejudice.Driver.Record.UidHash.dataToRecord(data);
    } else if (Prejudice.Driver.Record.Pride.match(data)) {
      return Prejudice.Driver.Record.Pride.dataToRecord(data);
    }
    return Prejudice.Driver.Record.Null.dataToRecord(data);
  }

  listRecords (datastore) {
    return this.recordStorage.list(datastore);
  }

  countRecords (datastore) {
    return this.recordStorage.count(datastore);
  }

  removeRecord (record) {
    if (record.uid && record.datastore) {
      this.recordStorage.remove(record);
      return this;
    }
    record = this.resolveRecord(record);
    record.renderFull((function (recordStorage) {
      return function (data) {
        recordStorage.remove(data);
      };
    })(this.recordStorage));
    return this;
  }

  act (action, datastore, argument, callback) {
    this.actions[action].apply(
      {
        to: argument,
        [datastore]: {
          records: this.listRecords(datastore).map((item) => {
            return item.uid;
          }),
          base_url: this.datastores[datastore]
        }
      },
      callback
    );
    return this;
  }

  clearRecords (datastore) {
    this.recordStorage.clear(datastore);
    return this;
  }
};

Object.defineProperty(Prejudice, 'SessionStorageDriver', { value: SessionStorageDriver });
Object.defineProperty(Prejudice, 'LocalStorageDriver', { value: LocalStorageDriver });
Object.defineProperty(Prejudice, 'VariableStorageDriver', { value: VariableStorageDriver });

Object.defineProperty(Prejudice, 'Profile', { value: Profile });

Object.defineProperty(Prejudice, 'IdleTimeout', { value: IdleTimeout });

Object.defineProperty(Prejudice, 'Action', { value: Action });
Object.defineProperty(Prejudice.Action, 'Text', { value: Text });
Object.defineProperty(Prejudice.Action, 'Email', { value: Email });
Object.defineProperty(Prejudice.Action, 'File', { value: File });

Object.defineProperty(Prejudice, 'Driver', { value: Driver });
Object.defineProperty(Prejudice.Driver, 'Record', { value: Record });
Object.defineProperty(Prejudice.Driver.Record, 'UidHash', { value: UidHash });
Object.defineProperty(Prejudice.Driver.Record, 'ReactHash', { value: ReactHash });
Object.defineProperty(Prejudice.Driver.Record, 'Pride', { value: Pride });
Object.defineProperty(Prejudice.Driver.Record, 'Null', { value: Null });

export default Prejudice;
