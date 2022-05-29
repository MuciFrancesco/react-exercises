import React from "react";
import { Link } from "react-router-dom";

function Welcome({ name }) {
  return (
    <div>
      {name ? <h2>Hello,{name}</h2> : <h2>Hello User!</h2>}
      <Link to='/counter'>
        <button>Go to counter App</button>{" "}
      </Link>
    </div>
  );
}

export default Welcome;
