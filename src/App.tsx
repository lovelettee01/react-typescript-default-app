/* src/App.jsx */
import React from 'react';
import MainRotute from '~/routes';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    type: 'light'
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainRotute />
    </ThemeProvider>
  );
};

export default App;
