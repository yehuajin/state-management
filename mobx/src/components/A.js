import React from 'react'
import { observer, inject} from 'mobx-react'
function A({store}) {
  const {setCount, count, countLength} = store
  return (
    <div>
      <input type="text" value={count} onChange={setCount} />
      <div>字符串长度: {countLength}: {count}</div>
    </div>
  );
}

export default inject('store')(observer(A)) 
