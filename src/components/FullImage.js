import React, {Component} from 'react';
import './fullImage.css'

export default class FullImage extends Component {
    render() {
        let imageStyle = {
            position: 'relative',
            opacity: '0.65',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${this.props.image})`,
            height: this.props.height,
            backgroundSize: 'cover',
            minHeight: '400px'
        };

        return (
            <div className="row">
                <div className="col" style={{padding: 0}}>
                    <div className="full-image" style={imageStyle}>
                    </div>
                </div>
            </div>
        );
    }
}
