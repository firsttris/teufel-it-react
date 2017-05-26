import React, { Component } from 'react';
import Paper from './assets/images/backgrounds/paper.png';
import Logo from './logo.svg';
import './logo.css';

const blackBackgroundStyle = { backgroundImage: `url(${Paper})`, color: 'white' };

class Impressum extends Component {
  render() {
    const names = [
      "Inhaber:",
      "Tristan Teufel",
      "Werkstr.10a",
      "D-77815 Bühl"
    ];
    const sources = [
      "Quellenangaben für Bilder und Icons",
      "unsplash.com, shutterstock.com, fontawesome.io"
    ];
    return (
      <div className="row py-3" style={blackBackgroundStyle}>
        <div className="col-xs-12 col-md-4 col-lg-4">
          {names.map(row => <div key={row}>{row}</div>)}
        </div>
        <div className="col-xs-12 col-md-4 col-lg-4">
          <span>Build with <a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb', textDecoration: 'none' }}><b>React</b></a></span>
          <img src={Logo} className="App-logo" alt="logo" />
          <div>
          <div>Quellen für Bilder und Icons:</div>
          <a href="http://unsplash.com" style={{textDecoration: 'none', color: '#61dafb' }} target="_blank" rel="noopener noreferrer" >unsplash.com </a>
          <a href="http://shutterstock.com" style={{textDecoration: 'none', color: '#61dafb' }} target="_blank" rel="noopener noreferrer" >shutterstock.com </a>
          <a href="http://fontawesome.io" style={{textDecoration: 'none', color: '#61dafb' }} target="_blank" rel="noopener noreferrer" >fontawesome.io</a>
          </div>
        </div>
        <div className="col-xs-12 col-md-4 col-lg-4">
          <div>Kontakt:</div>
          <div><a href="tel:+4917645744166" style={{textDecoration: 'none', color: '#61dafb' }}>+49 (0) 176 457 44 1 66</a></div>
          <div><a href="mailto:info@teufel-it.de" style={{textDecoration: 'none', color: '#61dafb' }}>info@teufel-it.de</a></div>
          <div>Finanzamt Baden-Baden 36216/14616</div>
        </div>
      </div>
    );
  }
}

export default Impressum;
