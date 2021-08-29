import React from "react";
import withCounter from "./HOC/withCounter";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <button onClick={incrementCount} type="button">
      Clicked {count} times
    </button>
  );
};

export default withCounter(ClickCounter);
