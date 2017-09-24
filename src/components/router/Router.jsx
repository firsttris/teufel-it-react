import React, { Component } from 'react';
import './fade.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Development from 'components/pages/Development.jsx';
import Consulting from 'components/pages/Consulting.jsx';
import NotFound from 'components/error/NotFound.jsx';
import Github from 'components/pages/Github.jsx';
import SendToKodi from 'components/pages/SendToKodi.jsx';
import Navigation from './Navigation.jsx';
import ScrollToTop from 'components/hoc/ScrollToTop.jsx';

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <div>
            <Navigation />
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.pathname}
                    timeout={{ enter: 500, exit: 500 }}
                    classNames="fade"
                  >
                    <Switch key={location.pathname} location={location}>
                      <Route exact path="/" component={Development} />
                      <Route path="/it-strategieberatung" component={Consulting} />
                      <Route path="/softwareentwicklung" component={Github} />
                      <Route path="/sendtokodi" component={SendToKodi} />
                      <Route component={NotFound} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        </ScrollToTop>
      </HashRouter>
    );
  }
}
