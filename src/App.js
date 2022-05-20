import React, { Component } from "react";
import Container from "./Container";
import Hello from "./Hello";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";
import ToDoList from "./ToDoList";

export class App extends Component {
  render() {
    return (
      <div>
        <Container title='My Awesome App!'>
          <Hello />
          <Welcome name='John' age='22' />
          <Counter initialValue={0} incrementBy={1} timeOut={1000} />
          <ClickCounter />
          <ClickTracker />
          <InteractiveWelcome />
          <Login />
          <UncontrolledLogin />
          <ToDoList
            render={(array) => {
              const removeAtArray = (index) => {
                const list = array;
                list.splice(index, 1);
                this.setState({ list });
              };
              return (
                <div>
                  <ul>
                    {array.map((item, i) => (
                      <>
                        <li key={i}>{item}</li>
                        <button onClick={() => removeAtArray(i)}>
                          Ellimina
                        </button>
                      </>
                    ))}
                  </ul>
                </div>
              );
            }}
          />
        </Container>
      </div>
    );
  }
}

export default App;
