import React from "react";
import withCounter from "./HOC/withCounter";

const HoverCounter = (props) => {
  const { counter, incrementCount } = props;
  return <h1 onMouseOver={incrementCount}>Hovered {counter} times</h1>;
};

export default withCounter(HoverCounter);
