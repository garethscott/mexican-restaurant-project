import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/Landing';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';

function App() {
  return (
    <Router>
      <NavBar />
      <Landing />
      <AboutSection />
      <MenuSection heading={'TACOS'} />
    </Router>
  );
}

export default App;
