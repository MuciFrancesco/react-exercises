import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    return (
      <div>
        <p> Hello, {this.props.name || "user!"}</p>
      </div>
    );
  }
}

export default Welcome;
