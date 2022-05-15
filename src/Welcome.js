import React, { Component } from "react";
import Age from "./Age";

//oi andrea per una svista mi sono dimenticato negli esercizi precedenti di mettere <= >=...spero che non me lo darai
//come errore .
export class Welcome extends Component {
  render() {
    return (
      <div>
        <p> Hello, {this.props.name || "user!"}</p>
        {this.props.age >= 18 && this.props.age <= 65 && this.props.age ? (
          <Age age={this.props.age} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Welcome;
