import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>SafeHavn</h1>
      </Link>
    </header>
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
