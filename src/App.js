import React, { Component } from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

export class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name='andrea' />
      </div>
    );
  }
}

export default App;
