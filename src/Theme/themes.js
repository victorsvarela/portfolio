const lightTheme = {
    color: "#0e14e",
    background: "#FFF",
    button: {
        textColor: "#D3D4E6",
        borderColor: "#151A69",
        backgroundColor: "#151A69",
    },
    header: {
        backgroundColor: "transparent",
        color: "#000",
        buttonCurric: {
            textColor: "#151A69",
            border: "1px solid #151A69",
            backgroundColor: "transparent",
            boxShadow: "0 0 3px #141A69"
        }
    }
};

const darkTheme = {
    color: "#D3D4E6",
    background: "linear-gradient(to bottom, hsla(212,67%,36%,1) 0%,hsla(228,28%,50%,1) 100%)",
    header: {
        backgroundColor: "transparent",
        color: "#FFF",
        buttonCurric: {
            textColor: "#FFF",
            border: "1px solid #151A69",
            backgroundColor: "transparent",
            boxShadow: "0 0 3px #141A69"
        }
    }
};

// Exportando as definições de estilo (lightTheme e darkTheme) no objeto themes, que será usado na props theme do componente auxiliar <ThemeProvider>
export const themes = {
    light: lightTheme,
    dark: darkTheme,
};
