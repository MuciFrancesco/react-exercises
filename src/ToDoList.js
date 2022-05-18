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
  removeAtArray(index) {
    const list = this.state.array;
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    return (
      <>
        <div className='insertIntoArray'>
          <form onSubmit={this.insertIntoArray.bind(this)}>
            <label>Inserisci un elemento:</label>
            <input type='text' name='insert'></input>
            <button name='btn'>Inserisci</button>
            <button type='reset'>Reset</button>
          </form>
        </div>
        <ul>
          {this.state.array.map((item, i) => {
            return (
              <>
                <div>
                  <li key={i}>
                    {item}
                    <button onClick={() => this.removeAtArray(i)}>
                      Ellimina
                    </button>
                  </li>
                </div>
              </>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ToDoList;
