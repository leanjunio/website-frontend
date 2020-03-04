import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from './components/Homepage';
import Navbar from './components/Navbar';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
