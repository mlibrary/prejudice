import Action from '../Action';

class File extends Action {
  constructor() {
    super();
    this.path = 'file';
  }
};

export default new File();
