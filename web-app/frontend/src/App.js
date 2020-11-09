import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import Main from './components/Main.jsx';


function App() {
  return (
    <>
      <Switch>
        <Route path="/main" component={Main} />
      </Switch>
    </>
  );
}

export default App;
