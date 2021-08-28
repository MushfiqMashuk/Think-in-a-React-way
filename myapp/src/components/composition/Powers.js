import React from "react";

export default class Powers extends React.Component {
  superPower = (name, power) => `${name} has ${power}`;

  render() {
    return this.props.children({ superPower: this.superPower });
  }
}
