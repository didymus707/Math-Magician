import React from 'react';
import Buttton from './Button';

const buttons = {
  group1: ['AC', '+/-', '%', '/'],
  group2: ['7', '8', '9', 'X'],
  group3: ['4', '5', '6', '-'],
  group4: ['1', '2', '3', '+'],
  group5: ['0', '.', '='],
};

const arr = Object.keys(buttons);

const ButtonPanel = () => (
  <>
    <div className="group1">
      {buttons[arr[0]].map(el => <Buttton key={el} name={el} />)}
    </div>
    <div className="group2">
      {buttons[arr[1]].map(el => <Buttton key={el} name={el} />)}
    </div>
    <div className="group3">
      {buttons[arr[2]].map(el => <Buttton key={el} name={el} />)}
    </div>
    <div className="group4">
      {buttons[arr[3]].map(el => <Buttton key={el} name={el} />)}
    </div>
    <div className="group5">
      {buttons[arr[4]].map(el => <Buttton key={el} name={el} />)}
    </div>
  </>
);

export default ButtonPanel;
