import React, { Component } from "react";
import Age from "./Age";
export class Welcome extends Component {
  render() {
    return (
      <div>
        <p> Hello, {this.props.name || "user!"}</p>
        {this.props.age > 18 ? <Age age={this.props.age} /> : ""}
      </div>
    );
  }
}

export default Welcome;
