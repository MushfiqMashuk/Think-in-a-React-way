import React from "react";
import Content from "./Content";

export default class Section extends React.Component {
  shouldComponentUpdate() {
    // React will call this func if any of it's or it's parents state or props changes
    return false;
  }

  // If we stop rendering the section component here, it doesn't matter. In React context API, if Provider value changes, then Consumer must rerender alogside it's parent component

  render() {
    console.log("Section Rendered"); // It will render first time
    return (
      <div>
        <h1>This is a Section</h1>
        <Content />
      </div>
    );
  }
}
