/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { id, name, handleClick } = this.props;

    return (
      <button id={id} type='button' onClick={() => handleClick(name)}>{name}</button>
    );
  }
}

export default Button;