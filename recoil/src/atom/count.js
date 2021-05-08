import { atom, selector } from 'recoil';

const countState = atom({
  key: 'count', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

/**
 * selector 代表一个派生状态，
 * 派生状态是状态的转换。你可以将派生状态视为将状态传递给以某种方式修改给定状态的纯函数的输出：
 *
 */
const countLength = selector({
  key: 'countLength', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const count = get(countState);

    return count;
  },
  set: ({ set }, newValue) => {
    set(countState, newValue);
  },
});

export { countState, countLength };
