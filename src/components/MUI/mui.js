import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#009D9D',
        },
        secondary: {
            main: '#009D9D00',
        },

    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    minWidth: "120px",
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                flexContainer: {
                    flexWrap: 'wrap',
                    alignItems: "center",
                    justifyContent: "center",
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: "#666666"
                },
            },
        },
    },
    base: {
        padding: "10px",
    },
    flex: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    header: {
        position: "fixed",
        top: 0,
        left: 0,
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
        width: "100%",
        backgroundColor: '#FFFFFF',
        zIndex: 1
    },
    aboutContainer: {

    }
});