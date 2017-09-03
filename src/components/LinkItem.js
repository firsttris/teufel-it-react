import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom'

export default class LinkItem extends Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }

    onMouseLeave() {
        this.setState({hover: false});
    }

    onMouseEnter() {
        this.setState({hover: true});
    }

    getLinkStyle() {
        const linkStyle = {
            display: 'block',
            color: 'white',
            textAlign: 'center',
            padding: '14px 16px',
            textDecoration: 'none'
        }
        if (this.props.focus) {
            return {...linkStyle, ...{backgroundColor: '#f00'}};
        }
        if (this.state.hover) {
            return {...linkStyle, ...{backgroundColor: 'white', color: 'black'}};
        }
        return linkStyle;
    }

    render() {
        return (
            <li style={{float: 'left'}} onMouseLeave={this.onMouseLeave.bind(this)}
                onMouseEnter={this.onMouseEnter.bind(this)}><Link style={this.getLinkStyle()}
                                                                  to={this.props.path}>{this.props.name}</Link></li>
        );
    }
}