import React from "react";

export default class Human extends React.Component {
  canDo = (name, job) => `${name} can ${job}`;

  render(text) {
    let job = "Humans can do everything";

    if(text) job = text; 

    return <div>{job}</div>;
  }
}
