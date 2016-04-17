import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import storeConfig from './store';

import App from './containers/app';
import Home from './containers/home';
import About from './containers/about';
import Add from './containers/addStudent';
import Student from './containers/student';
import Guide from './containers/guide';
import Faq from './containers/faq';
import Resources from './containers/resources';
import Login from './containers/login';


const store = storeConfig();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/add" component={Add} />
        <Route path="/student" component={Student} />
        <Route path="/guide" component={Guide} />
        <Route path="/faq" component={Faq} />
        <Route path="/resources" component={Resources} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
