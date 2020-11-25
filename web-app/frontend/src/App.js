import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import Perfil from './components/Perfil.jsx';


function App() {
  return (
    <>
      <Switch>
        <Route path="/main" component={Perfil} />
      </Switch>
    </>
  );
}

export default App;
