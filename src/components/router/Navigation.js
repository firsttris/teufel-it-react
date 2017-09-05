import React, {Component} from 'react';
import Paper from './../../../public/images/backgrounds/paper.png';
import LinkItem from './LinkItem';
import { withRouter } from 'react-router';

const fixedNavBarStyle = {
    width: '100%',
    position: 'fixed',
    top: '0px',
    zIndex: '10',
    borderBottom: '1px solid #f00'
};

const ulStyle = {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    backgroundImage: `url(${Paper})`
};

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            currentPath: ''
        };
    }

    onClick() {
        this.setState({currentPath: this.props.history.location.pathname});
    }

    componentWillMount() {
        this.setState({currentPath: this.props.history.location.pathname});
    }

    render() {
        const navItems = [
            { path: '/', name: 'Entwicklung' },
            { path: '/it-strategieberatung', name: 'Beratung' },
            { path: '/softwareentwicklung', name: 'Software'}
        ];
        return (
            <div style={fixedNavBarStyle}>
                <ul style={ulStyle}>
                    {
                        navItems.map((item, index) => {
                            return(
                                <div key={index} onClick={() => this.onClick()}>
                                    <LinkItem focus={this.state.currentPath === item.path} path={item.path} name={item.name}/>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default withRouter(Navigation);