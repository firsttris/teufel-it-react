import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div style={{position: 'absolute', top: '200px', width: '100%',}}>
        <div className="p-3" style={{backgroundColor: '#4B4B4B', display: 'inline-block' }}>
          <div style={{fontSize: '35px', letterSpacing:'8px',color:'#f00'}}>{this.props.title}</div>
          <div className="pt-3" style={{fontSize: '15px', letterSpacing:'5px',color:'white'}}>{this.props.subtitle}</div>
        </div>
      </div>
    );
  }
}

export default Header;
