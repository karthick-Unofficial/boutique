import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A0616A',
      light: '#C48B93',
      dark: '#7A474F',
      contrastText: '#fff',
    },
    secondary: {
      main: '#8B4A52',
      contrastText: '#fff',
    },
    background: {
      default: '#FDF8F5',
      paper: '#FFF5F0',
    },
    text: {
      primary: '#3D2B2E',
      secondary: '#7A5C60',
    },
  },
  typography: {
    fontFamily: '"Raleway", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 300,
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 400,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 400,
    },
    h4: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 300,
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: '"Raleway", sans-serif',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          textTransform: 'none',
          fontFamily: '"Raleway", sans-serif',
          fontWeight: 500,
          letterSpacing: '0.08em',
          padding: '10px 28px',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
