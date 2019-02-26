// components/TemperatureInput.js

import React, { Component } from 'react';

class TemperatureInput extends Component {
    state = {
      temperature: ''
    }
  
  
  scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

      // this.setState({
      //   temperature: e.target.value
      // }, () => {
      //   console.log('temp input in component state: ', this.state)
      // })

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {this.scaleNames[scale]}:</legend>
        <input value={temperature} onChange={e => this.handleChange(e)} />
      </fieldset>
    );
  }
}

export default TemperatureInput;