import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GitHubUserList from "./GitHubUserList";

function App() {
  return (
    <div className='App'>
      <Link to='/counter'>
        {" "}
        <button>Go to Counter App</button>
      </Link>
      <Link to='user'>
        {" "}
        <button>Go to gitHubUser App</button>
      </Link>
      <Link to='/'>
        {" "}
        <button>Go to Main App</button>
      </Link>
    </div>
  );
}

export default App;
