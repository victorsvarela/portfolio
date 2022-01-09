import styled from 'styled-components'

export const AppContainer = styled.main`

    height: 100vh;
    display: flex;


// Abaixo passamos para as propriedades background-color e color as configurações de estilo definidas no arquivo theme.js e compartilhada pela props theme do componente <ThemeProvider>

    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: background-color 0.8s linear, color 0.5s linear;

`