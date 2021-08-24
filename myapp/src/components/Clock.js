// state and life cycle methods

import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(), locale: "bn-BD" };

    // this.changeLocale = this.changeLocale.bind(this); // this another way of binding
  }

  // or we can just set state without constructor like this- state = {time: new Date()}

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

  changeLocale = (locale) => {
    // this function has to be an arrow function. It's a good practice

    // here we prevent the default behaviour
    //e.preventDefault();

    // if we pass parameters then we will get event as a last params

    //console.log(e);
    //console.log("from handler " + locale);
    this.setState({ locale });
  };

  render() {
    // never change this.props inside the class, Because react component re-render whenever a props changes
    const { time, locale } = this.state;

    // let button;

    // // This is called conditional rendering

    // if (locale === "bn-BD") {
    //   button = <Button change={this.changeLocale.bind(this, "en-US")} />;
    // } else {
    //   button = <Button change={this.changeLocale.bind(this, "bn-BD")} />;
    // }

    return (
      <div>
        <h1>
          Hello {this.props.children} it's <br></br>
          {time.toLocaleTimeString(locale)}
        </h1>

        {locale === "bn-BD" ? (
          <Button change={this.changeLocale} locale="en-US" show={false} enable/>
        ) : (
          <Button change={this.changeLocale} locale="bn-BD" show enable/>
        )}

        {/* <a href="./notFound.html" onClick={this.changeLocale}>
          Click me
        </a> */}
      </div>
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
