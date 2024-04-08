import { createTheme } from '@mui/material/styles';

export const generalStyles = {
  components: {
    MuiList: {
      styleOverrides: {
        root: { height: 200 },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        'p,button,span': {
          transition: 'color 1s ease',
        },

        body: {
          transition: 'background-color 1s ease',
        },
        '::-webkit-scrollbar': {
          width: '10px',
        },
        '::-webkit-scrollbar-track': {
          background: '#d4d4d4',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#555',
          borderRadius: '0 5px 5px 0',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#959595',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
};

export const darkTheme = createTheme({
  type: 'dark',
  palette: {
    type: 'dark',
    background: { default: '#111' },
    text: { secondary: '#AEBACB', primary: '#F3F6F9' },
    primary: {
      main: '#000',
      secondary: '#111',
    },
    secondary: {
      main: '#F3F6F9',
    },
  },
  appBar: {
    popUpMenuBackground: '#000',
    popUpMenuHover: '#ffffff15',
    linkActive: '#ffffff50',
  },
  card: {
    cardBackground: '#000',
    cardBoxShadow: '0px 0px 5px 0px rgba(255, 255, 255,01)',
  },
  accordion: {
    primary: {
      main: '#000',
      secondary: '#111',
    },
    secondary: {
      main: '#F3F6F9',
    },
  },
  ...generalStyles,
});

export const lightTheme = createTheme({
  type: 'light',
  palette: {
    type: 'light',
    background: { default: '#fff' },
    text: { primary: '#111', secondary: '#666' },
    primary: { main: '#000', secondary: '#F3F6F9' },
    secondary: { main: '#111' },
  },
  card: {
    cardBackground: '#fff',
    cardBoxShadow: '0px 1px 14px 0px rgba(0, 0, 0, 0.2)',
  },
  appBar: {
    popUpMenuBackground: '#000',
    popUpMenuHover: '#11111115',
    linkActive: '#11111150',
  },
  ...generalStyles,
});
