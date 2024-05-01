class Null {
  match () {
    return false;
  }

  dataToRecord () {
    return this;
  }
}

export default new Null();
