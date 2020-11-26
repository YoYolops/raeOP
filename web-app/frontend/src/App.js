import React from 'react';
import './App.css';
import DefaultPage from './components/DefaultPage';
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
