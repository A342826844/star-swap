import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Swap from './page/swap';
import Test from './page/test';
import StarrySky from './components/bg/StarrySky';
import './App.css';

function App() {
  return (
    <div className="App">
      <StarrySky />
      <HashRouter>
        <div>111111111</div>
        <Route path="/swap" component={Swap} />
        <Route path="/test" component={Test} />
      </HashRouter>
    </div>
  );
}

export default App;
 