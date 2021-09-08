import React from "react";
import Button from "./components/Button";
import ShowCounter from "./components/ShowCounter";
import Title from "./components/Title";

export default function Counter2() {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };


  const addFive = () => {
    setCount2((prevCount) => prevCount + 5);
  };

  return (
    <div>
      <Title />
      <ShowCounter count={count} />
      <Button handleClick={addOne}>Add 1</Button>
      <hr />
      <ShowCounter count={count2} />
      <Button handleClick={addFive}>Add 5</Button>
    </div>
  );
}
