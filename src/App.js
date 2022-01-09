import Navbar from "./Components/Navbar";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useCallback, useContext, useState } from "react";
import { themes } from "./Theme/themes";
import { AppContainer } from "./Global/style";
import { ThemeControlContext } from "./Providers/ThemeControl";

function App() {
  // useState que armazena o tema atual da aplicação

  const { currentTheme } = useContext(ThemeControlContext)

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <Navbar />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
