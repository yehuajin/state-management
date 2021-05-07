import { makeAutoObservable } from 'mobx';

class Store {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this); //把所有定义的方法放在 action 上, 属性放在 observable上
  }
  rootStore = {};
  string = '';
  get stringLength() {
    return this.string.length;
  }
  setString = (e) => {
    // 箭头函数this才有值
    this.string = e.target.value;
  };
}

export default Store;

// 构造响应对象
// const store = makeAutoObservable ({ // 需要代理的响应对象
//   count: '00',
//   get countLength() {
//     return this.count.length
//   },
//   setCount (e) {
//     console.log(this)
//     this.count = e.target.value
//   }
//   // async initCount() {
//   //   // 模拟获取远程的数据
//   //   const count = await new Promise((resolve) => {
//   //     setTimeout(() => {
//   //       resolve(10)
//   //     }, 500)
//   //   })
//   //   // 获取数据后，将赋值操作放到 runInAction 中
//   //   runInAction(() => {
//   //     this.count = count
//   //   })
//   // }
// })

// https://blog.csdn.net/weixin_46178697/article/details/114486543
// http://bjqianye.cn/detail/26073.html
