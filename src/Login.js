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

  buttonclickHandler = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
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
            onClick={this.buttonclickHandler}
            disabled={!this.state.username || !this.state.password}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
