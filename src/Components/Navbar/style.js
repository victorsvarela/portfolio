import styled from 'styled-components'

export const Header = styled.header`

    width: 100%;
    height: 60px;
    background-color: ${(props) => props.theme.header.backgroundColor};
    color: ${(props) => props.theme.header.color};
    display: flex;
    align-items: center;
    padding: 10px 90px;
    justify-content: flex-end;


    nav ul {
        display: flex;
        padding: 0;
        margin: 0;
    }

    nav ul li {
        display: flex;
        list-style-type: none;
        padding: 5px 10px;
        justify-content: center;
        align-items: center;
    }

`

export const Button = styled.button`
    padding: 10px 20px;
    background-color: ${(props) => props.theme.header.buttonCurric.backgroundColor};
    color: ${(props) => props.theme.header.buttonCurric.textColor};
    border-radius: 5px;
    border: ${(props) => props.theme.header.buttonCurric.border};
    box-shadow: ${(props) => props.theme.header.buttonCurric.boxShadow};
    cursor: pointer;

`