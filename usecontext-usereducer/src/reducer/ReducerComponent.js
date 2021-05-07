let initialState = { count: 0, info: { count: 0 } };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, count: ++state.count };
    case 'reduce':
      return { ...state, count: --state.count };
    case 'info':
      return { ...state, info: { count: ++state.info.count } };
    default:
      return state;
  }
};

export { reducer, initialState };
