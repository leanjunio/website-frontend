import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => {
  const [info, setInfo] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios('https://leanjunio.com/api/info');
        setInfo(response.data[0]);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  if (!!info) {
    return (
      <section className="hero has-background-dark is-large">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title has-text-white">Hi there!</p>
            <p className="subtitle has-text-white">{info.header}</p>
          </div>
        </div>
      </section>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Header;
