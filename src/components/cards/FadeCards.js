import React, { Component } from 'react';
import FadeCard from './FadeCard';
import PropTypes from 'prop-types';

class FadeCards extends Component {
  render() {
    return (
        <div className="row py-3" style={this.props.style}>
            {
                this.props.cards.map((card, index) => {
                    return(<FadeCard key={index} icon={card.iconClass} title={card.title} text={card.text}/>);
                })
            }
        </div>
    );
  }
}


FadeCards.propTypes = {
    style: PropTypes.object,
    cards: PropTypes.array
};

export default FadeCards;