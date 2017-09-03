import React, {Component} from 'react';
import Parallax from './Parallax';
import MuchCode from './../assets/images/much_code.jpg';
import CodeColor from './../assets/images/code_color.jpg';
import development from '../assets/pages/development.json'
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
                <Parallax image1={MuchCode} image2={CodeColor} image3={MuchCode} json={development}/>
            </div>
        );
    }
}