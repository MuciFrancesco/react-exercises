import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>Link not found, sorry, please try again </h1>{" "}
      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  );
}

export default NotFound;
