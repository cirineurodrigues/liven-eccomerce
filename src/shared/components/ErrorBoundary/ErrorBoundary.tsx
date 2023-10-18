import { Component, ErrorInfo } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import IMAGES from "@constants/Images";

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
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
          height="100%"
          justifyContent="center"
        >
          <Typography align="center" color="secondary" py={6} variant="h4">
            We are sorry, there was a problem 😞
          </Typography>
          <Box maxWidth={500}>
            <img
              alt={IMAGES.ERROR_IMAGE.ALT}
              src={IMAGES.ERROR_IMAGE.SRC}
              width="100%"
            />
          </Box>
          <Typography align="center" color="secondary" variant="h5" my={6}>
            What about trying to refresh the page?
          </Typography>
          <Button onClick={this.reloadWindow}>Reload Page</Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
