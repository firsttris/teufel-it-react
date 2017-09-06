import React, {Component} from 'react';
import ContactAdress from './ContactAdress';
import Social from './Social';
import SubHeading from './SubHeading';

export default class Contact extends Component {

    render() {
        const margin0 = {margin: '0 auto'};
        return (
            <div>
                <SubHeading title="CONTACT_TITLE" text="CONTACT_TEXT"/>
                <div className="row">
                    <div className="col" style={margin0}>
                        <ContactAdress info="+49 176 45744166" tel={true}/>
                        <ContactAdress info="info@teufel-it.de" tel={false}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={margin0}>
                        <Social icon="fa-xing-square" url="https://www.xing.com/profile/Tristan_Teufel"/>
                        <Social icon="fa-linkedin-square" url="https://de.linkedin.com/pub/tristan-teufel/8a/30a/b5"/>
                        <Social icon="fa-github" url="https://github.com/firsttris"/>
                    </div>
                </div>
            </div>
        );
    }
}