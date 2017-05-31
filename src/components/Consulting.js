import React, { Component } from 'react';
import App from './App';
import Meeting from './../assets/images/meeting.jpg';
import Server from './../assets/images/server.jpg';
import PrinciplesJson from './../assets/json/consulting/principles.json'
import PortfolioJson from './../assets/json/consulting/portfolio.json'

class Consulting extends Component {
    render() {
        return (
            <div>
                <App image1={Meeting} image2={Server} image3={Meeting} portfolioJson={PortfolioJson} principlesJson={PrinciplesJson}></App>
            </div>
        );
    }
}

export default Consulting;