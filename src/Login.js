import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  const buttonReset = (e) => {
    e.preventDefault();
    setData({
      username: "",
      password: "",
      remember: false,
    });
  };
  const consoleLogin = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className='form-react'>
      <form>
        <label name='username'>Username:</label>
        <input
          name='username'
          type='text'
          value={data.username}
          onChange={handleInputChange}
        ></input>
        <label name='password'>Password:</label>
        <input
          name='password'
          type='password'
          value={data.password}
          onChange={handleInputChange}
        ></input>
        <input
          name='remember'
          type='checkbox'
          value={data.remember}
          onChange={handleInputChange}
        ></input>
        <button
          className={
            data.password.length < 7 || data.username.length < 6
              ? "red-btn"
              : "green-btn"
          }
          onClick={consoleLogin}
          disabled={
            !data.username ||
            data.username.length < 6 ||
            !data.password ||
            data.password.length < 7
          }
        >
          Login
        </button>
        <button onClick={buttonReset}>Reset</button>
      </form>
    </div>
  );
}

export default Login;
