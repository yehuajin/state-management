import React from 'react';
import { observer, inject } from 'mobx-react';
function A({ input }) {
  const { setString, string, stringLength } = input;
  input.string = '222'; // 可变数据
  console.log('A');
  return (
    <div>
      <input type='text' value={string} onChange={setString} />
      <div>
        字符串长度: {stringLength}: {string}
      </div>
    </div>
  );
}

export default inject('input')(observer(A));
