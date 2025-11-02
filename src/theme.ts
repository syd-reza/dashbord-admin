import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {
        primary: {
            main: "#242C39"
        },
        secondary: {
            main: "#2A3342"
        },
        success: {
            main: "#1D8D94"
        },
        error: {
            main: "#F66066"
        },
        text: {
            primary: "#fff",
            secondary: "#ABABAB",
        },
        background: {
            default: "#242C39",
            paper: "#2A3342"
        },
    },

    shape: {
        borderRadius: "10px"
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "10px",
                    backgroundColor: "#1D8D94",
                    boxShadow: "0px 0px 20px 0px #1D8D9480",
                    color: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: "bold",
                    textTransform: "none",
                    fontSize:"16px",
                    paddingTop: "18px",
                    paddingBottom:"18px"
                }
            }
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    backgroundColor: "#242C39",
                    color: "#fff",
                    "& input::placeholder": {
                        color: "#fff",
                        opacity: 1,
                    },
                    marginTop: "15px",
                    marginBottom: "19px"
                },
            },
        },

        MuiFormHelperText: {
            styleOverrides: {
            root: {
            color: "#F66066",
            fontSize: "14px",
            background : "#2A3342",
            margin : 0
            
          },
        },
      },
    },
})

export default theme