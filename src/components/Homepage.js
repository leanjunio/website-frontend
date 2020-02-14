import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './AboutPage';

const HomePage = () => (
  <div className="container-fluid">
    <Header />
    <AboutMe />;
  </div>
);

export default HomePage;
