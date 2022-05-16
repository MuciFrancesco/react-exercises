import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: this.props.initialValue || 0,
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({
        count: this.state.count + (this.props.incrementBy || 1),
      });
    }, this.props.timeOut);
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
