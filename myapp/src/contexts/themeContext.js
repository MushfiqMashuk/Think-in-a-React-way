import React from "react";

// import Context from "../lib/context";

// const themeContext = new Context({ theme: "light" });

const themeContext = React.createContext({ theme: "light" });

export default themeContext;
