import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import App from './App';

function Routing() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/it-strategieberatung" component={App} />
        <Route path="/softwareentwicklung" component={App} />
      </div>
    </Router>
  );
}

export default Routing;
