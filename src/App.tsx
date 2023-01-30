import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";
import { RootState } from "./modules";

function App() {
  const isDarkMode = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode,
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <h2>test</h2>
    </ThemeProvider>
  );
}

export default App;
