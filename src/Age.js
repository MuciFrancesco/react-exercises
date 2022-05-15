import React, { Component } from "react";

export class Age extends Component {
  render() {
    return (
      <div>
        {this.props.age >= 18 ? (
          <p>Your age is: {this.props.age}</p>
        ) : (
          "You are very young!"
        )}
      </div>
    );
  }
}

export default Age;
