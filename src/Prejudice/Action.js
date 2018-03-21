const Action = class Action {
  apply(records, argument, callback) {
    callback({status: 'Success'});
  }
};

export default Action;
