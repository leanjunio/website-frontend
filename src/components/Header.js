import React, { useState, useEffect } from 'react';
import * as Sentry from '@sentry/browser';
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
        Sentry.captureException(error);
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
              <p className="title is-3 has-text-white">Hi there!</p>
              <p className="subtitle is-5 is has-text-white">{info.header}</p>
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
