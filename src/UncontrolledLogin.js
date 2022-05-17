import React, { Component } from "react";

export class UncontrolledLogin extends Component {
  handleFormSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const remember = e.target.elements.remember.checked;

    console.log({ username, password, remember });
  };

  render() {
    return (
      <div>
        <h3>Uncontrolled Form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type='text' name='username'></input>
          <label>Password:</label>
          <input type='password' name='password'></input>
          <input type='checkbox' name='remember'></input>
          <button type='submit' name='btn'>
            Login
          </button>
          <button type='reset'>Reset</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledLogin;
