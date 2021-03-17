<<<<<<< HEAD
import React, { Component } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import calculate from './logic/calculate';
import './App.css';

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
        <Display result={operations || total || next || '0'} />
        <ButtonPanel onBtnClick={this.handleClick} />
      </>
    );
  }
=======
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
>>>>>>> develop
}

export default App;
