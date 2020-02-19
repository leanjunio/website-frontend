import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [info, setInfo] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios('http://localhost:3000/api/info');
        setInfo(response.data[0]);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  if (!!info) {
    return (
      <section className="hero has-background-white is-large">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Hi there!</p>
            <p className="subtitle">{info.header}</p>
          </div>
        </div>
      </section>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Header;
