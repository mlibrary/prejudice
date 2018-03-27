import Record from '../Record';

class UidHash extends Record {
  constructor() {
    super();

    this.dataToRecord = this.dataToRecord.bind(this);
    this.match = this.match.bind(this);
  }

  match(data) {
    return data.datastoreUid && data.recordUid;
  }

  dataToRecord(data) {
    return this.engine.requestRecord(data.datastoreUid, data.recordUid);
  }
}

export default new UidHash();
