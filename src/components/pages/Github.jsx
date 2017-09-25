import React, { Component } from 'react';
import Lines from 'images/backgrounds/lines.png';
import OldComputer from 'images/code.jpg';
import FullImage from 'components/FullImage.jsx';
import Header from 'components/Header.jsx';
import GithubItem from 'components/pages/GithubItem.jsx';
import SectionHeaderWithSubRow from 'components/SectionHeaderWithSubRow.jsx';
import Contact from 'components/Contact.jsx';
import Impressum from 'components/Impressum.jsx';

class Github extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      filteredRepositories: [],
      repositories: []
    };
  }

  onEnter(e) {
    if (e.key === 'Enter') {
      document.activeElement.blur();
    }
  }

  componentWillMount() {
    fetch('https://api.github.com/users/firsttris/repos').then(data =>
      data.json().then(data => {
        const repos = data.filter(repository => repository.fork === false);
        this.setState({ repositories: repos, filteredRepositories: repos });
      })
    );
  }

  search(event) {
    const repos = this.state.repositories.filter(repository =>
      repository.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    this.setState({ filteredRepositories: repos, searchInput: event.target.value });
  }

  reset() {
    this.setState({ searchInput: '', filteredRepositories: this.state.repositories });
  }

  render() {
    return (
      <div className="container-fluid" style={{ backgroundImage: `url(${Lines})` }}>
        <div style={{ textAlign: 'center' }}>
          <FullImage image={OldComputer} height="550px" />
          <Header />
        </div>
        <div className="container">
          <SectionHeaderWithSubRow title="NAVIGATION_PROJECTS" text="GITHUB_SUBTITLE" />
          <div className="form-group pt-3">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                id="Search"
                placeholder="Search"
                value={this.state.searchInput}
                onChange={value => this.search(value)}
                onKeyPress={e => this.onEnter(e)}
              />
              <span className="input-group-addon" onClick={this.reset.bind(this)}>
                <i className="fa fa-trash-o" aria-hidden="true" />
              </span>
            </div>
          </div>
          <div className="list-group pb-3">
            {this.state.filteredRepositories.map((repository, index) => (
              <GithubItem key={index} repo={repository} />
            ))}
          </div>
        </div>
        <Contact />
        <Impressum />
      </div>
    );
  }
}

export default Github;
