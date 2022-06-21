import styled from "styled-components";

export const HeaderNavbar = styled.header`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 60px);

  @media (min-width: 975px) {
    width: calc(100% - 120px);
    display: none;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: #181818;
  /* background-color: transparent; */
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 975px) {
    display: flex;
    flex-direction: row;
    height: 80px;
    padding: 0 60px;
    background-color: transparent;
  }
`;
export const ButtonChangeOpenCloseMenu = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  justify-content: flex-end;

  svg {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 975px) {
    display: none;
  }
`;

export const WrapperLogoNav = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-top: 40px;
  width: calc(100% - 30px);

  @media (min-width: 975px) {
    padding-right: 20px;
    margin-top: 0;
  }
`;
export const Logo = styled.p`
  width: 100%;
  font-weight: 400;

  text-align: center;
  font-size: ${(props) =>
    props.size === "small"
      ? "18px"
      : props.size === "medium"
      ? "21px"
      : "25px"};

  span {
    font-weight: 800;
  }

  @media (min-width: 975px) {
    width: max-content;
    text-align: left;
  }
`;

export const WrapperMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  height: 300px;
  justify-content: space-around;
  box-sizing: border-box;

  @media (min-width: 975px) {
    flex-direction: row;
    width: 600px;
    height: 60px;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
  }
`;
export const WrapperMenuItem = styled.li`
  width: 250px;
  list-style-type: none;
  text-align: center;
  font-size: 15px;
  white-space: nowrap;

  @media (min-width: 975px) {
    width: auto;
    margin: 0 10px;
  }
`;
