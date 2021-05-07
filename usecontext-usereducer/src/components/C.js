import React, { useContext } from 'react';
import context from '../context';

function C() {
  const { state } = useContext(context);
  return <div>{state.info.count}</div>;
}

export default React.memo(C);
