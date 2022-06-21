import "./App.css";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { themes } from "./Theme/themes";
import { AppContainer } from "./Global/style";
import { ThemeControlContext } from "./Providers/ThemeControl";
import Routes from "./Routes";

function App() {
  const { currentTheme } = useContext(ThemeControlContext);

  return (
    <>
      <ThemeProvider theme={themes[currentTheme]}>
        <AppContainer>
          <Routes />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
