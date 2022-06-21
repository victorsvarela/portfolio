import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    height: 80px;
    padding: 0 60px;
  }
`;
export const ButtonCloseMenu = styled.p`
  text-align: end;
  width: 300px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const WrapperLogoNav = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    padding-right: 20px;
  }
`;
export const Logo = styled.p`
  width: 100%;
  font-weight: 400;
  text-align: center;
  font-size: 21px;

  span {
    font-weight: 800;
  }

  @media (min-width: 769px) {
    width: 200px;
  }
`;

export const WrapperMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  height: 300px;
  justify-content: space-around;

  @media (min-width: 769px) {
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

  @media (min-width: 769px) {
    width: auto;
    margin: 0 10px;
  }
`;
