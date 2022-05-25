import React, { useState } from "react";

function useLogin() {
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
  return {
    data: data,
    buttonReset: buttonReset,
    consoleLogin: consoleLogin,
    handleInputChange: handleInputChange,
  };
}

export default useLogin;
