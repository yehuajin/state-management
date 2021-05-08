import React, { useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { autorun, reaction, when } from 'mobx';
import context from '../context';
function C() {
  const { input, count } = useContext(context);
  console.log('C', input.data); // 只要data改变才会重新渲染该组件
  useEffect(() => {
    autorun((reaction) => {
      console.log(count.count);
      count.count > 1 && reaction.dispose(); // 终止监听
    });
    reaction(
      () => {
        return count.count;
      },
      (count, old, reaction) => {
        console.log(count, old);
        count > 3 && reaction.dispose(); // 终止监听
      }
    );
    when(
      () => {
        return count.count > 2;
      },
      () => {
        console.log(count.count);
      }
    );
  }, []);
  return (
    <div>
      <div>count: {count.count}</div>
      <button onClick={count.increase}>加1</button>
    </div>
  );
}

export default observer(C);
