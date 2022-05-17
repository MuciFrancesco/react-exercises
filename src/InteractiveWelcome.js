import React, { Component } from "react";
import Welcome from "./Welcome";

export class InteractiveWelcome extends Component {
  state = { name: "" };
  handleInputChange = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        <label name='username'>Inserire Username:</label>
        <input
          name='username'
          type='text'
          value={this.state.name}
          onChange={this.handleInputChange}
        ></input>
        <Welcome value={this.state.name} />
      </div>
    );
  }
}
