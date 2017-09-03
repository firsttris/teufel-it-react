import React, {Component} from 'react';
import Parallax from './Parallax';
import Meeting from './../assets/images/meeting.jpg';
import Server from './../assets/images/server.jpg';
import consulting from '../assets/pages/consulting.json'
import {Helmet} from "react-helmet";

export default class Consulting extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Teufel IT, IT-Strategieberatung, Geschäftsanwendungen, Geschäftsprozesse</title>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Teufel IT, Softwareentwicklung, Integration, IT-Beratung, IT-Strategieberatung, Geschäftsanwendungen, Geschäftsprozesse" />
                    <link rel="canonical" href="http://teufel-it.de/it-strategieberatung" />
                </Helmet>
                <Parallax image1={Meeting} image2={Server} image3={Meeting} json={consulting}/>
            </div>
        );
    }
}