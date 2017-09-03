import React, {Component} from 'react'
import {FormattedMessage} from 'react-intl'

const cardStyle = {
    position: 'absolute',
    top: '0',
    width: '100%',
    backfaceVisibility: 'hidden'
};
const borderStyle = {
    border: '1px solid #f00',
    borderRadius: '5px',
    width: '50%',
    margin: 'auto',
    height: '175px',
    display: 'flex',
    alignItems: 'center'
};
const objectPerspectiveStyle = {perspective: '800px', 'height': '250px'}
const iconFontStyle = {fontSize: '10em', color: '#f00'}

export default class FilpCard extends Component {
    constructor() {
        super();
        this.state = {
            flipped: false
        }
    }

    onMouseLeave() {
        this.setState({flipped: false})
    }

    onMouseEnter() {
        this.setState({flipped: true})
    }

    onClick() {

    }

    render() {
        const flipStyle = {
            width: '100%',
            transformStyle: 'preserve-3d',
            transition: 'transform 1s linear',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)'
        }
        flipStyle.transform = this.state.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)';
        return (
            <div className={this.props.class} style={objectPerspectiveStyle}
                 onMouseLeave={this.onMouseLeave.bind(this)}
                 onMouseEnter={this.onMouseEnter.bind(this)}
                 onClick={this.onClick.bind(this)}>
                <div style={flipStyle}>
                    <div style={cardStyle}>
                        <i className={"fa fa-5x " + this.props.icon} aria-hidden="true" style={iconFontStyle}/>
                        <div className="text-uppercase" style={{fontSize: '1.5em'}}>
                            <FormattedMessage id={this.props.title}/>
                        </div>
                    </div>
                    <div style={{...cardStyle, ...{transform: 'rotateY(180deg)'}}}>
                        <div className="p-2" style={borderStyle}>
                            <FormattedMessage id={this.props.text}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
