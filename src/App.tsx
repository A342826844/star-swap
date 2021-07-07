import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Swap from './page/swap';
import Test from './page/test';
import StarrySky from './components/bg/StarrySky';
import NavTab from './components/header/NavTab';
import './App.css';

function App() {
  return (
    <div className="App">
      <StarrySky />
      <HashRouter>
        <NavTab></NavTab>
        <Route path="/swap" component={Swap} />
        <Route path="/test" component={Test} />
      </HashRouter>
    </div>
  );
}

export default App;
 