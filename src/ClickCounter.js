import React, { Component } from "react";

export class ClickCounter extends Component {
  state = {
    count: 0,
  };
  counterIncrement = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };
  render() {
    return (
      <div className='counter'>
        <h2>{this.state.count}</h2>
        <button onClick={this.counterIncrement}>Increment</button>
      </div>
    );
  }
}

export default ClickCounter;
