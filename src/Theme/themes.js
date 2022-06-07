const lightTheme = {
    color: "#0e14e",
    background: "#FFF",
    button: {
        textColor: "#D3D4E6",
        borderColor: "#151A69",
        backgroundColor: "#151A69",
    },
    header: {
        backgroundColor: "white",
        color: "#000",
        buttonCurric: {
            textColor: "#151A69",
            border: "1px solid #151A69",
            backgroundColor: "white",
            boxShadow: "0 0 3px #141A69"
        },
        socialIcons: {
            backgroundColor: "black",
        }
    }
};

const darkTheme = {
    color: "#D3D4E6",
    //background: "linear-gradient(to bottom, #3A0CA3,#693CB5)",
    background: "#181818",
    header: {
        backgroundColor: "black",
        color: "#FFF",
        buttonCurric: {
            textColor: "#FFF",
            border: "1px solid #151A69",
            backgroundColor: "#151719",
            boxShadow: "0 0 3px #141A69"
        },
        socialIcons: {
            backgroundColor: "white",
        }
    }
};

// Exportando as definições de estilo (lightTheme e darkTheme) no objeto themes, que será usado na props theme do componente auxiliar <ThemeProvider>
export const themes = {
    light: lightTheme,
    dark: darkTheme,
};
