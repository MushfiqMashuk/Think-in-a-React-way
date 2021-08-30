import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// class Test {
//   constructor(value = null) {
//     this.value = value;
//   }
//   Provider = ({ value, children }) => {
//     console.log(children, value);
//     this.value = value;
//     return "Mashuk";
//   };

//   Consumer = ({ children }) => children(this.value);
// }

// const NewTest = new Test();

ReactDOM.render(
  <React.StrictMode>
    {/* <div>
      <NewTest.Provider value={{ theme: "dark" }}>
        This is a new Element
      </NewTest.Provider>
      <NewTest.Consumer>{(value) => value.theme}</NewTest.Consumer>
    </div> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
