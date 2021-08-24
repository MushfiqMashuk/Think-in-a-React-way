import React from "react";
import Clock from "./Clock";

export default function ClassList(props) {
  const { quantities = [] } = props;

  // Array.map returns a new array. So it's returning [<Clock key={1}/>, <Clock key={1}/>, <Clock key={1}/>]
  // never use array index as a key
  // It's not necesseray to use a global unique key for a component. akta element a or 1 ta array te protita element er key unique rakhlei cholbe

  return (
    <>
      {/* <div>
        {quantities.map((key) => (
          <Clock key={key} />
        ))}
      </div>
      <div>
        {quantities.map((key) => (
          <Clock key={key} />
        ))}
      </div> */}

      <div>
        {quantities.map((key) => (
          <Clock key={key} />
        ))}
      </div>
    </>
  );
}
