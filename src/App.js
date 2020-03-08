import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import StartupInfo from './components/StartupInfo';
import Startups from './components/Startups';

function App() {
  return (
    <div className="container">
      <Home />
      <Login />
      <Register />
      <StartupInfo />
      <Startups />
    </div>
  );
}

export default App;
