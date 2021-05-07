import count from './conut';
import info from './info';

const reducerMap = {
  count,
  info,
};
const reducer = (state = {}, action) => {
  let changeFlag = false;
  const keys = Object.keys(reducerMap);
  keys.forEach((key) => {
    const value = reducerMap[key](state[key], action);
    changeFlag = changeFlag || state[key] !== value;
    state[key] = value;
  });
  return changeFlag ? { ...state } : state;
};
const initialState = reducer(undefined, {});
export { reducer, initialState };
