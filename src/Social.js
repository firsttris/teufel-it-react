import React, { Component } from 'react';

class Social extends Component {
  render() {
    const linkStyle = {
      margin: '10px',
      color: '#f00',
      textDecoration: 'none'
    }
    return (
        <a style={linkStyle} className={"fa fa-2x "+this.props.icon} aria-hidden="true" target="_blank" rel="noopener noreferrer" href={this.props.url}> </a>
    );
  }
}

export default Social;
