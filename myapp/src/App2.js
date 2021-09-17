import React, { Fragment, useState } from "react";
import { ThemeProvider } from "styled-components";
import Card from "./styledComponents/Card";
import { Container } from "./styles/Container.styles";
import GlobalStyle from "./styles/GlobalStyle";

export default function App2() {
  const [theme, setTheme] = useState("dark");

  const handleClick = () => {
    console.log(theme);
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={{ theme, handleClick }}>
        <Container>
          <Card />
        </Container>
      </ThemeProvider>
    </Fragment>
  );
}
