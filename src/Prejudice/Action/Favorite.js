import Action from '../Action';

class Favorite extends Action {
  constructor () {
    super();
    this.path = 'favorite';
  }
};

export default new Favorite();
