import Count from './count';
import Input from './input';

class Store {
  constructor() {
    this.count = new Count(this);
    this.input = new Input(this);
  }
}

export default new Store();
