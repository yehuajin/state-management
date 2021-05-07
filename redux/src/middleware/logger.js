/**
 * 每次触发action记录日志
 */
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('pre state', JSON.stringify(store.getState()));
  let result = next(action);
  console.log('next state', JSON.stringify(store.getState()));
  console.groupEnd(action.type);
  return result;
};

export default logger;
