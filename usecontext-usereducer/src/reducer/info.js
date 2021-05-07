const initialState = { count: 0 };

const info = (state = initialState, action) => {
  switch (action.type) {
    case 'info':
      return { ...state, count: ++state.count };
    default:
      return state;
  }
};

export default info;
