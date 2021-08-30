import HoverCounter from "../renderProps/HoverCounter";
import ThemeContext from "./contexts/themeContext";
import Counter from "./Counter";

export default function Content() {
  return (
    <div>
      <h1>This is a Content</h1>
      <Counter>
        {(count, incrementCount) => (
          <ThemeContext.Consumer>
            {(value) => (
              <HoverCounter
                count={count}
                incrementCount={incrementCount}
                theme={value}
              />
            )}
          </ThemeContext.Consumer>
        )}
      </Counter>
    </div>
  );
}
