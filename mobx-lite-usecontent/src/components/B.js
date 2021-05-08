import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import context from '../context';

function B() {
  const { input } = useContext(context);
  console.log('B');
  return <div>B组件同步的string:{input.string}</div>;
}

export default observer(B);
