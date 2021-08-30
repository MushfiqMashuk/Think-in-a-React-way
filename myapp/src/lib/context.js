class Context {
  constructor(value = null) {
    this.value = value;
  }

  Provider = ({ children, value }) => {
    this.value = value;
    console.log(children);
    return children;
  };

  Consumer = (props) => {
    console.log(props);
    return props.children(this.value);
  };
}

// function createContext(value = null) {
//   const newContext = new Context(value);
//   return { Provider: newContext.Provider, Consumer: newContext.Consumer };
// }

export default Context;
