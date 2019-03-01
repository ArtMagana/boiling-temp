import React, { Component } from 'react';
import './App.css';
import Calculator from '../src/components/Calculator'

class App extends Component {
  render() {
    return (
      <div className="App">
              <Calculator></Calculator>
      </div>
    );
  }
}

export default App;
