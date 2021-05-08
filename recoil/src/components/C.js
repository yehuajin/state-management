import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { numberState, myMultipliedState, myNumberState } from '../atom/number';

function C() {
  const myNumber = useRecoilValue(myNumberState);
  const [number, setNumber] = useRecoilState(numberState(2));
  const [multip, setMultip] = useRecoilState(myMultipliedState(4));

  return (
    <div>
      number: {number}
      <br />
      multip: {multip}
      <br />
      myNumber: {myNumber}
      <br />
      <button onClick={() => setNumber(10)}>setNumber</button>
      <br />
      <button onClick={() => setMultip(2)}>setMultip</button>
    </div>
  );
}

export default C;
