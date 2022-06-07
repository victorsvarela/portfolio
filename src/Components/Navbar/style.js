import styled from "styled-components";

export const Header = styled.header`
  /* position: absolute; */
  z-index: 5;
  color: ${(props) => props.theme.header.color};
  background-color: ${(props) => props.theme.header.backgroundColor};
  display: flex;
  justify-content: flex-end;

  svg {
    position: absolute;
    z-index: 2;
    font-size: 40px;
    cursor: pointer;
    right: 0;
    color: ${(props) => props.theme.header.socialIcons.backgroundColor};
  }

  .closed_menu {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;
    align-items: center;
    width: 100%;
    z-index: 1;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
  }

  nav ul.menu_navigation_items {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  nav ul.menu_navigation_items > li {
    display: flex;
    list-style-type: none;
    padding: 10px 12px;
    margin: 0 5px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  nav ul.menu_social_icons {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }

  nav ul.menu_social_icons a > li {
    margin: 100px;
    list-style-type: none;
    margin: 0;
  }

  nav ul.menu_social_icons a > li svg {
    width: 20px;
    position: inherit;
    padding: 10px;
    font-family: "Poppins", sans-serif;
  }

  @media (min-width: 768px) {
    height: 50px;
    padding: 15px 60px;

    nav.menu_desktop {
      position: inherit;
      height: auto;
      flex-direction: row;
      justify-content: space-between;
    }

    nav.menu_desktop ul.menu_navigation_items {
      flex-direction: row;
      justify-content: flex-end;
    }
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) =>
    props.theme.header.buttonCurric.backgroundColor};
  color: ${(props) => props.theme.header.buttonCurric.textColor};
  border-radius: 5px;
  border: ${(props) => props.theme.header.buttonCurric.border};
  box-shadow: ${(props) => props.theme.header.buttonCurric.boxShadow};
  cursor: pointer;
  position: relative;

  :before {
    content: "";
    position: absolute;
    z-index: -1;
    background: linear-gradient(to bottom right, #b5179e 20%, #4361ee 65%);
    margin: -3px;
    border-radius: 5px;
    inset: 0;
  }
`;
