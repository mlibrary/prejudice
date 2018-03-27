'use strict';

import SessionStorageDriver from './Prejudice/SessionStorageDriver';
import LocalStorageDriver from './Prejudice/LocalStorageDriver';
import VariableStorageDriver from './Prejudice/VariableStorageDriver';

import Action from './Prejudice/Action';
import Text from './Prejudice/Action/Text';
import Email from './Prejudice/Action/Email';
import Favorites from './Prejudice/Action/Favorites';
import File from './Prejudice/Action/File';

import Driver from './Prejudice/Driver';
import Record from './Prejudice/Driver/Record';
import UidHash from './Prejudice/Driver/Record/UidHash';
import ReactHash from './Prejudice/Driver/Record/ReactHash';
import Pride from './Prejudice/Driver/Record/Pride';
import Null from './Prejudice/Driver/Record/Null';

const Prejudice = class Prejudice {
  constructor() {
    this.recordStorage = SessionStorageDriver;
    this.actions = {
      text: Text,
      email: Email,
      favorites: Favorites,
      file: File
    };
    this.datastores = {};

    this.addObserver = this.addObserver.bind(this);
    this.setRecordStorage = this.setRecordStorage.bind(this);
    this.addRecord = this.addRecord.bind(this);
    this.listRecords = this.listRecords.bind(this);
    this.removeRecord = this.removeRecord.bind(this);
    this.act = this.act.bind(this);
    this.clearRecords = this.clearRecords.bind(this);
    this.registerRecordEngine = this.registerRecordEngine.bind(this);
    this.resolveRecord = this.resolveRecord.bind(this);
  }

  registerRecordEngine(engine) {
    Prejudice.Driver.Record.UidHash.registerEngine(engine);
    Prejudice.Driver.Record.ReactHash.registerEngine(engine);
    Prejudice.Driver.Record.Pride.registerEngine(engine);
  }

  addObserver(observer) {
    this.recordStorage.addObserver(observer);
  }

  setRecordStorage(storage) {
    this.recordStorage = storage;
    return this;
  }

  addRecord(record) {
    record = this.resolveRecord(record);
    record.renderFull((function (record, recordStorage) {
      return function (data) {
        if (data.has_holdings) {
          record.getHoldings((function (recordStorage, data) {
            return function (holdings) {
              data['rawHoldings'] = holdings;
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

  resolveRecord(data) {
    if (Prejudice.Driver.Record.ReactHash.match(data)) {
      return Prejudice.Driver.Record.ReactHash.dataToRecord(data);
    } else if (Prejudice.Driver.Record.UidHash.match(data)) {
      return Prejudice.Driver.Record.UidHash.dataToRecord(data);
    } else if (Prejudice.Driver.Record.Pride.match(data)) {
      return Prejudice.Driver.Record.Pride.dataToRecord(data);
    }
    return Prejudice.Driver.Record.Null.dataToRecord(data);
  }

  listRecords(datastore) {
    return this.recordStorage.list(datastore);
  }

  countRecords(datastore) {
    return this.recordStorage.count(datastore);
  }

  removeRecord(record) {
    this.recordStorage.remove(record);
    return this;
  }

  act(action, datastore, argument, callback) {
    this.actions[action].apply(this.listRecords(datastore), argument, callback);
  }

  clearRecords(datastore) {
    this.recordStorage.clear(datastore);
  }
};

Object.defineProperty(Prejudice, 'SessionStorageDriver', {value: SessionStorageDriver});
Object.defineProperty(Prejudice, 'LocalStorageDriver', {value: LocalStorageDriver});
Object.defineProperty(Prejudice, 'VariableStorageDriver', {value: VariableStorageDriver});

Object.defineProperty(Prejudice, 'Action', {value: Action});
Object.defineProperty(Prejudice.Action, 'Text', {value: Text});
Object.defineProperty(Prejudice.Action, 'Email', {value: Email});
Object.defineProperty(Prejudice.Action, 'File', {value: File});
Object.defineProperty(Prejudice.Action, 'Favorites', {value: Favorites});

Object.defineProperty(Prejudice, 'Driver', {value: Driver});
Object.defineProperty(Prejudice.Driver, 'Record', {value: Record});
Object.defineProperty(Prejudice.Driver.Record, 'UidHash', {value: UidHash});
Object.defineProperty(Prejudice.Driver.Record, 'ReactHash', {value: ReactHash});
Object.defineProperty(Prejudice.Driver.Record, 'Pride', {value: Pride});
Object.defineProperty(Prejudice.Driver.Record, 'Null', {value: Null});

export default Prejudice;
