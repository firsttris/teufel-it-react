import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Social extends Component {
    render() {
        const linkStyle = {
            margin: '10px',
            color: '#f00',
            textDecoration: 'none'
        };
        return (
            <a className="btn btn-outline-dark" style={linkStyle} target="_blank" rel="noopener noreferrer"
               href={this.props.url}>
                <i className={'fa fa-2x ' + this.props.icon} aria-hidden="true"/>
            </a>
        );
    }
}

Social.propTypes = {
    url: PropTypes.string,
    icon: PropTypes.string
};

export default Social;