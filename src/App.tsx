import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";

import { store } from "@app/store";
import NavBar from "@components/NavBar";
import CustomContainer from "@components/CustomContainer";
import theme from "@providers/CustomThemeProvider";
import Router from "@src/router";
import ErrorBoundary from "@components/ErrorBoundary";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <NavBar />
          <CustomContainer>
            <ErrorBoundary>
              <Router />
            </ErrorBoundary>
          </CustomContainer>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
