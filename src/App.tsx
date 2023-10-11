import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { store } from "@app/store";
import theme from "@providers/CustomThemeProvider";
import router from "@src/router";

function App() {
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
