import React from 'react';
import PropTypes from 'prop-types';

export const Search = ({ filter, handleSearch }) => {
  return <input type="text" value={filter} onChange={handleSearch} />;
};

Search.propTypes = {
  filter: PropTypes.string.isRequired,
  handleSearch: PropTypes.string.isRequired,
};
