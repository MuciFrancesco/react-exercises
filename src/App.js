import React, { Component } from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

const name = <strong>Andrea</strong>;
export class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={name} age='22' />
      </div>
    );
  }
}

export default App;
