import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Search extends Component {
 
    render() {
        return <input type="text" value={this.props.filter} onChange={this.props.handleSearch } />;
  }
}

Search.propTypes = {
  filter: PropTypes.string.isRequired,
  handleSearch: PropTypes.string.isRequired
};