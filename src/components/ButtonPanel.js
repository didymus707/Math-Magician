import React from 'react';
import PropTypes from 'prop-types';
import Buttton from './Button';

const buttons = {
  group1: ['AC', '+/-', '%', '/'],
  group2: ['7', '8', '9', 'X'],
  group3: ['4', '5', '6', '-'],
  group4: ['1', '2', '3', '+'],
  group5: ['0', '.', '='],
};

const arr = Object.keys(buttons);

const ButtonPanel = ({ onBtnClick }) => {
  const handleClick = btn => onBtnClick(btn);
  const operators = ['/', '+', '-', 'X', '='];
  const applyColor = ele => {
    let result;
    if (operators.includes(ele)) result = true;
    else result = false;
    return result;
  };
  const applyWidth = ele => {
    let result;
    if (ele === '0') result = true;
    else result = false;
    return result;
  };
  return (
    <>
      <div className="groups">
        <div className="row group1">
          {buttons[arr[0]].map(el => (
            <Buttton
              key={el}
              name={el}
              clickHandler={() => handleClick(el)}
              color={applyColor(el)}
              wide={applyWidth(el)}
            />
          ))}
        </div>
        <div className="row group2">
          {buttons[arr[1]].map(el => (
            <Buttton
              key={el}
              name={el}
              clickHandler={() => handleClick(el)}
              color={applyColor(el)}
              wide={applyWidth(el)}
            />
          ))}
        </div>
        <div className="row group3">
          {buttons[arr[2]].map(el => (
            <Buttton
              key={el}
              name={el}
              clickHandler={() => handleClick(el)}
              color={applyColor(el)}
              wide={applyWidth(el)}
            />
          ))}
        </div>
        <div className="row group4">
          {buttons[arr[3]].map(el => (
            <Buttton
              key={el}
              name={el}
              clickHandler={() => handleClick(el)}
              color={applyColor(el)}
              wide={applyWidth(el)}
            />
          ))}
        </div>
        <div className="row group5">
          {buttons[arr[4]].map(el => (
            <Buttton
              key={el}
              name={el}
              clickHandler={() => handleClick(el)}
              color={applyColor(el)}
              wide={applyWidth(el)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
