import React from 'react';
import ReactGA from 'react-ga';

import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from './components/Homepage';

export const history = createBrowserHistory();

// Analytics
ReactGA.initialize(process.env.TRACKING_CODE, { standardImplementation: true });
console.log(process.env.TRACKING_CODE);
ReactGA.pageview('/');

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname);      // Record a pageview for the given page
});

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
