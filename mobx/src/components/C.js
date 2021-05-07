import React from 'react';
import { observer, inject } from 'mobx-react';
function C({ count }) {
  console.log('C');
  return (
    <div>
      <div>count: {count.count}</div>
      <button onClick={count.increase}>加1</button>
    </div>
  );
}

export default inject('count')(observer(C));
