import { CssBaseline, ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";

import theme from "@providers/CustomThemeProvider";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Button>Teste</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
