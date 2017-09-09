import React, { Component } from 'react';
import FlipCard from './FlipCard';
import PropTypes from 'prop-types';

class FlipCards extends Component {
  render() {
    return (
        <div className="row py-3">
            {
                this.props.cards.map((card, index) => {
                    return <FlipCard key={index} class={card.gridClass} icon={card.iconClass} title={card.title}
                                     text={card.text}/>;
                })
            }
        </div>
    );
  }
}

FlipCards.propTypes = {
    cards: PropTypes.array
};

export default FlipCards;