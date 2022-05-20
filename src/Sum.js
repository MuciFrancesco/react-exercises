import React from "react";

function Sum({ summOfNumber }) {
  return (
    <div>
      <h1>
        This is the number:{" "}
        {summOfNumber || "i'dont have a number for you,sorry"}
      </h1>
    </div>
  );
}

export default Sum;
