import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import AboutSection from './AboutSection';
import TimelineSection from './TimelineSection';

const HomePage = () => {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    axios('http://localhost:3000/profile')
      .then(res => {
        setProfile(res.data[0]);
      })
      .catch(err => setError(err));
  }, []);

  return (
    <div className="container-fluid">
      <Header header={profile.header} />
      <AboutSection>
        <TimelineSection experience={profile.experience} />
      </AboutSection>
    </div>
  );
};

export default HomePage;
