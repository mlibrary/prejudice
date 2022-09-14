import Action from '../Action';

class UnFavorite extends Action {
  constructor () {
    super();
    this.path = 'unfavorite';
  }
};

export default new UnFavorite();
