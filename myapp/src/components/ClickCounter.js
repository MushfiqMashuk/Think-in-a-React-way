import React from "react";
import withCounter from "./HOC/withCounter";

const ClickCounter = (props) => {
  const { counter, incrementCount } = props;
  return (
    <div>
      <button onClick={incrementCount} type="button">
        Clicked {counter} times
      </button>
    </div>
  );
};

export default withCounter(ClickCounter);
