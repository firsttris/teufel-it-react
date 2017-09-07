import React, {Component} from 'react';
import OldComputer from './../../../public/images/oldComputer2.jpg';
import FullImage from './../FullImage';
import GithubItem from './../pages/GithubItem';

export default class Github extends Component {

    constructor() {
        super();
        this.state = {
            searchInput: '',
            filteredRepositories: [],
            repositories: [],
        }
    }

    componentWillMount() {
        fetch('https://api.github.com/users/firsttris/repos').then((data) => data.json().then((data) => {
            console.log(data);
            const repos = data.filter((repository) => repository.fork === false);
            this.setState({repositories: repos, filteredRepositories: repos})
        }))
    }

    search(event) {
        const repos = this.state.repositories.filter((repository) => repository.name.includes(event.target.value));
        this.setState({filteredRepositories: repos, searchInput: event.target.value})
    }

    reset() {
        this.setState({searchInput: '', filteredRepositories: this.state.repositories})
    }

    render() {
        return (
            <div>
                <FullImage image={OldComputer} height="150px"/>
                <div className="container">
                    <div className="form-group pt-3">
                        <div className="input-group">
                        <input type="search" className="form-control" id="Search" placeholder="Search" value={this.state.searchInput} onChange={(value) => this.search(value)}/>
                        <span className="input-group-addon" onClick={this.reset.bind(this)}><i className="fa fa-trash-o" aria-hidden="true" /></span>
                        </div>
                    </div>
                    <div className="list-group">
                        {this.state.filteredRepositories.map((repository, index) => <GithubItem key={index} repo={repository}/>)}
                    </div>
                </div>
            </div>
        );
    }
}