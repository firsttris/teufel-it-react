import React, {Component} from 'react';
import Parallax from './../Parallax';
import OldComputer from './../../../public/images/oldComputer2.jpg';
import MuchCode from './../../../public/images/much_code.jpg';
import DevelopmentJson from './../../../public/pages/development.json';
import {Helmet} from "react-helmet";

export default class Development extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Teufel IT, Software ist unser Handwerk</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Teufel IT, Softwareentwicklung, JavaScript, NodeJs, Integration" />
                    <link rel="canonical" href="http://teufel-it.de" />
                </Helmet>
                <Parallax image1={OldComputer} image2={MuchCode} image3={OldComputer} json={DevelopmentJson}/>
            </div>
        );
    }
}