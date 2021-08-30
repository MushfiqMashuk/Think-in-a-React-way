import React from "react";
import ThemeContext from "../../contexts/themeContext";
import HoverCounter from "../renderProps/HoverCounter";
import Counter from "./Counter";

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>This is a Content</h1>
        <Counter>
          {(count, incrementCount) => (
            <ThemeContext.Consumer>
              {({ theme, switchTheme }) => (
                <HoverCounter
                  count={count}
                  incrementCount={incrementCount}
                  theme={theme}
                  switchTheme={switchTheme}
                />
              )}
            </ThemeContext.Consumer>
          )}
        </Counter>
      </div>
    );
  }
}
