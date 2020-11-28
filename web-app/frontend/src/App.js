import React from 'react';
import './App.css';
import DefaultPage from './components/Pages/DefaultPage';
import LandingPage from './components/Pages/LandingPage';


function App() {
  return (
      <DefaultPage className='aplication'>
        <LandingPage />
      </DefaultPage>

  );
}

export default App;
