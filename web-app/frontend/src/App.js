import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import DefaultPage from './components/DefaultPage/index.js';
import Perfil from './components/Perfil.jsx';

function App() {
  return (
    <>
      <Switch>
        <Route path="/main" component={DefaultPage} />
      </Switch>
    </>
  );
}

export default App;
