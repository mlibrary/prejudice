'use strict';

import SessionStorageDriver from './Prejudice/SessionStorageDriver';
import LocalStorageDriver from './Prejudice/LocalStorageDriver';

import TextAction from './Prejudice/TextAction';
import EmailAction from './Prejudice/EmailAction';
import FavoritesAction from './Prejudice/FavoritesAction';
import FileAction from './Prejudice/FileAction';

class Prejudice {
  constructor() {
    this.SessionStorageDriver = SessionStorageDriver;
    this.recordStorage = SessionStorageDriver;
    this.LocalStorageDriver = LocalStorageDriver;
    this.actions = {
      text: TextAction,
      email: EmailAction,
      favorites: FavoritesAction,
      file: FileAction 
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
}

export default new Prejudice();
