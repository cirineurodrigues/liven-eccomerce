import { Component, ErrorInfo } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Children } from "@sharedTypes/Types";
import IMAGES from "@constants/Images";

interface IErrorBoundaryProps {
  children: Children;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  state: IErrorBoundaryState = { hasError: false };

  static getDerivatedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error({ error, errorInfo });
  }

  reloadWindow() {
    location.reload();
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography align="center" color="secondary" variant="h4" my={6}>
            Sentimos muito, houve um problema 😞
          </Typography>
          <Box maxWidth={500}>
            <img
              alt={IMAGES.ERROR_IMAGE.ALT}
              src={IMAGES.ERROR_IMAGE.SRC}
              width="100%"
            />
          </Box>
          <Typography align="center" color="secondary" variant="h5" my={6}>
            Que tal tentar recarregar a página?
          </Typography>
          <Button onClick={this.reloadWindow}>Recaregar Página</Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
