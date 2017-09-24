import React, { Component } from 'react';
import Parallax from './Parallax.jsx';
import OldComputer from 'images/oldComputer2.jpg';
import MuchCode from 'images/much_code.jpg';
import DevelopmentJson from 'json/pages/development.json';
import { Helmet } from 'react-helmet';

class Development extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Teufel IT, Software ist unser Handwerk</title>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Teufel IT, Softwareentwicklung, JavaScript, NodeJs, Integration"
          />
          <link rel="canonical" href="http://teufel-it.de" />
        </Helmet>
        <Parallax
          image1={OldComputer}
          image2={MuchCode}
          image3={OldComputer}
          json={DevelopmentJson}
        />
      </div>
    );
  }
}

export default Development;
