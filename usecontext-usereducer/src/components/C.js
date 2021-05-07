import React, { useContext } from 'react';
import context from '../context';

function C() {
  const { state, dispatch } = useContext(context);
  console.log('render c');
  return (
    <div>
      {state.info.count}
      <button
        onClick={() => {
          dispatch({ type: 'info' });
        }}>
        加
      </button>
    </div>
  );
}

export default C;
