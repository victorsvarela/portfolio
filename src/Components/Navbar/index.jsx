//import React from "react";
import { useCallback, useContext, useState } from "react";
import { ThemeControlContext } from "../../Providers/ThemeControl";
import { Button, Header } from "./style";
import SwitchThemeMode from "./SwitchTheme";

const Navbar = () => {
  const { checked, handleChange } = useContext(ThemeControlContext);

  return (
    <Header>
      <nav>
        <ul>
          <li>Início</li>
          <li>Sobre</li>
          <li>Tecnologias</li>
          <li>Projetos</li>
          <li>Contato</li>
          <li>
            <SwitchThemeMode checked={checked} onChange={handleChange} />
          </li>
          <li>
            <Button>Currículo</Button>
          </li>
        </ul>
      </nav>
      <div>{/* <Switch checked={checked} onChange={handleChange} /> */}</div>
    </Header>
  );
};

export default Navbar;
