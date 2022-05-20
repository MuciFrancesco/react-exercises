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
    e.target.reset();
  };

  render() {
    return (
      <>
        <div className='insertIntoArray'>
          {this.props.render(this.state.array)}
          <form onSubmit={this.insertIntoArray.bind(this)}>
            <label>Inserisci un elemento:</label>
            <input type='text' name='insert'></input>
            <button name='btn'>Inserisci</button>
            <button type='reset'>Reset</button>
          </form>
        </div>
      </>
    );
  }
}

export default ToDoList;
