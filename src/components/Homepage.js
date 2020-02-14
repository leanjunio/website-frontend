import React, { useState } from 'react';
import Navbar from './Navbar';
import ContactForm from './ContactForm';

const HomePage = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <h1 className="title">Hi!</h1>
      <p className="subtitle">My name is Lean, thanks for visiting! Feel free to browse around!</p>
      <ContactForm />
    </div>
  );
};

export default HomePage;
