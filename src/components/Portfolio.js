import React, {Component} from 'react';
import FlipCards from './cards/FlipCards';
import SectionHeaderWithSubRow from './SectionHeaderWithSubRow';
import PropTypes from 'prop-types';

class Portfolio extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                <SectionHeaderWithSubRow title={this.props.json.title}
                            text={this.props.json.text}/>
                <FlipCards cards={this.props.json.cards}/>
                </div>
            </div>
        );
    }
}

Portfolio.propTypes = {
    json: PropTypes.object
};

export default Portfolio;