import './App.css';
import React, { useReducer } from 'react';
import A from './components/A';
import B from './components/B';
import C from './components/C';
import D from './components/D';
import { reducer, initialState } from './reducer/ReducerComponent';
import context from './context';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>
      <div style={{ textAlign: 'center', lineHeight: '30px' }}>
        <A></A>
        <B></B>
        <C></C>
        <D></D>
      </div>
    </context.Provider>
  );
}

export default App;
