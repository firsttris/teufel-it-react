import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Paper from './../../public/images/backgrounds/paper.png';

const blackBackgroundStyle = { backgroundImage: `url(${Paper})`, color: 'white' };
const textStyle = { textDecoration: 'none', color: 'white' };

class Impressum extends Component {
    render() {
        return (
            <div className="row py-3" style={blackBackgroundStyle}>
                <div className="col-xs-12 col-md-4 col-lg-4">
                    <div><b><FormattedMessage id="OWNER"/></b></div>
                    <div>Tristan Teufel</div>
                    <div>Werkstr.10a</div>
                    <div>D-77815 Bühl</div>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-4">
                    <a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer"
                       style={textStyle}><FormattedMessage id="BUILD_WITH"/><b>React</b></a>
                    <div><a style={textStyle} className="fa fa-github" aria-hidden="true"
                            href="https://github.com/firsttris/teufel-it-react" target="_blank"> Page Source Code</a>
                    </div>
                    <div><FormattedMessage id="SOURCE_FOR_IMAGES"/></div>
                    <a href="http://unsplash.com" style={textStyle} target="_blank" rel="noopener noreferrer">unsplash.com </a>
                    <a href="http://shutterstock.com" style={textStyle} target="_blank" rel="noopener noreferrer">shutterstock.com </a>
                    <a href="http://fontawesome.io" style={textStyle} target="_blank" rel="noopener noreferrer">fontawesome.io</a>
                </div>
                <div className="col-xs-12 col-md-4 col-lg-4">
                    <div><b><FormattedMessage id="CONTACT_TITLE"/></b></div>
                    <div><a href="tel:+4917645744166" style={textStyle}>+49 (0) 176 457 44 1 66</a></div>
                    <div><a href="mailto:info@teufel-it.de" style={textStyle}>info@teufel-it.de</a></div>
                    <div>Finanzamt Baden-Baden 36216/14624</div>
                </div>
            </div>
        );
    }
}

export default Impressum;
