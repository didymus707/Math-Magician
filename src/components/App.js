import React, { Component } from 'react'
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// import calculate from '../logic/calculate';
import '../App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    }
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const App = () => (
  <>
    <Display />
    <ButtonPanel />
  </>
);

export default App;
