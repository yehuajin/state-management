let initialState = { count: 0, info: { count: 0 } };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 };
    case 'reduce':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export { reducer, initialState };
