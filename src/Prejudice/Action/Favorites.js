import Action from '../Action';

class Favorites extends Action {
  constructor() {
    super();
    this.path = 'favorites';
  }
};

export default new Favorites();
