import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../App.css';
import '../css/style.css';

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
    const results = calculate(this.state, btn);
    this.setState(() => ({
      total: results.total,
      next: results.next,
      operation: results.operation,
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    const operations = operation ? next : total;
    return (
      <>
        <div className="App">
          <Display result={operations || total || next || '0'} />
          <ButtonPanel onBtnClick={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
