import React, {Component} from 'react';
import './fade.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Development from './../pages/Development';
import Consulting from './../pages/Consulting';
import NotFound from './../error/NotFound';
import Github from './../pages/Github';
import SendToKodi from './../pages/SendToKodi';
import Navigation from './Navigation';
import ScrollToTop from './../hoc/ScrollToTop';


export default class Router extends Component {

    render() {
        return (
            <HashRouter>
                <ScrollToTop>
                    <div>
                        <Navigation/>
                        <Route render={({location}) => (
                            <TransitionGroup>
                                <CSSTransition key={location.pathname} timeout={{enter: 500, exit: 500}}
                                               classNames="fade">
                                    <Switch key={location.pathname} location={location}>
                                        <Route exact path="/" component={Development}/>
                                        <Route path="/it-strategieberatung" component={Consulting}/>
                                        <Route path="/softwareentwicklung" component={Github}/>
                                        <Route path="/sendtokodi" component={SendToKodi}/>
                                        <Route component={NotFound}/>
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )}/>
                    </div>
                </ScrollToTop>
            </HashRouter>
        );
    }
}