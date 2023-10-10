import Button from '@mui/material/Button';

import { CssBaseline, ThemeProvider } from '@mui/material';

import theme from '@providers/CustomThemeProvider';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Button>Teste</Button>
      </ThemeProvider>
    </>
  );
};

export default App;
