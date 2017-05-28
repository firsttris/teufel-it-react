import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
import Unicorn from './assets/images/NotFound/unicorn-small.png'

class NotFound extends Component {
    render() {
        return (
            <div>
                <img src={Unicorn} />
                <h2>Looks like something went wrong!</h2>
                <div>Page not found, try refreshing.</div>
                <div>If the problem persists feel free to contact us.</div>
                <div>
                    <div class="spacer">
                    </div>
                    <div><b>Contact:</b></div>
                    <div><a href="https://www.teufel-it.de">www.teufel-it.de</a></div>
                    <div><a href="mailto:info@teufel-it.de">info@teufel-it.de</a></div>
                    <br />
                    <Link to="/" class="btn btn-secondary">Start</Link>
                </div>
            </div>
        );
    }
}

export default NotFound;