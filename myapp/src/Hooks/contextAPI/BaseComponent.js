import React from "react";
import ComponentA from "./ComponentA";

export const counterContext = React.createContext();
const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};

export default function BaseComponent() {
  const [count, dispatch] = React.useReducer(reducer, initialValue);

  return (
    <div>
      <p>Count is: {count}</p>
      <counterContext.Provider value={{ dispatch }}>
        <ComponentA />
      </counterContext.Provider>
    </div>
  );
}
