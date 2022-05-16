import React, { Component } from "react";

export class CounterDisplay extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
      </div>
    );
  }
}

export default CounterDisplay;
