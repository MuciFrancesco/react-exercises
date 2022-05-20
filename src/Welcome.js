import React from "react";

function Welcome({ name }) {
  return <div>{name ? <h2>Hello,{name}</h2> : <h2>Hello User!</h2>}</div>;
}

export default Welcome;
