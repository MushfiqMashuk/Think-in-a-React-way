import React from "react";

export default class Form extends React.Component {
  state = {
    title: "JavaScript",
    text: "Javascript is Awesome!",
    library: "react",
    isAwesome: true,
  };

  handleChange = (e) => {
    const target = e.target;

    // This very efficient

    if (target.type === "checkbox") {
      this.setState({
        [target.name]: target.checked,
      });
    } else {
      this.setState({
        [target.name]: target.value,
      });
    }

    // if (target.type === "text") {
    //   this.setState({
    //     title: target.value,
    //   });
    // } else if (target.type === "textarea") {
    //   this.setState({
    //     text: target.value,
    //   });
    // } else if (target.type === "select-one") {
    //   this.setState({
    //     library: target.value,
    //   });
    // } else if (target.type === "checkbox") {
    //   this.setState({
    //     isAwesome: target.checked,
    //   });
    // } else {
    //   console.log("Nothing happened!");
    // }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, text, library, isAwesome } = this.state;

    console.log(title, text, library, isAwesome);
  };

  render() {
    const { title, text, library, isAwesome } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="title"
            type="text"
            placeholder="type here"
            value={title}
            onChange={this.handleChange}
          />
          <br />
          <br />

          <label htmlFor="text">
            Essay:
            <textarea
              id="text"
              name="text"
              value={text}
              onChange={this.handleChange}
            ></textarea>
          </label>

          <br />
          <br />

          <select name="library" value={library} onChange={this.handleChange}>
            <option value="vue">Vue</option>
            <option value="react">React</option>
            <option value="jQuery">jQuery</option>
          </select>

          <br />
          <br />

          <input
            name="isAwesome"
            type="checkbox"
            id="js"
            onChange={this.handleChange}
            checked={isAwesome}
          />
          <label htmlFor="js">JavaScript is Awesome</label>

          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

/**
 * Unlike html element, Rect elements are different. whenever we set a value attribute, we have to manually change it's value by listening to it's onChange event. Otherwise it'll be a readonly input field
 
 * We are creating Controlled input here. Because React is controling the default html tags behaviour.
 * Input type='file' is uncontrolled and stateless tag. So it is handled by default html DOM 
 
 * Value=null or undefined dile sheita r React er controlled element thakbe na. even "" empty string dileo sheita controlled hoye jay
 */
