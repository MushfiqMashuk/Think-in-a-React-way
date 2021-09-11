import { useReducer } from "react";

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

export default function Counter4() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  const [count2, dispatch2] = useReducer(reducer, initialValue);

  return (
    <div>
      <div>
        <p>Count is: {count}</p>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
      </div>

      <div>
        <p>Count is: {count2}</p>
        <button onClick={() => dispatch2("increment")}>Increment</button>
        <button onClick={() => dispatch2("decrement")}>Decrement</button>
      </div>

    </div>
  );
}
