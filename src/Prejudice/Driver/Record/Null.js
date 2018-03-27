class Null {
  match(data) {
    return false;
  }

  dataToRecord() {
    return this;
  }
}

export default new Null();
