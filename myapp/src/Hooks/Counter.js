import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  let i = 0;
  const addFive = () => {
    while (i < 5) {
      setCount(count + 1);
      i++;
    }
  };

  console.log("Rendered");

  return (
    <div>
      <p>{count}</p>
      
      <button onClick={() => setCount(count + 1)}>Add 1</button> <br/> <br/> 
      <button onClick={addFive}>Add 5</button>
    </div>
  );
}
