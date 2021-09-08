import React from "react";

export default class Timer extends React.Component {
  state = {
    timer: new Date(),
    count: 0,
  };

  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
    setInterval(this.tik, 1000);
  }

  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }

  handleClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  tik = () => {
    this.setState({ timer: new Date() });
  };

  render() {
    const { timer } = this.state;

    return (
      <div>
        <p>{timer.toLocaleTimeString()}</p>
        <button onClick={this.handleClick}>Click Here</button>
      </div>
    );
  }
}
