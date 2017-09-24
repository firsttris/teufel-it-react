import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

class SectionHeader extends Component {
  render() {
    return (
      <div className="text-uppercase" style={{ fontSize: '30px', letterSpacing: '10px' }}>
        <FormattedMessage id={this.props.title} />
      </div>
    );
  }
}

SectionHeader.propTypes = {
  title: PropTypes.string
};

export default SectionHeader;
