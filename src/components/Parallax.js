import React, {Component} from 'react';
import Lines from './../assets/images/backgrounds/lines.png';
import Header from './Header';
import FullImage from './FullImage';
import Contact from './Contact';
import Impressum from './Impressum';
import Principles from './Principles';
import Portfolio from './Portfolio';

export default class Parallax extends Component {
    render() {
        const { portfolio, principles } = this.props.json;
        return (
            <div className="container-fluid" style={{
                textAlign: 'center',
                backgroundImage: `url(${Lines})`
            }}>
                <FullImage image={this.props.image1} height="550px"/>
                <Header/>
                <Portfolio json={portfolio}/>
                <FullImage image={this.props.image2} height="350px"/>
                <Principles json={principles}/>
                <FullImage image={this.props.image3} height="350px"/>
                <Contact/>
                <Impressum/>
            </div>
        );
    }
}

