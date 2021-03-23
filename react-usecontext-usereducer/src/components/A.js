import React, {useContext} from 'react'
import {context} from '../reducer/ReducerComponent'

function A() {
  const { state, dispatch } = useContext(context)
  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => {
        dispatch({type: 'add'})
      }}>加</button>
      <button onClick={() => {
        dispatch({type: 'reduce'})
      }}>减</button>
    </div>
  );
}

export default A;
