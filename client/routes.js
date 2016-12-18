import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import authenticate from './authenticate.js';

import App from './containers/index.js';
import Demo from './containers/Demo.js';
import About from './containers/About.js';
import Login from './containers/Login.js';
import Register from './containers/Register.js';
import Home from './containers/Home/index.js';
import Dashboard from './containers/Home/Dashboard.js';
import Edit from './containers/Home/Edit.js';
import Practice from './containers/Home/Practice.js';
import Settings from './containers/Home/Settings.js';

export default (
  <Route path='/' component={ App }>
    <IndexRedirect to='/demo' />
    <Route path='demo' component={ Demo } />
    <Route path='about' component={ About } />
    <Route path='login' component={ Login } />
    <Route path='register' component={ Register } />
    <Route path='home' component={ Home } onEnter={ authenticate }>
      <IndexRedirect to='/dashboard' />
      <Route path='dashboard' component={ Dashboard } />
      <Route path='edit' component={ Edit } />
      <Route path='practice' component={ Practice } />
      <Route path='settings' component={ Settings } />
    </Route>
  </Route>
);

