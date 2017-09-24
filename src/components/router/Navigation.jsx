import React, { Component } from 'react';
import Paper from 'images/backgrounds/paper.png';
import LinkItem from './LinkItem.jsx';
import './navigation.css';
import { withRouter } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      currentPath: '',
      hideNav: true
    };
  }

  onClick() {
    this.setState({ currentPath: this.props.history.location.pathname, hideNav: true });
  }

  componentWillMount() {
    this.setState({ currentPath: this.props.history.location.pathname });
  }

  toggleNavigation() {
    this.setState({ hideNav: !this.state.hideNav });
  }

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight - 850);
  }

  render() {
    const navItems = [
      { path: '/', name: this.props.intl.messages['NAVIGATION_DEVELOPMENT'] },
      { path: '/it-strategieberatung', name: this.props.intl.messages['NAVIGATION_CONSULTING'] },
      { path: '/softwareentwicklung', name: this.props.intl.messages['NAVIGATION_PROJECTS'] },
      { path: '/sendtokodi', name: this.props.intl.messages['NAVIGATION_SENDTOKODI'] }
    ];
    const navButtonStyle = {
      margin: '10px',
      color: '#f00',
      textDecoration: 'none'
    };
    return (
      <div className="nav-bar">
        <ul
          style={{
            listStyleType: 'none',
            margin: '0',
            padding: '0',
            overflow: 'hidden',
            backgroundImage: `url(${Paper})`,
            borderBottom: '1px solid #f00'
          }}
        >
          <li className="nav-button">
            <a
              className="btn btn-outline-dark pull-left"
              style={navButtonStyle}
              onClick={() => this.scrollToBottom()}
            >
              Contact
            </a>
            <a className="btn btn-outline-dark pull-right" style={navButtonStyle}>
              <i
                className="fa fa-bars"
                aria-hidden="true"
                onClick={() => this.toggleNavigation()}
              />
            </a>
            <div className="clearfix" />
          </li>
          <div className={this.state.hideNav ? 'navigation' : ''}>
            {navItems.map((item, index) => {
              return (
                <div key={index} onClick={() => this.onClick()}>
                  <LinkItem
                    focus={this.state.currentPath === item.path}
                    path={item.path}
                    name={item.name}
                  />
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  history: PropTypes.object,
  intl: PropTypes.object
};

export default withRouter(injectIntl(Navigation));
