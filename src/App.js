import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from './components/Homepage';

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
