import React, { Component } from 'react';

class FullImage extends Component {
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
    }

    return (
      <div style={imageStyle}>
      </div>
    );
  }
}

export default FullImage;
