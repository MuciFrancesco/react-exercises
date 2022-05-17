import React, { Component } from "react";

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.value };
  }

  render() {
    return (
      <div>
        <h1>Hello,{this.props.value}</h1>
      </div>
    );
  }
}

export default Welcome;
