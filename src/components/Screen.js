import React, { Component } from "react";

class Screen extends Component {
  render () {
    const {
      id, total, next, operation,
    } = this.props;
  
  return (
    <div>
      {total}
      {operation}
      {next}
    </div>
  );
 }
}

export default Screen;