import { createContext, useCallback, useContext, useState } from "react";

export const ThemeControlContext = createContext();

export const ThemeControlProvider = ({ children }) => {
  const [checked, setChecked] = useState(true);
  const [currentTheme, setCurrentTheme] = useState("dark");

  const getOpositeTheme = useCallback(
    () => (currentTheme === "dark" ? "light" : "dark"),
    [currentTheme]
  );

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setCurrentTheme(getOpositeTheme());
  };

  return (
    <ThemeControlContext.Provider
      value={{ checked, currentTheme, handleChange }}
    >
      {children}
    </ThemeControlContext.Provider>
  );
};
