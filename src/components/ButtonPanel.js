import React from 'react';
import Buttton from './Button';

const ButtonPanel = () => (
  <>
    <div className="group1">
      <Buttton name="AC" />
      <Buttton name="+/-" />
      <Buttton name="%" />
      <Buttton name="/" />
    </div>
    <div className="group2">
      <Buttton name="7" />
      <Buttton name="8" />
      <Buttton name="9" />
      <Buttton name="X" />
    </div>
    <div className="group3">
      <Buttton name="4" />
      <Buttton name="5" />
      <Buttton name="6" />
      <Buttton name="-" />
    </div>
    <div className="group4">
      <Buttton name="1" />
      <Buttton name="2" />
      <Buttton name="3" />
      <Buttton name="+" />
    </div>
    <div className="group5">
      <Buttton name="0" />
      <Buttton name="." />
      <Buttton name="=" />
    </div>
  </>
);

export default ButtonPanel;
