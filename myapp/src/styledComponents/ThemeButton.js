import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

export default function ThemeButton() {
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <button onClick={context.handleClick}>
      {context.theme === "dark"
        ? "Change to Light Theme"
        : "Change to Dark Theme"}
    </button>
  );
}
