import React, {Component} from 'react';
import FadeCards from './cards/FadeCards';
import SectionHeaderWithSubRow from './SectionHeaderWithSubRow';
import Paper from './../../public/images/backgrounds/paper.png';
import PropTypes from 'prop-types';

const blackBackgroundStyle = {backgroundImage: `url(${Paper})`, color: 'white'};

class Principle extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <SectionHeaderWithSubRow title={this.props.json.title} text={this.props.json.text}
                                style={blackBackgroundStyle}/>
                    <FadeCards cards={this.props.json.cards} style={blackBackgroundStyle}/>
                </div>
            </div>
        );
    }
}

Principle.propTypes = {
    json: PropTypes.object
};

export default Principle;