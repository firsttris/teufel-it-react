import React, {Component} from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import Development from './components/Development';
import Consulting from './components/Consulting';
import Paper from './assets/images/backgrounds/paper.png';
import LinkItem from './components/LinkItem';
import NotFound from './components/error/NotFound';

const fixedNavBarStyle = {
    width: '100%',
    position: 'fixed',
    top: '0px',
    zIndex: '10',
    borderBottom: '1px solid #f00'
};

const ulStyle = {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    backgroundImage: `url(${Paper})`
};

class Routing extends Component {
    constructor() {
        super();
        this.state = {
            linkitem: 0
        };
    }

    onClick(index, e) {
        this.setState({linkitem: index});
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <div style={fixedNavBarStyle}>
                        <ul style={ulStyle}>
                            <div onClick={this.onClick.bind(this, 1)}>
                                <LinkItem focus={this.state.linkitem === 1} path="/" name="Entwicklung"/>
                            </div>
                            <div onClick={this.onClick.bind(this, 2)}>
                                <LinkItem focus={this.state.linkitem === 2} path="/it-strategieberatung"
                                          name="Beratung"/>
                            </div>
                            <div onClick={this.onClick.bind(this, 3)}>
                                <LinkItem focus={this.state.linkitem === 3} path="/softwareentwicklung"
                                          name="Software"/>
                            </div>
                        </ul>
                    </div>
                    <Switch>
                        <Route exact path="/" component={Development}/>
                        <Route path="/it-strategieberatung" component={Consulting}/>
                        <Route path="/softwareentwicklung"/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default Routing;
