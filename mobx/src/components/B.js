import React from 'react'
import { observer, inject} from 'mobx-react'

function B({store}) {
  return (
    <div>B组件同步的count:{store.count}</div>
  );
}

export default inject('store')(observer(B)) 
