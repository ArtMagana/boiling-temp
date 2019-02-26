import React, { Component } from 'react';

class Label extends Component {
  state = {
    className: 'plain-label'}
  
  render() {
    return (
      <span className={this.className}>
        {this.props.children}
      </span>
    )
  }
}

export default Label