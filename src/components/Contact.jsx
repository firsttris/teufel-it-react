import React, { Component } from 'react';
import Social from './Social.jsx';
import SectionHeader from './SectionHeader.jsx';

export default class Contact extends Component {
  render() {
    return (
      <div className="row py-3 text-center">
        <div className="col">
          <span className="text-uppercase" style={{ fontSize: '30px', letterSpacing: '10px' }}>
            <SectionHeader title="CONTACT_TITLE" />
          </span>
          <div>
            <Social icon="fa-phone" url="tel:+49 176 45744166" />
            <Social icon="fa-envelope-o" url="mailto:info@teufel-it.de" />
            <Social icon="fa-xing-square" url="https://www.xing.com/profile/Tristan_Teufel" />
            <Social
              icon="fa-linkedin-square"
              url="https://de.linkedin.com/pub/tristan-teufel/8a/30a/b5"
            />
            <Social icon="fa-github" url="https://github.com/firsttris" />
          </div>
        </div>
      </div>
    );
  }
}
