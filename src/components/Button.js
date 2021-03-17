import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const handleBtn = e => clickHandler(e.target.textContent);
  return (
    <button
      type="button"
      onClick={handleBtn}
      className="btn"
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
