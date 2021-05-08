import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import context from '../context';
function A() {
  const { input } = useContext(context);
  const { setString, string, stringLength } = input;
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

export default observer(A);
