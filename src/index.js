import 'bulma';
import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';

import App from './App';

const Index = () => {
  return <App />;
};

Sentry.init({ dsn: process.env.SENTRY_DSN });

ReactDOM.render(<Index />, document.getElementById('out'));
