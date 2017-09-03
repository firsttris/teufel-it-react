import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom'
import Unicorn from './../assets/images/NotFound/unicorn-small.png'
import Lines from './../assets/images/backgrounds/lines.png'
import {FormattedMessage} from 'react-intl'

export default class NotFound extends Component {
    render() {
        return (
            <div style={{
                textAlign: 'center',
                fontFamily: 'monospace',
                backgroundImage: `url(${Lines})`,
                position: 'absolute',
                width: '100%',
                height: '100%',
                paddingTop: '100px'
            }}>
                <img src={Unicorn} alt="Not Found" style={{marginTop: '50px', marginBottom: '50px', height: '200px'}}/>
                <h2><FormattedMessage id="ERROR_TEXT"/></h2>
                <div><FormattedMessage id="ERROR_NOT_FOUND"/></div>
                <div><FormattedMessage id="ERROR_CONTACT_US"/></div>
                <div>
                    <div className="spacer" style={{height: '80px'}}>
                    </div>
                    <div><b><FormattedMessage id="CONTACT_TITLE"/></b></div>
                    <div><a href="https://www.teufel-it.de">www.teufel-it.de</a></div>
                    <div><a href="mailto:info@teufel-it.de">info@teufel-it.de</a></div>
                    <br/>
                    <Link to="/" className="btn btn-dark"><FormattedMessage id="ERROR_START"/></Link>
                </div>
            </div>
        );
    }
}