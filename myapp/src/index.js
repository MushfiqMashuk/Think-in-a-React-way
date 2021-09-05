import React from "react";
import ReactDOM from "react-dom";
//import Todo from "./Hooks/Todo";
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

let states = []; // [0: [value, setValue], 1: [value, setValue], 2: [value, setValue]]
let i = -1; 

function useState(stateValue) {
  const setState = (newValue) => {
    
  };

  return [stateValue, setState];
}

function Todo() {
  const [item, setItem] = useState("");
  const [warning, setWarning] = useState(null);

  const handleClick = (e) => {
    const target = e.target;

    const updateWarning = target.value.includes(".js")
      ? "You need Javascript knowledge!"
      : null;

    setItem(target.value);
    setWarning(updateWarning);
  };

  return (
    <div>
      <p>{item}</p>
      <textarea name="todo" value={item} onChange={handleClick}></textarea>

      <hr />

      <h1 value={warning}>{warning || "Good Choice!"}</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    {/* <div>
      <NewTest.Provider value={{ theme: "dark" }}>
        This is a new Element
      </NewTest.Provider>
      <NewTest.Consumer>{(value) => value.theme}</NewTest.Consumer>
    </div> */}
    <Todo />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
