import React from "react";

function ShowCounter({ count }) {
  console.log("Show Counter Rendered");
  return <p>{count}</p>;
}

export default React.memo(ShowCounter); // This memo is like a Higher order component (HOC), takes a component and return upgraded one. 
