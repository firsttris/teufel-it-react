import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

export default class Header extends Component {
    render() {
        return (
            <div className="row" style={{position: 'absolute', top: '200px', width: '100%',}}>
                <div className="col">
                    <div className="p-3" style={{backgroundColor: '#4B4B4B', display: 'inline-block'}}>
                        <div style={{fontSize: '35px', letterSpacing: '7px', color: '#f00'}}>
                            <FormattedMessage id="HEADER_TITLE"/>
                        </div>
                        <div className="pt-3" style={{fontSize: '15px', letterSpacing: '5px', color: 'white'}}>
                            <FormattedMessage id="HEADER_SUBTITLE"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
