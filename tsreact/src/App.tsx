import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './code1';
import Counter from './code2';
function App() {
  return (
    <div className="App">
     <Greeting name='Donia' />
     <Counter />
    </div>
  );
}

export default App;
