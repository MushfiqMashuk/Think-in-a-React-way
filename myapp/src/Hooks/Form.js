import { useEffect, useRef } from "react";
import Input from "./Input";

/**
 * useRef is for manipulating the DOM. Though we dont have to do that while using React, but there are some cases
 * when we might need to do that. In that case React is suggesting us to do that with useRef.
 *
 */

export default function Form() {
  const inputRef = useRef(null); // Created an identifier

  useEffect(() => {
    inputRef.current.focus(); // it'll focus in the input box when the page is loaded
  }, []);

  return (
    <div>
      <p>
        <Input ref={inputRef} type="text" placeholder="Write Something" />
      </p>
    </div>
  );
}
