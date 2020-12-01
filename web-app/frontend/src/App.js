import React from 'react';

import './App.css';
import DefaultPage from './components/Pages/DefaultPage';
import LandingPage from './components/Pages/LandingPage';
import Profile from './components/Pages/Perfil';
import RaeOpinion from './components/Pages/RaeOpinion'

function App() {
  return (
      <DefaultPage className='aplication'>
        <LandingPage />
        <Profile />
        <RaeOpinion />
      </DefaultPage>

  );
}

export default App;
