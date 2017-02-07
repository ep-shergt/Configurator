import React from "react";
import { render } from "react-dom";

import MainComponent from "./components/MainComponent";

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={MainComponent}>
    </Route>
  </Router>
)

render(router, document.getElementById('container')); 