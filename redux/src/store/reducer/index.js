import { combineReducers } from 'redux'
import { setTime } from './time'
import { setCount } from './count'
const reducer = combineReducers({
  time: setTime,
  count: setCount
})

export default reducer
