import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";

export class Counter extends Component {
  state = {
    count: this.props.initialValue || 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + (this.props.incrementBy || 1),
      });
    }, this.props.timeOut);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

export default Counter;
