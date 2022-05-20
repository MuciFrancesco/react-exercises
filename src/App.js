import React, { Component, createContext } from "react";

export class App extends Component {
  state = {
    language: "en",
  };
  languageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return <div></div>;
  }
}

export default App;
