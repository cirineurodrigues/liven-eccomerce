import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { store } from "@app/store";
import NavBar from "@components/NavBar";
import CustomContainer from "@components/CustomContainer";
import theme from "@providers/CustomThemeProvider";
import Router from "@src/Router";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <NavBar />
          <CustomContainer>
            <Router />
          </CustomContainer>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
