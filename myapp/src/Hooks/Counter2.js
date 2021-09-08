import { useCallback, useMemo, useState } from "react";
import Button from "./components/Button";
import ShowCounter from "./components/ShowCounter";
import Title from "./components/Title";

export default function Counter2() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  /**
   * useCallback chached or momerizes a function reference for rerender. Dependency makes sure when function a
   * reference needs to be changed. useCallback jekono function er reference k mone rakhe and shudhu tar dependency gula change holei shudhu notun func reference add korte dey. dependency chhara onno jkono value change hoile mone chache kora value ta return kore, taile ar unnecessary rerender hoy na.
   */

  /**
   * React.memo() function memorizes a component so that, onno component change hole ei component rerender na hoy.
   *
   * useMemo memorizes a return value of a function. So that, dependency er bare onno component er khetre jno same function k invoke korte na hoy, chached value ta jate use korte pare.
   */

  const addOne = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const addFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const evenOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i += 1;
    return count % 2 === 0;
  }, [count]);

  return (
    <div>
      <Title />
      <ShowCounter count={count} />
      <span>{evenOdd ? "Even" : "Odd"}</span> <br />
      <Button handleClick={addOne}>Add 1</Button>
      <hr />
      <ShowCounter count={count2} />
      <Button handleClick={addFive}>Add 5</Button>
    </div>
  );
}
