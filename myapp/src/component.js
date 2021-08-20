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

class Clock extends React.Component{

    super constructor(props){
        this.props = props;
    }

    render() {
        return (
            <h1>{new Date().toLocaleTimeString()}</h1>
        );
    }
}

ReactDOM.render(<Clock locale="bn-BD"/>, document.getElementById("root"));

export default Clock;
