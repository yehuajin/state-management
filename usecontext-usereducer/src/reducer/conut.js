let initialState = 0;

const count = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return ++state;
    case 'reduce':
      return --state;
    default:
      return state;
  }
};

export default count;
