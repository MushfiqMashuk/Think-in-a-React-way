import { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(new Date());
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // this useEffect func calls when the component first mounted and every component rerender.

  useEffect(() => {
    console.log("Rerender");
    document.title = `Clicked ${count} times`;
  }, [count]); // This is called dependency list.

  useEffect(() => {
    console.log("Starting Timer"); //this will only call once. But the timer will continue
    const interval = setInterval(tick, 1000);

    // if this callback function returns something, this'll act as component unmount

    return () => {
      clearInterval(interval);
    }
  }, []); //empty array means there is no dependency, so this will only invoked once. like componentShouldMount()

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const tick = () => {
    setTimer(new Date());
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{timer.toLocaleTimeString()}</p>
      <button onClick={handleClick}>Add 1</button>
    </div>
  );
}
