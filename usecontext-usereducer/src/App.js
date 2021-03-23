import './App.css';
import React, { useReducer } from 'react'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import {reducer, initialState, context} from './reducer/ReducerComponent'
function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <context.Provider value={{state, dispatch}} >
      <div style={{textAlign: 'center', lineHeight: '30px'}}>
        <A></A>
        <B></B>
        <C></C>
      </div>
    </context.Provider >
  );
}

export default App;
