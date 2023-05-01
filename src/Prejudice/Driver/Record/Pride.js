import Record from '../Record';

class Pride extends Record {
  constructor () {
    super();

    this.dataToRecord = this.dataToRecord.bind(this);
    this.match = this.match.bind(this);
  }

  match (data) {
    return data instanceof this.engine.Core.Record;
  }

  dataToRecord (data) {
    return data;
  }
}

export default new Pride();
