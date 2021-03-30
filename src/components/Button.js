import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, clickHandler, color, wide,
}) => {
  const handleBtn = e => clickHandler(e.target.textContent);
  const btnCheck = () => {
    let result;
    if (color) result = 'btn-color';
    if (wide) result = 'btn-wide';
    return result;
  };
  return (
    <button
      type="button"
      onClick={handleBtn}
      className={`btn ${btnCheck()}`}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.bool,
};

Button.defaultProps = {
  color: false,
  wide: false,
};

export default Button;
