import React from 'react';
import { observer, inject } from 'mobx-react';

function B({ input }) {
  console.log('B');
  return <div>B组件同步的string:{input.string}</div>;
}

export default inject('input')(observer(B));
