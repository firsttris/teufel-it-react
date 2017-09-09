import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import Paper from './../../public/images/backgrounds/paper.png';

const blackBackgroundStyle = {backgroundImage: `url(${Paper})`, color: 'white', textAlign: 'left', fontSize: 'small'};
const textStyle = {color: 'white'};
const fontSizeMedium = {fontSize: 'medium'};

class Impressum extends Component {
    render() {
        return (
            <div className="row" style={blackBackgroundStyle}>
                <div className="container py-3">
                    <p>© 2017 Teufel-IT</p>
                    <div className="row">
                        <div className="col-xs-12 col-md-3 col-lg-3 py-3">
                            <div style={fontSizeMedium}>
                                <FormattedMessage id="OWNER"/>
                            </div>
                            <br/>
                            <div>Tristan Teufel</div>
                            <div>Werkstr.10a</div>
                            <div>D-77815 Bühl</div>
                        </div>
                        <div className="col-xs-12 col-md-3 col-lg-3 py-3">
                            <div style={fontSizeMedium}>
                                <FormattedMessage id="SOURCE_CODE"/>
                            </div>
                            <br/>
                            <div>
                                <a style={textStyle}
                                   href="https://github.com/firsttris/teufel-it-react" rel="noopener noreferrer"
                                   target="_blank">
                                    <FormattedMessage id="GITHUB_PAGE_LINK"/><i className="fa fa-github"
                                                                                aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3 col-lg-3 py-3">
                            <div style={fontSizeMedium}>
                                <FormattedMessage id="SOURCE_FOR_IMAGES"/>
                            </div>
                            <br/>
                            <div>
                                <a href="http://unsplash.com" style={textStyle} target="_blank"
                                   rel="noopener noreferrer">www.unsplash.com </a>
                            </div>
                            <div>
                                <a href="http://shutterstock.com" style={textStyle} target="_blank"
                                   rel="noopener noreferrer">www.shutterstock.com </a>
                            </div>
                            <div>
                                <a href="http://fontawesome.io" style={textStyle} target="_blank"
                                   rel="noopener noreferrer">www.fontawesome.io</a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3 col-lg-3 py-3">
                            <div style={fontSizeMedium}>
                                <FormattedMessage id="CONTACT_TITLE"/>
                            </div>
                            <br/>
                            <div><a href="tel:+4917645744166" style={textStyle}>+49 (0) 176 457 44 1 66</a></div>
                            <div><a href="mailto:info@teufel-it.de" style={textStyle}>info@teufel-it.de</a></div>
                            <div>Finanzamt Baden-Baden 36216/14624</div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Impressum;
