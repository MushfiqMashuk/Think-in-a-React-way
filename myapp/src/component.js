import React from "react";
import ReactDOM from "react-dom";

function MyClock({ locale }) {
  return <h1>Hello {new Date().toLocaleTimeString(locale)}</h1>;
}

// React class component

// class Clock {
//     print(locale) {
//         return (
//             <h1>{new Date().toLocaleTimeString(locale)}</h1>
//         );
//     }
// }

// ReactDOM.render(<MyClock locale='bn-BD'/>, document.getElementById("root"));

console.dir(React.Component);

class Clock extends React.Component {
  render() {
    // never change this.props inside the class, Because react component re-render whenever a props changes

    return (
      <h1>
        Hello {this.props.children} it's {new Date().toLocaleTimeString(this.props.locale)}
      </h1>
    );
  }
}

ReactDOM.render(
  <Clock locale="bn-BD">Rahim vai</Clock>,
  document.getElementById("root")
);

export default MyClock;
