import React, { Component } from 'react';
import Paper from './assets/images/backgrounds/paper.png';

class Header extends Component {
  render() {
    return (
      <div style={{position: 'absolute', top: '200px', width: '100%',}}>
        <div style={{backgroundImage: `url(${Paper})`, padding: '20px', display: 'inline-block' }}>
          <div style={{fontSize: '35px', letterSpacing:'10px',color:'#f00'}}>{this.props.title}</div>
          <div className="pt-3" style={{fontSize: '15px', letterSpacing:'5px',color:'white'}}>{this.props.subtitle}</div>
        </div>
      </div>
    );
  }
}

export default Header;
