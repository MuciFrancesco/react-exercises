import React from "react";
import useLogin from "./useLogin";

function Login() {
  const { data, handleInputChange, consoleLogin, buttonReset } = useLogin();
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
