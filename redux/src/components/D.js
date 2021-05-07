import React from 'react';
import { addCount, reduceCount } from '../store/action/count';
import { useSelector, useDispatch, useStore } from 'react-redux';

function D() {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  const store = useStore();
  console.log(store.getState());
  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(addCount());
        }}>
        加
      </button>
      <button
        onClick={() => {
          dispatch(reduceCount());
        }}>
        减
      </button>
    </div>
  );
}

export default D;
