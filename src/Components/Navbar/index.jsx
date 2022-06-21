import { useContext, useState } from "react";
import { ThemeControlContext } from "../../Providers/ThemeControl";
// import { Button, Header } from "./style";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

import * as Style from "./style";
import getItems from "./items";
import HireButton from "../HireButton";
import SwitchThemeModeButton from "../SwitchThemeModeButton";

import { MenuSelectControlContext } from "../../Providers/MenuSelectControl";

const NavBar = () => {
  const { checked, handleChange } = useContext(ThemeControlContext);

  const { menuSelected, handleChangeMenuSelected } = useContext(
    MenuSelectControlContext
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  const handleChangeItemMenu = (value) => {
    handleChangeMenuSelected(value);
  };

  return (
    <>
      <Style.HeaderNavbar>
        <Style.WrapperLogoNav>
          <Style.Logo size="medium">
            {`<Victor`}
            <span>Varela</span>
            {` />`}
          </Style.Logo>
        </Style.WrapperLogoNav>
        <Style.ButtonChangeOpenCloseMenu onClick={() => handleClickMenu()}>
          <HiMenuAlt3 />
        </Style.ButtonChangeOpenCloseMenu>
      </Style.HeaderNavbar>
      <Style.Nav isOpen={isOpen}>
        <Style.WrapperLogoNav>
          <Style.ButtonChangeOpenCloseMenu onClick={() => handleClickMenu()}>
            <MdClose />
          </Style.ButtonChangeOpenCloseMenu>
          <Style.Logo>
            {`<Victor`}
            <span>Varela</span>
            {` />`}
          </Style.Logo>
        </Style.WrapperLogoNav>
        <Style.WrapperMenuList>
          {getItems.map((item) => (
            <>
              {item.id === 6 ? (
                <SwitchThemeModeButton
                  id={item.id}
                  checked={checked}
                  onChange={handleChange}
                />
              ) : item.id === 7 ? (
                <HireButton id={item.id}>Contrate</HireButton>
              ) : (
                <Style.WrapperMenuItem
                  id={item.id}
                  onClick={() => {
                    handleChangeItemMenu(item.value);
                    handleClickMenu();
                  }}
                >
                  {item.label}
                </Style.WrapperMenuItem>
              )}
            </>
          ))}
        </Style.WrapperMenuList>
      </Style.Nav>
    </>
  );
};

export default NavBar;
