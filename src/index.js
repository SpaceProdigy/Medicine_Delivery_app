import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from 'styles/theme';
import { CssBaseline } from '@mui/material';

const Root = () => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = mode => {
    if (mode === 'dark') {
      setTheme(darkTheme);
      return;
    }

    if (mode === 'light') {
      setTheme(lightTheme);
      return;
    }

    setTheme(prevTheme => {
      return prevTheme === darkTheme ? lightTheme : darkTheme;
    });
  };

  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <BrowserRouter basename="/Medicine_Delivery_app">
            <ThemeProvider theme={theme}>
              <CssBaseline enableColorScheme={true}>
                <App toggleTheme={toggleTheme} theme={theme} />
              </CssBaseline>
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
