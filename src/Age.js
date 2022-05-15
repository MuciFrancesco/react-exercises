import React, { Component } from "react";

export class Age extends Component {
  render() {
    return (
      <div>
        <p>Your age is {this.props.age || "i don't know,sorry"}</p>
      </div>
    );
  }
}

export default Age;
