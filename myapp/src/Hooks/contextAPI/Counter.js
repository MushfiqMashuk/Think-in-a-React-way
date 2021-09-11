import React from "react";
import { counterContext } from "./BaseComponent";

export default function Counter() {
  const { dispatch } = React.useContext(counterContext);

  return (
    <div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
}
