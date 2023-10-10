import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        color: 'primary',
        variant: 'contained',
      },
    },
  },
  palette: {
    primary: {
      main: '#78D98A',
      contrastText: '#08012A',
    },
    secondary: {
      main: '#08012A',
      contrastText: '#78D98A',
    },
    text: {
      primary: '#08012A',
    },
  },
});

export default theme;
