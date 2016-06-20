import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Projects from './components/projects';
import About from './components/about';
import Interests from './components/interests';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={About} />
    <Route path="projects" component={Projects} />
    <Route path="interests" component={Interests} />
  </Route>
);
