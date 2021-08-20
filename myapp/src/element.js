import React from "react";

const reactElement = React.createElement("h1", null, "Hi World!");
console.log(reactElement);

console.dir(document.createElement("h1"));

// React Component
function MyApp(name) {
  if (name) {
    return (
      <p id="name">
        Hello {name} vai, it's {new Date().toLocaleTimeString()}
      </p>
    );
  } else {
    return <p>Hello stranger</p>;
  }
}

let n = 45;

console.log(<h1>nice to {n} meet you</h1>);

//** A react element is immutable. Means, it can not be changed after creating it*/

const element = (
  <h1 className="nice">
    {MyApp("Mushfiq")}
    {MyApp("Mashuk")}
  </h1>
);

//**React is so smart that, element er moddhe props/variable use korle  props: {children: ['Its', '12:34:23 AM', 'nice']} content k eivabe vag kore ney, so that, shudhu matro jei children ta change hobe sheitai repaint hobe, pura string ta na. How beautiful is that*/

// setInterval(() => {
//   const newElement = <h1>It's {new Date().toLocaleTimeString()} nice</h1>;
//   ReactDOM.render(newElement, document.getElementById("root"));
// }, 1000);

console.log(element);

export default element; 

/* A react element is a pure javascript object. it is like. React.createElement('h1', {className: 'header'} 'Hello');

  element: {

    $$typeof: Symbol(react.element),

    type: 'h1',
    
    props: {
      className: 'header',
      children: 'Hello'
    }
  }
*/
