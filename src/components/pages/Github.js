import React, {Component} from 'react';
import OldComputer from './../../../public/images/code.jpg';
import FullImage from './../FullImage';
import Header from './../Header';
import GithubItem from './../pages/GithubItem';
import SectionHeaderWithSubRow from './../SectionHeaderWithSubRow';
import Contact from './../Contact';
import Impressum from './../Impressum';

class Github extends Component {

    constructor() {
        super();
        this.state = {
            searchInput: '',
            filteredRepositories: [],
            repositories: [],
        };
    }

    componentWillMount() {
        fetch('https://api.github.com/users/firsttris/repos').then((data) => data.json().then((data) => {
            const repos = data.filter((repository) => repository.fork === false);
            this.setState({repositories: repos, filteredRepositories: repos});
        }));
    }

    search(event) {
        const repos = this.state.repositories.filter((repository) => repository.name.toLowerCase().includes(event.target.value.toLowerCase()));
        this.setState({filteredRepositories: repos, searchInput: event.target.value});
    }

    reset() {
        this.setState({searchInput: '', filteredRepositories: this.state.repositories});
    }

    render() {
        return (
            <div className="container-fluid">
                <div style={{textAlign: 'center'}}>
                    <FullImage image={OldComputer} height="550px"/>
                    <Header/>
                </div>
                <div className="container">
                    <SectionHeaderWithSubRow title="NAVIGATION_PROJECTS"
                                             text="GITHUB_SUBTITLE"/>
                    <div className="form-group pt-3">
                        <div className="input-group">
                            <input type="search" className="form-control" id="Search" placeholder="Search"
                                   value={this.state.searchInput} onChange={(value) => this.search(value)}/>
                            <span className="input-group-addon" onClick={this.reset.bind(this)}><i
                                className="fa fa-trash-o" aria-hidden="true"/></span>
                        </div>
                    </div>
                    <div className="list-group pb-3">
                        {this.state.filteredRepositories.map((repository, index) => <GithubItem key={index} repo={repository}/>)}
                    </div>
                </div>
                <Contact/>
                <Impressum/>
            </div>
        );
    }
}

export default Github;