import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import HeaderContainer from './header/header_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <HeaderContainer />
      </Link>
      <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
      </Switch>
    </header>
  </div>
);

export default App;
