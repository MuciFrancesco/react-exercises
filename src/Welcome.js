import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    return (
      <div>
        <p> Hello, {this.props.name || "user!"}</p>
        <p>Your age is {this.props.age || "i don't know,sorry"}</p>
      </div>
    );
  }
}

export default Welcome;
