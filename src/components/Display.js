import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <div className="display">
    Available
    { result }
  </div>
);

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
