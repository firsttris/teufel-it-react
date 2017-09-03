import React, {Component} from 'react';
import FlipCards from './FlipCards';
import SubHeading from './SubHeading';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                <SubHeading title={this.props.json.title}
                            text={this.props.json.text}/>
                <FlipCards cards={this.props.json.cards}/>
                </div>
            </div>
        );
    }
}
