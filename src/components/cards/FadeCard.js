import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';

class FilpCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false
        };
    }

    onMouseLeave() {
        this.setState({flipped: false});
    }

    onMouseEnter() {
        this.setState({flipped: true});
    }

    onClick() {
        this.setState({flipped: true});
    }

    render() {
        const verticalCenterStyle = {
            display: 'inline-flex',
            alignItems: 'center'
        };
        const colorTransitionStyle = {transition: 'color 2s linear 1s'};
        colorTransitionStyle.color = this.state.flipped ? 'white' : '#f00';
        return (
            <div className="py-2 col-xs-12 col-md-6 col-lg-6"
                 onMouseLeave={this.onMouseLeave.bind(this)}
                 onMouseEnter={this.onMouseEnter.bind(this)}
                 onClick={this.onClick.bind(this)}>
                <div style={verticalCenterStyle}>
                    <i className={'fa fa-2x ' + this.props.icon} style={colorTransitionStyle} aria-hidden="true"/>
                    <span className="text-uppercase" style={{marginLeft: '10px', fontSize: '20px'}}>
                        <FormattedMessage id={this.props.title}/>
                    </span>
                </div>
                <p>
                    <FormattedMessage id={this.props.text}/>
                </p>
            </div>
        );
    }
}

FilpCard.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
};

export default FilpCard;