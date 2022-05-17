import React, { Component } from "react";

export class ClickTracker extends Component {
  state = {
    button: "",
  };
  handleButtonClick = (e) => {
    const btn = e.target.value;
    this.setState({ button: btn });
    console.log(btn);
  };

  render() {
    return (
      <div>
        <button value='primo' onClick={this.handleButtonClick}>
          primo
        </button>
        <button value='secondo' onClick={this.handleButtonClick}>
          secondo
        </button>
        <button value='terzo' onClick={this.handleButtonClick}>
          terzo
        </button>
        <h1>{this.state.button}</h1>
      </div>
    );
  }
}

export default ClickTracker;
