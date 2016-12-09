import React from 'react';
import { Route, IndexRoute } from 'react-router';
import auth from './lib/Auth';

import App from './App';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import Logout from './Logout';
import NotFound from './Notfound';

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

module.exports = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} onEnter={requireAuth} />
		<Route path="/home" component={Home} onEnter={requireAuth} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
    <Route path="/logout" component={Logout} />
    <Route path="*" component={NotFound} />
  </Route>
);