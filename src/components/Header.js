import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import Error from './Error';

const Header = () => {
  const [info, setInfo] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(process.env.API_URL + '/info');
        setInfo(response.data[0]);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  if (!error && !!info) {
    return (
      <div className="bg-image">
        <section className="hero is-large">
          <div className="hero-head">
            <Navbar />
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <p className="title has-text-white">Hi there!</p>
              <p className="subtitle has-text-white">{info.header}</p>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <Error />;
  }
};

export default Header;
