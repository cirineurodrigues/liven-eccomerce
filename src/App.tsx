import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";

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
          <ToastContainer style={{ top: 76 }} />
          <NavBar />
          <Box bgcolor="#F9F9F9" mt="65px">
            <CustomContainer
              boxProps={{ flex: 1 }}
              sx={{ display: "flex", minHeight: "calc(100vh - 65px)" }}
            >
              <ErrorBoundary>
                <Router />
              </ErrorBoundary>
            </CustomContainer>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
