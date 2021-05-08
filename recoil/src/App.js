import './App.css';
import React from 'react';
import A from './components/A';
import B from './components/B';
import C from './components/C';

function App() {
  return (
    <div style={{ textAlign: 'center', lineHeight: '30px' }}>
      <A></A>
      <B></B>
      <C />
    </div>
  );
}

export default App;
