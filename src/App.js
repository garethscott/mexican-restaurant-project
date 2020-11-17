import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <NavBar />
      <Landing />
    </Router>
  );
}

export default App;
