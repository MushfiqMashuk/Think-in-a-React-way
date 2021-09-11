import { useReducer } from "react";

const initialValue = {
  counter: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value }; // here we should return the whole state. not just the counter. Because the state is an object.
    case "decrement":
      return { ...state, counter: state.counter - action.value };

    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };

    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };

    default:
      return state;
  }
};

export default function Counter3() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <div>
        <p>Count is: {count.counter}</p>
        <button onClick={() => dispatch({ type: "increment", value: 3 })}>
          Increment By 3
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 3 })}>
          Decrement By 3
        </button>
      </div>

      <div>
        <p>Count is: {count.counter2}</p>
        <button onClick={() => dispatch({ type: "increment2", value: 3 })}>
          Increment By 3
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 3 })}>
          Decrement By 3
        </button>
      </div>
    </div>
  );
}
