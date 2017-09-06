import React, {Component} from 'react';
import GitHub from 'github-api';
// basic auth
const gh = new GitHub({});


export default class Github extends Component {

    componentWillMount() {
        const firsttris = gh.getUser('firsttris');
        firsttris.getProfile()
            .then(function({data: data}) {
                console.log(data);
            });
    }

    render() {
        return (
            <div>
                <h1>GITFUCK</h1>
            </div>
        );
    }
}