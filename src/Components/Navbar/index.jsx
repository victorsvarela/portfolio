//import React from "react";
import { useCallback, useContext, useState } from "react";
import { ThemeControlContext } from "../../Providers/ThemeControl";
import { Button, Header } from "./style";
import SwitchThemeMode from "./SwitchTheme";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const { checked, handleChange } = useContext(ThemeControlContext);

  const [controlMenu, setControlMenu] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  const handleClickMenu = () => {
    setControlMenu(!controlMenu);
  };

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <Header>
      <div className={width > 768 && "closed_menu"}>
        {!controlMenu && <HiMenuAlt3 onClick={() => handleClickMenu()} />}
        {controlMenu && <MdClose onClick={() => handleClickMenu()} />}
      </div>
      <nav
        className={
          width > 768
            ? "menu_desktop"
            : !controlMenu
            ? "closed_menu"
            : width <= 768 && "menu_mobile"
        }
      >
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
