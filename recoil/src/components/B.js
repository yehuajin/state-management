import React from 'react'
import {
  useRecoilValue,
} from 'recoil';
import {countState} from '../atom'

function B() {
  // 获取值
  const count = useRecoilValue(countState);
  return (
    <div>
      count：{count}
    </div>
  );
}

export default B
