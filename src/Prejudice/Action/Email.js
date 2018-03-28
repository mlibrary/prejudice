import Action from '../Action';

class Email extends Action {
  constructor() {
    super();
    this.path = 'email';
  }
};

export default new Email();
