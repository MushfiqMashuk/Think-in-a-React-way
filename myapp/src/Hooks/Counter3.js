import { useReducer } from "react";

const initialValue = 0;

const reducer = (state, action) => {

}

export default function Counter3() {
    
    const [count, dispatch] = useReducer(reducer, initialValue);

    return(
        <div>
            <p>Count is: 0</p>
            <button>Increment</button> <br />
            <button>Decrement</button>
        </div>
    );
}