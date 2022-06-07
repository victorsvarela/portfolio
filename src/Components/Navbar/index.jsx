//import React from "react";
import { useContext, useState } from "react";
import { ThemeControlContext } from "../../Providers/ThemeControl";
import { Button, Header } from "./style";
import SwitchThemeMode from "./SwitchTheme";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

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
        <ul className="menu_navigation_items">
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
        <ul className="menu_social_icons">
          <a
            href="https://www.instagram.com/victorsvarela.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FaInstagram />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/victorsvarela/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FaLinkedinIn />
            </li>
          </a>
          <a
            href="https://github.com/victorsvarela"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FaGithub />
            </li>
          </a>
          <a
            href="mailto:victorvarela.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              <FaEnvelope />
            </li>
          </a>
        </ul>
      </nav>
      <div>{/* <Switch checked={checked} onChange={handleChange} /> */}</div>
    </Header>
  );
};

export default Navbar;
