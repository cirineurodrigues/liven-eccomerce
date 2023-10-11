import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained",
      },
    },
  },
  palette: {
    primary: {
      contrastText: "#08012A",
      main: "#78D98A",
    },
    secondary: {
      contrastText: "#78D98A",
      main: "#08012A",
    },
    text: {
      primary: "#08012A",
    },
  },
});

export default theme;
