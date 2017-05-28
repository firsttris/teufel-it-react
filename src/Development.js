import React, { Component } from 'react';
import App from './App';
import MuchCode from './assets/images/much_code.jpg';
import CodeColor from './assets/images/code_color.jpg';
import PrinciplesJson from './assets/json/development/principles.json'
import PortfolioJson from './assets/json/development/portfolio.json'

class Development extends Component {
    render() {
        return (
            <div>
                <App image1={MuchCode} image2={CodeColor} image3={MuchCode} portfolioJson={PortfolioJson} principlesJson={PrinciplesJson}></App>
            </div>
        );
    }
}

export default Development;