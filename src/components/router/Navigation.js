import React, {Component} from 'react';
import Paper from './../../../public/images/backgrounds/paper.png';
import LinkItem from './LinkItem';
import './navigation.css';
import {withRouter} from 'react-router';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            currentPath: '',
            hideNav: true
        };
    }

    onClick() {
        this.setState({currentPath: this.props.history.location.pathname});
    }

    componentWillMount() {
        this.setState({currentPath: this.props.history.location.pathname});
    }

    toggleNavigation() {
        this.setState({hideNav: !this.state.hideNav});
    }

    render() {
        const navItems = [
            {path: '/', name: 'Entwicklung'},
            {path: '/it-strategieberatung', name: 'Beratung'},
            {path: '/softwareentwicklung', name: 'Projekte'},
            {path: '/sendtokodi', name: 'SendToKodi'}
        ];
        const navButtonStyle= {
            margin: '10px',
            color: '#f00',
            textDecoration: 'none'
        };
        return (
            <div className="nav-bar">
                <ul style={{
                    listStyleType: 'none',
                    margin: '0',
                    padding: '0',
                    overflow: 'hidden',
                    backgroundImage: `url(${Paper})`,
                    borderBottom: '1px solid #f00'
                }}>
                    <li className="nav-button">
                        <a className="btn btn-outline-dark pull-left" style={navButtonStyle}>Contact</a>
                        <a className="btn btn-outline-dark pull-right" style={navButtonStyle}>
                            <i className="fa fa-bars" aria-hidden="true" onClick={() => this.toggleNavigation()}/>
                        </a>
                        <div className="clearfix"/>
                    </li>
                    <div className={this.state.hideNav ? "navigation" : ''}>
                        {
                            navItems.map((item, index) => {
                                return (
                                    <div key={index} onClick={() => this.onClick()}>
                                        <LinkItem focus={this.state.currentPath === item.path} path={item.path}
                                                  name={item.name}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </ul>
            </div>
        );
    }
}

export default withRouter(Navigation);