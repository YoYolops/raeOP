import React from 'react';

import './App.css';
import DefaultPage from './components/Pages/DefaultPage';
import LandingPage from './components/Pages/LandingPage';
import Overview from './components/Overview'
import Profile from './components/Pages/Perfil';
import RaeOpinion from './components/Pages/RaeOpinion';
import TeacherOpinion from './components/Pages/TeacherOpinion';
import InstitutionOpinion from './components/Pages/InstitutionOpinion';
import Metodologia from './components/Metodologia';


function App() {
  return (
      <DefaultPage className='aplication'>
        <LandingPage />
        <Overview />
        <Profile />
        <RaeOpinion />
        <TeacherOpinion />
        <InstitutionOpinion />
        <Metodologia />
      </DefaultPage>

  );
}

export default App;
