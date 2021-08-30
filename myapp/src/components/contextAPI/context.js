class Context {
  constructor(value) {
    this.value = value;
  }

  Provider = ({ children, value }) => {
    this.value = value;

    return children;
  };

  Consumer = ({ children }) => children(this.value);
}

function createContext (value = null) {
  const newContext = new Context(value);
  return { Provider: newContext.Provider, Consumer: newContext.Consumer };
};

console.log(createContext({ theme: "dark" }).Consumer());

export default createContext;
