import React, { Component } from 'react';

class Contact extends Component {
  render(props) {
    const margin10 = { margin: '10px' };
    return (
      <a style={margin10} className="btn btn-secondary" href={this.props.tel ? "tel:" + this.props.info : "mailto:" + this.props.info} target="_blank" rel="noopener noreferrer">{this.props.info}</a>
    );
  }
}

export default Contact;
