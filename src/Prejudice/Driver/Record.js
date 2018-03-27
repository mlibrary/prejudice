class Record {
  constructor() {
    this.engine = null;
    this.registerEngine = this.registerEngine.bind(this);
  }

  registerEngine(engine) {
    this.engine = engine;
  }
}
export default Record;
