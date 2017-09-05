import React, {Component} from 'react';
import FadeCards from './FadeCards';
import SubHeading from './SubHeading';
import Paper from './../../public/images/backgrounds/paper.png';

const blackBackgroundStyle = {backgroundImage: `url(${Paper})`, color: 'white'};

export default class Principle extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <SubHeading title={this.props.json.title} text={this.props.json.text}
                                style={blackBackgroundStyle}/>
                    <FadeCards cards={this.props.json.cards} style={blackBackgroundStyle}/>
                </div>
            </div>
        );
    }
}
