import React from "react";

export default class Human extends React.Component {
  canDo = (name, job) => `${name} can ${job}`;

  render() {
    return this.props.children({canDo: this.canDo});
  }
}
