import React from "react";
import ReactDOM from "react-dom";
import App from "./Router/App";
//import App2 from "./App2";
//import Play from "./stylingComponents/Play";
//import LayoutComponent from "./Hooks/customHook/LayoutComponent";
//import GetPost2 from "./Hooks/Fetch/GetPost2";
//import BaseComponent from "./Hooks/contextAPI/BaseComponent";
//import Counter4 from "./Hooks/Counter4";
//import Time from "./Hooks/Time";
//import App from "./App";
//import Todo from "./Hooks/Todo";
//import Counter2 from "./Hooks/Counter2";
//import Form from './Hooks/Form';
import reportWebVitals from "./reportWebVitals";


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

// let states = []; // [0: [value, setValue], 1: [value, setValue], 2: [value, setValue]]
// let i = -1;
// console.log("From Global: " + i);

// function useState(stateValue) {
//   const index = i++;

//   console.log(i);

//   if (states[index]) {
//     return states[index];
//   }

//   const setState = (newValue) => {
//     states[index][0] = newValue;
//     myFunctin();
//   };

//   states[index] = [stateValue, setState];

//   return states[index];
// }

// function Todo() {
//   const [item, setItem] = useState("");
//   const [warning, setWarning] = useState(null);

//   const handleClick = (e) => {
//     const target = e.target;

//     const updateWarning = target.value.includes(".js")
//       ? "You need Javascript knowledge!"
//       : null;

//     setItem(target.value);
//     setWarning(updateWarning);
//   };

//   return (
//     <div>
//       <p>{item}</p>
//       <textarea name="todo" value={item} onChange={handleClick}></textarea>

//       <hr />

//       <h1 value={warning}>{warning || "Good Choice!"}</h1>
//     </div>
//   );
// }

// const myFunctin = () => {
//   ReactDOM.render(<Todo />, document.getElementById("root"));
// };

// myFunctin();
