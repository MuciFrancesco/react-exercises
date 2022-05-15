import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + 1,
        };
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
