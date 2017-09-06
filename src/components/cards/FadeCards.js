import React, { Component } from 'react';
import FadeCard from './FadeCard';

export default class FadeCards extends Component {
  render() {
    return (
        <div className="row py-3" style={this.props.style}>
            {
                this.props.cards.map((card, index) => {
                    return <FadeCard key={index} icon={card.iconClass} title={card.title} text={card.text}/>;
                })
            }
        </div>
    );
  }
}
