import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './components/Homepage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/home" />
      </Switch>
    </Router>
  );
};

export default App;
