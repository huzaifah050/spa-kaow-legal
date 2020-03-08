import React from 'react';
import { Navbar } from './Navbar';
import StartupDetails from './StartupDetails';
import { Footer } from './Footer';

const StartupInfo = () => {
  return (
    <div>
      <Navbar />
      <StartupDetails />
      <Footer />
    </div>
  );
};

export default StartupInfo;
