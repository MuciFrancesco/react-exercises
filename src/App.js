import React, { Component } from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";

export class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name='John' age='22' />
        <Counter initialValue={0} incrementBy={1} timeOut={1000} />
      </div>
    );
  }
}

export default App;
