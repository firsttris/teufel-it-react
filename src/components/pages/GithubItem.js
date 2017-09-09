import React, {Component} from 'react';
import Emojify from 'react-emojione';
import PropTypes from 'prop-types';

class GithubItem extends Component {
    render() {
        return (
            <div>
                <a href={this.props.repo['html_url']} target="_blank" rel="noopener noreferrer"
                   className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{this.props.repo.name}</h5>

                    </div>
                    <small style={{float: 'right', width: '100px', textAlign: 'right'}}>
                        <i className="fa fa-star px-1"/><span
                        className="pr-2">{this.props.repo['stargazers_count']}</span>
                        <i className="fa fa-code-fork px-1"/><span>{this.props.repo['forks_count']}</span>
                    </small>
                    <p className="mb-1"><Emojify style={{height: 20, width: 20}}>{this.props.repo.description}</Emojify>
                    </p>
                    <small>{this.props.repo.language}</small>
                </a>
            </div>
        );
    }
}

GithubItem.propTypes = {
    repo: PropTypes.object
};

export default GithubItem;