import { useEffect, useRef, useState } from "react";

export default function Time() {
  const [timer, setTimer] = useState(new Date());

  const clockRef = useRef();

  useEffect(() => {
    console.log("Starting Timer"); //this will only call once. But the timer will continue
    clockRef.current = setInterval(tick, 1000);

    // if this callback function returns something, this'll act as component unmount
    // cleanup code.
    
  }, []); //empty array means there is no dependency, so this will only invoked once. like componentShouldMount()

  const tick = () => {
    setTimer(new Date());
  };

  return (
    <div>
      <p>Time: {timer.toLocaleTimeString()}</p>
      <button onClick={() => clearInterval(clockRef.current)}>Stop Clock</button>
    </div>
  );
}
