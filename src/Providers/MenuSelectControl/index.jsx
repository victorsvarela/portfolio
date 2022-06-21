import { createContext, useState } from "react";

export const MenuSelectControlContext = createContext();

export const MenuSelectControlProvider = ({ children }) => {
  const [menuSelected, setMenuSelected] = useState("HomeSection");

  const handleChangeMenuSelected = (event) => {
    setMenuSelected(event);
  };

  return (
    <MenuSelectControlContext.Provider
      value={{ menuSelected, handleChangeMenuSelected }}
    >
      {children}
    </MenuSelectControlContext.Provider>
  );
};
