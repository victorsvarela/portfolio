import styled from 'styled-components'

export const Header = styled.header`

    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.header.backgroundColor};
    color: ${(props) => props.theme.header.color};
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    
    svg {
        position: absolute;
        z-index: 2;
        font-size: 40px;
        cursor: pointer;
        right: 0;
        color: white;
    }

    .closed_menu {
        display: none;
    }

    nav {
        display: flex;
        align-items: center;
        align-items: center;
        width: 100%;
        position: absolute;
        z-index: 1;
        height: 100vh;
        
    }

    nav ul {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        width: 100%;
    }

    nav ul li {
        display: flex;
        list-style-type: none;
        padding: 10px 12px;
        margin: 0 5px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }


    @media (min-width: 768px){

        nav.menu_desktop{
            position: inherit;
            height: auto;
        }

        nav.menu_desktop ul{
            flex-direction: row;
            justify-content: flex-end;
        }
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