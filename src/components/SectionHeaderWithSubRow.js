import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import SectionHeader from './SectionHeader';
import PropTypes from 'prop-types';

class SectionHeaderWithSubRow extends Component {
    render() {
        return (
            <div className="row py-3" style={this.props.style}>
                <div className="col">
                    <SectionHeader title={this.props.title}/>
                    {this.props.text ? <FormattedMessage id={this.props.text}/> : ''}
                </div>
            </div>
        );
    }
}

SectionHeaderWithSubRow.propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    text: PropTypes.string
};

export default SectionHeaderWithSubRow;