import React, {Component} from 'react';

export default class ContactAdress extends Component {
    render() {
        const margin10 = {margin: '10px'};
        return (
            <a style={margin10} className="btn btn-outline-dark"
               href={this.props.tel ? "tel:" + this.props.info : "mailto:" + this.props.info} target="_blank"
               rel="noopener noreferrer">{this.props.info}</a>
        );
    }
}