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

}

export default function Counter3() {
    
    const [count, dispatch] = useReducer(reducer, initialValue);

    return (
      <div>
        <p>Count is: {count}</p>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
      </div>
    );
}

