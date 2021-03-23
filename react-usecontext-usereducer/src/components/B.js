import React, {useContext} from 'react'
import {context} from '../reducer/ReducerComponent'

function B() {
  const {state} = useContext(context)
  return (
    <div>{state.count}</div>
  );
}

export default React.memo(B);
