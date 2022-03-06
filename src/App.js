import React from 'react';
import './App.css';
// Header component import
import { Header } from './components/Header';
//import { Skills } from './components/Skills';
import { SkillsReducer } from './components/SkillsReducer';
import { Contact } from './components/Contact';

function App() {
  return (
    <React.Fragment>
      <Header />
      <SkillsReducer />
      <Contact />
    </React.Fragment>
  );
}

export default App;