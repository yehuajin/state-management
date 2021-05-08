import React from 'react';
import { useRecoilState, useSetRecoilState, useRecoilCallback } from 'recoil';
import { countState, countLength } from '../atom/count';

function A() {
  // 和hooks使用方式一样
  const [count, setCount] = useRecoilState(countState);
  const [length, setLength] = useRecoilState(countLength);
  const setCount1 = useSetRecoilState(countState);
  const onChange = (event) => {
    setCount(event.target.value);
  };
  const addTenFahrenheit = () => setLength(10);
  const logCartItems = useRecoilCallback(({ snapshot }) => async () => {
    const numItemsInCart = await snapshot.getPromise(countState);
    console.log('Items in cart: ', numItemsInCart);
  });
  return (
    <div>
      <input type='text' value={count} onChange={onChange} />
      <div>length: {length}</div>
      <button onClick={addTenFahrenheit}>add</button>
      <br />
      <button
        onClick={() => {
          setCount1(20);
        }}>
        set
      </button>
      <br />
      <button onClick={logCartItems}>logCartItems</button>
    </div>
  );
}

export default A;
