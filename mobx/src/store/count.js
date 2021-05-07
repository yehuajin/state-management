import { makeAutoObservable } from 'mobx';

class Store {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this); //把所有定义的方法放在 action 上, 属性放在 observable上
  }
  rootStore = {};
  count = 0;
  increase = () => {
    // 箭头函数this才有值
    ++this.count;
    console.log('A组件输入的字符串：', this.rootStore.input.string);
  };
}

export default Store;
