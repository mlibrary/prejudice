'use strict';

import SessionStorageDriver from './Prejudice/SessionStorageDriver';
import LocalStorageDriver from './Prejudice/LocalStorageDriver';
import VariableStorageDriver from './Prejudice/VariableStorageDriver';

import Action from './Prejudice/Action';
import Text from './Prejudice/Action/Text';
import Email from './Prejudice/Action/Email';
import Favorites from './Prejudice/Action/Favorites';
import File from './Prejudice/Action/File';

const Prejudice = class Prejudice {
  constructor() {
    this.recordStorage = SessionStorageDriver;
    this.actions = {
      text: Text,
      email: Email,
      favorites: Favorites,
      file: File
    };
  }

  addObserver(observer) {
    this.recordStorage.addObserver(observer);
  }

  setRecordStorage(storage) {
    this.recordStorage = storage;
    return this;
  }

  addRecord(record) {
    this.recordStorage.add(record);
    return this;
  }

  listRecords() {
    return this.recordStorage.list();
  }

  removeRecord(record) {
    this.recordStorage.remove(record);
    return this;
  }

  act(action, argument, callback) {
    this.actions[action].apply(this.listRecords(), argument, callback);
  }

  clearRecords() {
    this.recordStorage.clear();
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

export default Prejudice;
