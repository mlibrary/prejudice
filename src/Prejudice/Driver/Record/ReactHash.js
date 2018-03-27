import Record from '../Record';

class ReactHash extends Record {
  constructor() {
    super();

    this.dataToRecord = this.dataToRecord.bind(this);
    this.match = this.match.bind(this);
  }

  match(data) {
    return data.datastore && data.uid;
  }

  dataToRecord(data) {
    return this.engine.requestRecord(data.datastore, data.uid);
  }
}

export default new ReactHash();
