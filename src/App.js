import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/Landing';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <Router>
      <NavBar />
      <Landing />
      <AboutSection />
    </Router>
  );
}

export default App;
