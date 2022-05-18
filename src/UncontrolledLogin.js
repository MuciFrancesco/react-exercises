import React, { Component } from "react";

export class UncontrolledLogin extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    const checked = e.target.checked;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };
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
          <input
            autoFocus={true}
            value={this.state.username}
            onChange={this.handleChange}
            type='text'
            name='username'
          ></input>
          <label>Password:</label>
          <input
            value={this.state.password}
            onChange={this.handleChange}
            type='password'
            name='password'
          ></input>
          <input type='checkbox' name='remember'></input>
          <button
            type='submit'
            name='btn'
            disabled={!this.state.username || !this.state.password}
          >
            Login
          </button>
          <button type='reset'>Reset</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledLogin;
