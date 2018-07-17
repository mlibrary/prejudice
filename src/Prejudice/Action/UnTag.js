import Action from '../Action';

class UnTag extends Action {
  constructor() {
    super();
    this.path = 'untag';
  }
};

export default new UnTag();
