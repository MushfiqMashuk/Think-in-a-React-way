import { useContext } from "react";
import themeContext from "../../contexts/themeContext";
import HoverCounter from "../renderProps/HoverCounter";
import Counter from "./Counter";

export default function Content() {
  // let's say we want to access the context outside of the render function.

  // static contextType = themeContext; // it is similar as the last line

  // componentDidMount() {
  //   console.log(this.context);
  // }

  const context = useContext(themeContext);

  const { theme, switchTheme } = context;

  console.log("Content Rendered");

  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            theme={theme}
            switchTheme={switchTheme}
          />
        )}
      </Counter>
    </div>
  );
}

//Content.contextType = themeContext; // this static property sets the themeContext value to 'context' property. like this context = themeContext.value.

// React er Props and State change hoile component rerender hoy. Context er khetre value change hoile mane Provider er value change hoile Consumer must rerender hobe. atkano jabe na.
