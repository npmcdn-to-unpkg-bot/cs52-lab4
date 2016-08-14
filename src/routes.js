import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './containers/index';
import New from './containers/new';
import Show from './containers/show';
import Signin from './containers/signinUser';
import Signup from './containers/signupUser';
import RequireAuth from './containers/require-auth';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="posts/new" component={RequireAuth(New)} />
    <Route path="posts/:id" component={Show} />
    <Route path="signin" component={Signin} />
    <Route path="signup" component={Signup} />
  </Route>
);
