import React, { Component } from "react";

export class ToDoList extends Component {
  state = {
    array: ["primo", "secondo", "terzo", "quarto", "quinto"],
  };
  insertIntoArray = (e) => {
    e.preventDefault();
    const input = e.target.elements.insert.value;
    this.setState({
      array: [...this.state.array, input],
    });
  };
  render() {
    const names = this.state.array.map((name) => <li>{name}</li>);
    return (
      <>
        <div className='insertIntoArray'>
          <form onSubmit={this.insertIntoArray}>
            <label>Inserisci un elemento:</label>
            <input name='insert' type='text'></input>
            <button>Inserisci</button>
          </form>
        </div>
        <ul>{names}</ul>
      </>
    );
  }
}

export default ToDoList;
