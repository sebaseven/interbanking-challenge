import { createTheme } from '@mui/material/styles';
import { purple, red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: purple[200],
    },
    error: {
      main: red[500],
    },
  }
})