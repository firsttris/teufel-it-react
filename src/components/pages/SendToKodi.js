import React, {Component} from 'react';
import Lines from './../../../public/images/backgrounds/lines.png';

export default class SendToKodi extends Component {

    constructor() {
        super();
        this.state = {
            reviews: [],
            app: {
                developer: '',
                title: '',
                image: '',
                link: ''
            }
        }
    }

    componentWillMount() {
        const countries = ['de', 'us', 'gb', 'nl', 'ro', 'fr']
        for (const index in countries) {
            this.requestReview(countries[index])
        }
    }

    requestReview(country) {
        fetch('https://itunes.apple.com/' + country + '/rss/customerreviews/id=1113517603/sortBy=mostRecent/json')
            .then((data) => data.json().then((data) => {
                const entries = data.feed.entry;
                for (const index in entries) {
                    if (entries[index]['im:artist']) {
                        this.setState({
                            app: {
                                developer: entries[index]['im:artist']['label'],
                                image: entries[index]['im:image'][2]['label'],
                                title: entries[index]['im:name']['label'],
                                link: entries[index].link.attributes.href
                            }
                        });
                    } else {
                        let review = {};
                        review.name = entries[index].author.name.label;
                        review.text = entries[index].content.label;
                        review.rating = entries[index]['im:rating']['label'];
                        review.title = entries[index].title.label;
                        const reviews = this.state.reviews.slice();
                        reviews.push(review);
                        this.setState({reviews: reviews});
                    }
                }
            }))
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const imgStyle = {borderRadius: '25px', border: '1px solid black'};
        return (
            <div className="container-fluid" style={{
                backgroundImage: `url(${Lines})`
            }}>>
                <div style={{height: '75px'}}>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>SendToKodi</h2>
                            <p><i>von Tristan Teufel</i></p>
                            <img style={imgStyle} src="./../../../public/images/SendToKodi/logo.jpg"/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Beschreibung </h3>
                            <p>Mit "SendToKodi" kannst du direkt aus verschiedenen Apps Links an die Kodi Addons senden.<br/>
                                Öffne dazu einfach das "Share" Menü bei dem entsprechenden Video bzw. Lied und wähle aus
                                den zur Verfügung
                                stehenden Apps "SendToKodi" aus.<br/>
                                Anschließend kannst du den Link dann an Kodi senden.
                            </p>
                            <a href={this.state.app.link} className="btn btn-primary" target="_blank">
                                <i className="fa fa-apple" aria-hidden="true"/>
                                &nbsp;Appstore Link</a>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col">
                            <h5>Unterstützte Addons:</h5>
                            <ul>
                                <li>Youtube</li>
                                <li>Soundcloud</li>
                                <li>Vimeo</li>
                                <li>Twitch</li>
                                <li>Mixcloud</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-md-12 col-lg-6">
                            <img style={imgStyle} src="./../../../public/images/SendToKodi/3.jpg"/>
                        </div>
                        <div className="col-xs-12 col-md-12 col-lg-6 mt-4">
                            <img style={imgStyle} src="./../../../public/images/SendToKodi/4.jpg"/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Reviews</h3>
                            {this.state.reviews.map((review, ri) => (
                                <div key={ri}>
                                    <div><b>{review.title}</b></div>
                                    <span><i>{review.name} </i></span>
                                    {[...Array(5)].map((x, xi) => <i className="fa fa-star" style={{color: 'gold'}} key={xi}
                                                                     aria-hidden="true"/>)}
                                    <p>{review.text}</p>
                                </div>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}