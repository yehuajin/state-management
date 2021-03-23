import React, {useContext} from 'react'
import { context } from '../reducer/ReducerComponent'

function C() {
  const { state } = useContext(context)
  console.log(11111)
  return (
    <div>{state.info.count}</div>
  );
}

export default React.memo(C);
