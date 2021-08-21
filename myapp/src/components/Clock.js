// state and life cycle methods

import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }
  /**
   * We can not change state directly. like this, this.state.date = {date}. eivabe state change react bujhte parena, tai component rerender korena. react shudhu bujhe setState() call.
   */
  componentDidMount() {
    this.stopTimer = setInterval(() => this.tik(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.stopTimer);
  }

  tik() {
    this.setState({ time: new Date() });
  }

  render() {
    // never change this.props inside the class, Because react component re-render whenever a props changes

    return (
      <h1>
        Hello {this.props.children} it's <br></br>
        {this.state.time.toLocaleTimeString(this.props.locale)}
      </h1>
    );
  }
}

// class nice extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       likes: [],
//       comments: [],
//     };
//   }

//   componentDidMount() {
//     this.setState({ likes: "Something goes here" });

//     /**
//      * whenever a property of the state is changed, it doesn't affect the other property. currently the state is {likes: "Something goes here", comments: []} like this
//      */

//     this.setState({ comments: ["blah blah blah"] });

//     // state: {likes: "Something goes here", comments: ["blah blah blah"]}. Finally state object merged.
//   }
// }

export default Clock;
