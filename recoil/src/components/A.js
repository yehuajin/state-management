import React from 'react'
import {
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {countState, countLength} from '../atom'

function A() {
  // 和hooks使用方式一样
  const [count, setCount] = useRecoilState(countState);
  const length = useRecoilValue(countLength);
  const onChange = (event) => {
    setCount(event.target.value);
  };
  return (
    <div>
      <input type="text" value={count} onChange={onChange} />
      <div>length: { length }</div>
    </div>
  );
}

export default A
