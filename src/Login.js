import React, { Component } from "react";

export class Login extends Component {
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
  componentDidUpdate() {
    console.log(this.state);
  }
  resetForm = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  render() {
    return (
      <div className='my-form'>
        <form>
          <label>username :</label>
          <input
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          ></input>
          <label>password :</label>
          <input
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
          <input
            name='remember'
            type='checkbox'
            checked={this.state.remember}
            onChange={this.handleChange}
          ></input>
          <button
            className={this.state.password.length < 8 ? "red-btn" : "green-btn"}
            disabled={!this.state.username || !this.state.password}
          >
            Login
          </button>
          <button type='button' onClick={this.resetForm}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
