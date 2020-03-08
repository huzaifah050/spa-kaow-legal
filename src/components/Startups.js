import React from 'react';
import { Navbar } from './Navbar';
import StartupDisplay from './StartupDisplay';
import { Footer } from './Footer';

const Startups = () => {
  return (
    <div>
      <Navbar />
      <StartupDisplay />
      <Footer />
    </div>
  );
};

export default Startups;
