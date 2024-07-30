import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0066ff",
        },
        secondary: {
            main: "#ff4081",
        },
        background: {
            default: "#f5f5f5",
            paper: "#ffffff",
        },
        text: {
            primary: "#212121",
            secondary: "#757575",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#212121",
            letterSpacing: "0.1em",
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 700,
            color: "#212121",
            letterSpacing: "0.1em",
        },
        h3: {
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#212121",
            letterSpacing: "0.1em",
        },
        h4: {
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#212121",
            letterSpacing: "0.1em",
        },
        h5: {
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#212121",
            letterSpacing: "0.1em",
        },
        h6: {
            fontSize: "1rem",
            fontWeight: 700,
            color: "#212121",
            letterSpacing: "0.1em",
        },
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            color: "#757575",
        },
        body2: {
            fontSize: "0.875rem",
            fontWeight: 400,
            color: "#757575",
        },
        button: {
            textTransform: "none",
            fontWeight: 600,
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    color: "#212121",
                    borderRadius: 12,
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    color: "#212121",
                    borderRadius: 16,
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    borderRadius: 12,
                    padding: "10px 20px",
                    fontWeight: 600,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                },
                containedPrimary: {
                    backgroundColor: "#e91e63",
                    color: "#ffffff",
                    "&:hover": {
                        backgroundColor: "#d81b60",
                    },
                },
                containedSecondary: {
                    backgroundColor: "#ff4081",
                    color: "#ffffff",
                    "&:hover": {
                        backgroundColor: "#f50057",
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    color: "#212121",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#212121",
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: "#212121",
                    "&:hover": {
                        backgroundColor: "rgba(33, 33, 33, 0.1)",
                    },
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#ffffff",
                    color: "#212121",
                    borderRadius: 16,
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: "#ffffff",
                    color: "#212121",
                    borderRadius: 8,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: "rgba(97, 97, 97, 0.9)",
                    color: "#ffffff",
                    borderRadius: 4,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                },
            },
        },
    },
});

export default theme;
