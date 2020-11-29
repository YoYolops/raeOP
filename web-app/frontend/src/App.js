import React from 'react';
import './App.css';
import DefaultPage from './components/Pages/DefaultPage';
import LandingPage from './components/Pages/LandingPage';
import Profile from './components/Pages/Perfil';

function App() {
  return (
    <DefaultPage>
      <LandingPage />
      <Profile />
    </DefaultPage>
  );
}

export default App;
