import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyle";
import { darkTheme, lightTheme } from "./styles/theme";

import Layout from "./components/common/Layout";

function App() {
  const darkMode: string | null = localStorage.getItem("darkMode");

  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(
    darkMode !== null ? JSON.parse(darkMode) : false,
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Layout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
