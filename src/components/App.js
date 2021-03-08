/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btn) {
    this.setState(state => ({
      total: calculate(state, btn),
      next: calculate(state, btn),
      operation: calculate(state, btn),
    }));
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display result={total} />
        <ButtonPanel />
      </>
    );
  }
}

export default App;
