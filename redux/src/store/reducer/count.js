import { ADD_COUNT, REDUCE_COUNT } from '../action/count'

let initialState = {count: 0}
export function setCount(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, count: ++state.count}
    case REDUCE_COUNT:
      return { ...state, count: --state.count }
    default:
      return state
  }
}

