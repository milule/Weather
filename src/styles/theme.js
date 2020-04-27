import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
  },
  palette: {
    primary: {
      main: "#2196F3",
      contrastText: "#ffffff",
      shadowGradient: "0 3px 5px 2px rgba(33, 203, 243, .3)",
      backgroundGradient: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    },
    secondary: {
      main: "#FE6B8B",
      contrastText: "#ffffff",
      shadowGradient: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      backgroundGradient: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
  },
  overrides: {
    MuiTypography: {
      colorPrimary: "#2196F3",
      colorSecondary: "#FE6B8B",
      colorTextPrimary: "#2196F3",
      colorTextSecondary: "#FE6B8B",
    },
  },
});
