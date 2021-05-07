import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/index';
import reducer from './store/reducer';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 监听函数
function doSometion() {
  console.log('操作了数据', store.getState().count);
  // 取消监听
  unsubscribe();
}
// 添加监听
const unsubscribe = store.subscribe(doSometion);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
