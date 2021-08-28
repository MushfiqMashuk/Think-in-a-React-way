/**
 * This function is called a Higher Order Component. It takes a component as an argument and returns a new
 * component.
 
 * convention is to write a HOC is, starting with a 'with' 
 */

import React from "react";

const withCounter = (OriginalComponent) => {
  //
  class NewComponent extends React.Component {
    state = {
      counter: 0,
    };

    incrementCount = () => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    };

    render() {
      const { counter } = this.state;

      return (
        <OriginalComponent
          counter={counter}
          incrementCount={this.incrementCount}
        />
      );
    }
  }

  return NewComponent;
};

export default withCounter;
