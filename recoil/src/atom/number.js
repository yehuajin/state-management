import { atom, atomFamily, selectorFamily } from 'recoil';

const myNumberState = atom({
  key: 'MyNumber',
  default: 1,
});
const numberState = atomFamily({
  key: 'number',
  default: (param) => {
    return param;
  },
});
const myMultipliedState = selectorFamily({
  key: 'MyMultipliedNumber',
  get: (multiplier) => ({ get }) => {
    return get(myNumberState) * multiplier; // 这里面不能获取atomFamily包裹的状态，否则会报错
  },
  // optional set
  set: (multiplier) => ({ set }, newValue) => {
    // multiplier 值和get中的multiplier是一样的，初始化传入
    set(myNumberState, newValue / multiplier);
  },
});

export { myNumberState, myMultipliedState, numberState };
