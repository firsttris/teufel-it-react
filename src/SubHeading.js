import React, { Component } from 'react';

class SubHeading extends Component {
  render(props) {
    return (
      <div className="col">
        <div className="text-uppercase" style={{ fontSize: '30px', letterSpacing: '10px' }}>{this.props.title}</div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default SubHeading;
