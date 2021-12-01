/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class Screen extends Component {
  render() {
    const {
      id, total, next, operation,
    } = this.props;

    return (
    <div id={id}>
      {total}
      {operation}
      {next}
    </div>
    );
  }
}

export default Screen;