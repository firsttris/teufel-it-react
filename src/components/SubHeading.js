import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

export default class SubHeading extends Component {
    render() {
        return (
            <div className="row py-3" style={this.props.style}>
                <div className="col">
                    <div className="text-uppercase"
                         style={{fontSize: '30px', letterSpacing: '10px'}}>
                        <FormattedMessage id={this.props.title}/>
                    </div>
                    <FormattedMessage id={this.props.text}/>
                </div>
            </div>
        );
    }
}
