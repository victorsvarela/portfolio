import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  width: 250px;
  background-color: ${(props) =>
    props.theme.header.buttonCurric.backgroundColor};
  color: ${(props) => props.theme.header.buttonCurric.textColor};
  border-radius: 5px;
  border: ${(props) => props.theme.header.buttonCurric.border};
  box-shadow: ${(props) => props.theme.header.buttonCurric.boxShadow};
  cursor: pointer;
  position: relative;
  margin: 0 10px;

  :before {
    background: linear-gradient(to bottom right, #b5179e 20%, #4361ee 65%);
    content: "";
    position: absolute;
    z-index: -1;
    margin: -3px;
    border-radius: 5px;
    inset: 0;
  }

  @media (min-width: 975px) {
    width: auto;
  }
`;
