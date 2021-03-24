import { SET_TIME } from '../action/time'

let initialState = {time: 0}
export function setTime (state = initialState, action) {
  switch (action.type) {
    case SET_TIME:
      return { ...state, time: action.time }
    default:
      return state
  }
}

